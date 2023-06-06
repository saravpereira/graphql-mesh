export var Type13;
(function (Type13) {
    Type13["POSITIVE"] = "POSITIVE";
    Type13["NEGATIVE"] = "NEGATIVE";
    Type13["NEUTRAL"] = "NEUTRAL";
})(Type13 || (Type13 = {}));
export var Type12;
(function (Type12) {
    Type12["CUSTOMER"] = "CUSTOMER";
    Type12["EMPLOYEE"] = "EMPLOYEE";
})(Type12 || (Type12 = {}));
export var KeyCategory;
(function (KeyCategory) {
    KeyCategory["CUSTOMER_PAIN_POINTS"] = "Customer Pain Points";
    KeyCategory["CUSTOMER_OBJECTIONS"] = "Customer Objections";
    KeyCategory["BUDGET"] = "Budget";
    KeyCategory["PROJECT_METRICS_OF_SUCCESS"] = "Project Metrics of Success";
    KeyCategory["COMPETITORS"] = "Competitors";
    KeyCategory["PRODUCT_FEATURES"] = "Product Features";
    KeyCategory["PRICING"] = "Pricing";
    KeyCategory["DECISION_CRITERIA"] = "Decision Criteria";
})(KeyCategory || (KeyCategory = {}));
export var OpptyRisk;
(function (OpptyRisk) {
    OpptyRisk["AT_RISK"] = "AT_RISK";
    OpptyRisk["ON_TRACK"] = "ON_TRACK";
    OpptyRisk["EXCEED"] = "EXCEED";
})(OpptyRisk || (OpptyRisk = {}));
import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { cwd } from 'process';
import { relative, isAbsolute } from 'path';
import ExternalModule_0 from '@graphql-mesh/cache-inmemory-lru';
import ExternalModule_1 from '@graphql-mesh/openapi';
import ExternalModule_2 from '@graphql-mesh/merger-stitching';
import ExternalModule_3 from './sources/Weatherbit.io/oas-schema.js';
const importedModules = {
    // @ts-ignore
    [`@graphql-mesh/cache-inmemory-lru`]: ExternalModule_0,
    // @ts-ignore
    [`@graphql-mesh/openapi`]: ExternalModule_1,
    // @ts-ignore
    [`@graphql-mesh/merger-stitching`]: ExternalModule_2,
    // @ts-ignore
    [`.mesh/sources/Weatherbit.io/oas-schema.js`]: ExternalModule_3
};
const baseDir = cwd();
const syncImportFn = (moduleId) => {
    const relativeModuleId = isAbsolute(moduleId) ? relative(baseDir, moduleId) : moduleId;
    if (!(relativeModuleId in importedModules)) {
        throw new Error(`Cannot find module '${relativeModuleId}'.`);
    }
    return importedModules[relativeModuleId];
};
const importFn = async (moduleId) => syncImportFn(moduleId);
const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
}), {
    readonly: true,
    validate: false
});
import MeshCache from '@graphql-mesh/cache-inmemory-lru';
import { PubSub } from 'graphql-subscriptions';
import { EventEmitter } from 'events';
import { DefaultLogger } from '@graphql-mesh/utils';
import OpenapiHandler from '@graphql-mesh/openapi';
import StitchingMerger from '@graphql-mesh/merger-stitching';
import { resolveAdditionalResolvers } from '@graphql-mesh/utils';
export const rawConfig = { "sources": [{ "name": "Weatherbit.io", "handler": { "openapi": { "source": "https://sunstone-app-alpha.q.uniphorecloud.com/v3/api-docs", "baseUrl": "https://sunstone-app-alpha.q.uniphorecloud.com", "operationHeaders": { "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b25hbEB1bmlwaG9yZS5jb20iLCJhdWQiOiJpbnRlcm5hbCIsInNjb3BlcyI6IlNFTExFUiIsInZlcnNpb24iOiIxLjUuMC4xMSIsInRlbmFudCI6ImFscGhhIiwiaWF0IjoxNjgwMTk4MTA3fQ.bpwcpYXitfPIfiIB-DgnAQRO2ZdHcVebodSpTvZRskp8YPmlO9rwzlFDjk25qQu2jGnbcx03yri-hfTwIADX_Q" } } } }] };
export function getMeshOptions() {
    const cache = new MeshCache({
        ...(rawConfig.cache || {}),
        store: rootStore.child('cache'),
    });
    const eventEmitter = new EventEmitter({ captureRejections: true });
    eventEmitter.setMaxListeners(Infinity);
    const pubsub = new PubSub({ eventEmitter });
    const sourcesStore = rootStore.child('sources');
    const logger = new DefaultLogger('Mesh');
    const sources = [];
    const transforms = [];
    const weatherbitIoTransforms = [];
    const additionalTypeDefs = [];
    const weatherbitIoHandler = new OpenapiHandler({
        name: rawConfig.sources[0].name,
        config: rawConfig.sources[0].handler.openapi,
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child(rawConfig.sources[0].name),
        logger: logger.child(rawConfig.sources[0].name),
        importFn
    });
    sources.push({
        name: 'Weatherbit.io',
        handler: weatherbitIoHandler,
        transforms: weatherbitIoTransforms
    });
    const merger = new StitchingMerger({
        cache,
        pubsub,
        logger: logger.child('StitchingMerger'),
        store: rootStore.child('stitchingMerger')
    });
    const additionalResolvers = resolveAdditionalResolvers(baseDir, rawConfig.additionalResolvers, syncImportFn, pubsub);
    const liveQueryInvalidations = rawConfig.liveQueryInvalidations;
    return {
        sources,
        transforms,
        additionalTypeDefs,
        additionalResolvers,
        cache,
        pubsub,
        merger,
        logger,
        liveQueryInvalidations,
    };
}
export const documentsInSDL = /*#__PURE__*/ [];
export function getBuiltMesh() {
    const meshConfig = getMeshOptions();
    return getMesh(meshConfig);
}
export async function getMeshSDK() {
    const { sdkRequester } = await getBuiltMesh();
    return getSdk(sdkRequester);
}
export function getSdk(requester) {
    return {};
}
