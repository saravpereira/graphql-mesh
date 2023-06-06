"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.getMeshSDK = exports.getBuiltMesh = exports.documentsInSDL = exports.getMeshOptions = exports.rawConfig = exports.OpptyRisk = exports.KeyCategory = exports.Type12 = exports.Type13 = void 0;
const tslib_1 = require("tslib");
var Type13;
(function (Type13) {
    Type13["POSITIVE"] = "POSITIVE";
    Type13["NEGATIVE"] = "NEGATIVE";
    Type13["NEUTRAL"] = "NEUTRAL";
})(Type13 = exports.Type13 || (exports.Type13 = {}));
var Type12;
(function (Type12) {
    Type12["CUSTOMER"] = "CUSTOMER";
    Type12["EMPLOYEE"] = "EMPLOYEE";
})(Type12 = exports.Type12 || (exports.Type12 = {}));
var KeyCategory;
(function (KeyCategory) {
    KeyCategory["CUSTOMER_PAIN_POINTS"] = "Customer Pain Points";
    KeyCategory["CUSTOMER_OBJECTIONS"] = "Customer Objections";
    KeyCategory["BUDGET"] = "Budget";
    KeyCategory["PROJECT_METRICS_OF_SUCCESS"] = "Project Metrics of Success";
    KeyCategory["COMPETITORS"] = "Competitors";
    KeyCategory["PRODUCT_FEATURES"] = "Product Features";
    KeyCategory["PRICING"] = "Pricing";
    KeyCategory["DECISION_CRITERIA"] = "Decision Criteria";
})(KeyCategory = exports.KeyCategory || (exports.KeyCategory = {}));
var OpptyRisk;
(function (OpptyRisk) {
    OpptyRisk["AT_RISK"] = "AT_RISK";
    OpptyRisk["ON_TRACK"] = "ON_TRACK";
    OpptyRisk["EXCEED"] = "EXCEED";
})(OpptyRisk = exports.OpptyRisk || (exports.OpptyRisk = {}));
const runtime_1 = require("@graphql-mesh/runtime");
const store_1 = require("@graphql-mesh/store");
const process_1 = require("process");
const path_1 = require("path");
const cache_inmemory_lru_1 = tslib_1.__importDefault(require("@graphql-mesh/cache-inmemory-lru"));
const openapi_1 = tslib_1.__importDefault(require("@graphql-mesh/openapi"));
const merger_stitching_1 = tslib_1.__importDefault(require("@graphql-mesh/merger-stitching"));
const oas_schema_js_1 = tslib_1.__importDefault(require("./sources/Weatherbit.io/oas-schema.js"));
const importedModules = {
    // @ts-ignore
    [`@graphql-mesh/cache-inmemory-lru`]: cache_inmemory_lru_1.default,
    // @ts-ignore
    [`@graphql-mesh/openapi`]: openapi_1.default,
    // @ts-ignore
    [`@graphql-mesh/merger-stitching`]: merger_stitching_1.default,
    // @ts-ignore
    [`.mesh/sources/Weatherbit.io/oas-schema.js`]: oas_schema_js_1.default
};
const baseDir = process_1.cwd();
const syncImportFn = (moduleId) => {
    const relativeModuleId = path_1.isAbsolute(moduleId) ? path_1.relative(baseDir, moduleId) : moduleId;
    if (!(relativeModuleId in importedModules)) {
        throw new Error(`Cannot find module '${relativeModuleId}'.`);
    }
    return importedModules[relativeModuleId];
};
const importFn = async (moduleId) => syncImportFn(moduleId);
const rootStore = new store_1.MeshStore('.mesh', new store_1.FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
}), {
    readonly: true,
    validate: false
});
const cache_inmemory_lru_2 = tslib_1.__importDefault(require("@graphql-mesh/cache-inmemory-lru"));
const graphql_subscriptions_1 = require("graphql-subscriptions");
const events_1 = require("events");
const utils_1 = require("@graphql-mesh/utils");
const openapi_2 = tslib_1.__importDefault(require("@graphql-mesh/openapi"));
const merger_stitching_2 = tslib_1.__importDefault(require("@graphql-mesh/merger-stitching"));
const utils_2 = require("@graphql-mesh/utils");
exports.rawConfig = { "sources": [{ "name": "Weatherbit.io", "handler": { "openapi": { "source": "https://sunstone-app-alpha.q.uniphorecloud.com/v3/api-docs", "baseUrl": "https://sunstone-app-alpha.q.uniphorecloud.com", "operationHeaders": { "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b25hbEB1bmlwaG9yZS5jb20iLCJhdWQiOiJpbnRlcm5hbCIsInNjb3BlcyI6IlNFTExFUiIsInZlcnNpb24iOiIxLjUuMC4xMSIsInRlbmFudCI6ImFscGhhIiwiaWF0IjoxNjgwMTk4MTA3fQ.bpwcpYXitfPIfiIB-DgnAQRO2ZdHcVebodSpTvZRskp8YPmlO9rwzlFDjk25qQu2jGnbcx03yri-hfTwIADX_Q" } } } }] };
function getMeshOptions() {
    const cache = new cache_inmemory_lru_2.default({
        ...(exports.rawConfig.cache || {}),
        store: rootStore.child('cache'),
    });
    const eventEmitter = new events_1.EventEmitter({ captureRejections: true });
    eventEmitter.setMaxListeners(Infinity);
    const pubsub = new graphql_subscriptions_1.PubSub({ eventEmitter });
    const sourcesStore = rootStore.child('sources');
    const logger = new utils_1.DefaultLogger('Mesh');
    const sources = [];
    const transforms = [];
    const weatherbitIoTransforms = [];
    const additionalTypeDefs = [];
    const weatherbitIoHandler = new openapi_2.default({
        name: exports.rawConfig.sources[0].name,
        config: exports.rawConfig.sources[0].handler.openapi,
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child(exports.rawConfig.sources[0].name),
        logger: logger.child(exports.rawConfig.sources[0].name),
        importFn
    });
    sources.push({
        name: 'Weatherbit.io',
        handler: weatherbitIoHandler,
        transforms: weatherbitIoTransforms
    });
    const merger = new merger_stitching_2.default({
        cache,
        pubsub,
        logger: logger.child('StitchingMerger'),
        store: rootStore.child('stitchingMerger')
    });
    const additionalResolvers = utils_2.resolveAdditionalResolvers(baseDir, exports.rawConfig.additionalResolvers, syncImportFn, pubsub);
    const liveQueryInvalidations = exports.rawConfig.liveQueryInvalidations;
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
exports.getMeshOptions = getMeshOptions;
exports.documentsInSDL = [];
function getBuiltMesh() {
    const meshConfig = getMeshOptions();
    return runtime_1.getMesh(meshConfig);
}
exports.getBuiltMesh = getBuiltMesh;
async function getMeshSDK() {
    const { sdkRequester } = await getBuiltMesh();
    return getSdk(sdkRequester);
}
exports.getMeshSDK = getMeshSDK;
function getSdk(requester) {
    return {};
}
exports.getSdk = getSdk;
