import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { DocumentNode } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type Query = {
  /** Equivalent to GET /auth/accessToken */
  accessTokenForAuthenticatedUser?: Maybe<Scalars['JSON']>;
  /** Equivalent to GET /usales/keyword/keyphrase/fetch-expert/{tagId} */
  fetchKeyPhraseExpert?: Maybe<Array<Maybe<KeyPhraseExpertResponseDTO>>>;
  /** Equivalent to GET /cq/token/access */
  generateAccessToken?: Maybe<Scalars['JSON']>;
  /** Equivalent to GET /cq/token/refresh */
  generateRefreshToken?: Maybe<Scalars['JSON']>;
  /** Equivalent to GET /usales/companyprofile/access-consent */
  getAccessConsent?: Maybe<Scalars['Boolean']>;
  /** Equivalent to GET /usales/accounts/{id} */
  getAccountById?: Maybe<AccountResponseDTO>;
  /** Equivalent to GET /usales/accounts/{id}/oppty */
  getAccountOpptyByAccount?: Maybe<Array<Maybe<OpptyDTO>>>;
  /** Equivalent to GET /usales/accounts/{id}/team */
  getAccountTeamByAccount?: Maybe<AccountTeamResponse>;
  /** Equivalent to GET /usales/accounts */
  getAccounts?: Maybe<Array<Maybe<AccountResponseDTO>>>;
  /** Equivalent to GET /usales/conv/metrics/{id} */
  getAggrConvMetrics?: Maybe<Array<Maybe<AggrConvMetrics>>>;
  /** Equivalent to GET /usales/convs/{id}/metrics */
  getAggrConvMetricsByParticipant?: Maybe<Array<Maybe<AggrConvMetrics>>>;
  /** Equivalent to GET /usales/alerts/{id} */
  getAlertById?: Maybe<AlertResponseDTO>;
  /** Equivalent to GET /usales/alerts */
  getAlertByUser?: Maybe<Array<Maybe<AlertResponseDTO>>>;
  /** Equivalent to GET /usales/company-params */
  getAllCompanyParams?: Maybe<Array<Maybe<CompanyParamResponseDTO>>>;
  /** Equivalent to GET /usales/configprops */
  getAllCurrentSystemProp?: Maybe<Array<Maybe<ConfigPropResponseDTO>>>;
  /** Equivalent to GET /usales/convs/{id}/participantsWithMetrics */
  getAttendees?: Maybe<ConversationAttendeesResponse>;
  /** Equivalent to GET /auth/google/callback */
  getAuthCodeAndGenerateToken1?: Maybe<Scalars['JSON']>;
  /** Equivalent to GET /slack/authurl */
  getAuthUrl3?: Maybe<Scalars['String']>;
  /** Equivalent to GET /auth/social */
  getAuthUrl4?: Maybe<Scalars['String']>;
  /** Equivalent to GET /auth/outlook */
  getAuthUrl5?: Maybe<Scalars['String']>;
  /** Equivalent to GET /auth/google */
  getAuthUrl6?: Maybe<Scalars['String']>;
  /** Equivalent to GET /usales/bookmarks/convs/{convId} */
  getBookmarksByConvId?: Maybe<Array<Maybe<ConvBookmarkResponseDTO>>>;
  /** Equivalent to GET /usales/bookmarks/keymoments/{convKeyMomentId} */
  getBookmarksByConvKeyMomentId?: Maybe<Array<Maybe<ConvBookmarkResponseDTO>>>;
  /** Equivalent to GET /usales/convs/{convId}/comments */
  getCommentByConvId?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  /** Equivalent to GET /usales/keymoments/{convKeyMomentId}/comments */
  getCommentByConvKeyMomentId?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  /** Equivalent to GET /usales/companyprofile/businesscategs */
  getCompanyCategAndSubCateg?: Maybe<Array<Maybe<KeywordCategResponseDTO>>>;
  /** Equivalent to GET /usales/companyprofile */
  getCompanyProfile?: Maybe<CompanyProfileDTO>;
  /** Equivalent to GET /usales/analytics/company/slide-first */
  getCompanySlideFirst?: Maybe<CompanySlideFirstResponse>;
  /** Equivalent to GET /cq/opportunity/{crmOpportunityId}/contact/{crmContactId}/eq */
  getContactEQForOppty?: Maybe<Array<Maybe<Contact>>>;
  /** Equivalent to GET /usales/contacts/{contact}/emails/count */
  getContactEmailsCount?: Maybe<Scalars['Int']>;
  /** Equivalent to GET /usales/contact/metrics/{contactId} */
  getContactMetrics?: Maybe<ContactMetricsResponse>;
  /** Equivalent to GET /cq/opportunity/{crmOpportunityId}/contact/eq */
  getContactsEQForOppty?: Maybe<Array<Maybe<Contact>>>;
  /** Equivalent to GET /usales/convs/attendees */
  getConvAttendeeTeam?: Maybe<Array<Maybe<ConvAttendeeResponseDTO>>>;
  /** Equivalent to GET /usales/convs/attendees/{id} */
  getConvAttendeeTeamById?: Maybe<ConvAttendeeResponseDTO>;
  /** Equivalent to GET /usales/conv/metrics/aggr/{id} */
  getConvMetrics?: Maybe<ConvMetricsResponse>;
  /** Equivalent to GET /conv/mod/{convId} */
  getConvModLog?: Maybe<Array<Maybe<ConversationAttributionLogRsp>>>;
  /** Equivalent to GET /usales/accounts/promises */
  getConvPromises?: Maybe<Array<Maybe<AccountPromisesResponseDTO>>>;
  /** Equivalent to GET /usales/convs/status */
  getConvStatus?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Equivalent to GET /usales/conv-topic-episodes/{id} */
  getConvTopicEpisodeById?: Maybe<ConvTopicEpisodeResponseDTO>;
  /** Equivalent to GET /usales/deals/{opptyId}/convtrends */
  getConvTrends?: Maybe<Array<Maybe<ConvEQResponseDTO>>>;
  /** Equivalent to GET /usales/convs */
  getConversation?: Maybe<Array<Maybe<ConversationRequest>>>;
  /** Equivalent to GET /usales/convs/{id} */
  getConversationById?: Maybe<ConversationRequest>;
  /** Equivalent to GET /usales/convs/{id}/details */
  getConversationDetail?: Maybe<ConversationDetailResponse>;
  /** Equivalent to GET /usales/convs/{id}/preview */
  getConversationPreviewByConversation?: Maybe<ConversationDetailResponse>;
  /** Equivalent to GET /usales/metrics/convs/{convId}/convostats */
  getConvostats?: Maybe<ConvoStatResponse>;
  /** Equivalent to GET /usales/mindtickle/coursesbyemail/{email} */
  getCoursesForUserEmail?: Maybe<Scalars['String']>;
  /** Equivalent to GET /usales/company-param */
  getCurrentCompanyProp?: Maybe<Scalars['String']>;
  /** Equivalent to GET /cq/contact/{crmContactId}/eq */
  getCurrentEQForContact?: Maybe<Scalars['String']>;
  /** Equivalent to GET /cq/opportunity/{crmOpportunityId}/current */
  getCurrentEQForOppty?: Maybe<CurrentEQForOpptyResponse>;
  /** Equivalent to GET /cq/account/{crmAccountId}/current */
  getCurrentEqForAccount?: Maybe<DealDetailResponse>;
  /** Equivalent to GET /usales/sys */
  getCurrentSystemProp?: Maybe<Scalars['String']>;
  /** Equivalent to GET /usales/users/me */
  getCurrentUserDetail?: Maybe<User>;
  /** Equivalent to GET /usales/custweblinks */
  getCustWebLinks?: Maybe<Array<Maybe<CustWebLinkResponseDTO>>>;
  /** Equivalent to GET /usales/mindtickle/querybyuri/{url} */
  getDataByUri?: Maybe<Scalars['String']>;
  /** Equivalent to GET /usales/oppty/{id}/trend */
  getDealByIdTrend?: Maybe<DealSummaryTrendResponse>;
  /** Equivalent to GET /usales/oppty/{id}/details */
  getDealDetailsByMode?: Maybe<DealSummaryDetailResponse>;
  /** Equivalent to GET /usales/deals/{opptyId}/eqscore */
  getDealEQScore?: Maybe<Scalars['JSON']>;
  /** Equivalent to GET /usales/deals/stages */
  getDealStageList?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Equivalent to GET /usales/oppty/summary/{id} */
  getDealSummaryById?: Maybe<DealSummaryResponse>;
  /** Equivalent to GET /usales/diarization/{conv_id} */
  getDiarization?: Maybe<Diarization>;
  /** Equivalent to GET /usales/accounts/{accountId}/convtrends */
  getEQbyAccount?: Maybe<ConvEQResponseDTO>;
  /** Equivalent to GET /usales/deals/{opptyId}/contacts/{contactId}/eqscore */
  getEQbyContact?: Maybe<Scalars['JSON']>;
  /** Equivalent to GET /usales/convs/{convId}/eqscore */
  getEQbyConv?: Maybe<ConvEQResponseDTO>;
  /** Equivalent to GET /usales/convs/{convId}/contact_eqscore */
  getEQbyConv1?: Maybe<Scalars['JSON']>;
  /** Equivalent to GET /usales/emleqs */
  getEmlEqByEmailObj?: Maybe<Array<Maybe<EmlEqResponseDTO>>>;
  /** Equivalent to GET /usales/emleqs/{id} */
  getEmlEqById?: Maybe<Scalars['JSON']>;
  /** Equivalent to GET /usales/empathyandhesitationturns/get/conv */
  getEmpathyTurns?: Maybe<EmpathyAndHesitationTurnsReport>;
  /** Equivalent to GET /usales/events/{id} */
  getEventById?: Maybe<CalendarEvent>;
  /** Equivalent to GET /usales/convs/{id}/keyPhrases */
  getKeyMomentsForConvId?: Maybe<KeyPhraseResponse>;
  /** Equivalent to GET /usales/keyword/categ */
  getKeywordCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Equivalent to GET /usales/keyword/categ/{category} */
  getKeywordCategories1?: Maybe<Array<Maybe<KeywordCategResponseDTO>>>;
  /** Equivalent to GET /cq/manager/{managerEmailId}/{startMMddyyyy}/eq */
  getManagerEQ?: Maybe<TeamOpptyUsersStats>;
  /** Equivalent to GET /usales/mediaclip/{id} */
  getMediaClipById?: Maybe<MediaClipResponseDTO>;
  /** Equivalent to GET /usales/mediaClip/param/{mediaClipId} */
  getMediaClipParamsByMediaClipId1?: Maybe<Array<Maybe<MediaClipParamResponseDTO>>>;
  /** Equivalent to GET /usales/playlists/sharedwithme */
  getMediaClipPlaylistSharedWithUser?: Maybe<Scalars['JSON']>;
  /** Equivalent to GET /usales/convs/summary/{id} */
  getMeeting?: Maybe<ConversationSummaryResponse>;
  /** Equivalent to GET /usales/users/{receiverUserId}/comments */
  getMentionedUserComments?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  /** Equivalent to GET /usales/mediaclip/myclips */
  getMyMediaClips?: Maybe<Array<Maybe<MediaClipResponseDTO>>>;
  /** Equivalent to GET /usales/oppty/{id} */
  getOpptyById?: Maybe<OpptyDTO>;
  /** Equivalent to GET /usales/{oppty_stage}/eqscore */
  getOpptyEqbyStage?: Maybe<OpptyEqbyStageResponseDTO>;
  /** Equivalent to GET /usales/oppty/keyMoments */
  getOpptyKeyMoments?: Maybe<OpptyDTO>;
  /** Equivalent to GET /usales/oppty/{opptyId}/promises */
  getOpptyPromises?: Maybe<OpptyDTO>;
  /** Equivalent to GET /usales/oppty/teams */
  getOpptyTeam?: Maybe<Array<Maybe<OpptyTeamResponseDTO>>>;
  /** Equivalent to GET /usales/oppty/teams/{id} */
  getOpptyTeamById?: Maybe<OpptyTeamResponseDTO>;
  /** Equivalent to GET /usales/oppty */
  getOpptys?: Maybe<Array<Maybe<OpptyDTO>>>;
  /** Equivalent to GET /usales/playlists/{id} */
  getPlaylistById?: Maybe<PlaylistResponseDTO>;
  /** Equivalent to GET /usales/playlist/param/{playlistId} */
  getPlaylistParamsByPlaylistId1?: Maybe<Array<Maybe<PlaylistParamResponseDTO>>>;
  /** Equivalent to GET /usales/playlists/shared-members */
  getPlaylistSharedMembers?: Maybe<Array<Maybe<SharedMemberDTO>>>;
  /** Equivalent to GET /usales/playlists/myplaylists */
  getPlaylists?: Maybe<Array<Maybe<PlaylistResponseDTO>>>;
  /** Equivalent to GET /usales/preferences/mine */
  getPreferences1?: Maybe<Scalars['JSON']>;
  /** Equivalent to GET /cq/seller/{sellerEmailId}/{days}/eq */
  getSellerEQ1?: Maybe<TeamOpptyUsersStats>;
  /** Equivalent to GET /cq/seller/{sellerEmailId}/eq */
  getSellerEQ2?: Maybe<TeamOpptyUsersStats>;
  /** Equivalent to GET /usales/sharedviewdata-conv/{conv_id} */
  getSharedViewData?: Maybe<Array<Maybe<ConvSharedViewData>>>;
  /** Equivalent to GET /usales/convs/{id}/slide-first */
  getSlideFirstByConversation?: Maybe<ConvSlideFirstResponse>;
  /** Equivalent to GET /usales/reports/summary */
  getSummary?: Maybe<SummaryReportDTO>;
  /** Equivalent to GET /usales/users/team/{usersId} */
  getTeamMembers?: Maybe<Array<Maybe<User>>>;
  /** Equivalent to GET /usales/timeline/{conv_id} */
  getTimeline?: Maybe<ConvTimeline>;
  /** Equivalent to GET /usales/sharedviewdata-name/{name} */
  getTimeline1?: Maybe<Array<Maybe<ConvSharedViewData>>>;
  /** Equivalent to GET /cq/opportunity/{crmOpportunityId}/trend */
  getTrendEQForOppty?: Maybe<TrendEQForOpptyResponse>;
  /** Equivalent to GET /cq/account/{crmAccountId}/trend */
  getTrendEqForAccount?: Maybe<Array<Maybe<DealDetailResponse>>>;
  /** Equivalent to GET /usales/users/me/emails/count */
  getUserEmailsCount?: Maybe<Scalars['Int']>;
  /** Equivalent to GET /usales/users/{usersId}/proxy */
  getUserProxy?: Maybe<UserDelegateResponseDTO>;
  /** Equivalent to GET /usales/users */
  getUsersCount?: Maybe<Scalars['Float']>;
  /** Equivalent to GET /v1/transcript/populate/{convId} */
  populate1?: Maybe<Scalars['String']>;
  /** Equivalent to GET /slack/redirect */
  redirectMethod?: Maybe<Scalars['JSON']>;
  /** Equivalent to GET /usales/re/{code} */
  redirectUrl?: Maybe<Scalars['JSON']>;
  /** Equivalent to GET /cq/token/revoke/access */
  revokeAccessToken?: Maybe<Scalars['String']>;
  /** Equivalent to GET /auth/revoke/{provider} */
  revokeAuth?: Maybe<Scalars['String']>;
  /** Equivalent to GET /cq/token/revoke/refresh */
  revokeRefreshToken?: Maybe<Scalars['String']>;
  /** Equivalent to GET /usales/contact/summary/{contactId} */
  searchContact1?: Maybe<ContactResponse>;
};


export type QueryfetchKeyPhraseExpertArgs = {
  limit?: Maybe<Scalars['Int']>;
  tagId: Scalars['Float'];
};


export type QuerygetAccountByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetAccountOpptyByAccountArgs = {
  id: Scalars['Float'];
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetAccountTeamByAccountArgs = {
  id: Scalars['Float'];
};


export type QuerygetAccountsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetAggrConvMetricsArgs = {
  id: Scalars['Float'];
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetAggrConvMetricsByParticipantArgs = {
  id: Scalars['Float'];
  limit?: Maybe<Scalars['Int']>;
  participantId: Scalars['String'];
};


export type QuerygetAlertByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetAlertByUserArgs = {
  limit?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};


export type QuerygetAllCompanyParamsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetAllCurrentSystemPropArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetAttendeesArgs = {
  id: Scalars['Float'];
};


export type QuerygetBookmarksByConvIdArgs = {
  convId: Scalars['Float'];
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetBookmarksByConvKeyMomentIdArgs = {
  convKeyMomentId: Scalars['Float'];
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetCommentByConvIdArgs = {
  convId: Scalars['Float'];
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetCommentByConvKeyMomentIdArgs = {
  convKeyMomentId: Scalars['Float'];
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetCompanyCategAndSubCategArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetContactEQForOpptyArgs = {
  crmContactId: Scalars['String'];
  crmOpportunityId: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetContactEmailsCountArgs = {
  contactId: Scalars['Float'];
};


export type QuerygetContactMetricsArgs = {
  contactId: Scalars['Float'];
  ganularity?: Maybe<Scalars['String']>;
  opptyId: Scalars['Float'];
};


export type QuerygetContactsEQForOpptyArgs = {
  crmOpportunityId: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetConvAttendeeTeamArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetConvAttendeeTeamByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetConvMetricsArgs = {
  id: Scalars['Float'];
};


export type QuerygetConvModLogArgs = {
  convId: Scalars['Float'];
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetConvPromisesArgs = {
  limit?: Maybe<Scalars['Int']>;
  userIds?: Maybe<Scalars['String']>;
};


export type QuerygetConvTopicEpisodeByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetConvTrendsArgs = {
  limit?: Maybe<Scalars['Int']>;
  opptyId: Scalars['Float'];
};


export type QuerygetConversationArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetConversationByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetConversationDetailArgs = {
  id: Scalars['Float'];
  type?: Maybe<Scalars['String']>;
};


export type QuerygetConversationPreviewByConversationArgs = {
  id: Scalars['Float'];
};


export type QuerygetConvostatsArgs = {
  convId: Scalars['Float'];
};


export type QuerygetCoursesForUserEmailArgs = {
  email: Scalars['String'];
};


export type QuerygetCurrentCompanyPropArgs = {
  prop: Scalars['String'];
};


export type QuerygetCurrentEQForContactArgs = {
  crmContactId: Scalars['String'];
};


export type QuerygetCurrentEQForOpptyArgs = {
  crmOpportunityId: Scalars['String'];
  days?: Maybe<Scalars['Float']>;
};


export type QuerygetCurrentEqForAccountArgs = {
  crmAccountId: Scalars['String'];
  days?: Maybe<Scalars['Float']>;
};


export type QuerygetCurrentSystemPropArgs = {
  prop: Scalars['String'];
};


export type QuerygetCustWebLinksArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetDataByUriArgs = {
  uri: Scalars['String'];
};


export type QuerygetDealByIdTrendArgs = {
  id: Scalars['Float'];
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type QuerygetDealDetailsByModeArgs = {
  id: Scalars['Float'];
  mode?: Maybe<Scalars['String']>;
  tz?: Maybe<Scalars['String']>;
};


export type QuerygetDealEQScoreArgs = {
  opptyId: Scalars['Float'];
};


export type QuerygetDealSummaryByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetDiarizationArgs = {
  convId: Scalars['Float'];
};


export type QuerygetEQbyAccountArgs = {
  accountId: Scalars['Float'];
};


export type QuerygetEQbyContactArgs = {
  contactId: Scalars['Float'];
  opptyId: Scalars['Float'];
};


export type QuerygetEQbyConvArgs = {
  convId: Scalars['Float'];
};


export type QuerygetEQbyConv1Args = {
  contact: Scalars['String'];
  convId: Scalars['Float'];
};


export type QuerygetEmlEqByEmailObjArgs = {
  emlObjId?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetEmlEqByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetEmpathyTurnsArgs = {
  convId: Scalars['Float'];
};


export type QuerygetEventByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetKeyMomentsForConvIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetKeywordCategories1Args = {
  category: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetManagerEQArgs = {
  managerEmailId: Scalars['String'];
  startMMddyyyy: Scalars['String'];
};


export type QuerygetMediaClipByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetMediaClipParamsByMediaClipId1Args = {
  limit?: Maybe<Scalars['Int']>;
  mediaClipId: Scalars['Float'];
  name: Scalars['String'];
};


export type QuerygetMeetingArgs = {
  id: Scalars['Float'];
};


export type QuerygetMentionedUserCommentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  userId: Scalars['Float'];
};


export type QuerygetMyMediaClipsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetOpptyByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetOpptyEqbyStageArgs = {
  opptyStage: Scalars['String'];
};


export type QuerygetOpptyKeyMomentsArgs = {
  granularity?: Maybe<Scalars['String']>;
  keyTag?: Maybe<Scalars['String']>;
  opptyId?: Maybe<Scalars['Float']>;
  period?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type QuerygetOpptyPromisesArgs = {
  opptyId: Scalars['Float'];
};


export type QuerygetOpptyTeamArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetOpptyTeamByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetOpptysArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetPlaylistByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetPlaylistParamsByPlaylistId1Args = {
  limit?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  playlistId: Scalars['Float'];
};


export type QuerygetPlaylistSharedMembersArgs = {
  history?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  playlistId: Scalars['Float'];
};


export type QuerygetPlaylistsArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetPreferences1Args = {
  type: Scalars['String'];
};


export type QuerygetSellerEQ1Args = {
  days: Scalars['Int'];
  sellerEmailId: Scalars['String'];
};


export type QuerygetSellerEQ2Args = {
  sellerEmailId: Scalars['String'];
};


export type QuerygetSharedViewDataArgs = {
  convId: Scalars['Float'];
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetSlideFirstByConversationArgs = {
  id: Scalars['Float'];
};


export type QuerygetTeamMembersArgs = {
  limit?: Maybe<Scalars['Int']>;
  usersId: Scalars['Float'];
};


export type QuerygetTimelineArgs = {
  convId: Scalars['Float'];
};


export type QuerygetTimeline1Args = {
  limit?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};


export type QuerygetTrendEQForOpptyArgs = {
  crmOpportunityId: Scalars['String'];
  days?: Maybe<Scalars['Float']>;
};


export type QuerygetTrendEqForAccountArgs = {
  crmAccountId: Scalars['String'];
  days?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerygetUserProxyArgs = {
  usersId: Scalars['Float'];
};


export type Querypopulate1Args = {
  convId: Scalars['String'];
};


export type QueryredirectMethodArgs = {
  code: Scalars['String'];
  state: Scalars['String'];
};


export type QueryredirectUrlArgs = {
  code: Scalars['String'];
};


export type QueryrevokeAuthArgs = {
  provider: Scalars['String'];
};


export type QuerysearchContact1Args = {
  contactId: Scalars['Float'];
};


export type KeyPhraseExpertResponseDTO = {
  email?: Maybe<Scalars['String']>;
  engagement?: Maybe<Scalars['Float']>;
  fullName?: Maybe<Scalars['String']>;
  sentiment?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type AccountResponseDTO = {
  accountTeamID?: Maybe<IdNameDTO>;
  contacts?: Maybe<Array<Maybe<ContactActivity>>>;
  conversations?: Maybe<Array<Maybe<ConversationRequest>>>;
  crmAccountId?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  oppties?: Maybe<Array<Maybe<Oppty2>>>;
  orgId?: Maybe<Scalars['Float']>;
  score?: Maybe<Array<Maybe<Score4>>>;
  source?: Maybe<Scalars['String']>;
  standing?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  sticker?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type IdNameDTO = {
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type ContactActivity = {
  conversation?: Maybe<Conversation2>;
  conversations?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  jobTitle?: Maybe<Scalars['String']>;
  lastActivityDate?: Maybe<Scalars['String']>;
  lastActivityType?: Maybe<Scalars['String']>;
  lastActivityTypeId?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  score?: Maybe<Array<Maybe<Score4>>>;
  type?: Maybe<Scalars['String']>;
};

export type Conversation2 = {
  data?: Maybe<Array<Maybe<ConversationData>>>;
  mode?: Maybe<Scalars['String']>;
};

export type ConversationData = {
  convIds?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
  conversations?: Maybe<Scalars['Int']>;
  emailIds?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
  emails?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['String']>;
};

export type Score4 = {
  trend?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ConversationRequest = {
  accountID?: Maybe<ConvAccountDTO>;
  aiViewVideoMediaLink?: Maybe<Scalars['String']>;
  attendees?: Maybe<Array<Maybe<Attendee>>>;
  audioMediaLink?: Maybe<Scalars['String']>;
  confidential?: Maybe<Scalars['Boolean']>;
  contentViewVideoMediaLink?: Maybe<Scalars['String']>;
  cvProcDone?: Maybe<Scalars['Boolean']>;
  dataFusionProcDone?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  entity?: Maybe<Scalars['String']>;
  externalConvId?: Maybe<Scalars['String']>;
  externalMeetingId?: Maybe<Scalars['String']>;
  galleryViewVideoMediaLink?: Maybe<Scalars['String']>;
  hasClips?: Maybe<Scalars['Boolean']>;
  hasComments?: Maybe<Scalars['Boolean']>;
  hostID?: Maybe<ConvUsersDTO>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  isShared?: Maybe<Scalars['Boolean']>;
  keyMoments?: Maybe<Array<Maybe<KeyMoment>>>;
  lastChunk?: Maybe<Scalars['Float']>;
  meetingEndTime?: Maybe<Scalars['String']>;
  meetingStartTime?: Maybe<Scalars['String']>;
  meetingTopic?: Maybe<Scalars['String']>;
  opptyID?: Maybe<IdNameDTO>;
  orgId?: Maybe<Scalars['Float']>;
  processedFlag?: Maybe<Scalars['String']>;
  promises?: Maybe<Array<Maybe<ConvPromiseResponseDTO>>>;
  recordingStartTime?: Maybe<Scalars['String']>;
  score?: Maybe<Array<Maybe<Score4>>>;
  source?: Maybe<Scalars['String']>;
  speakerTimelineLink?: Maybe<Scalars['String']>;
  speakerViewVideoMediaLink?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  textKmProcDone?: Maybe<Scalars['Boolean']>;
  textMediaLink?: Maybe<Scalars['String']>;
  textSentProcDone?: Maybe<Scalars['Boolean']>;
  thumbnail?: Maybe<Scalars['String']>;
  tonalProcDone?: Maybe<Scalars['Boolean']>;
  transcriptLink?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  videoMediaLink?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Float']>;
};

export type ConvAccountDTO = {
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Attendee = {
  contactId?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  empathy?: Maybe<Scalars['Float']>;
  hesitation?: Maybe<Scalars['Float']>;
  hostImage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  jobTitle?: Maybe<Scalars['String']>;
  metrics?: Maybe<Array<Maybe<AttendeeMetric>>>;
  name?: Maybe<Scalars['String']>;
  politeness?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  score?: Maybe<UniScore>;
  speakingPace?: Maybe<Scalars['Float']>;
  talkRatio?: Maybe<Scalars['Float']>;
  timeline?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
  type?: Maybe<Type12>;
  wonOver?: Maybe<Scalars['Boolean']>;
};

export type AttendeeMetric = {
  time?: Maybe<Scalars['String']>;
  type?: Maybe<Type13>;
  value?: Maybe<Scalars['Float']>;
};

export enum Type13 {
  POSITIVE = 'POSITIVE',
  NEGATIVE = 'NEGATIVE',
  NEUTRAL = 'NEUTRAL'
}

export type UniScore = {
  score?: Maybe<Array<Maybe<Score4>>>;
  trends?: Maybe<Trends>;
  wonOver?: Maybe<Scalars['Boolean']>;
};

export type Trends = {
  t1?: Maybe<UniScore>;
  t2?: Maybe<UniScore>;
  t3?: Maybe<UniScore>;
  t4?: Maybe<UniScore>;
  t5?: Maybe<UniScore>;
  t6?: Maybe<UniScore>;
  t7?: Maybe<UniScore>;
  t8?: Maybe<UniScore>;
};

export enum Type12 {
  CUSTOMER = 'CUSTOMER',
  EMPLOYEE = 'EMPLOYEE'
}

export type ConvUsersDTO = {
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
};

export type KeyMoment = {
  bookmarks?: Maybe<Array<Maybe<ConvBookmarkResponseDTO>>>;
  contentImages?: Maybe<Scalars['String']>;
  contributedBy?: Maybe<Array<Maybe<Scalars['String']>>>;
  criticality?: Maybe<Scalars['String']>;
  downVote?: Maybe<Scalars['Float']>;
  downVoteUser?: Maybe<Scalars['String']>;
  endOffset?: Maybe<Scalars['Float']>;
  highlightText?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keyCategory?: Maybe<KeyCategory>;
  keyMomentScore?: Maybe<Scalars['String']>;
  keyMomentTexts?: Maybe<Array<Maybe<KeyMomentText>>>;
  keyTags?: Maybe<Array<Maybe<KeyTag>>>;
  kmEndOffset?: Maybe<Scalars['String']>;
  kmStartOffset?: Maybe<Scalars['String']>;
  polarity?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  startOffset?: Maybe<Scalars['Float']>;
  subtype?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  upVote?: Maybe<Scalars['Float']>;
  upVoteUser?: Maybe<Scalars['String']>;
};

export type ConvBookmarkResponseDTO = {
  convID?: Maybe<ConvDTO>;
  createdBy?: Maybe<ConvUsersDTO>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keyMomentId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  timeEnd?: Maybe<Scalars['Float']>;
  timeStart?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ConvDTO = {
  confidential?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  hostId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  meetingTopic?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export enum KeyCategory {
  CUSTOMER_PAIN_POINTS = 'Customer Pain Points',
  CUSTOMER_OBJECTIONS = 'Customer Objections',
  BUDGET = 'Budget',
  PROJECT_METRICS_OF_SUCCESS = 'Project Metrics of Success',
  COMPETITORS = 'Competitors',
  PRODUCT_FEATURES = 'Product Features',
  PRICING = 'Pricing',
  DECISION_CRITERIA = 'Decision Criteria'
}

export type KeyMomentText = {
  id?: Maybe<Scalars['Float']>;
  line?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type KeyTag = {
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ConvPromiseResponseDTO = {
  actionStatus?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  confidential?: Maybe<Scalars['Boolean']>;
  convId?: Maybe<Scalars['Float']>;
  hostId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  promiseEndTime?: Maybe<Scalars['String']>;
  promiseNextAction?: Maybe<Scalars['String']>;
  promiseStartTime?: Maybe<Scalars['String']>;
  promiseText?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  speaker?: Maybe<Scalars['String']>;
  speakerUsersId?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Oppty2 = {
  account?: Maybe<Account>;
  amount?: Maybe<Scalars['Float']>;
  crmOpptyId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  listOfConversation?: Maybe<Array<Maybe<Conversation2>>>;
  listOfMeetingMetadata?: Maybe<Array<Maybe<MeetingMetadata>>>;
  listOfOpptyContactRel?: Maybe<Array<Maybe<OpptyContactRel>>>;
  name?: Maybe<Scalars['String']>;
  opptyAmount?: Maybe<Scalars['Float']>;
  opptyCloseDate?: Maybe<Scalars['String']>;
  opptyCreateDate?: Maybe<Scalars['String']>;
  opptySource?: Maybe<Scalars['String']>;
  opptyStage?: Maybe<Scalars['String']>;
  opptyStatus?: Maybe<Scalars['String']>;
  opptyTeam?: Maybe<OpptyTeam>;
  orgId?: Maybe<Scalars['Float']>;
  setOfOpptyParam?: Maybe<Array<Maybe<OpptyParam>>>;
  source?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Account = {
  name?: Maybe<Scalars['String']>;
};

export type MeetingMetadata = {
  account?: Maybe<Account>;
  audioMediaLink?: Maybe<Scalars['String']>;
  contact?: Maybe<Contact>;
  description?: Maybe<Scalars['String']>;
  externalMeetingId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  meetingTopic?: Maybe<Scalars['String']>;
  oppty?: Maybe<Oppty2>;
  orgId?: Maybe<Scalars['Float']>;
  setOfMeetingMetadataParam?: Maybe<Array<Maybe<MeetingMetadataParam>>>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  textMediaLink?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  videoMediaLink?: Maybe<Scalars['String']>;
};

export type Contact = {
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type MeetingMetadataParam = {
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  meetingMetadata?: Maybe<MeetingMetadata>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type OpptyContactRel = {
  contact?: Maybe<Contact>;
  crmRelId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  oppty?: Maybe<Oppty2>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type OpptyTeam = {
  crmRelId?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  listOfOppty?: Maybe<Array<Maybe<Oppty2>>>;
  name?: Maybe<Scalars['String']>;
  oppty?: Maybe<Oppty2>;
  orgId?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['String']>;
  setOfOpptyTeamParam?: Maybe<Array<Maybe<OpptyTeamParam>>>;
  source?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  users3?: Maybe<Users2>;
  version?: Maybe<Scalars['String']>;
};

export type OpptyTeamParam = {
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  members?: Maybe<Scalars['Int']>;
  opptyTeam?: Maybe<OpptyTeam>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Users2 = {
  alertList?: Maybe<Array<Maybe<Alert>>>;
  crmUserId?: Maybe<Scalars['String']>;
  customerDomainWhiteList?: Maybe<Array<Maybe<CustomerDomainWhiteList2>>>;
  email?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  firstTimeLogin?: Maybe<Scalars['Boolean']>;
  firstname?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  inviteSent?: Maybe<Scalars['String']>;
  invitedAt?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  listOfAccountTeam3?: Maybe<Array<Maybe<AccountTeam>>>;
  listOfOpptyTeam3?: Maybe<Array<Maybe<OpptyTeam>>>;
  listOfUserRoles?: Maybe<Array<Maybe<UsersRoleRel>>>;
  listOfUserUiPreference3?: Maybe<Array<Maybe<UserUiPreference>>>;
  managerId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  orgType?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  qenabled?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  zoomHostId?: Maybe<Scalars['String']>;
  zoomToken?: Maybe<Scalars['String']>;
};

export type Alert = {
  archive?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  objId?: Maybe<Scalars['Float']>;
  objSubId?: Maybe<Scalars['Float']>;
  objType?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  users?: Maybe<Users2>;
  version?: Maybe<Scalars['String']>;
};

export type CustomerDomainWhiteList2 = {
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  setOfCustomerDomainWhiteListParam?: Maybe<Array<Maybe<CustomerDomainWhiteListParam>>>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  users?: Maybe<Users2>;
  version?: Maybe<Scalars['String']>;
};

export type CustomerDomainWhiteListParam = {
  customerDomainWhiteList?: Maybe<CustomerDomainWhiteList2>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type AccountTeam = {
  account?: Maybe<Account>;
  crmRelId?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  listOfAccount?: Maybe<Array<Maybe<Account>>>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['String']>;
  setOfAccountTeamParam?: Maybe<Array<Maybe<AccountTeamParam>>>;
  source?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  users3?: Maybe<Users2>;
  version?: Maybe<Scalars['String']>;
};

export type AccountTeamParam = {
  accountTeam?: Maybe<AccountTeam>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  members?: Maybe<Scalars['Int']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type UsersRoleRel = {
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  users?: Maybe<Users2>;
  version?: Maybe<Scalars['String']>;
};

export type UserUiPreference = {
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  preferenceType?: Maybe<Scalars['String']>;
  savedJson?: Maybe<Scalars['String']>;
  setOfUserUiPreferenceParam?: Maybe<Array<Maybe<UserUiPreferenceParam>>>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  users?: Maybe<Users2>;
  version?: Maybe<Scalars['String']>;
};

export type UserUiPreferenceParam = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  userUiPreference?: Maybe<UserUiPreference>;
  value?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type OpptyParam = {
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  oppty?: Maybe<Oppty2>;
  orgId?: Maybe<Scalars['Float']>;
  probability?: Maybe<Scalars['Float']>;
  product?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  timespent?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type OpptyDTO = {
  accountID?: Maybe<IdNameDTO>;
  amount?: Maybe<Scalars['Float']>;
  contact?: Maybe<Scalars['Float']>;
  conversation?: Maybe<Array<Maybe<ConversationRequest>>>;
  crmOpptyId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  metrics?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  opptyAmount?: Maybe<Scalars['Float']>;
  opptyCloseDate?: Maybe<Scalars['String']>;
  opptyCreateDate?: Maybe<Scalars['String']>;
  opptySource?: Maybe<Scalars['String']>;
  opptyStage?: Maybe<Scalars['String']>;
  opptyStatus?: Maybe<Scalars['String']>;
  opptyTeamID?: Maybe<IdNameDTO>;
  orgId?: Maybe<Scalars['Float']>;
  score?: Maybe<Array<Maybe<Score4>>>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type AccountTeamResponse = {
  current?: Maybe<Array<Maybe<AccountTeamDTO>>>;
  last?: Maybe<Array<Maybe<AccountTeamDTO>>>;
};

export type AccountTeamDTO = {
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  lastActivityDate?: Maybe<Scalars['String']>;
  manager?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  seller?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  timeOnAccount?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type AggrConvMetrics = {
  convId?: Maybe<Scalars['Float']>;
  engagement?: Maybe<Scalars['Float']>;
  engagementSmooth?: Maybe<Scalars['Float']>;
  isSpeaker?: Maybe<Scalars['Boolean']>;
  offset?: Maybe<Scalars['Float']>;
  offsetTimestamp?: Maybe<Scalars['String']>;
  participantId?: Maybe<Scalars['String']>;
  sentiment?: Maybe<Scalars['Float']>;
  sentimentSmooth?: Maybe<Scalars['Float']>;
};

export type AlertResponseDTO = {
  archive?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  digitalSource?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  objId?: Maybe<Scalars['Float']>;
  objSubId?: Maybe<Scalars['Float']>;
  objType?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  version?: Maybe<Scalars['String']>;
};

export type User = {
  companyProfileDTO?: Maybe<CompanyProfileDTO>;
  email?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  externalIdToken?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  firstTimeLogin?: Maybe<Scalars['Boolean']>;
  firstname?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  invited?: Maybe<Scalars['Boolean']>;
  invitedAt?: Maybe<Scalars['String']>;
  isBlueJeansAuthorized?: Maybe<Scalars['Boolean']>;
  isCalendarAuthorized?: Maybe<Scalars['Boolean']>;
  isEmailAuthorized?: Maybe<Scalars['Boolean']>;
  isGmailAuthorized?: Maybe<Scalars['Boolean']>;
  isGoogleCalendarAuthorized?: Maybe<Scalars['Boolean']>;
  isOutlookAuthorized?: Maybe<Scalars['Boolean']>;
  isOutlookCalendarAuthorized?: Maybe<Scalars['Boolean']>;
  isPasswordResetRequired?: Maybe<Scalars['Boolean']>;
  isPasswordSet?: Maybe<Scalars['Boolean']>;
  isSlackAuthorized?: Maybe<Scalars['Boolean']>;
  isSsoLogin?: Maybe<Scalars['Boolean']>;
  isTeamAuthorized?: Maybe<Scalars['Boolean']>;
  isWebexAuthorized?: Maybe<Scalars['Boolean']>;
  isZoomAuthorized?: Maybe<Scalars['Boolean']>;
  lastname?: Maybe<Scalars['String']>;
  manager?: Maybe<UserManagerDTO>;
  orgId?: Maybe<Scalars['Float']>;
  orgType?: Maybe<Scalars['String']>;
  qEnabled?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Array<Maybe<IdNameDTO>>>;
  scopes?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  zoomToken?: Maybe<Scalars['String']>;
};

export type CompanyProfileDTO = {
  companyName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UserManagerDTO = {
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lastname?: Maybe<Scalars['String']>;
};

export type CompanyParamResponseDTO = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ConfigPropResponseDTO = {
  configPropset?: Maybe<IdNameDTO>;
  defaultValue?: Maybe<Scalars['String']>;
  defaultValueInt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  isVisible?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ConversationAttendeesResponse = {
  attendees?: Maybe<Array<Maybe<Attendee>>>;
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CommentResponseDTO = {
  comment?: Maybe<Scalars['String']>;
  convID?: Maybe<ConvDTO>;
  endTime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keyMomentId?: Maybe<Scalars['Float']>;
  mentions?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  version?: Maybe<Scalars['String']>;
};

export type KeywordCategResponseDTO = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keywordCategName?: Maybe<Scalars['String']>;
  keywordTags?: Maybe<Array<Maybe<KeywordTagResponseDTO>>>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type KeywordTagResponseDTO = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keywordCateg?: Maybe<KeywordCategResponseDTO>;
  keywordTagVal?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type CompanySlideFirstResponse = {
  companyName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  high?: Maybe<Array<Maybe<SlideFirst>>>;
  id?: Maybe<Scalars['Float']>;
  low?: Maybe<Array<Maybe<SlideFirst>>>;
};

export type SlideFirst = {
  accountID?: Maybe<ConvAccountDTO>;
  contentStartTime?: Maybe<Scalars['String']>;
  contentViewVideoMediaLink?: Maybe<Scalars['String']>;
  convId?: Maybe<Scalars['Float']>;
  convList?: Maybe<Array<Maybe<SlideFirst>>>;
  galleryViewVideoMediaLink?: Maybe<Scalars['String']>;
  kmEndTime?: Maybe<Scalars['String']>;
  kmId?: Maybe<Scalars['Float']>;
  kmStartTime?: Maybe<Scalars['String']>;
  kmText?: Maybe<Scalars['String']>;
  kmUsername?: Maybe<Scalars['String']>;
  meetingEndTime?: Maybe<Scalars['String']>;
  meetingName?: Maybe<Scalars['String']>;
  meetingStartTime?: Maybe<Scalars['String']>;
  sentiment?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContactMetricsResponse = {
  avatarUrl?: Maybe<Scalars['String']>;
  contactMethods?: Maybe<Array<Maybe<ContactMethodDTO>>>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  metrics?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  oppty?: Maybe<Array<Maybe<OpptyDTO>>>;
  role?: Maybe<Scalars['String']>;
  score?: Maybe<Array<Maybe<Score4>>>;
};

export type ContactMethodDTO = {
  contactId?: Maybe<Scalars['Float']>;
  emailAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  phoneNumber?: Maybe<Scalars['String']>;
  preference?: Maybe<Scalars['String']>;
  setOfContactMethodParam?: Maybe<Array<Maybe<ContactMethodParam>>>;
  social?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ContactMethodParam = {
  contactMethod?: Maybe<ContactMethod>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  preference?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ContactMethod = {
  contact?: Maybe<Contact>;
  emailAddress2?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  phoneNumber2?: Maybe<Scalars['String']>;
  preference?: Maybe<Scalars['String']>;
  setOfContactMethodParam?: Maybe<Array<Maybe<ContactMethodParam>>>;
  social?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ConvAttendeeResponseDTO = {
  attendeeEmail?: Maybe<Scalars['String']>;
  attendeeName?: Maybe<Scalars['String']>;
  convID?: Maybe<IdNameDTO>;
  description?: Maybe<Scalars['String']>;
  employeeOrContactInd?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ConvMetricsResponse = {
  attendees?: Maybe<Array<Maybe<AttendeeMetric>>>;
  desc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  videoLink?: Maybe<Scalars['String']>;
};

export type ConversationAttributionLogRsp = {
  allowEdit?: Maybe<Scalars['Boolean']>;
  convId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  newAccountCrmId?: Maybe<Scalars['String']>;
  newAccountId?: Maybe<Scalars['Float']>;
  newOpptyCrmId?: Maybe<Scalars['String']>;
  newOpptyId?: Maybe<Scalars['Float']>;
  oldAccountCrmId?: Maybe<Scalars['String']>;
  oldAccountId?: Maybe<Scalars['Float']>;
  oldOpptyCrmId?: Maybe<Scalars['String']>;
  oldOpptyId?: Maybe<Scalars['Float']>;
};

export type AccountPromisesResponseDTO = {
  account?: Maybe<Account>;
  dateTime?: Maybe<Scalars['String']>;
  promises?: Maybe<Array<Maybe<Promise>>>;
};

export type Promise = {
  classification?: Maybe<Scalars['String']>;
  conv?: Maybe<ConvInfo>;
  deal?: Maybe<DealInfo>;
  id?: Maybe<Scalars['Float']>;
  promiseEndTime?: Maybe<Scalars['String']>;
  promiseNextAction?: Maybe<Scalars['String']>;
  promiseStartTime?: Maybe<Scalars['String']>;
  promiseText?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ConvInfo = {
  confidential?: Maybe<Scalars['Boolean']>;
  endTime?: Maybe<Scalars['String']>;
  hostId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  meetingTopic?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type DealInfo = {
  amount?: Maybe<Scalars['Float']>;
  amountNumber?: Maybe<Scalars['String']>;
  closeDate?: Maybe<Scalars['String']>;
  createDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type ConvTopicEpisodeResponseDTO = {
  conversation?: Maybe<Scalars['Float']>;
  endTime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keytopicCount1?: Maybe<Scalars['Float']>;
  keytopicCount2?: Maybe<Scalars['Float']>;
  keytopicCount3?: Maybe<Scalars['Float']>;
  keytopicCount4?: Maybe<Scalars['Float']>;
  keytopicId1?: Maybe<Scalars['String']>;
  keytopicId2?: Maybe<Scalars['String']>;
  keytopicId3?: Maybe<Scalars['String']>;
  keytopicId4?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unsupervisedCount1?: Maybe<Scalars['Float']>;
  unsupervisedCount2?: Maybe<Scalars['Float']>;
  unsupervisedCount3?: Maybe<Scalars['Float']>;
  unsupervisedCount4?: Maybe<Scalars['Float']>;
  unsupervisedTopic1?: Maybe<Scalars['String']>;
  unsupervisedTopic2?: Maybe<Scalars['String']>;
  unsupervisedTopic3?: Maybe<Scalars['String']>;
  unsupervisedTopic4?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ConvEQResponseDTO = {
  accountId?: Maybe<Scalars['Float']>;
  convEndTime?: Maybe<Scalars['String']>;
  convId?: Maybe<Scalars['Float']>;
  convStartTime?: Maybe<Scalars['String']>;
  eqScore?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  meetingEngagement?: Maybe<Scalars['Float']>;
  meetingSentiment?: Maybe<Scalars['Float']>;
  numberOfAttendees?: Maybe<Scalars['Float']>;
  opptyId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
  vRankSum?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['String']>;
  vrankSum?: Maybe<Scalars['Float']>;
};

export type ConversationDetailResponse = {
  accountID?: Maybe<DealAccount>;
  actionItems?: Maybe<Array<Maybe<ConvPromiseResponseDTO>>>;
  aiViewVideoMediaLink?: Maybe<Scalars['String']>;
  attendees?: Maybe<Array<Maybe<Attendee>>>;
  audioMediaLink?: Maybe<Scalars['String']>;
  bookmarks?: Maybe<Array<Maybe<ConvBookmarkResponseDTO>>>;
  confidential?: Maybe<Scalars['Boolean']>;
  contentViewVideoMediaLink?: Maybe<Scalars['String']>;
  cvProcDone?: Maybe<Scalars['Boolean']>;
  dataFusionProcDone?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  externalMeetingId?: Maybe<Scalars['String']>;
  freezeImage?: Maybe<Scalars['String']>;
  galleryVideoLink?: Maybe<Scalars['String']>;
  galleryViewVideoMediaLink?: Maybe<Scalars['String']>;
  hostId?: Maybe<Scalars['Float']>;
  hostName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  keyMoments2?: Maybe<Array<Maybe<KeyMoment>>>;
  maskVideoLink?: Maybe<Scalars['String']>;
  meetingTopic?: Maybe<Scalars['String']>;
  nextActions?: Maybe<Array<Maybe<ConvNextAction>>>;
  opportunities?: Maybe<DealSummaryDetailResponse>;
  opptyID?: Maybe<DealOppty>;
  orgId?: Maybe<Scalars['Float']>;
  recordingDate?: Maybe<Scalars['String']>;
  score?: Maybe<Array<Maybe<Score4>>>;
  shareCount?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  speakerTimelineLink?: Maybe<Scalars['String']>;
  speakerViewVideoMediaLink?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  textKmProcDone?: Maybe<Scalars['Boolean']>;
  textMediaLink?: Maybe<Scalars['String']>;
  textSentProcDone?: Maybe<Scalars['Boolean']>;
  tonalProcDone?: Maybe<Scalars['Boolean']>;
  topics?: Maybe<Array<Maybe<ConvTopicEpisodeResponseDTO>>>;
  transcriptLink?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  videoMediaLink?: Maybe<Scalars['String']>;
};

export type DealAccount = {
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ConvNextAction = {
  description?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
};

export type DealSummaryDetailResponse = {
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  contact?: Maybe<Contact>;
  contactId?: Maybe<Scalars['Float']>;
  contacts?: Maybe<Array<Maybe<ContactActivity>>>;
  conversations?: Maybe<Array<Maybe<ConversationRequest>>>;
  crmOpptyId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  metrics?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  opptyAmount?: Maybe<Scalars['Int']>;
  opptyCloseDate?: Maybe<Scalars['String']>;
  opptyCreateDate?: Maybe<Scalars['String']>;
  opptyName?: Maybe<Scalars['Int']>;
  opptySource?: Maybe<Scalars['String']>;
  opptyStage?: Maybe<Scalars['String']>;
  opptyStatus?: Maybe<Scalars['String']>;
  opptyTeamId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  score?: Maybe<Array<Maybe<Score4>>>;
  sellers?: Maybe<Array<Maybe<UserActivity>>>;
  source?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UserActivity = {
  conversation?: Maybe<Conversation2>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  jobTitle?: Maybe<Scalars['String']>;
  lastActivityDate?: Maybe<Scalars['String']>;
  lastActivityType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  score?: Maybe<Array<Maybe<Score4>>>;
  type?: Maybe<Scalars['String']>;
};

export type DealOppty = {
  closeDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ConvoStatResponse = {
  accountId?: Maybe<Scalars['Float']>;
  aiViewVideoMediaLink?: Maybe<Scalars['String']>;
  attendees?: Maybe<Array<Maybe<Attendee>>>;
  audioMediaLink?: Maybe<Scalars['String']>;
  contentViewVideoMediaLink?: Maybe<Scalars['String']>;
  convoStats?: Maybe<ConvoStats>;
  customer?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  externalMeetingId?: Maybe<Scalars['String']>;
  freezeImage?: Maybe<Scalars['String']>;
  galleryVideoLink?: Maybe<Scalars['String']>;
  galleryViewVideoMediaLink?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  hostId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  keyMoments?: Maybe<Array<Maybe<KeyMoment>>>;
  maskVideoLink?: Maybe<Scalars['String']>;
  meetingTopic?: Maybe<Scalars['String']>;
  nextActions?: Maybe<Array<Maybe<ConvNextAction>>>;
  opptyId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  recordingDate?: Maybe<Scalars['String']>;
  score?: Maybe<Array<Maybe<Score4>>>;
  source?: Maybe<Scalars['String']>;
  speakerTimelineLink?: Maybe<Scalars['String']>;
  speakerViewVideoMediaLink?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  textMediaLink?: Maybe<Scalars['String']>;
  transcriptLink?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  videoMediaLink?: Maybe<Scalars['String']>;
};

export type ConvoStats = {
  averageEmpathy?: Maybe<Scalars['Float']>;
  averagePoliteness?: Maybe<Scalars['Float']>;
  averagespeakingPace?: Maybe<Scalars['Float']>;
  hesitation?: Maybe<Scalars['Float']>;
  longestCustomerMonologue?: Maybe<Scalars['Int']>;
  longestRepMonologue?: Maybe<Scalars['Int']>;
  talkRatio?: Maybe<Scalars['Float']>;
  teamMembers?: Maybe<Array<Maybe<Attendee>>>;
};

export type CurrentEQForOpptyResponse = {
  deals?: Maybe<DealSummaryDetailResponse>;
};

export type DealDetailResponse = {
  searchResult?: Maybe<DealSearchResult>;
  totalCount?: Maybe<Scalars['Float']>;
};

export type DealSearchResult = {
  entities?: Maybe<Array<Maybe<DealEntity>>>;
  resultCount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type DealEntity = {
  data?: Maybe<Array<Maybe<DealData>>>;
  type?: Maybe<Scalars['String']>;
};

export type DealData = {
  account?: Maybe<DealAccount>;
  accountOpptyEQ?: Maybe<AccountOpptyEQResponseDTO>;
  amount?: Maybe<Scalars['Float']>;
  contact?: Maybe<Array<Maybe<Contact>>>;
  conversations?: Maybe<Array<Maybe<ConversationRequest>>>;
  id?: Maybe<Scalars['Float']>;
  metrics?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  nextAction?: Maybe<DealNextAction>;
  opptyAmount?: Maybe<Scalars['Float']>;
  opptyCloseDate?: Maybe<Scalars['String']>;
  opptyCreateDate?: Maybe<Scalars['String']>;
  opptyStage?: Maybe<Scalars['String']>;
  opptyStatus?: Maybe<Scalars['String']>;
  pastActivity?: Maybe<Scalars['String']>;
  pendingPromisesCount?: Maybe<Scalars['Int']>;
  score?: Maybe<Array<Maybe<Score4>>>;
  totalPromisesCount?: Maybe<Scalars['Int']>;
};

export type AccountOpptyEQResponseDTO = {
  accountId?: Maybe<Scalars['Float']>;
  accountName?: Maybe<Scalars['String']>;
  accountUrl?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  empathy?: Maybe<Scalars['Float']>;
  engagement?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  opptyAmount?: Maybe<Scalars['Float']>;
  opptyId?: Maybe<Scalars['Float']>;
  opptyName?: Maybe<Scalars['String']>;
  opptyRisk?: Maybe<OpptyRisk>;
  opptyStage?: Maybe<Scalars['String']>;
  opptyState?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  sentiment?: Maybe<Scalars['Float']>;
};

export enum OpptyRisk {
  AT_RISK = 'AT_RISK',
  ON_TRACK = 'ON_TRACK',
  EXCEED = 'EXCEED'
}

export type DealNextAction = {
  date?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['Boolean']>;
  video?: Maybe<Scalars['Boolean']>;
};

export type CustWebLinkResponseDTO = {
  company?: Maybe<Scalars['String']>;
  companyProfile?: Maybe<CompanyProfileDTO>;
  id?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  usersId?: Maybe<Scalars['Float']>;
};

export type DealSummaryTrendResponse = {
  convostats?: Maybe<Array<Maybe<DealConvoStat>>>;
  engagement?: Maybe<Stages>;
  id?: Maybe<Scalars['Float']>;
  sentiment?: Maybe<Stages>;
  stage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  wonOppty?: Maybe<DealStat>;
};

export type DealConvoStat = {
  stages?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
};

export type Stages = {
  stages?: Maybe<Scalars['JSON']>;
};

export type DealStat = {
  convostats?: Maybe<Array<Maybe<DealConvoStat>>>;
  engagement?: Maybe<Stages>;
  sentiment?: Maybe<Stages>;
};

export type DealSummaryResponse = {
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['Float']>;
  accountUrl?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  contact?: Maybe<Contact>;
  contactId?: Maybe<Scalars['Float']>;
  crmOpptyId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  opptyAmount?: Maybe<Scalars['Int']>;
  opptyCloseDate?: Maybe<Scalars['String']>;
  opptyCreateDate?: Maybe<Scalars['String']>;
  opptyName?: Maybe<Scalars['Int']>;
  opptySource?: Maybe<Scalars['String']>;
  opptyStage?: Maybe<Scalars['String']>;
  opptyStatus?: Maybe<Scalars['String']>;
  opptyTeamId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  topicCoverageStatus?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Diarization = {
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type Task = {
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Option>;
};

export type Option = {
  activate?: Maybe<Scalars['Boolean']>;
  data?: Maybe<Scalars['JSON']>;
};

export type EmlEqResponseDTO = {
  emlObj?: Maybe<EmlObjResponseDTO>;
  empathy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  senderName?: Maybe<Scalars['String']>;
  senderUser?: Maybe<User>;
  sentiment?: Maybe<Scalars['Float']>;
};

export type EmlObjResponseDTO = {
  conversation?: Maybe<ConvDTO>;
  emlBody?: Maybe<Array<Maybe<EmlBody2>>>;
  emlMetadata?: Maybe<Array<Maybe<EmlMetadata>>>;
  emlObjParam?: Maybe<Array<Maybe<EmlObjParam>>>;
  info?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EmlBody2 = {
  body?: Maybe<Scalars['String']>;
  emlObj?: Maybe<EmlObj>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  setOfEmlBodyParam?: Maybe<Array<Maybe<EmlBodyParam>>>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EmlObj = {
  cc?: Maybe<Scalars['String']>;
  conversation?: Maybe<Conversation2>;
  emlEqs?: Maybe<Array<Maybe<EmlEq>>>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  listOfEmlBody?: Maybe<Array<Maybe<EmlBody2>>>;
  listOfEmlMetadata?: Maybe<Array<Maybe<EmlMetadata>>>;
  orgId?: Maybe<Scalars['Float']>;
  sendDatetime?: Maybe<Scalars['String']>;
  setOfEmlObjParam?: Maybe<Array<Maybe<EmlObjParam>>>;
  source?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  threadId?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EmlEq = {
  emlObj?: Maybe<EmlObj>;
  empathy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  rawMetrics?: Maybe<Scalars['String']>;
  senderName?: Maybe<Scalars['String']>;
  senderUser?: Maybe<Scalars['Float']>;
  sentiment?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EmlMetadata = {
  emlObj?: Maybe<EmlObj>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  setOfEmlMetadataParam?: Maybe<Array<Maybe<EmlMetadataParam>>>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EmlMetadataParam = {
  emlMetadata?: Maybe<EmlMetadata>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EmlObjParam = {
  emlObj?: Maybe<EmlObj>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EmlBodyParam = {
  emlBody?: Maybe<EmlBody2>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EmpathyAndHesitationTurnsReport = {
  convId?: Maybe<Scalars['Float']>;
  empathyChangeDetailsList?: Maybe<Array<Maybe<EmpathyChangeDetails>>>;
  empathyScore?: Maybe<Scalars['Float']>;
  hesitationChangeDetailsList?: Maybe<Array<Maybe<HesitationChangeDetails>>>;
  hesitationScore?: Maybe<Scalars['Float']>;
};

export type EmpathyChangeDetails = {
  averageEmpathy2?: Maybe<Scalars['Float']>;
  convId2?: Maybe<Scalars['Float']>;
  convOffset?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  polarity?: Maybe<Scalars['String']>;
  prevContactNameOnTurn?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId2?: Maybe<Scalars['Float']>;
  userName?: Maybe<Scalars['String']>;
};

export type HesitationChangeDetails = {
  averageHesitation?: Maybe<Scalars['Float']>;
  convId3?: Maybe<Scalars['Float']>;
  convOffset?: Maybe<Scalars['Float']>;
  prevContactNameOnTurn?: Maybe<Scalars['String']>;
  userId3?: Maybe<Scalars['Float']>;
  userName?: Maybe<Scalars['String']>;
};

export type CalendarEvent = {
  account?: Maybe<IdNameDTO>;
  botInstrFromCalendar?: Maybe<Scalars['Boolean']>;
  calUid?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  eventAttendees?: Maybe<Array<Maybe<CalendarEventAttendee>>>;
  eventEndTime?: Maybe<Scalars['String']>;
  eventStartTime?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lastMeeting?: Maybe<ConversationDetailResponse>;
  oppty?: Maybe<Array<Maybe<IdNameDTO>>>;
  opptyDetail?: Maybe<DealSummaryDetailResponse>;
  subjectLine?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Float']>;
};

export type CalendarEventAttendee = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type KeyPhraseResponse = {
  id?: Maybe<Scalars['Float']>;
  keyMoments3?: Maybe<Array<Maybe<KeyMoment>>>;
};

export type TeamOpptyUsersStats = {
  idealConvEQ?: Maybe<IdealConvEQ>;
  overAll?: Maybe<Array<Maybe<TeamUsersStat>>>;
  teamOpptyUsersStats?: Maybe<Array<Maybe<TeamOpptyUsersStat>>>;
  unattributed?: Maybe<Array<Maybe<TeamUnattributedUsersStat>>>;
};

export type IdealConvEQ = {
  empathy?: Maybe<Scalars['Float']>;
  engagement?: Maybe<Scalars['Float']>;
  sentiment?: Maybe<Scalars['Float']>;
  talkRatio?: Maybe<Scalars['Float']>;
};

export type TeamUsersStat = {
  customerEngagement?: Maybe<Scalars['Float']>;
  customerSentiment?: Maybe<Scalars['Float']>;
  empathy?: Maybe<Scalars['Float']>;
  engagement?: Maybe<Scalars['Float']>;
  hesitation?: Maybe<Scalars['Float']>;
  politeness?: Maybe<Scalars['Float']>;
  sentiment?: Maybe<Scalars['Float']>;
  speakingRate?: Maybe<Scalars['Float']>;
  talkRatio?: Maybe<Scalars['Float']>;
  talkSpeed?: Maybe<Scalars['Float']>;
  user?: Maybe<User>;
  usersStats?: Maybe<Array<Maybe<UsersStat>>>;
};

export type UsersStat = {
  accountID?: Maybe<ConvAccountDTO>;
  convEndTime?: Maybe<Scalars['String']>;
  convId?: Maybe<Scalars['Float']>;
  convStartTime?: Maybe<Scalars['String']>;
  convStatus?: Maybe<Scalars['String']>;
  convType?: Maybe<Scalars['String']>;
  empathy?: Maybe<Scalars['Float']>;
  engagement?: Maybe<Scalars['Float']>;
  hesitation?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  participantName?: Maybe<Scalars['String']>;
  politeness?: Maybe<Scalars['Float']>;
  sentiment?: Maybe<Scalars['Float']>;
  speakingRate?: Maybe<Scalars['Float']>;
  talkRatio?: Maybe<Scalars['Float']>;
  talkSpeed?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type TeamOpptyUsersStat = {
  comments?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  conversations?: Maybe<Array<Maybe<ConversationRequest>>>;
  oppty?: Maybe<OpptyDTO>;
  usersStats?: Maybe<Array<Maybe<TeamUsersStat>>>;
};

export type TeamUnattributedUsersStat = {
  comments?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  conversations?: Maybe<Array<Maybe<ConversationRequest>>>;
  user?: Maybe<TeamUsersStat>;
};

export type MediaClipResponseDTO = {
  accountID?: Maybe<ConvAccountDTO>;
  audioMediaLink?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  convID?: Maybe<ConvDTO>;
  description?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['Float']>;
  galleryViewVideoMediaLink?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keyMoment?: Maybe<ConvKeyMomentResponseDTO>;
  keytags?: Maybe<Array<Maybe<KeywordTagResponseDTO>>>;
  mediaClipRelId?: Maybe<Scalars['Float']>;
  meetingTime?: Maybe<Scalars['String']>;
  meetingTopic?: Maybe<Scalars['String']>;
  opptyID?: Maybe<ConvOpptyDTO>;
  opptyName?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  polarity?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
  shared?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  transcript?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userID?: Maybe<ConvUsersDTO>;
  usersViewed?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Float']>;
};

export type ConvKeyMomentResponseDTO = {
  contentImages?: Maybe<Scalars['String']>;
  convId?: Maybe<Scalars['Float']>;
  downVote?: Maybe<Scalars['Float']>;
  downVoteUser?: Maybe<Scalars['String']>;
  endOffset?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keywordTagId1?: Maybe<Scalars['Float']>;
  keywordTagId2?: Maybe<Scalars['Float']>;
  keywordTagId3?: Maybe<Scalars['Float']>;
  keywordTagId4?: Maybe<Scalars['Float']>;
  kmEndTime?: Maybe<Scalars['String']>;
  kmStartTime?: Maybe<Scalars['String']>;
  line?: Maybe<Scalars['String']>;
  polarity?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  startOffset?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  upVote?: Maybe<Scalars['Float']>;
  upVoteUser?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ConvOpptyDTO = {
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type MediaClipParamResponseDTO = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  mediaClipId?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ConversationSummaryResponse = {
  data?: Maybe<Array<Maybe<Datum>>>;
  userId?: Maybe<Scalars['String']>;
};

export type Datum = {
  account?: Maybe<IdNameDTO>;
  aiViewVideoMediaLink?: Maybe<Scalars['String']>;
  attendees?: Maybe<Array<Maybe<ConvAttendeeAttr>>>;
  audioMediaLink?: Maybe<Scalars['String']>;
  confidential?: Maybe<Scalars['Boolean']>;
  contentViewVideoMediaLink?: Maybe<Scalars['String']>;
  cvProcDone?: Maybe<Scalars['Boolean']>;
  dataFusionProcDone?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  externalMeetingId?: Maybe<Scalars['String']>;
  galleryViewVideoMediaLink?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  hostId?: Maybe<Scalars['Float']>;
  hostImage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  keyTopics?: Maybe<Array<Maybe<KeyTag>>>;
  lastChunk?: Maybe<Scalars['Float']>;
  mediaLink?: Maybe<Scalars['String']>;
  mediaThumbnail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  opportunity?: Maybe<Opportunity>;
  orgId?: Maybe<Scalars['Float']>;
  pendingPromisesCount?: Maybe<Scalars['Int']>;
  processedFlag?: Maybe<Scalars['String']>;
  score?: Maybe<Array<Maybe<Score4>>>;
  sharedDate?: Maybe<Scalars['String']>;
  sharedUser?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  speakerTimelineLink?: Maybe<Scalars['String']>;
  speakerViewVideoMediaLink?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  textKmProcDone?: Maybe<Scalars['Boolean']>;
  textMediaLink?: Maybe<Scalars['String']>;
  textSentProcDone?: Maybe<Scalars['Boolean']>;
  thumbnail?: Maybe<Scalars['String']>;
  tonalProcDone?: Maybe<Scalars['Boolean']>;
  totalPromisesCount?: Maybe<Scalars['Int']>;
  transcriptLink?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  videoMediaLink?: Maybe<Scalars['String']>;
};

export type ConvAttendeeAttr = {
  convId?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Opportunity = {
  amount?: Maybe<Scalars['Float']>;
  closeDate?: Maybe<Scalars['String']>;
  createDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  opptyAmount?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type OpptyEqbyStageResponseDTO = {
  emotionalScore?: Maybe<Scalars['String']>;
  emotionalStage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  numberOfAttendees2?: Maybe<Scalars['Float']>;
  opptyId?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['String']>;
  stageEndDate?: Maybe<Scalars['String']>;
  stageStartDate?: Maybe<Scalars['String']>;
};

export type OpptyTeamResponseDTO = {
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  usersId?: Maybe<ConvUsersDTO>;
  version?: Maybe<Scalars['String']>;
};

export type PlaylistResponseDTO = {
  clips?: Maybe<Array<Maybe<MediaClipResponseDTO>>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  orgId?: Maybe<Scalars['Float']>;
  permission?: Maybe<Scalars['String']>;
  shared?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
  userID?: Maybe<ConvUsersDTO>;
  usersViewed?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Float']>;
};

export type PlaylistParamResponseDTO = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  playlistId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SharedMemberDTO = {
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lastname?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['String']>;
  shareTime?: Maybe<Scalars['String']>;
  videoSharingHistoryId?: Maybe<Scalars['Float']>;
};

export type ConvSharedViewData = {
  convId?: Maybe<Scalars['Float']>;
  endTime?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Float']>;
};

export type ConvSlideFirstResponse = {
  high?: Maybe<Array<Maybe<SlideFirst>>>;
  low?: Maybe<Array<Maybe<SlideFirst>>>;
};

export type SummaryReportDTO = {
  amountImpacted?: Maybe<Scalars['Float']>;
  hrsProcessed?: Maybe<Scalars['Float']>;
  numOfConversations?: Maybe<Scalars['Float']>;
  uniqueContacts?: Maybe<Scalars['Float']>;
  uniqueDeals?: Maybe<Scalars['Float']>;
  uniqueKeyMoments?: Maybe<Scalars['Float']>;
};

export type ConvTimeline = {
  convId4?: Maybe<Scalars['Float']>;
  data?: Maybe<Scalars['JSON']>;
};

export type TrendEQForOpptyResponse = {
  deals?: Maybe<DealSummaryDetailResponse>;
  keyMoments4?: Maybe<OpptyDTO>;
};

export type UserDelegateResponseDTO = {
  proxyOwners?: Maybe<Array<Maybe<User>>>;
  proxyUsers?: Maybe<Array<Maybe<User>>>;
};

export type ContactResponse = {
  accounts?: Maybe<Array<Maybe<Array<Maybe<Scalars['JSON']>>>>>;
  avatarUrl?: Maybe<Scalars['String']>;
  contactMethods?: Maybe<Array<Maybe<ContactMethodDTO>>>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  jobTitle?: Maybe<Scalars['String']>;
  keyMoments5?: Maybe<Array<Maybe<KeyMoment>>>;
  lastConv?: Maybe<LastConv>;
  lastName?: Maybe<Scalars['String']>;
  metrics?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  nextConv?: Maybe<NextConv>;
  openOppty?: Maybe<Array<Maybe<OpptyDTO>>>;
  role?: Maybe<Scalars['String']>;
  score?: Maybe<Array<Maybe<Score4>>>;
  timezone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type LastConv = {
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
};

export type NextConv = {
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
};

export type Mutation = {
  /** Equivalent to PUT /usales/playlists/media-clip-rel-bulk */
  addBulkPlaylistMediaClipRel?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /auth/login */
  authenticateUser?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /auth/login2 */
  authenticateUser2?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/analytics/keyphrase/occurrences */
  companyKeyPhraseOccurrences?: Maybe<Array<Maybe<KeyPhraseOccurenceContentResponseDTO>>>;
  /** Equivalent to POST /usales/analytics/keyphrase/sentiment */
  companyKeyPhraseOccurrencesBySentiment?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/timeline/{conv_id} */
  convert?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/alerts */
  createAlert?: Maybe<AlertResponseDTO>;
  /** Equivalent to POST /usales/conv-topic-episodes */
  createConvTopicEpisode?: Maybe<ConvTopicEpisodeResponseDTO>;
  /** Equivalent to POST /usales/emleqs */
  createEmlEq?: Maybe<EmlEqResponseDTO>;
  /** Equivalent to POST /usales/custweblinks */
  createOrUpdate?: Maybe<CustWebLinkResponseDTO>;
  /** Equivalent to POST /usales/comments */
  createOrUpdate1?: Maybe<CommentResponseDTO>;
  /** Equivalent to POST /usales/clips */
  createOrUpdate2?: Maybe<VideoSharingHistoryDTO>;
  /** Equivalent to POST /usales/bookmarks */
  createOrUpdate3?: Maybe<ConvBookmarkResponseDTO>;
  /** Equivalent to POST /usales/accounts */
  createOrUpdateAccount?: Maybe<AccountResponseDTO>;
  /** Equivalent to POST /usales/convs/attendees */
  createOrUpdateConvAttendee?: Maybe<ConvAttendeeResponseDTO>;
  /** Equivalent to POST /usales/conv/attendees/{id} */
  createOrUpdateConvAttendee1?: Maybe<ConvAttendeeResponseDTO>;
  /** Equivalent to PUT /usales/keyword/categ */
  createOrUpdateKeywordCateg?: Maybe<KeywordCategResponseDTO>;
  /** Equivalent to PUT /usales/keyword/tag */
  createOrUpdateKeywordTag?: Maybe<KeywordTagResponseDTO>;
  /** Equivalent to POST /usales/oppty/{opptyId} */
  createOrUpdateOppty?: Maybe<OpptyDTO>;
  /** Equivalent to POST /usales/oppty */
  createOrUpdateOppty1?: Maybe<OpptyDTO>;
  /** Equivalent to POST /usales/oppty/teams */
  createOrUpdateOpptyTeam?: Maybe<OpptyTeamResponseDTO>;
  /** Equivalent to PUT /usales/preferences */
  createOrUpdatePreference?: Maybe<UserUiPreferenceResponseDto>;
  /** Equivalent to POST /usales/empathy-moment-recommendation */
  createOrUpdateRecommendation?: Maybe<EmpathyMomentRecommendationDTO>;
  /** Equivalent to POST /usales/users */
  createOrUpdateUser?: Maybe<User>;
  /** Equivalent to DELETE /usales/zoommeetingwhitelist */
  delete?: Maybe<Scalars['JSON']>;
  /** Equivalent to DELETE /usales/emleqs/{id} */
  delete1?: Maybe<Scalars['JSON']>;
  /** Equivalent to DELETE /usales/custweblinks/{id} */
  delete2?: Maybe<Scalars['JSON']>;
  /** Equivalent to DELETE /usales/conv-topic-episodes/{id} */
  delete3?: Maybe<Scalars['JSON']>;
  /** Equivalent to DELETE /usales/comments/{id} */
  delete4?: Maybe<Scalars['JSON']>;
  /** Equivalent to DELETE /usales/bookmarks/{id} */
  delete5?: Maybe<Scalars['JSON']>;
  /** Equivalent to DELETE /usales/alerts/{id} */
  delete6?: Maybe<Scalars['JSON']>;
  /** Equivalent to PUT /usales/playlists/delete-media-clip-rel */
  deletePlaylistMediaClipRel?: Maybe<Scalars['JSON']>;
  /** Equivalent to DELETE /usales/keyword/tags */
  deleteTags?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/keyword/keyphrase/custom/trending */
  findCustomKeyphraseTrendingTopicCount?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/oppty/{id}/details */
  findDealDetailsByMode?: Maybe<DealSummaryDetailResponse>;
  /** Equivalent to POST /usales/keyword/keyphrase/trending */
  findKeyphraseTrendingTopicCount?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/timeline/generate/{conv_id} */
  generateTimeline?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/teams/usersstat */
  getAccountTeamsUsersStats?: Maybe<Array<Maybe<TeamUsersStat>>>;
  /** Equivalent to POST /usales/teams/account/userstat */
  getAccountUsersStat?: Maybe<Array<Maybe<TeamAccountUsersStat>>>;
  /** Equivalent to POST /usales/analytics/usage/active-users */
  getAllActiveUsers?: Maybe<Array<Maybe<QUsageUserPageVisitDto>>>;
  /** Equivalent to POST /usales/teams/userstat */
  getAllTeamsUserStats?: Maybe<Array<Maybe<TeamsAccountOpptyUsersStat>>>;
  /** Equivalent to POST /usales/company/assessments */
  getAssessmentByCompany?: Maybe<Scalars['String']>;
  /** Equivalent to POST /usales/users/assessments */
  getAssessments?: Maybe<Scalars['JSON']>;
  /** Equivalent to PUT /usales/convs/meeting-attendee */
  getAttendeeByMeetingTranscript?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Equivalent to POST /auth/outlook/callback */
  getAuthCodeAndGenerateToken?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /auth/social */
  getAuthUrl?: Maybe<Scalars['String']>;
  /** Equivalent to POST /auth/outlook */
  getAuthUrl1?: Maybe<Scalars['String']>;
  /** Equivalent to POST /auth/google */
  getAuthUrl2?: Maybe<Scalars['String']>;
  /** Equivalent to POST /usales/analytics/customer-pulse/closed-deals */
  getClosedDealDetails?: Maybe<Array<Maybe<AnalyticsCustomerPulseDealResponse>>>;
  /** Equivalent to POST /usales/analytics/company/deals */
  getCompanyDeals?: Maybe<DealDetailResponse>;
  /** Equivalent to POST /usales/account-oppty-eq/company */
  getCompanyDealsEQOnRiskScale?: Maybe<Array<Maybe<AccountOpptyEQResponseDTO>>>;
  /** Equivalent to POST /usales/analytics/usage/meetingstat */
  getCompanyMeetingStats?: Maybe<OverallMeetingStatsResponse>;
  /** Equivalent to POST /usales/company-params */
  getCompanyParams?: Maybe<Array<Maybe<CompanyParamResponseDTO>>>;
  /** Equivalent to POST /usales/analytics/usage/companystat */
  getCompanyQUsage?: Maybe<OverallQUsageResponse>;
  /** Equivalent to POST /usales/analytics/contacts */
  getContacts?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/accounts/{id}/activities */
  getConversationByAccount?: Maybe<AccountActivityResponseDTO>;
  /** Equivalent to POST /usales/convs/userstat */
  getConversationUserStat?: Maybe<ConvUserStatDTO>;
  /** Equivalent to POST /usales/analytics/customer-pulse */
  getCustomerPulse?: Maybe<DealSellerPerformanceResponse>;
  /** Equivalent to POST /usales/oppty/{id}/activities */
  getDealActivities?: Maybe<Array<Maybe<DealActivitiesSummaryResponse>>>;
  /** Equivalent to POST /usales/accounts/deals */
  getDealCountByAccounts?: Maybe<Array<Maybe<AccountDealResponse>>>;
  /** Equivalent to POST /usales/account-oppty-eq */
  getDealEQOnRiskScale?: Maybe<Array<Maybe<AccountOpptyEQResponseDTO>>>;
  /** Equivalent to POST /usales/oppty/topics */
  getDealTopics?: Maybe<DealTopicCoverageResponse>;
  /** Equivalent to POST /usales/deals */
  getDeals?: Maybe<DealDetailResponse>;
  /** Equivalent to POST /usales/emails/{emlObjId} */
  getEmailByEmlObjId?: Maybe<EmlResponseDTO>;
  /** Equivalent to POST /usales/emails */
  getEmails?: Maybe<Array<Maybe<EmlResponseDTO>>>;
  /** Equivalent to POST /usales/empathyandhesitationturns/getforuserandrange */
  getEmpathyAndHesitationTurns?: Maybe<EmpathyAndHesitationTurnsReportForConvList>;
  /** Equivalent to POST /usales/preferences/favorite-meeting */
  getFavoriteMeeting?: Maybe<UserUiPreferenceResponseDto>;
  /** Equivalent to POST /usales/analytics/usage/invited-users */
  getInvitedUsers?: Maybe<Array<Maybe<User>>>;
  /** Equivalent to POST /usales/convs/lastmeeting */
  getLastMeeting?: Maybe<Array<Maybe<ConversationRequest>>>;
  /** Equivalent to POST /usales/mediaclip/search/count */
  getMediaClipCount?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/mediaclip/stats */
  getMediaClipStats?: Maybe<MediaClipStatsResponseDTO>;
  /** Equivalent to POST /usales/analytics/usage/meetings */
  getMeetingListBasedOnType?: Maybe<Array<Maybe<ConversationRequest>>>;
  /** Equivalent to POST /usales/analytics/meeting/sentiments */
  getMeetingSentiments?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/users/meetings/sharedwithme */
  getMeetingsSharedWithUser?: Maybe<AdvSearchResponse>;
  /** Equivalent to POST /usales/convs/{id}/keyword/search */
  getMomentsHavingKeyword?: Maybe<ConversationKeywordSearchResponse>;
  /** Equivalent to POST /usales/analytics/keytopics/popular */
  getMostPopularKeymoments?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/analytics/meeting/most-shared */
  getMostSharedMeetings?: Maybe<Array<Maybe<MostSharedConvAttr>>>;
  /** Equivalent to POST /usales/analytics/meeting/mostviewed */
  getMostViewedMeeting?: Maybe<Array<Maybe<MostViewedConvAttr>>>;
  /** Equivalent to POST /usales/teams/oppty/userstat */
  getOpptyUsersStat?: Maybe<TeamOpptyUsersStats>;
  /** Equivalent to POST /usales/playlists/stats */
  getPlaylistStats?: Maybe<PlaylistStatsResponseDTO>;
  /** Equivalent to POST /usales/playlists/search/count */
  getPlaylistsCount?: Maybe<Scalars['JSON']>;
  /** Equivalent to DELETE /usales/playlists/{id} */
  getPlaylistsCount1?: Maybe<Scalars['JSON']>;
  /** Equivalent to DELETE /usales/mediaclip/{id} */
  getPlaylistsCount2?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/analytics/sellereq */
  getSellerEQ?: Maybe<DealSellerPerformanceResponse>;
  /** Equivalent to POST /usales/configprops */
  getSystemProps?: Maybe<Array<Maybe<ConfigPropResponseDTO>>>;
  /** Equivalent to POST /usales/analytics/usage/page-visits */
  getTopPageVisitDetails?: Maybe<Array<Maybe<PageVisitsDto>>>;
  /** Equivalent to POST /usales/analytics/users/calldetails */
  getUserCallMetr?: Maybe<Scalars['String']>;
  /** Equivalent to POST /usales/analytics/users/callmetrics */
  getUserCallMetrics?: Maybe<Scalars['String']>;
  /** Equivalent to POST /usales/analytics/usage/users-auth */
  getUsersAuth?: Maybe<Array<Maybe<User>>>;
  /** Equivalent to POST /usales/teams/convostat */
  getUsersConvoStat?: Maybe<Array<Maybe<TeamUsersStat>>>;
  /** Equivalent to POST /usales/keyword/keyphrase/topic/count */
  keyPhras1eOccurences?: Maybe<Array<Maybe<KeyphraseTotalCountAttrDTO>>>;
  /** Equivalent to POST /usales/keyword/keyphrase/occurences */
  keyPhraseOccurences?: Maybe<Array<Maybe<KeyPhraseOccurenceResponseDTO>>>;
  /** Equivalent to POST /auth/logout */
  logout?: Maybe<Scalars['String']>;
  /** Equivalent to POST /v1/transcript/populate */
  populate?: Maybe<Scalars['String']>;
  /** Equivalent to POST /usales/mindtickle/query */
  postDataByUri?: Maybe<Scalars['String']>;
  /** Equivalent to PUT /usales/keyword/keyphrases */
  resetKeyPhrases?: Maybe<Scalars['String']>;
  /** Equivalent to POST /auth/users/details */
  revoke?: Maybe<Array<Maybe<User>>>;
  /** Equivalent to POST /auth/revoke/{provider} */
  revoke1?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Equivalent to POST /usales/meeting/custom-disclaimer */
  saveMessage?: Maybe<Scalars['String']>;
  /** Equivalent to POST /cspviolations */
  saveReport?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /v1/transcript/search */
  search?: Maybe<Scalars['String']>;
  /** Equivalent to POST /usales/zoommeetingwhitelist/search */
  search1?: Maybe<Array<Maybe<ZoomMeetingWhitelistDTO>>>;
  /** Equivalent to POST /usales/playlists/search */
  search2?: Maybe<Array<Maybe<PlaylistResponseDTO>>>;
  /** Equivalent to POST /usales/mediaclip/search */
  search3?: Maybe<Array<Maybe<MediaClipResponseDTO>>>;
  /** Equivalent to POST /usales/keymoments/search */
  search4?: Maybe<KeyMomentResponseDTO>;
  /** Equivalent to POST /usales/emails/search */
  search5?: Maybe<Array<Maybe<EmlResponseDTO>>>;
  /** Equivalent to POST /usales/custweblinks/search */
  search6?: Maybe<Array<Maybe<CustWebLinkResponseDTO>>>;
  /** Equivalent to POST /usales/convs/promise/search */
  search7?: Maybe<Array<Maybe<ConvPromiseResponseDTO>>>;
  /** Equivalent to POST /usales/conv-topic-episodes/search */
  search8?: Maybe<Array<Maybe<ConvTopicEpisodeResponseDTO>>>;
  /** Equivalent to POST /usales/comments/search */
  search9?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  /** Equivalent to POST /usales/contacts/search */
  searchAccountAndContact?: Maybe<AccountContactSearchResponse>;
  /** Equivalent to POST /usales/contacts/search/count */
  searchAccountAndContactCount?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/accounts/search */
  searchAccounts?: Maybe<Array<Maybe<AccountResponseDTO>>>;
  /** Equivalent to POST /usales/accounts/search/count */
  searchAccountsCount?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/alerts/search */
  searchAlerts?: Maybe<Array<Maybe<AlertResponseDTO>>>;
  /** Equivalent to POST /usales/contact/search */
  searchContact?: Maybe<Array<Maybe<ContactSearchResponseDTO>>>;
  /** Equivalent to POST /usales/emails/search-summary */
  searchEmailSummary?: Maybe<Array<Maybe<EmailSummaryResponseDTO>>>;
  /** Equivalent to POST /usales/events/search */
  searchEvents?: Maybe<CalenderEventSearchResponse>;
  /** Equivalent to POST /usales/events/search/count */
  searchEventsCount?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/keyword/categ/search */
  searchKeywordCateg?: Maybe<Array<Maybe<KeywordCategResponseDTO>>>;
  /** Equivalent to POST /usales/keyword/categ/search/count */
  searchKeywordCategCount?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/keyword/categ/search/notags */
  searchKeywordCategWithoutTags?: Maybe<Array<Maybe<KeywordCategResponseDTO>>>;
  /** Equivalent to POST /usales/keyword/tag/search */
  searchKeywordTag?: Maybe<Array<Maybe<KeywordTagResponseDTO>>>;
  /** Equivalent to POST /usales/keyword/tag/search/count */
  searchKeywordTagCount?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/advSearch */
  searchMeetings?: Maybe<AdvSearchResponse>;
  /** Equivalent to POST /usales/search/meetings */
  searchMeetingsByAccountOrOppty?: Maybe<AdvSearchResponse>;
  /** Equivalent to POST /usales/advSearch/count */
  searchMeetingsCount?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/empathy-moment-recommendation/search */
  searchMoments?: Maybe<EmpathyChangeMomentResponseDTO>;
  /** Equivalent to POST /usales/preferences/search */
  searchPreference?: Maybe<Array<Maybe<UserUiPreferenceResponseDto>>>;
  /** Equivalent to POST /usales/emails/team-activity */
  searchTeamActivity?: Maybe<TeamEmailActivityResponseDTO>;
  /** Equivalent to POST /usales/users/search */
  searchUsers?: Maybe<Array<Maybe<User>>>;
  /** Equivalent to PUT /usales/companyprofile/keyword-categ-select */
  selectCompanyKeywordCategory?: Maybe<Scalars['String']>;
  /** Equivalent to POST /slack/sendmessage */
  sendMessage?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/shares/share-clip-external */
  shareClipExternalUser?: Maybe<Scalars['String']>;
  /** Equivalent to POST /usales/shares/share-meeting-external */
  shareMeetingExternalUser?: Maybe<Scalars['String']>;
  /** Equivalent to POST /usales/shares/share-meeting-internal/{type} */
  shareMeetingInternalUser?: Maybe<Scalars['String']>;
  /** Equivalent to POST /usales/shares/playlist */
  sharePlaylist?: Maybe<Scalars['String']>;
  /** Equivalent to POST /usales/emails/threadcount */
  threadCount?: Maybe<Array<Maybe<ThreadCountResponse>>>;
  /** Equivalent to PUT /usales/companyprofile/access-consent */
  updateAccessConsent?: Maybe<Scalars['String']>;
  /** Equivalent to PUT /usales/account-oppty-eq */
  updateAccountOpptyEQ?: Maybe<Scalars['String']>;
  /** Equivalent to PUT /usales/account-oppty-eq-1 */
  updateAccountOpptyEQ1?: Maybe<Scalars['String']>;
  /** Equivalent to PUT /usales/alerts */
  updateAlert?: Maybe<AlertResponseDTO>;
  /** Equivalent to PUT /usales/events */
  updateCalendarEvent?: Maybe<CalendarEvent>;
  /** Equivalent to PUT /usales/conv-topic-episodes */
  updateConvTopicEpisode?: Maybe<ConvTopicEpisodeResponseDTO>;
  /** Equivalent to PUT /usales/convs */
  updateConversation?: Maybe<ConversationRequest>;
  /** Equivalent to PUT /usales/emleqs */
  updateEmlEq?: Maybe<EmlEqResponseDTO>;
  /** Equivalent to PUT /usales/keymoments */
  updateKeyMoment?: Maybe<ConvKeyMomentResponseDTO>;
  /** Equivalent to PUT /usales/playlists/media-clip-rel */
  updatePlaylistMediaClipRel?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/users/enable */
  updateQDetails?: Maybe<Scalars['JSON']>;
  /** Equivalent to PUT /usales/keyword/tag/update-status */
  updateStatusByIds?: Maybe<Scalars['JSON']>;
  /** Equivalent to PUT /auth/teams */
  updateTeamAccess?: Maybe<Scalars['String']>;
  /** Equivalent to POST /usales/users/{managerId}/team */
  updateTeamMembersManagerDetails?: Maybe<Array<Maybe<User>>>;
  /** Equivalent to POST /usales/users/proxy */
  updateUserProxy?: Maybe<UserDelegateResponseDTO>;
  /** Equivalent to PUT /usales/zoommeetingwhitelist/invoke-bot */
  updateZoomMeetingInvokeBot?: Maybe<Scalars['JSON']>;
  /** Equivalent to PUT /usales/zoommeetingwhitelist/update */
  updateZoomMeetingWhitelist?: Maybe<Scalars['String']>;
  /** Equivalent to PUT /usales/convs/external-meeting */
  uploadExternalMeeting?: Maybe<Scalars['JSON']>;
  /** Equivalent to POST /usales/playlists */
  upsert?: Maybe<PlaylistResponseDTO>;
  /** Equivalent to POST /usales/playlist/param */
  upsert1?: Maybe<PlaylistParamResponseDTO>;
  /** Equivalent to POST /usales/mediaclip */
  upsert2?: Maybe<MediaClipResponseDTO>;
  /** Equivalent to POST /usales/mediaClip/param */
  upsert3?: Maybe<MediaClipParamResponseDTO>;
  /** Equivalent to POST /usales/convs/promise */
  upsert4?: Maybe<ConvPromiseResponseDTO>;
  /** Equivalent to POST /usales/convs/param */
  upsert5?: Maybe<ConvParamResponseDTO>;
  /** Equivalent to PUT /usales/company-param */
  upsertCompanyParam?: Maybe<CompanyParamResponseDTO>;
  /** Equivalent to POST /usales/companyprofile */
  upsertCompanyProfile?: Maybe<CompanyProfileDTO>;
  /** Equivalent to POST /usales/companyprofile/businesscategs */
  upsertCompanyProfileWithKeywordCategRel?: Maybe<CompanyProfileKeywordCategRelDTO>;
  /** Equivalent to PUT /usales/configprops */
  upsertConfigProp?: Maybe<ConfigPropResponseDTO>;
  /** Equivalent to POST /usales/convs/{convId}/viewed */
  upsertExternal?: Maybe<ConvParamResponseDTO>;
  /** Equivalent to POST /usales/playlist/param/last-viewed */
  upsertLastViewed?: Maybe<Array<Maybe<PlaylistParamResponseDTO>>>;
  /** Equivalent to POST /usales/mediaClip/param/last-viewed */
  upsertLastViewed1?: Maybe<Array<Maybe<MediaClipParamResponseDTO>>>;
  /** Equivalent to POST /usales/convs/param/last-viewed */
  upsertLastViewed2?: Maybe<ConvParamResponseDTO>;
};


export type MutationaddBulkPlaylistMediaClipRelArgs = {
  usalesPlaylistsMediaClipRelBulkInput: Array<Maybe<PlaylistMediaClipRelRequestDTOInput>>;
};


export type MutationauthenticateUserArgs = {
  loginRequestInput: LoginRequestInput;
};


export type MutationauthenticateUser2Args = {
  loginRequestInput: LoginRequestInput;
};


export type MutationcompanyKeyPhraseOccurrencesArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationcompanyKeyPhraseOccurrencesBySentimentArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationconvertArgs = {
  convId: Scalars['Float'];
  usalesTimelineInput: UsalesTimelineInput;
};


export type MutationcreateAlertArgs = {
  alertRequestDTOInput: AlertRequestDTOInput;
};


export type MutationcreateConvTopicEpisodeArgs = {
  convTopicEpisodeRequestDTOInput: ConvTopicEpisodeRequestDTOInput;
};


export type MutationcreateEmlEqArgs = {
  emlEqRequestDTOInput: EmlEqRequestDTOInput;
};


export type MutationcreateOrUpdateArgs = {
  custWebLinkRequestDTOInput: CustWebLinkRequestDTOInput;
};


export type MutationcreateOrUpdate1Args = {
  commentRequestDTOInput: CommentRequestDTOInput;
};


export type MutationcreateOrUpdate2Args = {
  videoCutterRequestInput: VideoCutterRequestInput;
};


export type MutationcreateOrUpdate3Args = {
  convBookmarkRequestDTOInput: ConvBookmarkRequestDTOInput;
};


export type MutationcreateOrUpdateAccountArgs = {
  accountRequestDTOInput: AccountRequestDTOInput;
};


export type MutationcreateOrUpdateConvAttendeeArgs = {
  convAttendeeRequestDTOInput: ConvAttendeeRequestDTOInput;
  id: Scalars['Float'];
};


export type MutationcreateOrUpdateConvAttendee1Args = {
  convAttendeeRequestDTOInput: ConvAttendeeRequestDTOInput;
  id: Scalars['Float'];
};


export type MutationcreateOrUpdateKeywordCategArgs = {
  keywordCategRequestDTOInput: KeywordCategRequestDTOInput;
};


export type MutationcreateOrUpdateKeywordTagArgs = {
  keywordTagRequestDTOInput: KeywordTagRequestDTOInput;
};


export type MutationcreateOrUpdateOpptyArgs = {
  id: Scalars['Float'];
  opptyRequestDTOInput: OpptyRequestDTOInput;
};


export type MutationcreateOrUpdateOppty1Args = {
  id: Scalars['Float'];
  opptyRequestDTOInput: OpptyRequestDTOInput;
};


export type MutationcreateOrUpdateOpptyTeamArgs = {
  opptyTeamRequestDTOInput: OpptyTeamRequestDTOInput;
};


export type MutationcreateOrUpdatePreferenceArgs = {
  userUiPreferenceRequestDtoInput: UserUiPreferenceRequestDtoInput;
};


export type MutationcreateOrUpdateRecommendationArgs = {
  empathyMomentRecommendationDTOInput: EmpathyMomentRecommendationDTOInput;
};


export type MutationcreateOrUpdateUserArgs = {
  userRequestDTOInput: UserRequestDTOInput;
};


export type MutationdeleteArgs = {
  usalesZoommeetingwhitelistInput: Array<Maybe<Scalars['String']>>;
};


export type Mutationdelete1Args = {
  id: Scalars['Float'];
};


export type Mutationdelete2Args = {
  id: Scalars['Float'];
};


export type Mutationdelete3Args = {
  id: Scalars['Float'];
};


export type Mutationdelete4Args = {
  id: Scalars['Float'];
};


export type Mutationdelete5Args = {
  id: Scalars['Float'];
};


export type Mutationdelete6Args = {
  id: Scalars['Float'];
};


export type MutationdeletePlaylistMediaClipRelArgs = {
  usalesPlaylistsDeleteMediaClipRelInput: Array<Maybe<PlaylistMediaClipRelRequestDTOInput>>;
};


export type MutationdeleteTagsArgs = {
  ids: Scalars['String'];
};


export type MutationfindCustomKeyphraseTrendingTopicCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationfindDealDetailsByModeArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  id: Scalars['Float'];
  mode?: Maybe<Scalars['String']>;
  tz?: Maybe<Scalars['String']>;
};


export type MutationfindKeyphraseTrendingTopicCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgenerateTimelineArgs = {
  convId: Scalars['Float'];
};


export type MutationgetAccountTeamsUsersStatsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetAccountUsersStatArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetAllActiveUsersArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetAllTeamsUserStatsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetAssessmentByCompanyArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetAssessmentsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetAttendeeByMeetingTranscriptArgs = {
  usalesConvsMeetingAttendeeInput?: Maybe<UsalesConvsMeetingAttendeeInput>;
};


export type MutationgetAuthCodeAndGenerateTokenArgs = {
  code: Scalars['String'];
  idToken: Scalars['String'];
  state: Scalars['String'];
};


export type MutationgetAuthUrlArgs = {
  authRequestInput: AuthRequestInput;
};


export type MutationgetAuthUrl1Args = {
  authRequestInput: AuthRequestInput;
};


export type MutationgetAuthUrl2Args = {
  authRequestInput: AuthRequestInput;
};


export type MutationgetClosedDealDetailsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetCompanyDealsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetCompanyDealsEQOnRiskScaleArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetCompanyMeetingStatsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetCompanyParamsArgs = {
  limit?: Maybe<Scalars['Int']>;
  usalesCompanyParams2Input: Array<Maybe<Scalars['String']>>;
};


export type MutationgetCompanyQUsageArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetContactsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetConversationByAccountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  id: Scalars['Float'];
};


export type MutationgetConversationUserStatArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetCustomerPulseArgs = {
  usalesAnalyticsCustomerPulseInput: Scalars['JSON'];
};


export type MutationgetDealActivitiesArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  id: Scalars['Float'];
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetDealCountByAccountsArgs = {
  accountDealRequestInput: AccountDealRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetDealEQOnRiskScaleArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetDealTopicsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetDealsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetEmailByEmlObjIdArgs = {
  emlObjId: Scalars['Float'];
};


export type MutationgetEmailsArgs = {
  limit?: Maybe<Scalars['Int']>;
  usalesEmailsInput: Scalars['JSON'];
};


export type MutationgetEmpathyAndHesitationTurnsArgs = {
  empathyAndHesitationSearchCriterionInput: EmpathyAndHesitationSearchCriterionInput;
};


export type MutationgetFavoriteMeetingArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetInvitedUsersArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetLastMeetingArgs = {
  limit?: Maybe<Scalars['Int']>;
  usalesConvsLastmeetingInput: Array<Maybe<Scalars['Float']>>;
};


export type MutationgetMediaClipCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetMediaClipStatsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetMeetingListBasedOnTypeArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetMeetingSentimentsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetMeetingsSharedWithUserArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetMomentsHavingKeywordArgs = {
  criterionInput: CriterionInput;
  id: Scalars['Float'];
};


export type MutationgetMostPopularKeymomentsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetMostSharedMeetingsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetMostViewedMeetingArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetOpptyUsersStatArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetPlaylistStatsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetPlaylistsCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetPlaylistsCount1Args = {
  id: Scalars['Float'];
};


export type MutationgetPlaylistsCount2Args = {
  id: Scalars['Float'];
};


export type MutationgetSellerEQArgs = {
  usalesAnalyticsSellereqInput: Scalars['JSON'];
};


export type MutationgetSystemPropsArgs = {
  limit?: Maybe<Scalars['Int']>;
  usalesConfigprops2Input: Array<Maybe<Scalars['String']>>;
};


export type MutationgetTopPageVisitDetailsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetUserCallMetrArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetUserCallMetricsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetUsersAuthArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationgetUsersConvoStatArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationkeyPhras1eOccurencesArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationkeyPhraseOccurencesArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationpopulateArgs = {
  eSPopulateRequestInput: ESPopulateRequestInput;
  pegasusJobKey?: Maybe<Scalars['String']>;
};


export type MutationpostDataByUriArgs = {
  mindTickleReqInput: MindTickleReqInput;
};


export type MutationrevokeArgs = {
  authUsersDetailsInput: Array<Maybe<Scalars['Float']>>;
  limit?: Maybe<Scalars['Int']>;
};


export type Mutationrevoke1Args = {
  authRevoke2Input: Array<Maybe<Scalars['Float']>>;
  provider: Scalars['String'];
};


export type MutationsaveMessageArgs = {
  usalesMeetingCustomDisclaimerInput: Scalars['String'];
};


export type MutationsaveReportArgs = {
  cspViolationReqInput: CspViolationReqInput;
};


export type MutationsearchArgs = {
  eSSearchInput: ESSearchInput;
};


export type Mutationsearch1Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type Mutationsearch2Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type Mutationsearch3Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type Mutationsearch4Args = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type Mutationsearch5Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type Mutationsearch6Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type Mutationsearch7Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type Mutationsearch8Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type Mutationsearch9Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationsearchAccountAndContactArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchAccountAndContactCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchAccountsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationsearchAccountsCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchAlertsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationsearchContactArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationsearchEmailSummaryArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationsearchEventsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchEventsCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchKeywordCategArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationsearchKeywordCategCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchKeywordCategWithoutTagsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationsearchKeywordTagArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationsearchKeywordTagCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchMeetingsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchMeetingsByAccountOrOpptyArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchMeetingsCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchMomentsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchPreferenceArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationsearchTeamActivityArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchUsersArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationselectCompanyKeywordCategoryArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsendMessageArgs = {
  messageRequestDTOInput: MessageRequestDTOInput;
};


export type MutationshareClipExternalUserArgs = {
  shareClipDTOInput: ShareClipDTOInput;
};


export type MutationshareMeetingExternalUserArgs = {
  shareMeetingDTOInput: ShareMeetingDTOInput;
};


export type MutationshareMeetingInternalUserArgs = {
  shareMeetingDTOInput: ShareMeetingDTOInput;
  type: Scalars['String'];
};


export type MutationsharePlaylistArgs = {
  shareMeetingDTOInput: ShareMeetingDTOInput;
};


export type MutationthreadCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationupdateAccessConsentArgs = {
  consent: Scalars['Boolean'];
};


export type MutationupdateAccountOpptyEQArgs = {
  pegasusJobKey?: Maybe<Scalars['String']>;
};


export type MutationupdateAlertArgs = {
  alertRequestDTOInput: AlertRequestDTOInput;
};


export type MutationupdateCalendarEventArgs = {
  calendarEventRequestDTOInput: CalendarEventRequestDTOInput;
};


export type MutationupdateConvTopicEpisodeArgs = {
  convTopicEpisodeRequestDTOInput: ConvTopicEpisodeRequestDTOInput;
};


export type MutationupdateConversationArgs = {
  conversationDTOInput: ConversationDTOInput;
};


export type MutationupdateEmlEqArgs = {
  emlEqRequestDTOInput: EmlEqRequestDTOInput;
};


export type MutationupdateKeyMomentArgs = {
  convKeyMomentRequestDTOInput: ConvKeyMomentRequestDTOInput;
};


export type MutationupdatePlaylistMediaClipRelArgs = {
  playlistMediaClipRelRequestDTOInput: PlaylistMediaClipRelRequestDTOInput;
};


export type MutationupdateQDetailsArgs = {
  all?: Maybe<Scalars['Boolean']>;
  usalesUsersEnableInput?: Maybe<Array<Maybe<UserRequestDTOInput>>>;
};


export type MutationupdateStatusByIdsArgs = {
  usalesKeywordTagUpdateStatusInput: Scalars['JSON'];
};


export type MutationupdateTeamAccessArgs = {
  enable: Scalars['Boolean'];
};


export type MutationupdateTeamMembersManagerDetailsArgs = {
  limit?: Maybe<Scalars['Int']>;
  managerId: Scalars['Float'];
  usalesUserTeamInput: Array<Maybe<Scalars['Float']>>;
};


export type MutationupdateUserProxyArgs = {
  userDelegateRequestDTOInput: UserDelegateRequestDTOInput;
};


export type MutationupdateZoomMeetingInvokeBotArgs = {
  zoomMeetingWhitelistRequestInput: ZoomMeetingWhitelistRequestInput;
};


export type MutationuploadExternalMeetingArgs = {
  usalesConvsExternalMeetingInput?: Maybe<UsalesConvsExternalMeetingInput>;
};


export type MutationupsertArgs = {
  playlistRequestDTOInput: PlaylistRequestDTOInput;
};


export type Mutationupsert1Args = {
  playlistParamRequestDTOInput: PlaylistParamRequestDTOInput;
};


export type Mutationupsert2Args = {
  mediaClipRequestDTOInput: MediaClipRequestDTOInput;
};


export type Mutationupsert3Args = {
  mediaClipParamRequestDTOInput: MediaClipParamRequestDTOInput;
};


export type Mutationupsert4Args = {
  convPromiseRequestDTOInput: ConvPromiseRequestDTOInput;
};


export type Mutationupsert5Args = {
  convParamRequestDTOInput: ConvParamRequestDTOInput;
};


export type MutationupsertCompanyParamArgs = {
  companyParamRequestDTOInput: CompanyParamRequestDTOInput;
};


export type MutationupsertCompanyProfileArgs = {
  companyProfileDTOInput: CompanyProfileDTOInput;
};


export type MutationupsertCompanyProfileWithKeywordCategRelArgs = {
  companyProfileKeywordCategRelDTOInput: CompanyProfileKeywordCategRelDTOInput;
};


export type MutationupsertConfigPropArgs = {
  configPropRequestDTOInput: ConfigPropRequestDTOInput;
};


export type MutationupsertExternalArgs = {
  convId: Scalars['Float'];
};


export type MutationupsertLastViewedArgs = {
  limit?: Maybe<Scalars['Int']>;
  playlistParamRequestDTOInput: PlaylistParamRequestDTOInput;
};


export type MutationupsertLastViewed1Args = {
  limit?: Maybe<Scalars['Int']>;
  mediaClipParamRequestDTOInput: MediaClipParamRequestDTOInput;
};


export type MutationupsertLastViewed2Args = {
  convParamRequestDTOInput: ConvParamRequestDTOInput;
};

export type PlaylistMediaClipRelRequestDTOInput = {
  mediaClipId?: Maybe<Scalars['Float']>;
  mediaClipRelId?: Maybe<Scalars['Float']>;
  playlistId?: Maybe<Scalars['Float']>;
  pos?: Maybe<Scalars['Int']>;
};

export type LoginRequestInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type KeyPhraseOccurenceContentResponseDTO = {
  count?: Maybe<Scalars['Float']>;
  keywordTagId?: Maybe<Scalars['Float']>;
  keywordTagVal?: Maybe<Scalars['String']>;
  sentiment?: Maybe<Scalars['Float']>;
  subType?: Maybe<Scalars['String']>;
  trend?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AdvSearchRequestInput = {
  criteria?: Maybe<Array<Maybe<CriterionInput>>>;
  durationFlag?: Maybe<Scalars['String']>;
  entity?: Maybe<Scalars['String']>;
  pagination?: Maybe<PaginationInput>;
  searchString?: Maybe<Scalars['String']>;
  sort?: Maybe<SortInput>;
};

export type CriterionInput = {
  name?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  valueType?: Maybe<Scalars['String']>;
};

export type PaginationInput = {
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};

export type SortInput = {
  asc?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type UsalesTimelineInput = {
  timeline?: Maybe<Array<Maybe<TimelineDataInput>>>;
};

export type TimelineDataInput = {
  ts?: Maybe<Scalars['Float']>;
  users?: Maybe<Array<Maybe<UserInput>>>;
};

export type UserInput = {
  companyProfileDTO?: Maybe<CompanyProfileDTOInput>;
  email?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  externalIdToken?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  firstTimeLogin?: Maybe<Scalars['Boolean']>;
  firstname?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  invited?: Maybe<Scalars['Boolean']>;
  invitedAt?: Maybe<Scalars['String']>;
  isBlueJeansAuthorized?: Maybe<Scalars['Boolean']>;
  isCalendarAuthorized?: Maybe<Scalars['Boolean']>;
  isEmailAuthorized?: Maybe<Scalars['Boolean']>;
  isGmailAuthorized?: Maybe<Scalars['Boolean']>;
  isGoogleCalendarAuthorized?: Maybe<Scalars['Boolean']>;
  isOutlookAuthorized?: Maybe<Scalars['Boolean']>;
  isOutlookCalendarAuthorized?: Maybe<Scalars['Boolean']>;
  isPasswordResetRequired?: Maybe<Scalars['Boolean']>;
  isPasswordSet?: Maybe<Scalars['Boolean']>;
  isSlackAuthorized?: Maybe<Scalars['Boolean']>;
  isSsoLogin?: Maybe<Scalars['Boolean']>;
  isTeamAuthorized?: Maybe<Scalars['Boolean']>;
  isWebexAuthorized?: Maybe<Scalars['Boolean']>;
  isZoomAuthorized?: Maybe<Scalars['Boolean']>;
  lastname?: Maybe<Scalars['String']>;
  manager?: Maybe<UserManagerDTOInput>;
  orgId?: Maybe<Scalars['Float']>;
  orgType?: Maybe<Scalars['String']>;
  qEnabled?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Array<Maybe<IdNameDTOInput>>>;
  scopes?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  zoomToken?: Maybe<Scalars['String']>;
};

export type CompanyProfileDTOInput = {
  companyName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UserManagerDTOInput = {
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lastname?: Maybe<Scalars['String']>;
};

export type IdNameDTOInput = {
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type AlertRequestDTOInput = {
  archive?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  objId?: Maybe<Scalars['Float']>;
  objSubId?: Maybe<Scalars['Float']>;
  objType?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['String']>;
};

export type ConvTopicEpisodeRequestDTOInput = {
  conversation?: Maybe<Scalars['Float']>;
  endTime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keytopicCount1?: Maybe<Scalars['Float']>;
  keytopicCount2?: Maybe<Scalars['Float']>;
  keytopicCount3?: Maybe<Scalars['Float']>;
  keytopicCount4?: Maybe<Scalars['Float']>;
  keytopicId1?: Maybe<Scalars['String']>;
  keytopicId2?: Maybe<Scalars['String']>;
  keytopicId3?: Maybe<Scalars['String']>;
  keytopicId4?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unsupervisedCount1?: Maybe<Scalars['Float']>;
  unsupervisedCount2?: Maybe<Scalars['Float']>;
  unsupervisedCount3?: Maybe<Scalars['Float']>;
  unsupervisedCount4?: Maybe<Scalars['Float']>;
  unsupervisedTopic1?: Maybe<Scalars['String']>;
  unsupervisedTopic2?: Maybe<Scalars['String']>;
  unsupervisedTopic3?: Maybe<Scalars['String']>;
  unsupervisedTopic4?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EmlEqRequestDTOInput = {
  emlObjId?: Maybe<Scalars['Float']>;
  empathy?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  senderName?: Maybe<Scalars['String']>;
  sentiment?: Maybe<Scalars['Float']>;
};

export type CustWebLinkRequestDTOInput = {
  company?: Maybe<Scalars['String']>;
  companyProfileId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  usersId?: Maybe<Scalars['Float']>;
};

export type CommentRequestDTOInput = {
  comment?: Maybe<Scalars['String']>;
  convID?: Maybe<Scalars['Float']>;
  endTime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  keyMomentId?: Maybe<Scalars['Float']>;
  mentions?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type VideoSharingHistoryDTO = {
  clipEndTimeInSeconds?: Maybe<Scalars['Int']>;
  clipStartTimeInSeconds?: Maybe<Scalars['Int']>;
  convId?: Maybe<Scalars['Float']>;
  convKeymomentId?: Maybe<Scalars['Float']>;
  fromUserId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  outputFileLocation?: Maybe<Scalars['String']>;
  outputTinyUrl?: Maybe<Scalars['String']>;
  sourceFileLocation?: Maybe<Scalars['String']>;
  toUserId?: Maybe<Scalars['Float']>;
};

export type VideoCutterRequestInput = {
  convId?: Maybe<Scalars['Float']>;
  inputFile?: Maybe<Scalars['String']>;
  keyMomentId?: Maybe<Scalars['Float']>;
  videoLength?: Maybe<Scalars['Int']>;
  videoStartTime?: Maybe<Scalars['Int']>;
};

export type ConvBookmarkRequestDTOInput = {
  convID?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  keyMomentId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  timeEnd?: Maybe<Scalars['Float']>;
  timeStart?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type AccountRequestDTOInput = {
  accountTeam?: Maybe<Scalars['Float']>;
  crmAccountId?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  sticker?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ConvAttendeeRequestDTOInput = {
  attendeeEmail?: Maybe<Scalars['String']>;
  attendeeName?: Maybe<Scalars['String']>;
  conv?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  employeeOrContactInd?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type KeywordCategRequestDTOInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  keywordCategName2?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type KeywordTagRequestDTOInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  keywordCateg?: Maybe<Scalars['Float']>;
  keywordTagVal?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type OpptyRequestDTOInput = {
  account?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  contact?: Maybe<Scalars['Float']>;
  crmOpptyId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  opptyAmount?: Maybe<Scalars['Float']>;
  opptyCloseDate?: Maybe<Scalars['String']>;
  opptyCreateDate?: Maybe<Scalars['String']>;
  opptySource?: Maybe<Scalars['String']>;
  opptyStage?: Maybe<Scalars['String']>;
  opptyStatus?: Maybe<Scalars['String']>;
  opptyTeam?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type OpptyTeamRequestDTOInput = {
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  usersId?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['String']>;
};

export type UserUiPreferenceResponseDto = {
  favoriteMeetings?: Maybe<AdvSearchResponse>;
  id?: Maybe<Scalars['Float']>;
  preferenceType?: Maybe<Scalars['String']>;
  savedJson?: Maybe<Scalars['String']>;
  uiPreferenceParamMap?: Maybe<Scalars['JSON']>;
  user?: Maybe<User>;
};

export type AdvSearchResponse = {
  searchResults?: Maybe<Array<Maybe<SearchResult>>>;
  totalCount?: Maybe<Scalars['Float']>;
};

export type SearchResult = {
  entities?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  resultCount?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserUiPreferenceRequestDtoInput = {
  id?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  preferenceType?: Maybe<Scalars['String']>;
  savedJson?: Maybe<Scalars['String']>;
  uiPreferenceParamMap?: Maybe<Scalars['JSON']>;
  userId?: Maybe<Scalars['Float']>;
};

export type EmpathyMomentRecommendationDTO = {
  convId?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  detectedBehaviour?: Maybe<Scalars['String']>;
  empathyMomentId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  originalUtterance?: Maybe<Scalars['String']>;
  recommendation?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  suggestedType?: Maybe<Scalars['String']>;
  suggestedUtterance?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EmpathyMomentRecommendationDTOInput = {
  convId?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  detectedBehaviour?: Maybe<Scalars['String']>;
  empathyMomentId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  originalUtterance?: Maybe<Scalars['String']>;
  recommendation?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  suggestedType?: Maybe<Scalars['String']>;
  suggestedUtterance?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type UserRequestDTOInput = {
  email?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  externalIdToken?: Maybe<Scalars['JSON']>;
  firstTimeLogin?: Maybe<Scalars['Boolean']>;
  firstname?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lastname?: Maybe<Scalars['String']>;
  managerId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  orgType?: Maybe<Scalars['String']>;
  qenabled?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Array<Maybe<Scalars['Float']>>>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  zoomToken?: Maybe<Scalars['String']>;
};

export type TeamAccountUsersStat = {
  account?: Maybe<AccountResponseDTO>;
  comments?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  conversations?: Maybe<Array<Maybe<ConversationRequest>>>;
  oppties?: Maybe<Array<Maybe<OpptyDTO>>>;
  usersStats?: Maybe<Array<Maybe<TeamUsersStat>>>;
};

export type QUsageUserPageVisitDto = {
  avgUsageTime?: Maybe<Scalars['Float']>;
  daysActive?: Maybe<Scalars['Int']>;
  lastVisit?: Maybe<Scalars['String']>;
  noOfVisits?: Maybe<Scalars['Int']>;
  usageTimePerDay?: Maybe<Scalars['Float']>;
  usageTrending?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type TeamsAccountOpptyUsersStat = {
  account?: Maybe<AccountResponseDTO>;
  deals?: Maybe<Array<Maybe<TeamOpptyUsersStat>>>;
};

export type UsalesConvsMeetingAttendeeInput = {
  payload: MeetingRequestInput;
  transcript: Scalars['String'];
};

export type MeetingRequestInput = {
  attendeeList?: Maybe<Array<Maybe<AttendeeRequestInput>>>;
  doNotProcess?: Maybe<Scalars['Boolean']>;
  externalMeetingId?: Maybe<Scalars['String']>;
  meetingStartTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  recordingStartTime?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AttendeeRequestInput = {
  attendeeType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AuthRequestInput = {
  scopes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AnalyticsCustomerPulseDealResponse = {
  accountId?: Maybe<ConvAccountDTO>;
  amount?: Maybe<Scalars['Float']>;
  opptyCloseDate?: Maybe<Scalars['String']>;
  opptyId?: Maybe<Scalars['Float']>;
  opptyStatus?: Maybe<Scalars['String']>;
  sentiment?: Maybe<Scalars['Float']>;
  trend?: Maybe<Array<Maybe<ConvEQAttr>>>;
};

export type ConvEQAttr = {
  accountId?: Maybe<Scalars['Float']>;
  convId?: Maybe<Scalars['Float']>;
  emotionalScore2?: Maybe<Scalars['String']>;
  meetingEndTime?: Maybe<Scalars['String']>;
  meetingEngagement?: Maybe<Scalars['Float']>;
  meetingSentiment?: Maybe<Scalars['Float']>;
  meetingStartTime?: Maybe<Scalars['String']>;
  opptyId?: Maybe<Scalars['Float']>;
};

export type OverallMeetingStatsResponse = {
  cvmResponse?: Maybe<Scalars['String']>;
  externallySharedCount?: Maybe<Scalars['Float']>;
  fullyProcessedCount?: Maybe<Scalars['Float']>;
  fullyProcessedVennData?: Maybe<Array<Maybe<VennDiagramData>>>;
  internalMeetingsCount?: Maybe<Scalars['Float']>;
  otherMeetingsCount?: Maybe<Scalars['Float']>;
  pausedOrRemovedCount?: Maybe<Scalars['Float']>;
  playedCount?: Maybe<Scalars['Float']>;
  reviewedCount?: Maybe<Scalars['Float']>;
};

export type VennDiagramData = {
  name?: Maybe<Scalars['String']>;
  sets?: Maybe<Array<Maybe<Scalars['String']>>>;
  value?: Maybe<Scalars['Int']>;
};

export type OverallQUsageResponse = {
  activeUsersCount?: Maybe<Scalars['Float']>;
  activeUsersTrend?: Maybe<Scalars['String']>;
  activeUsersTrendPercentage?: Maybe<Scalars['Float']>;
  authorizationTrend?: Maybe<Scalars['String']>;
  authorizationTrendPercentage?: Maybe<Scalars['Float']>;
  averageUsageTime?: Maybe<Scalars['Float']>;
  averageUsageTimeTrend?: Maybe<Scalars['String']>;
  averageUsageTimeTrendPercentage?: Maybe<Scalars['Float']>;
  averageVisits?: Maybe<Scalars['Float']>;
  averageVisitsTrend?: Maybe<Scalars['String']>;
  averageVisitsTrendPercentage?: Maybe<Scalars['Float']>;
  calendarAuthorizationCount?: Maybe<Scalars['Float']>;
  currentUsersCount?: Maybe<Scalars['Float']>;
  emailAuthorizationCount?: Maybe<Scalars['Float']>;
  gmailAuthorizationCount?: Maybe<Scalars['Float']>;
  googleCalendarAuthorizationCount?: Maybe<Scalars['Float']>;
  invitedUsersCount?: Maybe<Scalars['Float']>;
  invitedUsersTrend?: Maybe<Scalars['String']>;
  invitedUsersTrendPercentage?: Maybe<Scalars['Float']>;
  outlookAuthorizationCount?: Maybe<Scalars['Float']>;
  outlookCalendarAuthorizationCount?: Maybe<Scalars['Float']>;
  passwordResetRequiredUsersCount?: Maybe<Scalars['Int']>;
  realTimeUsersCount?: Maybe<Scalars['Float']>;
  realTimeUsersTrend?: Maybe<Scalars['String']>;
  realTimeUsersTrendPercentage?: Maybe<Scalars['Float']>;
  teamsAuthorizationCount?: Maybe<Scalars['Float']>;
  usersCount?: Maybe<Scalars['Float']>;
  usersTrend?: Maybe<Scalars['String']>;
  usersTrendPercentage?: Maybe<Scalars['Float']>;
  webexAuthorizationCount?: Maybe<Scalars['Float']>;
  zoomAuthorizationCount?: Maybe<Scalars['Float']>;
};

export type AccountActivityResponseDTO = {
  accountTeamID?: Maybe<IdNameDTO>;
  contacts?: Maybe<Array<Maybe<ContactActivity>>>;
  conversation?: Maybe<Scalars['Int']>;
  conversations?: Maybe<Array<Maybe<ConversationResponseDTO>>>;
  crmAccountId?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  oppties?: Maybe<Array<Maybe<Oppty2>>>;
  orgId?: Maybe<Scalars['Float']>;
  score?: Maybe<Array<Maybe<Score4>>>;
  source?: Maybe<Scalars['String']>;
  standing?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  sticker?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ConversationResponseDTO = {
  accountID?: Maybe<ConvAccountDTO>;
  aiViewVideoMediaLink?: Maybe<Scalars['String']>;
  attendees?: Maybe<Array<Maybe<Attendee>>>;
  audioMediaLink?: Maybe<Scalars['String']>;
  confidential?: Maybe<Scalars['Boolean']>;
  contentViewVideoMediaLink?: Maybe<Scalars['String']>;
  cvProcDone?: Maybe<Scalars['Boolean']>;
  dataFusionProcDone?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  entity?: Maybe<Scalars['String']>;
  externalConvId?: Maybe<Scalars['String']>;
  externalMeetingId?: Maybe<Scalars['String']>;
  galleryViewVideoMediaLink?: Maybe<Scalars['String']>;
  hostID?: Maybe<ConvUsersDTO>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keyMoments?: Maybe<Array<Maybe<KeyMoment>>>;
  lastChunk?: Maybe<Scalars['Float']>;
  meetingEndTime?: Maybe<Scalars['String']>;
  meetingStartTime?: Maybe<Scalars['String']>;
  meetingTopic?: Maybe<Scalars['String']>;
  opptyID?: Maybe<IdNameDTO>;
  orgId?: Maybe<Scalars['Float']>;
  processedFlag?: Maybe<Scalars['String']>;
  promises?: Maybe<Array<Maybe<ConvPromiseResponseDTO>>>;
  recordingStartTime?: Maybe<Scalars['String']>;
  score?: Maybe<Array<Maybe<Score4>>>;
  source?: Maybe<Scalars['String']>;
  speakerTimelineLink?: Maybe<Scalars['String']>;
  speakerViewVideoMediaLink?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  textKmProcDone?: Maybe<Scalars['Boolean']>;
  textMediaLink?: Maybe<Scalars['String']>;
  textSentProcDone?: Maybe<Scalars['Boolean']>;
  thumbnail?: Maybe<Scalars['String']>;
  tonalProcDone?: Maybe<Scalars['Boolean']>;
  transcriptLink?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  videoMediaLink?: Maybe<Scalars['String']>;
};

export type ConvUserStatDTO = {
  allMeetingCount?: Maybe<Scalars['Int']>;
  favoriteMeetingCount?: Maybe<Scalars['Int']>;
  meetingAttendedCount?: Maybe<Scalars['Int']>;
  meetingSharedWithMeCount?: Maybe<Scalars['Int']>;
};

export type DealSellerPerformanceResponse = {
  dealValueImpactedByQ?: Maybe<Scalars['Float']>;
  dealsImpactedByQ?: Maybe<Scalars['Int']>;
  lostAmount?: Maybe<Scalars['Float']>;
  lostCount?: Maybe<Scalars['Int']>;
  performance?: Maybe<Array<Maybe<Performance4>>>;
  wonAmount?: Maybe<Scalars['Float']>;
  wonCount?: Maybe<Scalars['Int']>;
};

export type Performance4 = {
  amount?: Maybe<Scalars['Float']>;
  dealCycle?: Maybe<Scalars['Float']>;
  lostDeals?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sellerPerformanceScore?: Maybe<Scalars['Float']>;
  sellerSentiment?: Maybe<Scalars['Float']>;
  sentiment?: Maybe<Scalars['Float']>;
  sentimentRange?: Maybe<Array<Maybe<Scalars['Float']>>>;
  wonDeals?: Maybe<Array<Maybe<Scalars['Float']>>>;
  wonPercentage?: Maybe<Scalars['Float']>;
};

export type DealActivitiesSummaryResponse = {
  activityDate?: Maybe<Scalars['String']>;
  attendees?: Maybe<Array<Maybe<Scalars['String']>>>;
  attendeesName?: Maybe<Array<Maybe<Scalars['String']>>>;
  convId?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type AccountDealResponse = {
  accountId?: Maybe<Scalars['Float']>;
  dealCount?: Maybe<Scalars['Int']>;
  deals?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type AccountDealRequestInput = {
  accounts?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DealTopicCoverageResponse = {
  oppty?: Maybe<DealSummaryResponse>;
  suggestions?: Maybe<Array<Maybe<Scalars['String']>>>;
  topics?: Maybe<Array<Maybe<DealTopicData>>>;
};

export type DealTopicData = {
  conversations?: Maybe<Array<Maybe<ConvTopicsResponse>>>;
  currentDealTopicCoveragePercentage?: Maybe<Scalars['Float']>;
  currentDealTopicCoverageValue?: Maybe<Scalars['Float']>;
  idealDealStageWiningPercentage?: Maybe<Scalars['Float']>;
  idealDealStageWiningValue?: Maybe<Scalars['Float']>;
  idealDealWinningPercentage?: Maybe<Scalars['Float']>;
  idealDealWinningValue?: Maybe<Scalars['Float']>;
  topic?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type ConvTopicsResponse = {
  convId?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  hostedBy?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  topic?: Maybe<Scalars['String']>;
  totalDuration?: Maybe<Scalars['Float']>;
};

export type EmlResponseDTO = {
  body?: Maybe<Scalars['String']>;
  contactId?: Maybe<Scalars['Float']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  sendDatetime?: Maybe<Scalars['String']>;
  sentiment?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  threadId?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EmpathyAndHesitationTurnsReportForConvList = {
  empathyAndHesitationTurnsReportMap?: Maybe<Scalars['JSON']>;
};

export type EmpathyAndHesitationSearchCriterionInput = {
  meetingEndTime?: Maybe<Scalars['String']>;
  meetingStartTime?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Float']>;
};

export type MediaClipStatsResponseDTO = {
  createdCount?: Maybe<Scalars['Float']>;
  stats?: Maybe<Array<Maybe<MediaClipStatsAttr>>>;
};

export type MediaClipStatsAttr = {
  convId?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  mediaClipId?: Maybe<Scalars['Float']>;
  meetingTopic?: Maybe<Scalars['String']>;
  shared?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

export type ConversationKeywordSearchResponse = {
  searchResult?: Maybe<SearchResult>;
};

export type MostSharedConvAttr = {
  accountId?: Maybe<Scalars['Float']>;
  accountName?: Maybe<Scalars['String']>;
  accountUrl?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  convId?: Maybe<Scalars['Float']>;
  convStatus?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  meetingSentiment?: Maybe<Scalars['Float']>;
  meetingStartTime?: Maybe<Scalars['String']>;
  meetingTopic?: Maybe<Scalars['String']>;
  opptyCloseDate?: Maybe<Scalars['String']>;
  opptyId?: Maybe<Scalars['Float']>;
  opptyName?: Maybe<Scalars['String']>;
};

export type MostViewedConvAttr = {
  accountId?: Maybe<Scalars['Float']>;
  accountName?: Maybe<Scalars['String']>;
  accountUrl?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  convId?: Maybe<Scalars['Float']>;
  convStatus?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  meetingSentiment?: Maybe<Scalars['Float']>;
  meetingStartTime?: Maybe<Scalars['String']>;
  meetingTopic?: Maybe<Scalars['String']>;
  opptyCloseDate?: Maybe<Scalars['String']>;
  opptyId?: Maybe<Scalars['Float']>;
  opptyName?: Maybe<Scalars['String']>;
};

export type PlaylistStatsResponseDTO = {
  createdCount?: Maybe<Scalars['Float']>;
  stats?: Maybe<Array<Maybe<PlaylistStatsAttr>>>;
};

export type PlaylistStatsAttr = {
  description?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  playlistId?: Maybe<Scalars['Float']>;
  shared?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Float']>;
};

export type PageVisitsDto = {
  noOfVisits?: Maybe<Scalars['Int']>;
  pageName?: Maybe<Scalars['String']>;
  qUsersUsage?: Maybe<Array<Maybe<QUsageUserPageVisitDto>>>;
  rank?: Maybe<Scalars['Int']>;
};

export type KeyphraseTotalCountAttrDTO = {
  keywordTagId?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  subtype?: Maybe<Scalars['String']>;
  tagvalue?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type KeyPhraseOccurenceResponseDTO = {
  companyAvgSentiment?: Maybe<Scalars['Float']>;
  companyKeyPhraseIdealValue?: Maybe<Scalars['Float']>;
  companyKeyPhraseTotalCount?: Maybe<Scalars['Float']>;
  keywordTagId?: Maybe<Scalars['Float']>;
  keywordTagVal?: Maybe<Scalars['String']>;
  subType?: Maybe<Scalars['String']>;
  teamAvgSentiment?: Maybe<Scalars['Float']>;
  teamKeyPhraseIdealValue?: Maybe<Scalars['Float']>;
  teamKeyPhraseTotalCount?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<KeyPhraseUser>>>;
};

export type KeyPhraseUser = {
  avgSentiment?: Maybe<Scalars['Float']>;
  conversationId?: Maybe<Array<Maybe<Scalars['Float']>>>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  occurences?: Maybe<Array<Maybe<KeyPhraseOccurence>>>;
  roleName?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type KeyPhraseOccurence = {
  conversationId?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  sentiment?: Maybe<Scalars['Float']>;
};

export type ESPopulateRequestInput = {
  daysToProcess?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['String']>;
};

export type MindTickleReqInput = {
  filter?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type CspViolationReqInput = {
  cspReport?: Maybe<CspReportInput>;
};

export type CspReportInput = {
  blockedUri?: Maybe<Scalars['String']>;
  columnNumber?: Maybe<Scalars['String']>;
  disposition?: Maybe<Scalars['String']>;
  documentUri?: Maybe<Scalars['String']>;
  effectiveDirective?: Maybe<Scalars['String']>;
  lineNumber?: Maybe<Scalars['String']>;
  originalPolicy?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  scriptSample?: Maybe<Scalars['String']>;
  sourceFile?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['String']>;
  violatedDirective?: Maybe<Scalars['String']>;
};

export type ESSearchInput = {
  criteria?: Maybe<Scalars['String']>;
};

export type ZoomMeetingWhitelistDTO = {
  authorizedForTeams?: Maybe<Scalars['Boolean']>;
  authorizedForWebex?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Float']>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  invokeBot?: Maybe<Scalars['Boolean']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  version?: Maybe<Scalars['String']>;
  zoomHostEmail?: Maybe<Scalars['String']>;
  zoomHostId?: Maybe<Scalars['String']>;
  zoomMeetingId?: Maybe<Scalars['String']>;
};

export type KeyMomentResponseDTO = {
  convKeyMoments?: Maybe<Array<Maybe<ConvKeyMoments2>>>;
};

export type ConvKeyMoments2 = {
  convID?: Maybe<ConversationDTO>;
  keyMoments6?: Maybe<Array<Maybe<KeyMoment>>>;
};

export type ConversationDTO = {
  accountId?: Maybe<Scalars['Float']>;
  aiViewVideoMediaLink?: Maybe<Scalars['String']>;
  audioMediaLink?: Maybe<Scalars['String']>;
  confidential?: Maybe<Scalars['Boolean']>;
  contentViewVideoMediaLink?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entity?: Maybe<Scalars['String']>;
  externalConvId?: Maybe<Scalars['String']>;
  externalMeetingId?: Maybe<Scalars['String']>;
  galleryViewVideoMediaLink?: Maybe<Scalars['String']>;
  hostId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  meetingEndTime?: Maybe<Scalars['String']>;
  meetingStartTime?: Maybe<Scalars['String']>;
  meetingTopic?: Maybe<Scalars['String']>;
  opptyId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  recordingStartTime?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  speakerTimelineLink?: Maybe<Scalars['String']>;
  speakerViewVideoMediaLink?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  textMediaLink?: Maybe<Scalars['String']>;
  transcriptLink?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  videoMediaLink?: Maybe<Scalars['String']>;
};

export type AccountContactSearchResponse = {
  account?: Maybe<Array<Maybe<AccountContactResponse>>>;
};

export type AccountContactResponse = {
  accountTeamID?: Maybe<IdNameDTO>;
  contact?: Maybe<Array<Maybe<ContactResponse>>>;
  crmAccountId?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  opptyTeam?: Maybe<OpptyTeam>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  sticker?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ContactSearchResponseDTO = {
  account?: Maybe<Account>;
  contacts?: Maybe<Array<Maybe<Contact>>>;
  insertBy?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  oppty?: Maybe<Oppty2>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  updateBy?: Maybe<Scalars['Float']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EmailSummaryResponseDTO = {
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  sendDatetime?: Maybe<Scalars['String']>;
  sentiment?: Maybe<Scalars['Float']>;
  subject?: Maybe<Scalars['String']>;
  threadId?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type CalenderEventSearchResponse = {
  searchResult?: Maybe<SearchResult>;
};

export type EmpathyChangeMomentResponseDTO = {
  convEmpathyChangeMoments?: Maybe<Array<Maybe<ConvEmpathyChangeMoments2>>>;
};

export type ConvEmpathyChangeMoments2 = {
  convID?: Maybe<ConversationDTO>;
  empathyChangeMoments?: Maybe<Array<Maybe<EmpathyChangeMoment>>>;
};

export type EmpathyChangeMoment = {
  averageEmpathy?: Maybe<Scalars['Float']>;
  convId?: Maybe<Scalars['Float']>;
  convStartOffset?: Maybe<Scalars['Float']>;
  empathyMomentRecs?: Maybe<Array<Maybe<EmpathyMomentRec>>>;
  momentId?: Maybe<Scalars['Float']>;
  polarity?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  usersId?: Maybe<Scalars['Float']>;
};

export type EmpathyMomentRec = {
  description?: Maybe<Scalars['String']>;
  detectedBehaviour?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  momentId?: Maybe<Scalars['Float']>;
  originalUtterance?: Maybe<Scalars['String']>;
  recommendation?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  suggestedType?: Maybe<Scalars['String']>;
  suggestedUtterance?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type TeamEmailActivityResponseDTO = {
  dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  emails?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type MessageRequestDTOInput = {
  clip?: Maybe<ClipRequestInput>;
  description?: Maybe<Scalars['String']>;
  emailList?: Maybe<Array<Maybe<Scalars['String']>>>;
  fullVideo?: Maybe<Scalars['Boolean']>;
  keyMomentText?: Maybe<Scalars['String']>;
  mediaClipId?: Maybe<Scalars['Float']>;
  meetingUrl?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ClipRequestInput = {
  convId?: Maybe<Scalars['Float']>;
  keymomentId?: Maybe<Scalars['Float']>;
  startInSeconds?: Maybe<Scalars['Float']>;
  stopInSeconds?: Maybe<Scalars['Float']>;
};

export type ShareClipDTOInput = {
  clipLength?: Maybe<Scalars['Int']>;
  clipStartTime?: Maybe<Scalars['Int']>;
  clipTitle?: Maybe<Scalars['String']>;
  convId?: Maybe<Scalars['Float']>;
  currtime?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['String']>;
  recipients?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ShareMeetingDTOInput = {
  convId?: Maybe<Scalars['Float']>;
  currtime?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Float']>;
  mediaClipId?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['String']>;
  playlistId?: Maybe<Scalars['Float']>;
  recipients?: Maybe<Array<Maybe<Scalars['String']>>>;
  videoSharingHistoryId?: Maybe<Scalars['Float']>;
};

export type ThreadCountResponse = {
  email?: Maybe<Scalars['String']>;
  threadCount?: Maybe<Scalars['String']>;
};

export type CalendarEventRequestDTOInput = {
  accountId?: Maybe<Scalars['Float']>;
  botInstrFromCalendar?: Maybe<Scalars['Boolean']>;
  calUid?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  opptyId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ConversationDTOInput = {
  accountId?: Maybe<Scalars['Float']>;
  aiViewVideoMediaLink?: Maybe<Scalars['String']>;
  audioMediaLink?: Maybe<Scalars['String']>;
  confidential?: Maybe<Scalars['Boolean']>;
  contentViewVideoMediaLink?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entity?: Maybe<Scalars['String']>;
  externalConvId?: Maybe<Scalars['String']>;
  externalMeetingId?: Maybe<Scalars['String']>;
  galleryViewVideoMediaLink?: Maybe<Scalars['String']>;
  hostId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  meetingEndTime?: Maybe<Scalars['String']>;
  meetingStartTime?: Maybe<Scalars['String']>;
  meetingTopic?: Maybe<Scalars['String']>;
  opptyId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  recordingStartTime?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  speakerTimelineLink?: Maybe<Scalars['String']>;
  speakerViewVideoMediaLink?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  textMediaLink?: Maybe<Scalars['String']>;
  transcriptLink?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  videoMediaLink?: Maybe<Scalars['String']>;
};

export type ConvKeyMomentRequestDTOInput = {
  contentImages?: Maybe<Scalars['String']>;
  conversation?: Maybe<Scalars['Float']>;
  downVote?: Maybe<Scalars['Float']>;
  downVoteUser?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  keywordTagId1?: Maybe<Scalars['Float']>;
  keywordTagId2?: Maybe<Scalars['Float']>;
  keywordTagId3?: Maybe<Scalars['Float']>;
  keywordTagId4?: Maybe<Scalars['Float']>;
  kmEndTime?: Maybe<Scalars['String']>;
  kmEndUtteranceId?: Maybe<Scalars['Float']>;
  kmStartTime?: Maybe<Scalars['String']>;
  kmStartUtteranceId?: Maybe<Scalars['Float']>;
  polarity?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  startTime?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  upVote?: Maybe<Scalars['Float']>;
  upVoteUser?: Maybe<Scalars['String']>;
};

export type UserDelegateRequestDTOInput = {
  proxyOwner?: Maybe<Scalars['Float']>;
  proxyUsers?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ZoomMeetingWhitelistRequestInput = {
  meetingWhiteLists?: Maybe<Array<Maybe<MeetingWhiteListInput>>>;
};

export type MeetingWhiteListInput = {
  invokeBot?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['Float']>;
};

export type UsalesConvsExternalMeetingInput = {
  file: Scalars['String'];
  payload: MeetingRequestInput;
  transcript?: Maybe<Scalars['String']>;
};

export type PlaylistRequestDTOInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type PlaylistParamRequestDTOInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  playlistId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type MediaClipRequestDTOInput = {
  convId?: Maybe<Scalars['Float']>;
  convKeymomentId?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  transcript?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['String']>;
};

export type MediaClipParamRequestDTOInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  mediaClipId?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ConvPromiseRequestDTOInput = {
  actionStatus?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  convId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  promiseEndTime?: Maybe<Scalars['String']>;
  promiseNextAction?: Maybe<Scalars['String']>;
  promiseStartTime?: Maybe<Scalars['String']>;
  promiseText?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['String']>;
  speaker?: Maybe<Scalars['String']>;
  speakerUsersId?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ConvParamResponseDTO = {
  agentSpoken?: Maybe<Scalars['String']>;
  convId?: Maybe<Scalars['Float']>;
  custSpoken?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Float']>;
  engagement?: Maybe<Scalars['String']>;
  externalMeetingId?: Maybe<Scalars['String']>;
  frame?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  introVideoMediaLink?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  performance?: Maybe<Scalars['String']>;
  probability?: Maybe<Scalars['String']>;
  questions?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['String']>;
  sentiment?: Maybe<Scalars['String']>;
  silences?: Maybe<Scalars['String']>;
  spoken?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ConvParamRequestDTOInput = {
  agentSpoken?: Maybe<Scalars['String']>;
  convId?: Maybe<Scalars['Float']>;
  custSpoken?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Float']>;
  engagement?: Maybe<Scalars['String']>;
  externalMeetingId?: Maybe<Scalars['String']>;
  frame?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  introVideoMediaLink?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['Float']>;
  performance?: Maybe<Scalars['String']>;
  probability?: Maybe<Scalars['String']>;
  questions?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['String']>;
  sentiment?: Maybe<Scalars['String']>;
  silences?: Maybe<Scalars['String']>;
  spoken?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type CompanyParamRequestDTOInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type CompanyProfileKeywordCategRelDTO = {
  companyProfileId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keywordCategId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
};

export type CompanyProfileKeywordCategRelDTOInput = {
  companyProfileId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keywordCategId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
};

export type ConfigPropRequestDTOInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  setId?: Maybe<Scalars['Float']>;
  setName?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  KeyPhraseExpertResponseDTO: ResolverTypeWrapper<KeyPhraseExpertResponseDTO>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AccountResponseDTO: ResolverTypeWrapper<AccountResponseDTO>;
  IdNameDTO: ResolverTypeWrapper<IdNameDTO>;
  ContactActivity: ResolverTypeWrapper<ContactActivity>;
  Conversation2: ResolverTypeWrapper<Conversation2>;
  ConversationData: ResolverTypeWrapper<ConversationData>;
  Score4: ResolverTypeWrapper<Score4>;
  ConversationRequest: ResolverTypeWrapper<ConversationRequest>;
  ConvAccountDTO: ResolverTypeWrapper<ConvAccountDTO>;
  Attendee: ResolverTypeWrapper<Attendee>;
  AttendeeMetric: ResolverTypeWrapper<AttendeeMetric>;
  Type13: Type13;
  UniScore: ResolverTypeWrapper<UniScore>;
  Trends: ResolverTypeWrapper<Trends>;
  Type12: Type12;
  ConvUsersDTO: ResolverTypeWrapper<ConvUsersDTO>;
  KeyMoment: ResolverTypeWrapper<KeyMoment>;
  ConvBookmarkResponseDTO: ResolverTypeWrapper<ConvBookmarkResponseDTO>;
  ConvDTO: ResolverTypeWrapper<ConvDTO>;
  KeyCategory: KeyCategory;
  KeyMomentText: ResolverTypeWrapper<KeyMomentText>;
  KeyTag: ResolverTypeWrapper<KeyTag>;
  ConvPromiseResponseDTO: ResolverTypeWrapper<ConvPromiseResponseDTO>;
  Oppty2: ResolverTypeWrapper<Oppty2>;
  Account: ResolverTypeWrapper<Account>;
  MeetingMetadata: ResolverTypeWrapper<MeetingMetadata>;
  Contact: ResolverTypeWrapper<Contact>;
  MeetingMetadataParam: ResolverTypeWrapper<MeetingMetadataParam>;
  OpptyContactRel: ResolverTypeWrapper<OpptyContactRel>;
  OpptyTeam: ResolverTypeWrapper<OpptyTeam>;
  OpptyTeamParam: ResolverTypeWrapper<OpptyTeamParam>;
  Users2: ResolverTypeWrapper<Users2>;
  Alert: ResolverTypeWrapper<Alert>;
  CustomerDomainWhiteList2: ResolverTypeWrapper<CustomerDomainWhiteList2>;
  CustomerDomainWhiteListParam: ResolverTypeWrapper<CustomerDomainWhiteListParam>;
  AccountTeam: ResolverTypeWrapper<AccountTeam>;
  AccountTeamParam: ResolverTypeWrapper<AccountTeamParam>;
  UsersRoleRel: ResolverTypeWrapper<UsersRoleRel>;
  UserUiPreference: ResolverTypeWrapper<UserUiPreference>;
  UserUiPreferenceParam: ResolverTypeWrapper<UserUiPreferenceParam>;
  OpptyParam: ResolverTypeWrapper<OpptyParam>;
  OpptyDTO: ResolverTypeWrapper<OpptyDTO>;
  AccountTeamResponse: ResolverTypeWrapper<AccountTeamResponse>;
  AccountTeamDTO: ResolverTypeWrapper<AccountTeamDTO>;
  AggrConvMetrics: ResolverTypeWrapper<AggrConvMetrics>;
  AlertResponseDTO: ResolverTypeWrapper<AlertResponseDTO>;
  User: ResolverTypeWrapper<User>;
  CompanyProfileDTO: ResolverTypeWrapper<CompanyProfileDTO>;
  UserManagerDTO: ResolverTypeWrapper<UserManagerDTO>;
  CompanyParamResponseDTO: ResolverTypeWrapper<CompanyParamResponseDTO>;
  ConfigPropResponseDTO: ResolverTypeWrapper<ConfigPropResponseDTO>;
  ConversationAttendeesResponse: ResolverTypeWrapper<ConversationAttendeesResponse>;
  CommentResponseDTO: ResolverTypeWrapper<CommentResponseDTO>;
  KeywordCategResponseDTO: ResolverTypeWrapper<KeywordCategResponseDTO>;
  KeywordTagResponseDTO: ResolverTypeWrapper<KeywordTagResponseDTO>;
  CompanySlideFirstResponse: ResolverTypeWrapper<CompanySlideFirstResponse>;
  SlideFirst: ResolverTypeWrapper<SlideFirst>;
  ContactMetricsResponse: ResolverTypeWrapper<ContactMetricsResponse>;
  ContactMethodDTO: ResolverTypeWrapper<ContactMethodDTO>;
  ContactMethodParam: ResolverTypeWrapper<ContactMethodParam>;
  ContactMethod: ResolverTypeWrapper<ContactMethod>;
  ConvAttendeeResponseDTO: ResolverTypeWrapper<ConvAttendeeResponseDTO>;
  ConvMetricsResponse: ResolverTypeWrapper<ConvMetricsResponse>;
  ConversationAttributionLogRsp: ResolverTypeWrapper<ConversationAttributionLogRsp>;
  AccountPromisesResponseDTO: ResolverTypeWrapper<AccountPromisesResponseDTO>;
  Promise: ResolverTypeWrapper<Promise>;
  ConvInfo: ResolverTypeWrapper<ConvInfo>;
  DealInfo: ResolverTypeWrapper<DealInfo>;
  ConvTopicEpisodeResponseDTO: ResolverTypeWrapper<ConvTopicEpisodeResponseDTO>;
  ConvEQResponseDTO: ResolverTypeWrapper<ConvEQResponseDTO>;
  ConversationDetailResponse: ResolverTypeWrapper<ConversationDetailResponse>;
  DealAccount: ResolverTypeWrapper<DealAccount>;
  ConvNextAction: ResolverTypeWrapper<ConvNextAction>;
  DealSummaryDetailResponse: ResolverTypeWrapper<DealSummaryDetailResponse>;
  UserActivity: ResolverTypeWrapper<UserActivity>;
  DealOppty: ResolverTypeWrapper<DealOppty>;
  ConvoStatResponse: ResolverTypeWrapper<ConvoStatResponse>;
  ConvoStats: ResolverTypeWrapper<ConvoStats>;
  CurrentEQForOpptyResponse: ResolverTypeWrapper<CurrentEQForOpptyResponse>;
  DealDetailResponse: ResolverTypeWrapper<DealDetailResponse>;
  DealSearchResult: ResolverTypeWrapper<DealSearchResult>;
  DealEntity: ResolverTypeWrapper<DealEntity>;
  DealData: ResolverTypeWrapper<DealData>;
  AccountOpptyEQResponseDTO: ResolverTypeWrapper<AccountOpptyEQResponseDTO>;
  OpptyRisk: OpptyRisk;
  DealNextAction: ResolverTypeWrapper<DealNextAction>;
  CustWebLinkResponseDTO: ResolverTypeWrapper<CustWebLinkResponseDTO>;
  DealSummaryTrendResponse: ResolverTypeWrapper<DealSummaryTrendResponse>;
  DealConvoStat: ResolverTypeWrapper<DealConvoStat>;
  Stages: ResolverTypeWrapper<Stages>;
  DealStat: ResolverTypeWrapper<DealStat>;
  DealSummaryResponse: ResolverTypeWrapper<DealSummaryResponse>;
  Diarization: ResolverTypeWrapper<Diarization>;
  Task: ResolverTypeWrapper<Task>;
  Option: ResolverTypeWrapper<Option>;
  EmlEqResponseDTO: ResolverTypeWrapper<EmlEqResponseDTO>;
  EmlObjResponseDTO: ResolverTypeWrapper<EmlObjResponseDTO>;
  EmlBody2: ResolverTypeWrapper<EmlBody2>;
  EmlObj: ResolverTypeWrapper<EmlObj>;
  EmlEq: ResolverTypeWrapper<EmlEq>;
  EmlMetadata: ResolverTypeWrapper<EmlMetadata>;
  EmlMetadataParam: ResolverTypeWrapper<EmlMetadataParam>;
  EmlObjParam: ResolverTypeWrapper<EmlObjParam>;
  EmlBodyParam: ResolverTypeWrapper<EmlBodyParam>;
  EmpathyAndHesitationTurnsReport: ResolverTypeWrapper<EmpathyAndHesitationTurnsReport>;
  EmpathyChangeDetails: ResolverTypeWrapper<EmpathyChangeDetails>;
  HesitationChangeDetails: ResolverTypeWrapper<HesitationChangeDetails>;
  CalendarEvent: ResolverTypeWrapper<CalendarEvent>;
  CalendarEventAttendee: ResolverTypeWrapper<CalendarEventAttendee>;
  KeyPhraseResponse: ResolverTypeWrapper<KeyPhraseResponse>;
  TeamOpptyUsersStats: ResolverTypeWrapper<TeamOpptyUsersStats>;
  IdealConvEQ: ResolverTypeWrapper<IdealConvEQ>;
  TeamUsersStat: ResolverTypeWrapper<TeamUsersStat>;
  UsersStat: ResolverTypeWrapper<UsersStat>;
  TeamOpptyUsersStat: ResolverTypeWrapper<TeamOpptyUsersStat>;
  TeamUnattributedUsersStat: ResolverTypeWrapper<TeamUnattributedUsersStat>;
  MediaClipResponseDTO: ResolverTypeWrapper<MediaClipResponseDTO>;
  ConvKeyMomentResponseDTO: ResolverTypeWrapper<ConvKeyMomentResponseDTO>;
  ConvOpptyDTO: ResolverTypeWrapper<ConvOpptyDTO>;
  MediaClipParamResponseDTO: ResolverTypeWrapper<MediaClipParamResponseDTO>;
  ConversationSummaryResponse: ResolverTypeWrapper<ConversationSummaryResponse>;
  Datum: ResolverTypeWrapper<Datum>;
  ConvAttendeeAttr: ResolverTypeWrapper<ConvAttendeeAttr>;
  Opportunity: ResolverTypeWrapper<Opportunity>;
  OpptyEqbyStageResponseDTO: ResolverTypeWrapper<OpptyEqbyStageResponseDTO>;
  OpptyTeamResponseDTO: ResolverTypeWrapper<OpptyTeamResponseDTO>;
  PlaylistResponseDTO: ResolverTypeWrapper<PlaylistResponseDTO>;
  PlaylistParamResponseDTO: ResolverTypeWrapper<PlaylistParamResponseDTO>;
  SharedMemberDTO: ResolverTypeWrapper<SharedMemberDTO>;
  ConvSharedViewData: ResolverTypeWrapper<ConvSharedViewData>;
  ConvSlideFirstResponse: ResolverTypeWrapper<ConvSlideFirstResponse>;
  SummaryReportDTO: ResolverTypeWrapper<SummaryReportDTO>;
  ConvTimeline: ResolverTypeWrapper<ConvTimeline>;
  TrendEQForOpptyResponse: ResolverTypeWrapper<TrendEQForOpptyResponse>;
  UserDelegateResponseDTO: ResolverTypeWrapper<UserDelegateResponseDTO>;
  ContactResponse: ResolverTypeWrapper<ContactResponse>;
  LastConv: ResolverTypeWrapper<LastConv>;
  NextConv: ResolverTypeWrapper<NextConv>;
  Mutation: ResolverTypeWrapper<{}>;
  PlaylistMediaClipRelRequestDTOInput: PlaylistMediaClipRelRequestDTOInput;
  LoginRequestInput: LoginRequestInput;
  KeyPhraseOccurenceContentResponseDTO: ResolverTypeWrapper<KeyPhraseOccurenceContentResponseDTO>;
  AdvSearchRequestInput: AdvSearchRequestInput;
  CriterionInput: CriterionInput;
  PaginationInput: PaginationInput;
  SortInput: SortInput;
  UsalesTimelineInput: UsalesTimelineInput;
  TimelineDataInput: TimelineDataInput;
  UserInput: UserInput;
  CompanyProfileDTOInput: CompanyProfileDTOInput;
  UserManagerDTOInput: UserManagerDTOInput;
  IdNameDTOInput: IdNameDTOInput;
  AlertRequestDTOInput: AlertRequestDTOInput;
  ConvTopicEpisodeRequestDTOInput: ConvTopicEpisodeRequestDTOInput;
  EmlEqRequestDTOInput: EmlEqRequestDTOInput;
  CustWebLinkRequestDTOInput: CustWebLinkRequestDTOInput;
  CommentRequestDTOInput: CommentRequestDTOInput;
  VideoSharingHistoryDTO: ResolverTypeWrapper<VideoSharingHistoryDTO>;
  VideoCutterRequestInput: VideoCutterRequestInput;
  ConvBookmarkRequestDTOInput: ConvBookmarkRequestDTOInput;
  AccountRequestDTOInput: AccountRequestDTOInput;
  ConvAttendeeRequestDTOInput: ConvAttendeeRequestDTOInput;
  KeywordCategRequestDTOInput: KeywordCategRequestDTOInput;
  KeywordTagRequestDTOInput: KeywordTagRequestDTOInput;
  OpptyRequestDTOInput: OpptyRequestDTOInput;
  OpptyTeamRequestDTOInput: OpptyTeamRequestDTOInput;
  UserUiPreferenceResponseDto: ResolverTypeWrapper<UserUiPreferenceResponseDto>;
  AdvSearchResponse: ResolverTypeWrapper<AdvSearchResponse>;
  SearchResult: ResolverTypeWrapper<SearchResult>;
  UserUiPreferenceRequestDtoInput: UserUiPreferenceRequestDtoInput;
  EmpathyMomentRecommendationDTO: ResolverTypeWrapper<EmpathyMomentRecommendationDTO>;
  EmpathyMomentRecommendationDTOInput: EmpathyMomentRecommendationDTOInput;
  UserRequestDTOInput: UserRequestDTOInput;
  TeamAccountUsersStat: ResolverTypeWrapper<TeamAccountUsersStat>;
  QUsageUserPageVisitDto: ResolverTypeWrapper<QUsageUserPageVisitDto>;
  TeamsAccountOpptyUsersStat: ResolverTypeWrapper<TeamsAccountOpptyUsersStat>;
  UsalesConvsMeetingAttendeeInput: UsalesConvsMeetingAttendeeInput;
  MeetingRequestInput: MeetingRequestInput;
  AttendeeRequestInput: AttendeeRequestInput;
  AuthRequestInput: AuthRequestInput;
  AnalyticsCustomerPulseDealResponse: ResolverTypeWrapper<AnalyticsCustomerPulseDealResponse>;
  ConvEQAttr: ResolverTypeWrapper<ConvEQAttr>;
  OverallMeetingStatsResponse: ResolverTypeWrapper<OverallMeetingStatsResponse>;
  VennDiagramData: ResolverTypeWrapper<VennDiagramData>;
  OverallQUsageResponse: ResolverTypeWrapper<OverallQUsageResponse>;
  AccountActivityResponseDTO: ResolverTypeWrapper<AccountActivityResponseDTO>;
  ConversationResponseDTO: ResolverTypeWrapper<ConversationResponseDTO>;
  ConvUserStatDTO: ResolverTypeWrapper<ConvUserStatDTO>;
  DealSellerPerformanceResponse: ResolverTypeWrapper<DealSellerPerformanceResponse>;
  Performance4: ResolverTypeWrapper<Performance4>;
  DealActivitiesSummaryResponse: ResolverTypeWrapper<DealActivitiesSummaryResponse>;
  AccountDealResponse: ResolverTypeWrapper<AccountDealResponse>;
  AccountDealRequestInput: AccountDealRequestInput;
  DealTopicCoverageResponse: ResolverTypeWrapper<DealTopicCoverageResponse>;
  DealTopicData: ResolverTypeWrapper<DealTopicData>;
  ConvTopicsResponse: ResolverTypeWrapper<ConvTopicsResponse>;
  EmlResponseDTO: ResolverTypeWrapper<EmlResponseDTO>;
  EmpathyAndHesitationTurnsReportForConvList: ResolverTypeWrapper<EmpathyAndHesitationTurnsReportForConvList>;
  EmpathyAndHesitationSearchCriterionInput: EmpathyAndHesitationSearchCriterionInput;
  MediaClipStatsResponseDTO: ResolverTypeWrapper<MediaClipStatsResponseDTO>;
  MediaClipStatsAttr: ResolverTypeWrapper<MediaClipStatsAttr>;
  ConversationKeywordSearchResponse: ResolverTypeWrapper<ConversationKeywordSearchResponse>;
  MostSharedConvAttr: ResolverTypeWrapper<MostSharedConvAttr>;
  MostViewedConvAttr: ResolverTypeWrapper<MostViewedConvAttr>;
  PlaylistStatsResponseDTO: ResolverTypeWrapper<PlaylistStatsResponseDTO>;
  PlaylistStatsAttr: ResolverTypeWrapper<PlaylistStatsAttr>;
  PageVisitsDto: ResolverTypeWrapper<PageVisitsDto>;
  KeyphraseTotalCountAttrDTO: ResolverTypeWrapper<KeyphraseTotalCountAttrDTO>;
  KeyPhraseOccurenceResponseDTO: ResolverTypeWrapper<KeyPhraseOccurenceResponseDTO>;
  KeyPhraseUser: ResolverTypeWrapper<KeyPhraseUser>;
  KeyPhraseOccurence: ResolverTypeWrapper<KeyPhraseOccurence>;
  ESPopulateRequestInput: ESPopulateRequestInput;
  MindTickleReqInput: MindTickleReqInput;
  CspViolationReqInput: CspViolationReqInput;
  CspReportInput: CspReportInput;
  ESSearchInput: ESSearchInput;
  ZoomMeetingWhitelistDTO: ResolverTypeWrapper<ZoomMeetingWhitelistDTO>;
  KeyMomentResponseDTO: ResolverTypeWrapper<KeyMomentResponseDTO>;
  ConvKeyMoments2: ResolverTypeWrapper<ConvKeyMoments2>;
  ConversationDTO: ResolverTypeWrapper<ConversationDTO>;
  AccountContactSearchResponse: ResolverTypeWrapper<AccountContactSearchResponse>;
  AccountContactResponse: ResolverTypeWrapper<AccountContactResponse>;
  ContactSearchResponseDTO: ResolverTypeWrapper<ContactSearchResponseDTO>;
  EmailSummaryResponseDTO: ResolverTypeWrapper<EmailSummaryResponseDTO>;
  CalenderEventSearchResponse: ResolverTypeWrapper<CalenderEventSearchResponse>;
  EmpathyChangeMomentResponseDTO: ResolverTypeWrapper<EmpathyChangeMomentResponseDTO>;
  ConvEmpathyChangeMoments2: ResolverTypeWrapper<ConvEmpathyChangeMoments2>;
  EmpathyChangeMoment: ResolverTypeWrapper<EmpathyChangeMoment>;
  EmpathyMomentRec: ResolverTypeWrapper<EmpathyMomentRec>;
  TeamEmailActivityResponseDTO: ResolverTypeWrapper<TeamEmailActivityResponseDTO>;
  MessageRequestDTOInput: MessageRequestDTOInput;
  ClipRequestInput: ClipRequestInput;
  ShareClipDTOInput: ShareClipDTOInput;
  ShareMeetingDTOInput: ShareMeetingDTOInput;
  ThreadCountResponse: ResolverTypeWrapper<ThreadCountResponse>;
  CalendarEventRequestDTOInput: CalendarEventRequestDTOInput;
  ConversationDTOInput: ConversationDTOInput;
  ConvKeyMomentRequestDTOInput: ConvKeyMomentRequestDTOInput;
  UserDelegateRequestDTOInput: UserDelegateRequestDTOInput;
  ZoomMeetingWhitelistRequestInput: ZoomMeetingWhitelistRequestInput;
  MeetingWhiteListInput: MeetingWhiteListInput;
  UsalesConvsExternalMeetingInput: UsalesConvsExternalMeetingInput;
  PlaylistRequestDTOInput: PlaylistRequestDTOInput;
  PlaylistParamRequestDTOInput: PlaylistParamRequestDTOInput;
  MediaClipRequestDTOInput: MediaClipRequestDTOInput;
  MediaClipParamRequestDTOInput: MediaClipParamRequestDTOInput;
  ConvPromiseRequestDTOInput: ConvPromiseRequestDTOInput;
  ConvParamResponseDTO: ResolverTypeWrapper<ConvParamResponseDTO>;
  ConvParamRequestDTOInput: ConvParamRequestDTOInput;
  CompanyParamRequestDTOInput: CompanyParamRequestDTOInput;
  CompanyProfileKeywordCategRelDTO: ResolverTypeWrapper<CompanyProfileKeywordCategRelDTO>;
  CompanyProfileKeywordCategRelDTOInput: CompanyProfileKeywordCategRelDTOInput;
  ConfigPropRequestDTOInput: ConfigPropRequestDTOInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  JSON: Scalars['JSON'];
  KeyPhraseExpertResponseDTO: KeyPhraseExpertResponseDTO;
  String: Scalars['String'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  AccountResponseDTO: AccountResponseDTO;
  IdNameDTO: IdNameDTO;
  ContactActivity: ContactActivity;
  Conversation2: Conversation2;
  ConversationData: ConversationData;
  Score4: Score4;
  ConversationRequest: ConversationRequest;
  ConvAccountDTO: ConvAccountDTO;
  Attendee: Attendee;
  AttendeeMetric: AttendeeMetric;
  UniScore: UniScore;
  Trends: Trends;
  ConvUsersDTO: ConvUsersDTO;
  KeyMoment: KeyMoment;
  ConvBookmarkResponseDTO: ConvBookmarkResponseDTO;
  ConvDTO: ConvDTO;
  KeyMomentText: KeyMomentText;
  KeyTag: KeyTag;
  ConvPromiseResponseDTO: ConvPromiseResponseDTO;
  Oppty2: Oppty2;
  Account: Account;
  MeetingMetadata: MeetingMetadata;
  Contact: Contact;
  MeetingMetadataParam: MeetingMetadataParam;
  OpptyContactRel: OpptyContactRel;
  OpptyTeam: OpptyTeam;
  OpptyTeamParam: OpptyTeamParam;
  Users2: Users2;
  Alert: Alert;
  CustomerDomainWhiteList2: CustomerDomainWhiteList2;
  CustomerDomainWhiteListParam: CustomerDomainWhiteListParam;
  AccountTeam: AccountTeam;
  AccountTeamParam: AccountTeamParam;
  UsersRoleRel: UsersRoleRel;
  UserUiPreference: UserUiPreference;
  UserUiPreferenceParam: UserUiPreferenceParam;
  OpptyParam: OpptyParam;
  OpptyDTO: OpptyDTO;
  AccountTeamResponse: AccountTeamResponse;
  AccountTeamDTO: AccountTeamDTO;
  AggrConvMetrics: AggrConvMetrics;
  AlertResponseDTO: AlertResponseDTO;
  User: User;
  CompanyProfileDTO: CompanyProfileDTO;
  UserManagerDTO: UserManagerDTO;
  CompanyParamResponseDTO: CompanyParamResponseDTO;
  ConfigPropResponseDTO: ConfigPropResponseDTO;
  ConversationAttendeesResponse: ConversationAttendeesResponse;
  CommentResponseDTO: CommentResponseDTO;
  KeywordCategResponseDTO: KeywordCategResponseDTO;
  KeywordTagResponseDTO: KeywordTagResponseDTO;
  CompanySlideFirstResponse: CompanySlideFirstResponse;
  SlideFirst: SlideFirst;
  ContactMetricsResponse: ContactMetricsResponse;
  ContactMethodDTO: ContactMethodDTO;
  ContactMethodParam: ContactMethodParam;
  ContactMethod: ContactMethod;
  ConvAttendeeResponseDTO: ConvAttendeeResponseDTO;
  ConvMetricsResponse: ConvMetricsResponse;
  ConversationAttributionLogRsp: ConversationAttributionLogRsp;
  AccountPromisesResponseDTO: AccountPromisesResponseDTO;
  Promise: Promise;
  ConvInfo: ConvInfo;
  DealInfo: DealInfo;
  ConvTopicEpisodeResponseDTO: ConvTopicEpisodeResponseDTO;
  ConvEQResponseDTO: ConvEQResponseDTO;
  ConversationDetailResponse: ConversationDetailResponse;
  DealAccount: DealAccount;
  ConvNextAction: ConvNextAction;
  DealSummaryDetailResponse: DealSummaryDetailResponse;
  UserActivity: UserActivity;
  DealOppty: DealOppty;
  ConvoStatResponse: ConvoStatResponse;
  ConvoStats: ConvoStats;
  CurrentEQForOpptyResponse: CurrentEQForOpptyResponse;
  DealDetailResponse: DealDetailResponse;
  DealSearchResult: DealSearchResult;
  DealEntity: DealEntity;
  DealData: DealData;
  AccountOpptyEQResponseDTO: AccountOpptyEQResponseDTO;
  DealNextAction: DealNextAction;
  CustWebLinkResponseDTO: CustWebLinkResponseDTO;
  DealSummaryTrendResponse: DealSummaryTrendResponse;
  DealConvoStat: DealConvoStat;
  Stages: Stages;
  DealStat: DealStat;
  DealSummaryResponse: DealSummaryResponse;
  Diarization: Diarization;
  Task: Task;
  Option: Option;
  EmlEqResponseDTO: EmlEqResponseDTO;
  EmlObjResponseDTO: EmlObjResponseDTO;
  EmlBody2: EmlBody2;
  EmlObj: EmlObj;
  EmlEq: EmlEq;
  EmlMetadata: EmlMetadata;
  EmlMetadataParam: EmlMetadataParam;
  EmlObjParam: EmlObjParam;
  EmlBodyParam: EmlBodyParam;
  EmpathyAndHesitationTurnsReport: EmpathyAndHesitationTurnsReport;
  EmpathyChangeDetails: EmpathyChangeDetails;
  HesitationChangeDetails: HesitationChangeDetails;
  CalendarEvent: CalendarEvent;
  CalendarEventAttendee: CalendarEventAttendee;
  KeyPhraseResponse: KeyPhraseResponse;
  TeamOpptyUsersStats: TeamOpptyUsersStats;
  IdealConvEQ: IdealConvEQ;
  TeamUsersStat: TeamUsersStat;
  UsersStat: UsersStat;
  TeamOpptyUsersStat: TeamOpptyUsersStat;
  TeamUnattributedUsersStat: TeamUnattributedUsersStat;
  MediaClipResponseDTO: MediaClipResponseDTO;
  ConvKeyMomentResponseDTO: ConvKeyMomentResponseDTO;
  ConvOpptyDTO: ConvOpptyDTO;
  MediaClipParamResponseDTO: MediaClipParamResponseDTO;
  ConversationSummaryResponse: ConversationSummaryResponse;
  Datum: Datum;
  ConvAttendeeAttr: ConvAttendeeAttr;
  Opportunity: Opportunity;
  OpptyEqbyStageResponseDTO: OpptyEqbyStageResponseDTO;
  OpptyTeamResponseDTO: OpptyTeamResponseDTO;
  PlaylistResponseDTO: PlaylistResponseDTO;
  PlaylistParamResponseDTO: PlaylistParamResponseDTO;
  SharedMemberDTO: SharedMemberDTO;
  ConvSharedViewData: ConvSharedViewData;
  ConvSlideFirstResponse: ConvSlideFirstResponse;
  SummaryReportDTO: SummaryReportDTO;
  ConvTimeline: ConvTimeline;
  TrendEQForOpptyResponse: TrendEQForOpptyResponse;
  UserDelegateResponseDTO: UserDelegateResponseDTO;
  ContactResponse: ContactResponse;
  LastConv: LastConv;
  NextConv: NextConv;
  Mutation: {};
  PlaylistMediaClipRelRequestDTOInput: PlaylistMediaClipRelRequestDTOInput;
  LoginRequestInput: LoginRequestInput;
  KeyPhraseOccurenceContentResponseDTO: KeyPhraseOccurenceContentResponseDTO;
  AdvSearchRequestInput: AdvSearchRequestInput;
  CriterionInput: CriterionInput;
  PaginationInput: PaginationInput;
  SortInput: SortInput;
  UsalesTimelineInput: UsalesTimelineInput;
  TimelineDataInput: TimelineDataInput;
  UserInput: UserInput;
  CompanyProfileDTOInput: CompanyProfileDTOInput;
  UserManagerDTOInput: UserManagerDTOInput;
  IdNameDTOInput: IdNameDTOInput;
  AlertRequestDTOInput: AlertRequestDTOInput;
  ConvTopicEpisodeRequestDTOInput: ConvTopicEpisodeRequestDTOInput;
  EmlEqRequestDTOInput: EmlEqRequestDTOInput;
  CustWebLinkRequestDTOInput: CustWebLinkRequestDTOInput;
  CommentRequestDTOInput: CommentRequestDTOInput;
  VideoSharingHistoryDTO: VideoSharingHistoryDTO;
  VideoCutterRequestInput: VideoCutterRequestInput;
  ConvBookmarkRequestDTOInput: ConvBookmarkRequestDTOInput;
  AccountRequestDTOInput: AccountRequestDTOInput;
  ConvAttendeeRequestDTOInput: ConvAttendeeRequestDTOInput;
  KeywordCategRequestDTOInput: KeywordCategRequestDTOInput;
  KeywordTagRequestDTOInput: KeywordTagRequestDTOInput;
  OpptyRequestDTOInput: OpptyRequestDTOInput;
  OpptyTeamRequestDTOInput: OpptyTeamRequestDTOInput;
  UserUiPreferenceResponseDto: UserUiPreferenceResponseDto;
  AdvSearchResponse: AdvSearchResponse;
  SearchResult: SearchResult;
  UserUiPreferenceRequestDtoInput: UserUiPreferenceRequestDtoInput;
  EmpathyMomentRecommendationDTO: EmpathyMomentRecommendationDTO;
  EmpathyMomentRecommendationDTOInput: EmpathyMomentRecommendationDTOInput;
  UserRequestDTOInput: UserRequestDTOInput;
  TeamAccountUsersStat: TeamAccountUsersStat;
  QUsageUserPageVisitDto: QUsageUserPageVisitDto;
  TeamsAccountOpptyUsersStat: TeamsAccountOpptyUsersStat;
  UsalesConvsMeetingAttendeeInput: UsalesConvsMeetingAttendeeInput;
  MeetingRequestInput: MeetingRequestInput;
  AttendeeRequestInput: AttendeeRequestInput;
  AuthRequestInput: AuthRequestInput;
  AnalyticsCustomerPulseDealResponse: AnalyticsCustomerPulseDealResponse;
  ConvEQAttr: ConvEQAttr;
  OverallMeetingStatsResponse: OverallMeetingStatsResponse;
  VennDiagramData: VennDiagramData;
  OverallQUsageResponse: OverallQUsageResponse;
  AccountActivityResponseDTO: AccountActivityResponseDTO;
  ConversationResponseDTO: ConversationResponseDTO;
  ConvUserStatDTO: ConvUserStatDTO;
  DealSellerPerformanceResponse: DealSellerPerformanceResponse;
  Performance4: Performance4;
  DealActivitiesSummaryResponse: DealActivitiesSummaryResponse;
  AccountDealResponse: AccountDealResponse;
  AccountDealRequestInput: AccountDealRequestInput;
  DealTopicCoverageResponse: DealTopicCoverageResponse;
  DealTopicData: DealTopicData;
  ConvTopicsResponse: ConvTopicsResponse;
  EmlResponseDTO: EmlResponseDTO;
  EmpathyAndHesitationTurnsReportForConvList: EmpathyAndHesitationTurnsReportForConvList;
  EmpathyAndHesitationSearchCriterionInput: EmpathyAndHesitationSearchCriterionInput;
  MediaClipStatsResponseDTO: MediaClipStatsResponseDTO;
  MediaClipStatsAttr: MediaClipStatsAttr;
  ConversationKeywordSearchResponse: ConversationKeywordSearchResponse;
  MostSharedConvAttr: MostSharedConvAttr;
  MostViewedConvAttr: MostViewedConvAttr;
  PlaylistStatsResponseDTO: PlaylistStatsResponseDTO;
  PlaylistStatsAttr: PlaylistStatsAttr;
  PageVisitsDto: PageVisitsDto;
  KeyphraseTotalCountAttrDTO: KeyphraseTotalCountAttrDTO;
  KeyPhraseOccurenceResponseDTO: KeyPhraseOccurenceResponseDTO;
  KeyPhraseUser: KeyPhraseUser;
  KeyPhraseOccurence: KeyPhraseOccurence;
  ESPopulateRequestInput: ESPopulateRequestInput;
  MindTickleReqInput: MindTickleReqInput;
  CspViolationReqInput: CspViolationReqInput;
  CspReportInput: CspReportInput;
  ESSearchInput: ESSearchInput;
  ZoomMeetingWhitelistDTO: ZoomMeetingWhitelistDTO;
  KeyMomentResponseDTO: KeyMomentResponseDTO;
  ConvKeyMoments2: ConvKeyMoments2;
  ConversationDTO: ConversationDTO;
  AccountContactSearchResponse: AccountContactSearchResponse;
  AccountContactResponse: AccountContactResponse;
  ContactSearchResponseDTO: ContactSearchResponseDTO;
  EmailSummaryResponseDTO: EmailSummaryResponseDTO;
  CalenderEventSearchResponse: CalenderEventSearchResponse;
  EmpathyChangeMomentResponseDTO: EmpathyChangeMomentResponseDTO;
  ConvEmpathyChangeMoments2: ConvEmpathyChangeMoments2;
  EmpathyChangeMoment: EmpathyChangeMoment;
  EmpathyMomentRec: EmpathyMomentRec;
  TeamEmailActivityResponseDTO: TeamEmailActivityResponseDTO;
  MessageRequestDTOInput: MessageRequestDTOInput;
  ClipRequestInput: ClipRequestInput;
  ShareClipDTOInput: ShareClipDTOInput;
  ShareMeetingDTOInput: ShareMeetingDTOInput;
  ThreadCountResponse: ThreadCountResponse;
  CalendarEventRequestDTOInput: CalendarEventRequestDTOInput;
  ConversationDTOInput: ConversationDTOInput;
  ConvKeyMomentRequestDTOInput: ConvKeyMomentRequestDTOInput;
  UserDelegateRequestDTOInput: UserDelegateRequestDTOInput;
  ZoomMeetingWhitelistRequestInput: ZoomMeetingWhitelistRequestInput;
  MeetingWhiteListInput: MeetingWhiteListInput;
  UsalesConvsExternalMeetingInput: UsalesConvsExternalMeetingInput;
  PlaylistRequestDTOInput: PlaylistRequestDTOInput;
  PlaylistParamRequestDTOInput: PlaylistParamRequestDTOInput;
  MediaClipRequestDTOInput: MediaClipRequestDTOInput;
  MediaClipParamRequestDTOInput: MediaClipParamRequestDTOInput;
  ConvPromiseRequestDTOInput: ConvPromiseRequestDTOInput;
  ConvParamResponseDTO: ConvParamResponseDTO;
  ConvParamRequestDTOInput: ConvParamRequestDTOInput;
  CompanyParamRequestDTOInput: CompanyParamRequestDTOInput;
  CompanyProfileKeywordCategRelDTO: CompanyProfileKeywordCategRelDTO;
  CompanyProfileKeywordCategRelDTOInput: CompanyProfileKeywordCategRelDTOInput;
  ConfigPropRequestDTOInput: ConfigPropRequestDTOInput;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  accessTokenForAuthenticatedUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fetchKeyPhraseExpert?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyPhraseExpertResponseDTO']>>>, ParentType, ContextType, RequireFields<QueryfetchKeyPhraseExpertArgs, 'tagId'>>;
  generateAccessToken?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  generateRefreshToken?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  getAccessConsent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  getAccountById?: Resolver<Maybe<ResolversTypes['AccountResponseDTO']>, ParentType, ContextType, RequireFields<QuerygetAccountByIdArgs, 'id'>>;
  getAccountOpptyByAccount?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpptyDTO']>>>, ParentType, ContextType, RequireFields<QuerygetAccountOpptyByAccountArgs, 'id'>>;
  getAccountTeamByAccount?: Resolver<Maybe<ResolversTypes['AccountTeamResponse']>, ParentType, ContextType, RequireFields<QuerygetAccountTeamByAccountArgs, 'id'>>;
  getAccounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetAccountsArgs, never>>;
  getAggrConvMetrics?: Resolver<Maybe<Array<Maybe<ResolversTypes['AggrConvMetrics']>>>, ParentType, ContextType, RequireFields<QuerygetAggrConvMetricsArgs, 'id'>>;
  getAggrConvMetricsByParticipant?: Resolver<Maybe<Array<Maybe<ResolversTypes['AggrConvMetrics']>>>, ParentType, ContextType, RequireFields<QuerygetAggrConvMetricsByParticipantArgs, 'id' | 'participantId'>>;
  getAlertById?: Resolver<Maybe<ResolversTypes['AlertResponseDTO']>, ParentType, ContextType, RequireFields<QuerygetAlertByIdArgs, 'id'>>;
  getAlertByUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['AlertResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetAlertByUserArgs, never>>;
  getAllCompanyParams?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompanyParamResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetAllCompanyParamsArgs, never>>;
  getAllCurrentSystemProp?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigPropResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetAllCurrentSystemPropArgs, never>>;
  getAttendees?: Resolver<Maybe<ResolversTypes['ConversationAttendeesResponse']>, ParentType, ContextType, RequireFields<QuerygetAttendeesArgs, 'id'>>;
  getAuthCodeAndGenerateToken1?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  getAuthUrl3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getAuthUrl4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getAuthUrl5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getAuthUrl6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getBookmarksByConvId?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvBookmarkResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetBookmarksByConvIdArgs, 'convId'>>;
  getBookmarksByConvKeyMomentId?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvBookmarkResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetBookmarksByConvKeyMomentIdArgs, 'convKeyMomentId'>>;
  getCommentByConvId?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetCommentByConvIdArgs, 'convId'>>;
  getCommentByConvKeyMomentId?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetCommentByConvKeyMomentIdArgs, 'convKeyMomentId'>>;
  getCompanyCategAndSubCateg?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeywordCategResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetCompanyCategAndSubCategArgs, never>>;
  getCompanyProfile?: Resolver<Maybe<ResolversTypes['CompanyProfileDTO']>, ParentType, ContextType>;
  getCompanySlideFirst?: Resolver<Maybe<ResolversTypes['CompanySlideFirstResponse']>, ParentType, ContextType>;
  getContactEQForOppty?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contact']>>>, ParentType, ContextType, RequireFields<QuerygetContactEQForOpptyArgs, 'crmContactId' | 'crmOpportunityId'>>;
  getContactEmailsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QuerygetContactEmailsCountArgs, 'contactId'>>;
  getContactMetrics?: Resolver<Maybe<ResolversTypes['ContactMetricsResponse']>, ParentType, ContextType, RequireFields<QuerygetContactMetricsArgs, 'contactId' | 'opptyId'>>;
  getContactsEQForOppty?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contact']>>>, ParentType, ContextType, RequireFields<QuerygetContactsEQForOpptyArgs, 'crmOpportunityId'>>;
  getConvAttendeeTeam?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvAttendeeResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetConvAttendeeTeamArgs, never>>;
  getConvAttendeeTeamById?: Resolver<Maybe<ResolversTypes['ConvAttendeeResponseDTO']>, ParentType, ContextType, RequireFields<QuerygetConvAttendeeTeamByIdArgs, 'id'>>;
  getConvMetrics?: Resolver<Maybe<ResolversTypes['ConvMetricsResponse']>, ParentType, ContextType, RequireFields<QuerygetConvMetricsArgs, 'id'>>;
  getConvModLog?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationAttributionLogRsp']>>>, ParentType, ContextType, RequireFields<QuerygetConvModLogArgs, 'convId'>>;
  getConvPromises?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountPromisesResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetConvPromisesArgs, never>>;
  getConvStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  getConvTopicEpisodeById?: Resolver<Maybe<ResolversTypes['ConvTopicEpisodeResponseDTO']>, ParentType, ContextType, RequireFields<QuerygetConvTopicEpisodeByIdArgs, 'id'>>;
  getConvTrends?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvEQResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetConvTrendsArgs, 'opptyId'>>;
  getConversation?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationRequest']>>>, ParentType, ContextType, RequireFields<QuerygetConversationArgs, never>>;
  getConversationById?: Resolver<Maybe<ResolversTypes['ConversationRequest']>, ParentType, ContextType, RequireFields<QuerygetConversationByIdArgs, 'id'>>;
  getConversationDetail?: Resolver<Maybe<ResolversTypes['ConversationDetailResponse']>, ParentType, ContextType, RequireFields<QuerygetConversationDetailArgs, 'id'>>;
  getConversationPreviewByConversation?: Resolver<Maybe<ResolversTypes['ConversationDetailResponse']>, ParentType, ContextType, RequireFields<QuerygetConversationPreviewByConversationArgs, 'id'>>;
  getConvostats?: Resolver<Maybe<ResolversTypes['ConvoStatResponse']>, ParentType, ContextType, RequireFields<QuerygetConvostatsArgs, 'convId'>>;
  getCoursesForUserEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QuerygetCoursesForUserEmailArgs, 'email'>>;
  getCurrentCompanyProp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QuerygetCurrentCompanyPropArgs, 'prop'>>;
  getCurrentEQForContact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QuerygetCurrentEQForContactArgs, 'crmContactId'>>;
  getCurrentEQForOppty?: Resolver<Maybe<ResolversTypes['CurrentEQForOpptyResponse']>, ParentType, ContextType, RequireFields<QuerygetCurrentEQForOpptyArgs, 'crmOpportunityId'>>;
  getCurrentEqForAccount?: Resolver<Maybe<ResolversTypes['DealDetailResponse']>, ParentType, ContextType, RequireFields<QuerygetCurrentEqForAccountArgs, 'crmAccountId'>>;
  getCurrentSystemProp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QuerygetCurrentSystemPropArgs, 'prop'>>;
  getCurrentUserDetail?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getCustWebLinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustWebLinkResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetCustWebLinksArgs, never>>;
  getDataByUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QuerygetDataByUriArgs, 'uri'>>;
  getDealByIdTrend?: Resolver<Maybe<ResolversTypes['DealSummaryTrendResponse']>, ParentType, ContextType, RequireFields<QuerygetDealByIdTrendArgs, 'id'>>;
  getDealDetailsByMode?: Resolver<Maybe<ResolversTypes['DealSummaryDetailResponse']>, ParentType, ContextType, RequireFields<QuerygetDealDetailsByModeArgs, 'id'>>;
  getDealEQScore?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QuerygetDealEQScoreArgs, 'opptyId'>>;
  getDealStageList?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  getDealSummaryById?: Resolver<Maybe<ResolversTypes['DealSummaryResponse']>, ParentType, ContextType, RequireFields<QuerygetDealSummaryByIdArgs, 'id'>>;
  getDiarization?: Resolver<Maybe<ResolversTypes['Diarization']>, ParentType, ContextType, RequireFields<QuerygetDiarizationArgs, 'convId'>>;
  getEQbyAccount?: Resolver<Maybe<ResolversTypes['ConvEQResponseDTO']>, ParentType, ContextType, RequireFields<QuerygetEQbyAccountArgs, 'accountId'>>;
  getEQbyContact?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QuerygetEQbyContactArgs, 'contactId' | 'opptyId'>>;
  getEQbyConv?: Resolver<Maybe<ResolversTypes['ConvEQResponseDTO']>, ParentType, ContextType, RequireFields<QuerygetEQbyConvArgs, 'convId'>>;
  getEQbyConv1?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QuerygetEQbyConv1Args, 'contact' | 'convId'>>;
  getEmlEqByEmailObj?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmlEqResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetEmlEqByEmailObjArgs, never>>;
  getEmlEqById?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QuerygetEmlEqByIdArgs, 'id'>>;
  getEmpathyTurns?: Resolver<Maybe<ResolversTypes['EmpathyAndHesitationTurnsReport']>, ParentType, ContextType, RequireFields<QuerygetEmpathyTurnsArgs, 'convId'>>;
  getEventById?: Resolver<Maybe<ResolversTypes['CalendarEvent']>, ParentType, ContextType, RequireFields<QuerygetEventByIdArgs, 'id'>>;
  getKeyMomentsForConvId?: Resolver<Maybe<ResolversTypes['KeyPhraseResponse']>, ParentType, ContextType, RequireFields<QuerygetKeyMomentsForConvIdArgs, 'id'>>;
  getKeywordCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  getKeywordCategories1?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeywordCategResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetKeywordCategories1Args, 'category'>>;
  getManagerEQ?: Resolver<Maybe<ResolversTypes['TeamOpptyUsersStats']>, ParentType, ContextType, RequireFields<QuerygetManagerEQArgs, 'managerEmailId' | 'startMMddyyyy'>>;
  getMediaClipById?: Resolver<Maybe<ResolversTypes['MediaClipResponseDTO']>, ParentType, ContextType, RequireFields<QuerygetMediaClipByIdArgs, 'id'>>;
  getMediaClipParamsByMediaClipId1?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaClipParamResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetMediaClipParamsByMediaClipId1Args, 'mediaClipId' | 'name'>>;
  getMediaClipPlaylistSharedWithUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  getMeeting?: Resolver<Maybe<ResolversTypes['ConversationSummaryResponse']>, ParentType, ContextType, RequireFields<QuerygetMeetingArgs, 'id'>>;
  getMentionedUserComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetMentionedUserCommentsArgs, 'userId'>>;
  getMyMediaClips?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaClipResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetMyMediaClipsArgs, never>>;
  getOpptyById?: Resolver<Maybe<ResolversTypes['OpptyDTO']>, ParentType, ContextType, RequireFields<QuerygetOpptyByIdArgs, 'id'>>;
  getOpptyEqbyStage?: Resolver<Maybe<ResolversTypes['OpptyEqbyStageResponseDTO']>, ParentType, ContextType, RequireFields<QuerygetOpptyEqbyStageArgs, 'opptyStage'>>;
  getOpptyKeyMoments?: Resolver<Maybe<ResolversTypes['OpptyDTO']>, ParentType, ContextType, RequireFields<QuerygetOpptyKeyMomentsArgs, never>>;
  getOpptyPromises?: Resolver<Maybe<ResolversTypes['OpptyDTO']>, ParentType, ContextType, RequireFields<QuerygetOpptyPromisesArgs, 'opptyId'>>;
  getOpptyTeam?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpptyTeamResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetOpptyTeamArgs, never>>;
  getOpptyTeamById?: Resolver<Maybe<ResolversTypes['OpptyTeamResponseDTO']>, ParentType, ContextType, RequireFields<QuerygetOpptyTeamByIdArgs, 'id'>>;
  getOpptys?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpptyDTO']>>>, ParentType, ContextType, RequireFields<QuerygetOpptysArgs, never>>;
  getPlaylistById?: Resolver<Maybe<ResolversTypes['PlaylistResponseDTO']>, ParentType, ContextType, RequireFields<QuerygetPlaylistByIdArgs, 'id'>>;
  getPlaylistParamsByPlaylistId1?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistParamResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetPlaylistParamsByPlaylistId1Args, 'name' | 'playlistId'>>;
  getPlaylistSharedMembers?: Resolver<Maybe<Array<Maybe<ResolversTypes['SharedMemberDTO']>>>, ParentType, ContextType, RequireFields<QuerygetPlaylistSharedMembersArgs, 'playlistId'>>;
  getPlaylists?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistResponseDTO']>>>, ParentType, ContextType, RequireFields<QuerygetPlaylistsArgs, never>>;
  getPreferences1?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QuerygetPreferences1Args, 'type'>>;
  getSellerEQ1?: Resolver<Maybe<ResolversTypes['TeamOpptyUsersStats']>, ParentType, ContextType, RequireFields<QuerygetSellerEQ1Args, 'days' | 'sellerEmailId'>>;
  getSellerEQ2?: Resolver<Maybe<ResolversTypes['TeamOpptyUsersStats']>, ParentType, ContextType, RequireFields<QuerygetSellerEQ2Args, 'sellerEmailId'>>;
  getSharedViewData?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvSharedViewData']>>>, ParentType, ContextType, RequireFields<QuerygetSharedViewDataArgs, 'convId'>>;
  getSlideFirstByConversation?: Resolver<Maybe<ResolversTypes['ConvSlideFirstResponse']>, ParentType, ContextType, RequireFields<QuerygetSlideFirstByConversationArgs, 'id'>>;
  getSummary?: Resolver<Maybe<ResolversTypes['SummaryReportDTO']>, ParentType, ContextType>;
  getTeamMembers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QuerygetTeamMembersArgs, 'usersId'>>;
  getTimeline?: Resolver<Maybe<ResolversTypes['ConvTimeline']>, ParentType, ContextType, RequireFields<QuerygetTimelineArgs, 'convId'>>;
  getTimeline1?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvSharedViewData']>>>, ParentType, ContextType, RequireFields<QuerygetTimeline1Args, 'name'>>;
  getTrendEQForOppty?: Resolver<Maybe<ResolversTypes['TrendEQForOpptyResponse']>, ParentType, ContextType, RequireFields<QuerygetTrendEQForOpptyArgs, 'crmOpportunityId'>>;
  getTrendEqForAccount?: Resolver<Maybe<Array<Maybe<ResolversTypes['DealDetailResponse']>>>, ParentType, ContextType, RequireFields<QuerygetTrendEqForAccountArgs, 'crmAccountId'>>;
  getUserEmailsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  getUserProxy?: Resolver<Maybe<ResolversTypes['UserDelegateResponseDTO']>, ParentType, ContextType, RequireFields<QuerygetUserProxyArgs, 'usersId'>>;
  getUsersCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  populate1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<Querypopulate1Args, 'convId'>>;
  redirectMethod?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryredirectMethodArgs, 'code' | 'state'>>;
  redirectUrl?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryredirectUrlArgs, 'code'>>;
  revokeAccessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  revokeAuth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryrevokeAuthArgs, 'provider'>>;
  revokeRefreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchContact1?: Resolver<Maybe<ResolversTypes['ContactResponse']>, ParentType, ContextType, RequireFields<QuerysearchContact1Args, 'contactId'>>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type KeyPhraseExpertResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyPhraseExpertResponseDTO'] = ResolversParentTypes['KeyPhraseExpertResponseDTO']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  engagement?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountResponseDTO'] = ResolversParentTypes['AccountResponseDTO']> = ResolversObject<{
  accountTeamID?: Resolver<Maybe<ResolversTypes['IdNameDTO']>, ParentType, ContextType>;
  contacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactActivity']>>>, ParentType, ContextType>;
  conversations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationRequest']>>>, ParentType, ContextType>;
  crmAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oppties?: Resolver<Maybe<Array<Maybe<ResolversTypes['Oppty2']>>>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  standing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sticker?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdNameDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IdNameDTO'] = ResolversParentTypes['IdNameDTO']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactActivityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContactActivity'] = ResolversParentTypes['ContactActivity']> = ResolversObject<{
  conversation?: Resolver<Maybe<ResolversTypes['Conversation2']>, ParentType, ContextType>;
  conversations?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emails?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  jobTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastActivityDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastActivityType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastActivityTypeId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Conversation2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Conversation2'] = ResolversParentTypes['Conversation2']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationData']>>>, ParentType, ContextType>;
  mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConversationDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConversationData'] = ResolversParentTypes['ConversationData']> = ResolversObject<{
  convIds?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Float']>>>>>, ParentType, ContextType>;
  conversations?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  emailIds?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Float']>>>>>, ParentType, ContextType>;
  emails?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Score4Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Score4'] = ResolversParentTypes['Score4']> = ResolversObject<{
  trend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConversationRequestResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConversationRequest'] = ResolversParentTypes['ConversationRequest']> = ResolversObject<{
  accountID?: Resolver<Maybe<ResolversTypes['ConvAccountDTO']>, ParentType, ContextType>;
  aiViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attendees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attendee']>>>, ParentType, ContextType>;
  audioMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confidential?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  contentViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cvProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dataFusionProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalConvId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalMeetingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  galleryViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasClips?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasComments?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hostID?: Resolver<Maybe<ResolversTypes['ConvUsersDTO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isShared?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  keyMoments?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyMoment']>>>, ParentType, ContextType>;
  lastChunk?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meetingEndTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingTopic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyID?: Resolver<Maybe<ResolversTypes['IdNameDTO']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  processedFlag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promises?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvPromiseResponseDTO']>>>, ParentType, ContextType>;
  recordingStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speakerTimelineLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speakerViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  textKmProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  textMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  textSentProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tonalProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  transcriptLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvAccountDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvAccountDTO'] = ResolversParentTypes['ConvAccountDTO']> = ResolversObject<{
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttendeeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Attendee'] = ResolversParentTypes['Attendee']> = ResolversObject<{
  contactId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  empathy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hesitation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hostImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  jobTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metrics?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttendeeMetric']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  politeness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['UniScore']>, ParentType, ContextType>;
  speakingPace?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  talkRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timeline?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Float']>>>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Type12']>, ParentType, ContextType>;
  wonOver?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttendeeMetricResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AttendeeMetric'] = ResolversParentTypes['AttendeeMetric']> = ResolversObject<{
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Type13']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UniScoreResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UniScore'] = ResolversParentTypes['UniScore']> = ResolversObject<{
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  trends?: Resolver<Maybe<ResolversTypes['Trends']>, ParentType, ContextType>;
  wonOver?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TrendsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Trends'] = ResolversParentTypes['Trends']> = ResolversObject<{
  t1?: Resolver<Maybe<ResolversTypes['UniScore']>, ParentType, ContextType>;
  t2?: Resolver<Maybe<ResolversTypes['UniScore']>, ParentType, ContextType>;
  t3?: Resolver<Maybe<ResolversTypes['UniScore']>, ParentType, ContextType>;
  t4?: Resolver<Maybe<ResolversTypes['UniScore']>, ParentType, ContextType>;
  t5?: Resolver<Maybe<ResolversTypes['UniScore']>, ParentType, ContextType>;
  t6?: Resolver<Maybe<ResolversTypes['UniScore']>, ParentType, ContextType>;
  t7?: Resolver<Maybe<ResolversTypes['UniScore']>, ParentType, ContextType>;
  t8?: Resolver<Maybe<ResolversTypes['UniScore']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvUsersDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvUsersDTO'] = ResolversParentTypes['ConvUsersDTO']> = ResolversObject<{
  fullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeyMomentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyMoment'] = ResolversParentTypes['KeyMoment']> = ResolversObject<{
  bookmarks?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvBookmarkResponseDTO']>>>, ParentType, ContextType>;
  contentImages?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributedBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  criticality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  downVote?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  downVoteUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endOffset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  highlightText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyCategory?: Resolver<Maybe<ResolversTypes['KeyCategory']>, ParentType, ContextType>;
  keyMomentScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyMomentTexts?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyMomentText']>>>, ParentType, ContextType>;
  keyTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyTag']>>>, ParentType, ContextType>;
  kmEndOffset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kmStartOffset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  polarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  startOffset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upVote?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  upVoteUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvBookmarkResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvBookmarkResponseDTO'] = ResolversParentTypes['ConvBookmarkResponseDTO']> = ResolversObject<{
  convID?: Resolver<Maybe<ResolversTypes['ConvDTO']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['ConvUsersDTO']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyMomentId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeEnd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timeStart?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvDTO'] = ResolversParentTypes['ConvDTO']> = ResolversObject<{
  confidential?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meetingTopic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeyCategoryResolvers = { CUSTOMER_PAIN_POINTS: 'Customer Pain Points', CUSTOMER_OBJECTIONS: 'Customer Objections', BUDGET: 'Budget', PROJECT_METRICS_OF_SUCCESS: 'Project Metrics of Success', COMPETITORS: 'Competitors', PRODUCT_FEATURES: 'Product Features', PRICING: 'Pricing', DECISION_CRITERIA: 'Decision Criteria' };

export type KeyMomentTextResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyMomentText'] = ResolversParentTypes['KeyMomentText']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  line?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeyTagResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyTag'] = ResolversParentTypes['KeyTag']> = ResolversObject<{
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvPromiseResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvPromiseResponseDTO'] = ResolversParentTypes['ConvPromiseResponseDTO']> = ResolversObject<{
  actionStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  classification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confidential?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hostId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  promiseEndTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promiseNextAction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promiseStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promiseText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  speaker?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speakerUsersId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Oppty2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Oppty2'] = ResolversParentTypes['Oppty2']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  crmOpptyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listOfConversation?: Resolver<Maybe<Array<Maybe<ResolversTypes['Conversation2']>>>, ParentType, ContextType>;
  listOfMeetingMetadata?: Resolver<Maybe<Array<Maybe<ResolversTypes['MeetingMetadata']>>>, ParentType, ContextType>;
  listOfOpptyContactRel?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpptyContactRel']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opptyCloseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyCreateDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptySource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyStage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyTeam?: Resolver<Maybe<ResolversTypes['OpptyTeam']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  setOfOpptyParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpptyParam']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MeetingMetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MeetingMetadata'] = ResolversParentTypes['MeetingMetadata']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  audioMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalMeetingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingTopic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oppty?: Resolver<Maybe<ResolversTypes['Oppty2']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  setOfMeetingMetadataParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['MeetingMetadataParam']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  textMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = ResolversObject<{
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MeetingMetadataParamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MeetingMetadataParam'] = ResolversParentTypes['MeetingMetadataParam']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingMetadata?: Resolver<Maybe<ResolversTypes['MeetingMetadata']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpptyContactRelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OpptyContactRel'] = ResolversParentTypes['OpptyContactRel']> = ResolversObject<{
  contact?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType>;
  crmRelId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oppty?: Resolver<Maybe<ResolversTypes['Oppty2']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpptyTeamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OpptyTeam'] = ResolversParentTypes['OpptyTeam']> = ResolversObject<{
  crmRelId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listOfOppty?: Resolver<Maybe<Array<Maybe<ResolversTypes['Oppty2']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oppty?: Resolver<Maybe<ResolversTypes['Oppty2']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  setOfOpptyTeamParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpptyTeamParam']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users3?: Resolver<Maybe<ResolversTypes['Users2']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpptyTeamParamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OpptyTeamParam'] = ResolversParentTypes['OpptyTeamParam']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  members?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opptyTeam?: Resolver<Maybe<ResolversTypes['OpptyTeam']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Users2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Users2'] = ResolversParentTypes['Users2']> = ResolversObject<{
  alertList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Alert']>>>, ParentType, ContextType>;
  crmUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerDomainWhiteList?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerDomainWhiteList2']>>>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstTimeLogin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inviteSent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listOfAccountTeam3?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountTeam']>>>, ParentType, ContextType>;
  listOfOpptyTeam3?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpptyTeam']>>>, ParentType, ContextType>;
  listOfUserRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersRoleRel']>>>, ParentType, ContextType>;
  listOfUserUiPreference3?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserUiPreference']>>>, ParentType, ContextType>;
  managerId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qenabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zoomHostId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zoomToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AlertResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Alert'] = ResolversParentTypes['Alert']> = ResolversObject<{
  archive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  objId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  objSubId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  objType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['Users2']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerDomainWhiteList2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerDomainWhiteList2'] = ResolversParentTypes['CustomerDomainWhiteList2']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  setOfCustomerDomainWhiteListParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomerDomainWhiteListParam']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['Users2']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerDomainWhiteListParamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustomerDomainWhiteListParam'] = ResolversParentTypes['CustomerDomainWhiteListParam']> = ResolversObject<{
  customerDomainWhiteList?: Resolver<Maybe<ResolversTypes['CustomerDomainWhiteList2']>, ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTeamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountTeam'] = ResolversParentTypes['AccountTeam']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  crmRelId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listOfAccount?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  setOfAccountTeamParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountTeamParam']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users3?: Resolver<Maybe<ResolversTypes['Users2']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTeamParamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountTeamParam'] = ResolversParentTypes['AccountTeamParam']> = ResolversObject<{
  accountTeam?: Resolver<Maybe<ResolversTypes['AccountTeam']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  members?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersRoleRelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsersRoleRel'] = ResolversParentTypes['UsersRoleRel']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  roleId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['Users2']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserUiPreferenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserUiPreference'] = ResolversParentTypes['UserUiPreference']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  preferenceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  savedJson?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  setOfUserUiPreferenceParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserUiPreferenceParam']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['Users2']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserUiPreferenceParamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserUiPreferenceParam'] = ResolversParentTypes['UserUiPreferenceParam']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userUiPreference?: Resolver<Maybe<ResolversTypes['UserUiPreference']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpptyParamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OpptyParam'] = ResolversParentTypes['OpptyParam']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oppty?: Resolver<Maybe<ResolversTypes['Oppty2']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  probability?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timespent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpptyDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OpptyDTO'] = ResolversParentTypes['OpptyDTO']> = ResolversObject<{
  accountID?: Resolver<Maybe<ResolversTypes['IdNameDTO']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  conversation?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationRequest']>>>, ParentType, ContextType>;
  crmOpptyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metrics?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opptyCloseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyCreateDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptySource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyStage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyTeamID?: Resolver<Maybe<ResolversTypes['IdNameDTO']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTeamResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountTeamResponse'] = ResolversParentTypes['AccountTeamResponse']> = ResolversObject<{
  current?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountTeamDTO']>>>, ParentType, ContextType>;
  last?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountTeamDTO']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTeamDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountTeamDTO'] = ResolversParentTypes['AccountTeamDTO']> = ResolversObject<{
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastActivityDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seller?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeOnAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggrConvMetricsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AggrConvMetrics'] = ResolversParentTypes['AggrConvMetrics']> = ResolversObject<{
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  engagement?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  engagementSmooth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  isSpeaker?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  offset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offsetTimestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  participantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sentimentSmooth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AlertResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AlertResponseDTO'] = ResolversParentTypes['AlertResponseDTO']> = ResolversObject<{
  archive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  digitalSource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  objId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  objSubId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  objType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  companyProfileDTO?: Resolver<Maybe<ResolversTypes['CompanyProfileDTO']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  externalIdToken?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  firstTimeLogin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  invited?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  invitedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isBlueJeansAuthorized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isCalendarAuthorized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isEmailAuthorized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isGmailAuthorized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isGoogleCalendarAuthorized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOutlookAuthorized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOutlookCalendarAuthorized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPasswordResetRequired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPasswordSet?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSlackAuthorized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSsoLogin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isTeamAuthorized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isWebexAuthorized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isZoomAuthorized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['UserManagerDTO']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  role?: Resolver<Maybe<Array<Maybe<ResolversTypes['IdNameDTO']>>>, ParentType, ContextType>;
  scopes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zoomToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanyProfileDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CompanyProfileDTO'] = ResolversParentTypes['CompanyProfileDTO']> = ResolversObject<{
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserManagerDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserManagerDTO'] = ResolversParentTypes['UserManagerDTO']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanyParamResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CompanyParamResponseDTO'] = ResolversParentTypes['CompanyParamResponseDTO']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConfigPropResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigPropResponseDTO'] = ResolversParentTypes['ConfigPropResponseDTO']> = ResolversObject<{
  configPropset?: Resolver<Maybe<ResolversTypes['IdNameDTO']>, ParentType, ContextType>;
  defaultValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultValueInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  isVisible?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConversationAttendeesResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConversationAttendeesResponse'] = ResolversParentTypes['ConversationAttendeesResponse']> = ResolversObject<{
  attendees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attendee']>>>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CommentResponseDTO'] = ResolversParentTypes['CommentResponseDTO']> = ResolversObject<{
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  convID?: Resolver<Maybe<ResolversTypes['ConvDTO']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyMomentId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mentions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeywordCategResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeywordCategResponseDTO'] = ResolversParentTypes['KeywordCategResponseDTO']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keywordCategName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keywordTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeywordTagResponseDTO']>>>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeywordTagResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeywordTagResponseDTO'] = ResolversParentTypes['KeywordTagResponseDTO']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keywordCateg?: Resolver<Maybe<ResolversTypes['KeywordCategResponseDTO']>, ParentType, ContextType>;
  keywordTagVal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanySlideFirstResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CompanySlideFirstResponse'] = ResolversParentTypes['CompanySlideFirstResponse']> = ResolversObject<{
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  high?: Resolver<Maybe<Array<Maybe<ResolversTypes['SlideFirst']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  low?: Resolver<Maybe<Array<Maybe<ResolversTypes['SlideFirst']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SlideFirstResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SlideFirst'] = ResolversParentTypes['SlideFirst']> = ResolversObject<{
  accountID?: Resolver<Maybe<ResolversTypes['ConvAccountDTO']>, ParentType, ContextType>;
  contentStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convList?: Resolver<Maybe<Array<Maybe<ResolversTypes['SlideFirst']>>>, ParentType, ContextType>;
  galleryViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kmEndTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kmId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  kmStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kmText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kmUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingEndTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactMetricsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContactMetricsResponse'] = ResolversParentTypes['ContactMetricsResponse']> = ResolversObject<{
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactMethods?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactMethodDTO']>>>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jobTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metrics?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oppty?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpptyDTO']>>>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactMethodDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContactMethodDTO'] = ResolversParentTypes['ContactMethodDTO']> = ResolversObject<{
  contactId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  emailAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  setOfContactMethodParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactMethodParam']>>>, ParentType, ContextType>;
  social?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactMethodParamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContactMethodParam'] = ResolversParentTypes['ContactMethodParam']> = ResolversObject<{
  contactMethod?: Resolver<Maybe<ResolversTypes['ContactMethod']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  preference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactMethodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContactMethod'] = ResolversParentTypes['ContactMethod']> = ResolversObject<{
  contact?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType>;
  emailAddress2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  phoneNumber2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  setOfContactMethodParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactMethodParam']>>>, ParentType, ContextType>;
  social?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvAttendeeResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvAttendeeResponseDTO'] = ResolversParentTypes['ConvAttendeeResponseDTO']> = ResolversObject<{
  attendeeEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attendeeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  convID?: Resolver<Maybe<ResolversTypes['IdNameDTO']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employeeOrContactInd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvMetricsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvMetricsResponse'] = ResolversParentTypes['ConvMetricsResponse']> = ResolversObject<{
  attendees?: Resolver<Maybe<Array<Maybe<ResolversTypes['AttendeeMetric']>>>, ParentType, ContextType>;
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConversationAttributionLogRspResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConversationAttributionLogRsp'] = ResolversParentTypes['ConversationAttributionLogRsp']> = ResolversObject<{
  allowEdit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  newAccountCrmId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newAccountId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  newOpptyCrmId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newOpptyId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oldAccountCrmId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oldAccountId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  oldOpptyCrmId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oldOpptyId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPromisesResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountPromisesResponseDTO'] = ResolversParentTypes['AccountPromisesResponseDTO']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  dateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promises?: Resolver<Maybe<Array<Maybe<ResolversTypes['Promise']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PromiseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Promise'] = ResolversParentTypes['Promise']> = ResolversObject<{
  classification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conv?: Resolver<Maybe<ResolversTypes['ConvInfo']>, ParentType, ContextType>;
  deal?: Resolver<Maybe<ResolversTypes['DealInfo']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  promiseEndTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promiseNextAction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promiseStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promiseText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvInfo'] = ResolversParentTypes['ConvInfo']> = ResolversObject<{
  confidential?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meetingTopic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealInfo'] = ResolversParentTypes['DealInfo']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amountNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  closeDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvTopicEpisodeResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvTopicEpisodeResponseDTO'] = ResolversParentTypes['ConvTopicEpisodeResponseDTO']> = ResolversObject<{
  conversation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keytopicCount1?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keytopicCount2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keytopicCount3?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keytopicCount4?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keytopicId1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keytopicId2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keytopicId3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keytopicId4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unsupervisedCount1?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unsupervisedCount2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unsupervisedCount3?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unsupervisedCount4?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unsupervisedTopic1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unsupervisedTopic2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unsupervisedTopic3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unsupervisedTopic4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvEQResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvEQResponseDTO'] = ResolversParentTypes['ConvEQResponseDTO']> = ResolversObject<{
  accountId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convEndTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eqScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingEngagement?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meetingSentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numberOfAttendees?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opptyId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vRankSum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vrankSum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConversationDetailResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConversationDetailResponse'] = ResolversParentTypes['ConversationDetailResponse']> = ResolversObject<{
  accountID?: Resolver<Maybe<ResolversTypes['DealAccount']>, ParentType, ContextType>;
  actionItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvPromiseResponseDTO']>>>, ParentType, ContextType>;
  aiViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attendees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attendee']>>>, ParentType, ContextType>;
  audioMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bookmarks?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvBookmarkResponseDTO']>>>, ParentType, ContextType>;
  confidential?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  contentViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cvProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dataFusionProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalMeetingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  freezeImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  galleryVideoLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  galleryViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hostName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyMoments2?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyMoment']>>>, ParentType, ContextType>;
  maskVideoLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingTopic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nextActions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvNextAction']>>>, ParentType, ContextType>;
  opportunities?: Resolver<Maybe<ResolversTypes['DealSummaryDetailResponse']>, ParentType, ContextType>;
  opptyID?: Resolver<Maybe<ResolversTypes['DealOppty']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recordingDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  shareCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speakerTimelineLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speakerViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  textKmProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  textMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  textSentProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tonalProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  topics?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvTopicEpisodeResponseDTO']>>>, ParentType, ContextType>;
  transcriptLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealAccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealAccount'] = ResolversParentTypes['DealAccount']> = ResolversObject<{
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvNextActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvNextAction'] = ResolversParentTypes['ConvNextAction']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealSummaryDetailResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealSummaryDetailResponse'] = ResolversParentTypes['DealSummaryDetailResponse']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType>;
  contactId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  contacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactActivity']>>>, ParentType, ContextType>;
  conversations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationRequest']>>>, ParentType, ContextType>;
  crmOpptyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  metrics?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opptyCloseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyCreateDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opptySource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyStage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyTeamId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  sellers?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserActivity']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserActivityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserActivity'] = ResolversParentTypes['UserActivity']> = ResolversObject<{
  conversation?: Resolver<Maybe<ResolversTypes['Conversation2']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emails?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  jobTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastActivityDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastActivityType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealOpptyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealOppty'] = ResolversParentTypes['DealOppty']> = ResolversObject<{
  closeDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvoStatResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvoStatResponse'] = ResolversParentTypes['ConvoStatResponse']> = ResolversObject<{
  accountId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  aiViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attendees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attendee']>>>, ParentType, ContextType>;
  audioMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  convoStats?: Resolver<Maybe<ResolversTypes['ConvoStats']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalMeetingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  freezeImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  galleryVideoLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  galleryViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyMoments?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyMoment']>>>, ParentType, ContextType>;
  maskVideoLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingTopic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nextActions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvNextAction']>>>, ParentType, ContextType>;
  opptyId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recordingDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speakerTimelineLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speakerViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  textMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transcriptLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvoStatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvoStats'] = ResolversParentTypes['ConvoStats']> = ResolversObject<{
  averageEmpathy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averagePoliteness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averagespeakingPace?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hesitation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longestCustomerMonologue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  longestRepMonologue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  talkRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  teamMembers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attendee']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrentEQForOpptyResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CurrentEQForOpptyResponse'] = ResolversParentTypes['CurrentEQForOpptyResponse']> = ResolversObject<{
  deals?: Resolver<Maybe<ResolversTypes['DealSummaryDetailResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealDetailResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealDetailResponse'] = ResolversParentTypes['DealDetailResponse']> = ResolversObject<{
  searchResult?: Resolver<Maybe<ResolversTypes['DealSearchResult']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealSearchResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealSearchResult'] = ResolversParentTypes['DealSearchResult']> = ResolversObject<{
  entities?: Resolver<Maybe<Array<Maybe<ResolversTypes['DealEntity']>>>, ParentType, ContextType>;
  resultCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealEntityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealEntity'] = ResolversParentTypes['DealEntity']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['DealData']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealData'] = ResolversParentTypes['DealData']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['DealAccount']>, ParentType, ContextType>;
  accountOpptyEQ?: Resolver<Maybe<ResolversTypes['AccountOpptyEQResponseDTO']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contact']>>>, ParentType, ContextType>;
  conversations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationRequest']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  metrics?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nextAction?: Resolver<Maybe<ResolversTypes['DealNextAction']>, ParentType, ContextType>;
  opptyAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opptyCloseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyCreateDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyStage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pastActivity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pendingPromisesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  totalPromisesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountOpptyEQResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountOpptyEQResponseDTO'] = ResolversParentTypes['AccountOpptyEQResponseDTO']> = ResolversObject<{
  accountId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  accountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  empathy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  engagement?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opptyAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opptyId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opptyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyRisk?: Resolver<Maybe<ResolversTypes['OpptyRisk']>, ParentType, ContextType>;
  opptyStage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealNextActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealNextAction'] = ResolversParentTypes['DealNextAction']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustWebLinkResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustWebLinkResponseDTO'] = ResolversParentTypes['CustWebLinkResponseDTO']> = ResolversObject<{
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyProfile?: Resolver<Maybe<ResolversTypes['CompanyProfileDTO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usersId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealSummaryTrendResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealSummaryTrendResponse'] = ResolversParentTypes['DealSummaryTrendResponse']> = ResolversObject<{
  convostats?: Resolver<Maybe<Array<Maybe<ResolversTypes['DealConvoStat']>>>, ParentType, ContextType>;
  engagement?: Resolver<Maybe<ResolversTypes['Stages']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Stages']>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wonOppty?: Resolver<Maybe<ResolversTypes['DealStat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealConvoStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealConvoStat'] = ResolversParentTypes['DealConvoStat']> = ResolversObject<{
  stages?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StagesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Stages'] = ResolversParentTypes['Stages']> = ResolversObject<{
  stages?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealStat'] = ResolversParentTypes['DealStat']> = ResolversObject<{
  convostats?: Resolver<Maybe<Array<Maybe<ResolversTypes['DealConvoStat']>>>, ParentType, ContextType>;
  engagement?: Resolver<Maybe<ResolversTypes['Stages']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Stages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealSummaryResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealSummaryResponse'] = ResolversParentTypes['DealSummaryResponse']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  accountUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType>;
  contactId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  crmOpptyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opptyCloseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyCreateDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyName?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  opptySource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyStage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyTeamId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  topicCoverageStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DiarizationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Diarization'] = ResolversParentTypes['Diarization']> = ResolversObject<{
  tasks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Task']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['Option']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Option'] = ResolversParentTypes['Option']> = ResolversObject<{
  activate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmlEqResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmlEqResponseDTO'] = ResolversParentTypes['EmlEqResponseDTO']> = ResolversObject<{
  emlObj?: Resolver<Maybe<ResolversTypes['EmlObjResponseDTO']>, ParentType, ContextType>;
  empathy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  senderName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  senderUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmlObjResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmlObjResponseDTO'] = ResolversParentTypes['EmlObjResponseDTO']> = ResolversObject<{
  conversation?: Resolver<Maybe<ResolversTypes['ConvDTO']>, ParentType, ContextType>;
  emlBody?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmlBody2']>>>, ParentType, ContextType>;
  emlMetadata?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmlMetadata']>>>, ParentType, ContextType>;
  emlObjParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmlObjParam']>>>, ParentType, ContextType>;
  info?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmlBody2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmlBody2'] = ResolversParentTypes['EmlBody2']> = ResolversObject<{
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emlObj?: Resolver<Maybe<ResolversTypes['EmlObj']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  setOfEmlBodyParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmlBodyParam']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmlObjResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmlObj'] = ResolversParentTypes['EmlObj']> = ResolversObject<{
  cc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conversation?: Resolver<Maybe<ResolversTypes['Conversation2']>, ParentType, ContextType>;
  emlEqs?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmlEq']>>>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listOfEmlBody?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmlBody2']>>>, ParentType, ContextType>;
  listOfEmlMetadata?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmlMetadata']>>>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sendDatetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  setOfEmlObjParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmlObjParam']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  threadId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmlEqResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmlEq'] = ResolversParentTypes['EmlEq']> = ResolversObject<{
  emlObj?: Resolver<Maybe<ResolversTypes['EmlObj']>, ParentType, ContextType>;
  empathy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rawMetrics?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  senderName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  senderUser?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmlMetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmlMetadata'] = ResolversParentTypes['EmlMetadata']> = ResolversObject<{
  emlObj?: Resolver<Maybe<ResolversTypes['EmlObj']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  setOfEmlMetadataParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmlMetadataParam']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmlMetadataParamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmlMetadataParam'] = ResolversParentTypes['EmlMetadataParam']> = ResolversObject<{
  emlMetadata?: Resolver<Maybe<ResolversTypes['EmlMetadata']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmlObjParamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmlObjParam'] = ResolversParentTypes['EmlObjParam']> = ResolversObject<{
  emlObj?: Resolver<Maybe<ResolversTypes['EmlObj']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmlBodyParamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmlBodyParam'] = ResolversParentTypes['EmlBodyParam']> = ResolversObject<{
  emlBody?: Resolver<Maybe<ResolversTypes['EmlBody2']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmpathyAndHesitationTurnsReportResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmpathyAndHesitationTurnsReport'] = ResolversParentTypes['EmpathyAndHesitationTurnsReport']> = ResolversObject<{
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  empathyChangeDetailsList?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmpathyChangeDetails']>>>, ParentType, ContextType>;
  empathyScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hesitationChangeDetailsList?: Resolver<Maybe<Array<Maybe<ResolversTypes['HesitationChangeDetails']>>>, ParentType, ContextType>;
  hesitationScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmpathyChangeDetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmpathyChangeDetails'] = ResolversParentTypes['EmpathyChangeDetails']> = ResolversObject<{
  averageEmpathy2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convId2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convOffset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  polarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prevContactNameOnTurn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HesitationChangeDetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HesitationChangeDetails'] = ResolversParentTypes['HesitationChangeDetails']> = ResolversObject<{
  averageHesitation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convId3?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convOffset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  prevContactNameOnTurn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId3?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CalendarEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CalendarEvent'] = ResolversParentTypes['CalendarEvent']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['IdNameDTO']>, ParentType, ContextType>;
  botInstrFromCalendar?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  calUid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventAttendees?: Resolver<Maybe<Array<Maybe<ResolversTypes['CalendarEventAttendee']>>>, ParentType, ContextType>;
  eventEndTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastMeeting?: Resolver<Maybe<ResolversTypes['ConversationDetailResponse']>, ParentType, ContextType>;
  oppty?: Resolver<Maybe<Array<Maybe<ResolversTypes['IdNameDTO']>>>, ParentType, ContextType>;
  opptyDetail?: Resolver<Maybe<ResolversTypes['DealSummaryDetailResponse']>, ParentType, ContextType>;
  subjectLine?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CalendarEventAttendeeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CalendarEventAttendee'] = ResolversParentTypes['CalendarEventAttendee']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeyPhraseResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyPhraseResponse'] = ResolversParentTypes['KeyPhraseResponse']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keyMoments3?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyMoment']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamOpptyUsersStatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TeamOpptyUsersStats'] = ResolversParentTypes['TeamOpptyUsersStats']> = ResolversObject<{
  idealConvEQ?: Resolver<Maybe<ResolversTypes['IdealConvEQ']>, ParentType, ContextType>;
  overAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamUsersStat']>>>, ParentType, ContextType>;
  teamOpptyUsersStats?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamOpptyUsersStat']>>>, ParentType, ContextType>;
  unattributed?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamUnattributedUsersStat']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdealConvEQResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IdealConvEQ'] = ResolversParentTypes['IdealConvEQ']> = ResolversObject<{
  empathy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  engagement?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  talkRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamUsersStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TeamUsersStat'] = ResolversParentTypes['TeamUsersStat']> = ResolversObject<{
  customerEngagement?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  customerSentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  empathy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  engagement?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hesitation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  politeness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  speakingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  talkRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  talkSpeed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  usersStats?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersStat']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsersStat'] = ResolversParentTypes['UsersStat']> = ResolversObject<{
  accountID?: Resolver<Maybe<ResolversTypes['ConvAccountDTO']>, ParentType, ContextType>;
  convEndTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  convStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  convType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  empathy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  engagement?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hesitation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  participantName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  politeness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  speakingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  talkRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  talkSpeed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamOpptyUsersStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TeamOpptyUsersStat'] = ResolversParentTypes['TeamOpptyUsersStat']> = ResolversObject<{
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentResponseDTO']>>>, ParentType, ContextType>;
  conversations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationRequest']>>>, ParentType, ContextType>;
  oppty?: Resolver<Maybe<ResolversTypes['OpptyDTO']>, ParentType, ContextType>;
  usersStats?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamUsersStat']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamUnattributedUsersStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TeamUnattributedUsersStat'] = ResolversParentTypes['TeamUnattributedUsersStat']> = ResolversObject<{
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentResponseDTO']>>>, ParentType, ContextType>;
  conversations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationRequest']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['TeamUsersStat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaClipResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaClipResponseDTO'] = ResolversParentTypes['MediaClipResponseDTO']> = ResolversObject<{
  accountID?: Resolver<Maybe<ResolversTypes['ConvAccountDTO']>, ParentType, ContextType>;
  audioMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentResponseDTO']>>>, ParentType, ContextType>;
  convID?: Resolver<Maybe<ResolversTypes['ConvDTO']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  galleryViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyMoment?: Resolver<Maybe<ResolversTypes['ConvKeyMomentResponseDTO']>, ParentType, ContextType>;
  keytags?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeywordTagResponseDTO']>>>, ParentType, ContextType>;
  mediaClipRelId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meetingTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingTopic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyID?: Resolver<Maybe<ResolversTypes['ConvOpptyDTO']>, ParentType, ContextType>;
  opptyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  polarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shared?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transcript?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userID?: Resolver<Maybe<ResolversTypes['ConvUsersDTO']>, ParentType, ContextType>;
  usersViewed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvKeyMomentResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvKeyMomentResponseDTO'] = ResolversParentTypes['ConvKeyMomentResponseDTO']> = ResolversObject<{
  contentImages?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  downVote?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  downVoteUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endOffset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keywordTagId1?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keywordTagId2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keywordTagId3?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keywordTagId4?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  kmEndTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kmStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  line?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  polarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  startOffset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upVote?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  upVoteUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvOpptyDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvOpptyDTO'] = ResolversParentTypes['ConvOpptyDTO']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaClipParamResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaClipParamResponseDTO'] = ResolversParentTypes['MediaClipParamResponseDTO']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mediaClipId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConversationSummaryResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConversationSummaryResponse'] = ResolversParentTypes['ConversationSummaryResponse']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Datum']>>>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DatumResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Datum'] = ResolversParentTypes['Datum']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['IdNameDTO']>, ParentType, ContextType>;
  aiViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attendees?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvAttendeeAttr']>>>, ParentType, ContextType>;
  audioMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confidential?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  contentViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cvProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dataFusionProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalMeetingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  galleryViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hostImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keyTopics?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyTag']>>>, ParentType, ContextType>;
  lastChunk?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mediaThumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opportunity?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pendingPromisesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  processedFlag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  sharedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sharedUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speakerTimelineLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speakerViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  textKmProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  textMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  textSentProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tonalProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  totalPromisesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transcriptLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvAttendeeAttrResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvAttendeeAttr'] = ResolversParentTypes['ConvAttendeeAttr']> = ResolversObject<{
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpportunityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Opportunity'] = ResolversParentTypes['Opportunity']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  closeDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpptyEqbyStageResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OpptyEqbyStageResponseDTO'] = ResolversParentTypes['OpptyEqbyStageResponseDTO']> = ResolversObject<{
  emotionalScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emotionalStage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numberOfAttendees2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opptyId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stageEndDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stageStartDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpptyTeamResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OpptyTeamResponseDTO'] = ResolversParentTypes['OpptyTeamResponseDTO']> = ResolversObject<{
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usersId?: Resolver<Maybe<ResolversTypes['ConvUsersDTO']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlaylistResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlaylistResponseDTO'] = ResolversParentTypes['PlaylistResponseDTO']> = ResolversObject<{
  clips?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaClipResponseDTO']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPublic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  permission?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shared?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userID?: Resolver<Maybe<ResolversTypes['ConvUsersDTO']>, ParentType, ContextType>;
  usersViewed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlaylistParamResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlaylistParamResponseDTO'] = ResolversParentTypes['PlaylistParamResponseDTO']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playlistId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SharedMemberDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SharedMemberDTO'] = ResolversParentTypes['SharedMemberDTO']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permission?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shareTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoSharingHistoryId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvSharedViewDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvSharedViewData'] = ResolversParentTypes['ConvSharedViewData']> = ResolversObject<{
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvSlideFirstResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvSlideFirstResponse'] = ResolversParentTypes['ConvSlideFirstResponse']> = ResolversObject<{
  high?: Resolver<Maybe<Array<Maybe<ResolversTypes['SlideFirst']>>>, ParentType, ContextType>;
  low?: Resolver<Maybe<Array<Maybe<ResolversTypes['SlideFirst']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SummaryReportDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SummaryReportDTO'] = ResolversParentTypes['SummaryReportDTO']> = ResolversObject<{
  amountImpacted?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hrsProcessed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numOfConversations?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uniqueContacts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uniqueDeals?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uniqueKeyMoments?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvTimelineResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvTimeline'] = ResolversParentTypes['ConvTimeline']> = ResolversObject<{
  convId4?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TrendEQForOpptyResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TrendEQForOpptyResponse'] = ResolversParentTypes['TrendEQForOpptyResponse']> = ResolversObject<{
  deals?: Resolver<Maybe<ResolversTypes['DealSummaryDetailResponse']>, ParentType, ContextType>;
  keyMoments4?: Resolver<Maybe<ResolversTypes['OpptyDTO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserDelegateResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserDelegateResponseDTO'] = ResolversParentTypes['UserDelegateResponseDTO']> = ResolversObject<{
  proxyOwners?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  proxyUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContactResponse'] = ResolversParentTypes['ContactResponse']> = ResolversObject<{
  accounts?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['JSON']>>>>>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactMethods?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactMethodDTO']>>>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  jobTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyMoments5?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyMoment']>>>, ParentType, ContextType>;
  lastConv?: Resolver<Maybe<ResolversTypes['LastConv']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metrics?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nextConv?: Resolver<Maybe<ResolversTypes['NextConv']>, ParentType, ContextType>;
  openOppty?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpptyDTO']>>>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LastConvResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LastConv'] = ResolversParentTypes['LastConv']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NextConvResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NextConv'] = ResolversParentTypes['NextConv']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addBulkPlaylistMediaClipRel?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationaddBulkPlaylistMediaClipRelArgs, 'usalesPlaylistsMediaClipRelBulkInput'>>;
  authenticateUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationauthenticateUserArgs, 'loginRequestInput'>>;
  authenticateUser2?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationauthenticateUser2Args, 'loginRequestInput'>>;
  companyKeyPhraseOccurrences?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyPhraseOccurenceContentResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationcompanyKeyPhraseOccurrencesArgs, 'advSearchRequestInput'>>;
  companyKeyPhraseOccurrencesBySentiment?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationcompanyKeyPhraseOccurrencesBySentimentArgs, 'advSearchRequestInput'>>;
  convert?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationconvertArgs, 'convId' | 'usalesTimelineInput'>>;
  createAlert?: Resolver<Maybe<ResolversTypes['AlertResponseDTO']>, ParentType, ContextType, RequireFields<MutationcreateAlertArgs, 'alertRequestDTOInput'>>;
  createConvTopicEpisode?: Resolver<Maybe<ResolversTypes['ConvTopicEpisodeResponseDTO']>, ParentType, ContextType, RequireFields<MutationcreateConvTopicEpisodeArgs, 'convTopicEpisodeRequestDTOInput'>>;
  createEmlEq?: Resolver<Maybe<ResolversTypes['EmlEqResponseDTO']>, ParentType, ContextType, RequireFields<MutationcreateEmlEqArgs, 'emlEqRequestDTOInput'>>;
  createOrUpdate?: Resolver<Maybe<ResolversTypes['CustWebLinkResponseDTO']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdateArgs, 'custWebLinkRequestDTOInput'>>;
  createOrUpdate1?: Resolver<Maybe<ResolversTypes['CommentResponseDTO']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdate1Args, 'commentRequestDTOInput'>>;
  createOrUpdate2?: Resolver<Maybe<ResolversTypes['VideoSharingHistoryDTO']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdate2Args, 'videoCutterRequestInput'>>;
  createOrUpdate3?: Resolver<Maybe<ResolversTypes['ConvBookmarkResponseDTO']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdate3Args, 'convBookmarkRequestDTOInput'>>;
  createOrUpdateAccount?: Resolver<Maybe<ResolversTypes['AccountResponseDTO']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdateAccountArgs, 'accountRequestDTOInput'>>;
  createOrUpdateConvAttendee?: Resolver<Maybe<ResolversTypes['ConvAttendeeResponseDTO']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdateConvAttendeeArgs, 'convAttendeeRequestDTOInput' | 'id'>>;
  createOrUpdateConvAttendee1?: Resolver<Maybe<ResolversTypes['ConvAttendeeResponseDTO']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdateConvAttendee1Args, 'convAttendeeRequestDTOInput' | 'id'>>;
  createOrUpdateKeywordCateg?: Resolver<Maybe<ResolversTypes['KeywordCategResponseDTO']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdateKeywordCategArgs, 'keywordCategRequestDTOInput'>>;
  createOrUpdateKeywordTag?: Resolver<Maybe<ResolversTypes['KeywordTagResponseDTO']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdateKeywordTagArgs, 'keywordTagRequestDTOInput'>>;
  createOrUpdateOppty?: Resolver<Maybe<ResolversTypes['OpptyDTO']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdateOpptyArgs, 'id' | 'opptyRequestDTOInput'>>;
  createOrUpdateOppty1?: Resolver<Maybe<ResolversTypes['OpptyDTO']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdateOppty1Args, 'id' | 'opptyRequestDTOInput'>>;
  createOrUpdateOpptyTeam?: Resolver<Maybe<ResolversTypes['OpptyTeamResponseDTO']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdateOpptyTeamArgs, 'opptyTeamRequestDTOInput'>>;
  createOrUpdatePreference?: Resolver<Maybe<ResolversTypes['UserUiPreferenceResponseDto']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdatePreferenceArgs, 'userUiPreferenceRequestDtoInput'>>;
  createOrUpdateRecommendation?: Resolver<Maybe<ResolversTypes['EmpathyMomentRecommendationDTO']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdateRecommendationArgs, 'empathyMomentRecommendationDTOInput'>>;
  createOrUpdateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationcreateOrUpdateUserArgs, 'userRequestDTOInput'>>;
  delete?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteArgs, 'usalesZoommeetingwhitelistInput'>>;
  delete1?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationdelete1Args, 'id'>>;
  delete2?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationdelete2Args, 'id'>>;
  delete3?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationdelete3Args, 'id'>>;
  delete4?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationdelete4Args, 'id'>>;
  delete5?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationdelete5Args, 'id'>>;
  delete6?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationdelete6Args, 'id'>>;
  deletePlaylistMediaClipRel?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeletePlaylistMediaClipRelArgs, 'usalesPlaylistsDeleteMediaClipRelInput'>>;
  deleteTags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteTagsArgs, 'ids'>>;
  findCustomKeyphraseTrendingTopicCount?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationfindCustomKeyphraseTrendingTopicCountArgs, 'advSearchRequestInput'>>;
  findDealDetailsByMode?: Resolver<Maybe<ResolversTypes['DealSummaryDetailResponse']>, ParentType, ContextType, RequireFields<MutationfindDealDetailsByModeArgs, 'advSearchRequestInput' | 'id'>>;
  findKeyphraseTrendingTopicCount?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationfindKeyphraseTrendingTopicCountArgs, 'advSearchRequestInput'>>;
  generateTimeline?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationgenerateTimelineArgs, 'convId'>>;
  getAccountTeamsUsersStats?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamUsersStat']>>>, ParentType, ContextType, RequireFields<MutationgetAccountTeamsUsersStatsArgs, 'advSearchRequestInput'>>;
  getAccountUsersStat?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamAccountUsersStat']>>>, ParentType, ContextType, RequireFields<MutationgetAccountUsersStatArgs, 'advSearchRequestInput'>>;
  getAllActiveUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['QUsageUserPageVisitDto']>>>, ParentType, ContextType, RequireFields<MutationgetAllActiveUsersArgs, 'advSearchRequestInput'>>;
  getAllTeamsUserStats?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamsAccountOpptyUsersStat']>>>, ParentType, ContextType, RequireFields<MutationgetAllTeamsUserStatsArgs, 'advSearchRequestInput'>>;
  getAssessmentByCompany?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationgetAssessmentByCompanyArgs, 'advSearchRequestInput'>>;
  getAssessments?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationgetAssessmentsArgs, 'advSearchRequestInput'>>;
  getAttendeeByMeetingTranscript?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, RequireFields<MutationgetAttendeeByMeetingTranscriptArgs, never>>;
  getAuthCodeAndGenerateToken?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationgetAuthCodeAndGenerateTokenArgs, 'code' | 'idToken' | 'state'>>;
  getAuthUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationgetAuthUrlArgs, 'authRequestInput'>>;
  getAuthUrl1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationgetAuthUrl1Args, 'authRequestInput'>>;
  getAuthUrl2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationgetAuthUrl2Args, 'authRequestInput'>>;
  getClosedDealDetails?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnalyticsCustomerPulseDealResponse']>>>, ParentType, ContextType, RequireFields<MutationgetClosedDealDetailsArgs, 'advSearchRequestInput'>>;
  getCompanyDeals?: Resolver<Maybe<ResolversTypes['DealDetailResponse']>, ParentType, ContextType, RequireFields<MutationgetCompanyDealsArgs, 'advSearchRequestInput'>>;
  getCompanyDealsEQOnRiskScale?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountOpptyEQResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationgetCompanyDealsEQOnRiskScaleArgs, 'advSearchRequestInput'>>;
  getCompanyMeetingStats?: Resolver<Maybe<ResolversTypes['OverallMeetingStatsResponse']>, ParentType, ContextType, RequireFields<MutationgetCompanyMeetingStatsArgs, 'advSearchRequestInput'>>;
  getCompanyParams?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompanyParamResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationgetCompanyParamsArgs, 'usalesCompanyParams2Input'>>;
  getCompanyQUsage?: Resolver<Maybe<ResolversTypes['OverallQUsageResponse']>, ParentType, ContextType, RequireFields<MutationgetCompanyQUsageArgs, 'advSearchRequestInput'>>;
  getContacts?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationgetContactsArgs, 'advSearchRequestInput'>>;
  getConversationByAccount?: Resolver<Maybe<ResolversTypes['AccountActivityResponseDTO']>, ParentType, ContextType, RequireFields<MutationgetConversationByAccountArgs, 'advSearchRequestInput' | 'id'>>;
  getConversationUserStat?: Resolver<Maybe<ResolversTypes['ConvUserStatDTO']>, ParentType, ContextType, RequireFields<MutationgetConversationUserStatArgs, 'advSearchRequestInput'>>;
  getCustomerPulse?: Resolver<Maybe<ResolversTypes['DealSellerPerformanceResponse']>, ParentType, ContextType, RequireFields<MutationgetCustomerPulseArgs, 'usalesAnalyticsCustomerPulseInput'>>;
  getDealActivities?: Resolver<Maybe<Array<Maybe<ResolversTypes['DealActivitiesSummaryResponse']>>>, ParentType, ContextType, RequireFields<MutationgetDealActivitiesArgs, 'advSearchRequestInput' | 'id'>>;
  getDealCountByAccounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountDealResponse']>>>, ParentType, ContextType, RequireFields<MutationgetDealCountByAccountsArgs, 'accountDealRequestInput'>>;
  getDealEQOnRiskScale?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountOpptyEQResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationgetDealEQOnRiskScaleArgs, 'advSearchRequestInput'>>;
  getDealTopics?: Resolver<Maybe<ResolversTypes['DealTopicCoverageResponse']>, ParentType, ContextType, RequireFields<MutationgetDealTopicsArgs, 'advSearchRequestInput'>>;
  getDeals?: Resolver<Maybe<ResolversTypes['DealDetailResponse']>, ParentType, ContextType, RequireFields<MutationgetDealsArgs, 'advSearchRequestInput'>>;
  getEmailByEmlObjId?: Resolver<Maybe<ResolversTypes['EmlResponseDTO']>, ParentType, ContextType, RequireFields<MutationgetEmailByEmlObjIdArgs, 'emlObjId'>>;
  getEmails?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmlResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationgetEmailsArgs, 'usalesEmailsInput'>>;
  getEmpathyAndHesitationTurns?: Resolver<Maybe<ResolversTypes['EmpathyAndHesitationTurnsReportForConvList']>, ParentType, ContextType, RequireFields<MutationgetEmpathyAndHesitationTurnsArgs, 'empathyAndHesitationSearchCriterionInput'>>;
  getFavoriteMeeting?: Resolver<Maybe<ResolversTypes['UserUiPreferenceResponseDto']>, ParentType, ContextType, RequireFields<MutationgetFavoriteMeetingArgs, 'advSearchRequestInput'>>;
  getInvitedUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationgetInvitedUsersArgs, 'advSearchRequestInput'>>;
  getLastMeeting?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationRequest']>>>, ParentType, ContextType, RequireFields<MutationgetLastMeetingArgs, 'usalesConvsLastmeetingInput'>>;
  getMediaClipCount?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationgetMediaClipCountArgs, 'advSearchRequestInput'>>;
  getMediaClipStats?: Resolver<Maybe<ResolversTypes['MediaClipStatsResponseDTO']>, ParentType, ContextType, RequireFields<MutationgetMediaClipStatsArgs, 'advSearchRequestInput'>>;
  getMeetingListBasedOnType?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationRequest']>>>, ParentType, ContextType, RequireFields<MutationgetMeetingListBasedOnTypeArgs, 'advSearchRequestInput'>>;
  getMeetingSentiments?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationgetMeetingSentimentsArgs, 'advSearchRequestInput'>>;
  getMeetingsSharedWithUser?: Resolver<Maybe<ResolversTypes['AdvSearchResponse']>, ParentType, ContextType, RequireFields<MutationgetMeetingsSharedWithUserArgs, 'advSearchRequestInput'>>;
  getMomentsHavingKeyword?: Resolver<Maybe<ResolversTypes['ConversationKeywordSearchResponse']>, ParentType, ContextType, RequireFields<MutationgetMomentsHavingKeywordArgs, 'criterionInput' | 'id'>>;
  getMostPopularKeymoments?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationgetMostPopularKeymomentsArgs, 'advSearchRequestInput'>>;
  getMostSharedMeetings?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostSharedConvAttr']>>>, ParentType, ContextType, RequireFields<MutationgetMostSharedMeetingsArgs, 'advSearchRequestInput'>>;
  getMostViewedMeeting?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostViewedConvAttr']>>>, ParentType, ContextType, RequireFields<MutationgetMostViewedMeetingArgs, 'advSearchRequestInput'>>;
  getOpptyUsersStat?: Resolver<Maybe<ResolversTypes['TeamOpptyUsersStats']>, ParentType, ContextType, RequireFields<MutationgetOpptyUsersStatArgs, 'advSearchRequestInput'>>;
  getPlaylistStats?: Resolver<Maybe<ResolversTypes['PlaylistStatsResponseDTO']>, ParentType, ContextType, RequireFields<MutationgetPlaylistStatsArgs, 'advSearchRequestInput'>>;
  getPlaylistsCount?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationgetPlaylistsCountArgs, 'advSearchRequestInput'>>;
  getPlaylistsCount1?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationgetPlaylistsCount1Args, 'id'>>;
  getPlaylistsCount2?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationgetPlaylistsCount2Args, 'id'>>;
  getSellerEQ?: Resolver<Maybe<ResolversTypes['DealSellerPerformanceResponse']>, ParentType, ContextType, RequireFields<MutationgetSellerEQArgs, 'usalesAnalyticsSellereqInput'>>;
  getSystemProps?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigPropResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationgetSystemPropsArgs, 'usalesConfigprops2Input'>>;
  getTopPageVisitDetails?: Resolver<Maybe<Array<Maybe<ResolversTypes['PageVisitsDto']>>>, ParentType, ContextType, RequireFields<MutationgetTopPageVisitDetailsArgs, 'advSearchRequestInput'>>;
  getUserCallMetr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationgetUserCallMetrArgs, 'advSearchRequestInput'>>;
  getUserCallMetrics?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationgetUserCallMetricsArgs, 'advSearchRequestInput'>>;
  getUsersAuth?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationgetUsersAuthArgs, 'advSearchRequestInput'>>;
  getUsersConvoStat?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamUsersStat']>>>, ParentType, ContextType, RequireFields<MutationgetUsersConvoStatArgs, 'advSearchRequestInput'>>;
  keyPhras1eOccurences?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyphraseTotalCountAttrDTO']>>>, ParentType, ContextType, RequireFields<MutationkeyPhras1eOccurencesArgs, 'advSearchRequestInput'>>;
  keyPhraseOccurences?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyPhraseOccurenceResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationkeyPhraseOccurencesArgs, 'advSearchRequestInput'>>;
  logout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  populate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationpopulateArgs, 'eSPopulateRequestInput'>>;
  postDataByUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationpostDataByUriArgs, 'mindTickleReqInput'>>;
  resetKeyPhrases?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  revoke?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationrevokeArgs, 'authUsersDetailsInput'>>;
  revoke1?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, RequireFields<Mutationrevoke1Args, 'authRevoke2Input' | 'provider'>>;
  saveMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationsaveMessageArgs, 'usalesMeetingCustomDisclaimerInput'>>;
  saveReport?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationsaveReportArgs, 'cspViolationReqInput'>>;
  search?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationsearchArgs, 'eSSearchInput'>>;
  search1?: Resolver<Maybe<Array<Maybe<ResolversTypes['ZoomMeetingWhitelistDTO']>>>, ParentType, ContextType, RequireFields<Mutationsearch1Args, 'advSearchRequestInput'>>;
  search2?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistResponseDTO']>>>, ParentType, ContextType, RequireFields<Mutationsearch2Args, 'advSearchRequestInput'>>;
  search3?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaClipResponseDTO']>>>, ParentType, ContextType, RequireFields<Mutationsearch3Args, 'advSearchRequestInput'>>;
  search4?: Resolver<Maybe<ResolversTypes['KeyMomentResponseDTO']>, ParentType, ContextType, RequireFields<Mutationsearch4Args, 'advSearchRequestInput'>>;
  search5?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmlResponseDTO']>>>, ParentType, ContextType, RequireFields<Mutationsearch5Args, 'advSearchRequestInput'>>;
  search6?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustWebLinkResponseDTO']>>>, ParentType, ContextType, RequireFields<Mutationsearch6Args, 'advSearchRequestInput'>>;
  search7?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvPromiseResponseDTO']>>>, ParentType, ContextType, RequireFields<Mutationsearch7Args, 'advSearchRequestInput'>>;
  search8?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvTopicEpisodeResponseDTO']>>>, ParentType, ContextType, RequireFields<Mutationsearch8Args, 'advSearchRequestInput'>>;
  search9?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentResponseDTO']>>>, ParentType, ContextType, RequireFields<Mutationsearch9Args, 'advSearchRequestInput'>>;
  searchAccountAndContact?: Resolver<Maybe<ResolversTypes['AccountContactSearchResponse']>, ParentType, ContextType, RequireFields<MutationsearchAccountAndContactArgs, 'advSearchRequestInput'>>;
  searchAccountAndContactCount?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationsearchAccountAndContactCountArgs, 'advSearchRequestInput'>>;
  searchAccounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationsearchAccountsArgs, 'advSearchRequestInput'>>;
  searchAccountsCount?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationsearchAccountsCountArgs, 'advSearchRequestInput'>>;
  searchAlerts?: Resolver<Maybe<Array<Maybe<ResolversTypes['AlertResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationsearchAlertsArgs, 'advSearchRequestInput'>>;
  searchContact?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactSearchResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationsearchContactArgs, 'advSearchRequestInput'>>;
  searchEmailSummary?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmailSummaryResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationsearchEmailSummaryArgs, 'advSearchRequestInput'>>;
  searchEvents?: Resolver<Maybe<ResolversTypes['CalenderEventSearchResponse']>, ParentType, ContextType, RequireFields<MutationsearchEventsArgs, 'advSearchRequestInput'>>;
  searchEventsCount?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationsearchEventsCountArgs, 'advSearchRequestInput'>>;
  searchKeywordCateg?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeywordCategResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationsearchKeywordCategArgs, 'advSearchRequestInput'>>;
  searchKeywordCategCount?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationsearchKeywordCategCountArgs, 'advSearchRequestInput'>>;
  searchKeywordCategWithoutTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeywordCategResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationsearchKeywordCategWithoutTagsArgs, 'advSearchRequestInput'>>;
  searchKeywordTag?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeywordTagResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationsearchKeywordTagArgs, 'advSearchRequestInput'>>;
  searchKeywordTagCount?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationsearchKeywordTagCountArgs, 'advSearchRequestInput'>>;
  searchMeetings?: Resolver<Maybe<ResolversTypes['AdvSearchResponse']>, ParentType, ContextType, RequireFields<MutationsearchMeetingsArgs, 'advSearchRequestInput'>>;
  searchMeetingsByAccountOrOppty?: Resolver<Maybe<ResolversTypes['AdvSearchResponse']>, ParentType, ContextType, RequireFields<MutationsearchMeetingsByAccountOrOpptyArgs, 'advSearchRequestInput'>>;
  searchMeetingsCount?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationsearchMeetingsCountArgs, 'advSearchRequestInput'>>;
  searchMoments?: Resolver<Maybe<ResolversTypes['EmpathyChangeMomentResponseDTO']>, ParentType, ContextType, RequireFields<MutationsearchMomentsArgs, 'advSearchRequestInput'>>;
  searchPreference?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserUiPreferenceResponseDto']>>>, ParentType, ContextType, RequireFields<MutationsearchPreferenceArgs, 'advSearchRequestInput'>>;
  searchTeamActivity?: Resolver<Maybe<ResolversTypes['TeamEmailActivityResponseDTO']>, ParentType, ContextType, RequireFields<MutationsearchTeamActivityArgs, 'advSearchRequestInput'>>;
  searchUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationsearchUsersArgs, 'advSearchRequestInput'>>;
  selectCompanyKeywordCategory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationselectCompanyKeywordCategoryArgs, 'advSearchRequestInput'>>;
  sendMessage?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationsendMessageArgs, 'messageRequestDTOInput'>>;
  shareClipExternalUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationshareClipExternalUserArgs, 'shareClipDTOInput'>>;
  shareMeetingExternalUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationshareMeetingExternalUserArgs, 'shareMeetingDTOInput'>>;
  shareMeetingInternalUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationshareMeetingInternalUserArgs, 'shareMeetingDTOInput' | 'type'>>;
  sharePlaylist?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationsharePlaylistArgs, 'shareMeetingDTOInput'>>;
  threadCount?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThreadCountResponse']>>>, ParentType, ContextType, RequireFields<MutationthreadCountArgs, 'advSearchRequestInput'>>;
  updateAccessConsent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationupdateAccessConsentArgs, 'consent'>>;
  updateAccountOpptyEQ?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationupdateAccountOpptyEQArgs, never>>;
  updateAccountOpptyEQ1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateAlert?: Resolver<Maybe<ResolversTypes['AlertResponseDTO']>, ParentType, ContextType, RequireFields<MutationupdateAlertArgs, 'alertRequestDTOInput'>>;
  updateCalendarEvent?: Resolver<Maybe<ResolversTypes['CalendarEvent']>, ParentType, ContextType, RequireFields<MutationupdateCalendarEventArgs, 'calendarEventRequestDTOInput'>>;
  updateConvTopicEpisode?: Resolver<Maybe<ResolversTypes['ConvTopicEpisodeResponseDTO']>, ParentType, ContextType, RequireFields<MutationupdateConvTopicEpisodeArgs, 'convTopicEpisodeRequestDTOInput'>>;
  updateConversation?: Resolver<Maybe<ResolversTypes['ConversationRequest']>, ParentType, ContextType, RequireFields<MutationupdateConversationArgs, 'conversationDTOInput'>>;
  updateEmlEq?: Resolver<Maybe<ResolversTypes['EmlEqResponseDTO']>, ParentType, ContextType, RequireFields<MutationupdateEmlEqArgs, 'emlEqRequestDTOInput'>>;
  updateKeyMoment?: Resolver<Maybe<ResolversTypes['ConvKeyMomentResponseDTO']>, ParentType, ContextType, RequireFields<MutationupdateKeyMomentArgs, 'convKeyMomentRequestDTOInput'>>;
  updatePlaylistMediaClipRel?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdatePlaylistMediaClipRelArgs, 'playlistMediaClipRelRequestDTOInput'>>;
  updateQDetails?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdateQDetailsArgs, never>>;
  updateStatusByIds?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdateStatusByIdsArgs, 'usalesKeywordTagUpdateStatusInput'>>;
  updateTeamAccess?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationupdateTeamAccessArgs, 'enable'>>;
  updateTeamMembersManagerDetails?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationupdateTeamMembersManagerDetailsArgs, 'managerId' | 'usalesUserTeamInput'>>;
  updateUserProxy?: Resolver<Maybe<ResolversTypes['UserDelegateResponseDTO']>, ParentType, ContextType, RequireFields<MutationupdateUserProxyArgs, 'userDelegateRequestDTOInput'>>;
  updateZoomMeetingInvokeBot?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdateZoomMeetingInvokeBotArgs, 'zoomMeetingWhitelistRequestInput'>>;
  updateZoomMeetingWhitelist?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uploadExternalMeeting?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationuploadExternalMeetingArgs, never>>;
  upsert?: Resolver<Maybe<ResolversTypes['PlaylistResponseDTO']>, ParentType, ContextType, RequireFields<MutationupsertArgs, 'playlistRequestDTOInput'>>;
  upsert1?: Resolver<Maybe<ResolversTypes['PlaylistParamResponseDTO']>, ParentType, ContextType, RequireFields<Mutationupsert1Args, 'playlistParamRequestDTOInput'>>;
  upsert2?: Resolver<Maybe<ResolversTypes['MediaClipResponseDTO']>, ParentType, ContextType, RequireFields<Mutationupsert2Args, 'mediaClipRequestDTOInput'>>;
  upsert3?: Resolver<Maybe<ResolversTypes['MediaClipParamResponseDTO']>, ParentType, ContextType, RequireFields<Mutationupsert3Args, 'mediaClipParamRequestDTOInput'>>;
  upsert4?: Resolver<Maybe<ResolversTypes['ConvPromiseResponseDTO']>, ParentType, ContextType, RequireFields<Mutationupsert4Args, 'convPromiseRequestDTOInput'>>;
  upsert5?: Resolver<Maybe<ResolversTypes['ConvParamResponseDTO']>, ParentType, ContextType, RequireFields<Mutationupsert5Args, 'convParamRequestDTOInput'>>;
  upsertCompanyParam?: Resolver<Maybe<ResolversTypes['CompanyParamResponseDTO']>, ParentType, ContextType, RequireFields<MutationupsertCompanyParamArgs, 'companyParamRequestDTOInput'>>;
  upsertCompanyProfile?: Resolver<Maybe<ResolversTypes['CompanyProfileDTO']>, ParentType, ContextType, RequireFields<MutationupsertCompanyProfileArgs, 'companyProfileDTOInput'>>;
  upsertCompanyProfileWithKeywordCategRel?: Resolver<Maybe<ResolversTypes['CompanyProfileKeywordCategRelDTO']>, ParentType, ContextType, RequireFields<MutationupsertCompanyProfileWithKeywordCategRelArgs, 'companyProfileKeywordCategRelDTOInput'>>;
  upsertConfigProp?: Resolver<Maybe<ResolversTypes['ConfigPropResponseDTO']>, ParentType, ContextType, RequireFields<MutationupsertConfigPropArgs, 'configPropRequestDTOInput'>>;
  upsertExternal?: Resolver<Maybe<ResolversTypes['ConvParamResponseDTO']>, ParentType, ContextType, RequireFields<MutationupsertExternalArgs, 'convId'>>;
  upsertLastViewed?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistParamResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationupsertLastViewedArgs, 'playlistParamRequestDTOInput'>>;
  upsertLastViewed1?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaClipParamResponseDTO']>>>, ParentType, ContextType, RequireFields<MutationupsertLastViewed1Args, 'mediaClipParamRequestDTOInput'>>;
  upsertLastViewed2?: Resolver<Maybe<ResolversTypes['ConvParamResponseDTO']>, ParentType, ContextType, RequireFields<MutationupsertLastViewed2Args, 'convParamRequestDTOInput'>>;
}>;

export type KeyPhraseOccurenceContentResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyPhraseOccurenceContentResponseDTO'] = ResolversParentTypes['KeyPhraseOccurenceContentResponseDTO']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keywordTagId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keywordTagVal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VideoSharingHistoryDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VideoSharingHistoryDTO'] = ResolversParentTypes['VideoSharingHistoryDTO']> = ResolversObject<{
  clipEndTimeInSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  clipStartTimeInSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convKeymomentId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fromUserId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  outputFileLocation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  outputTinyUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceFileLocation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  toUserId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserUiPreferenceResponseDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserUiPreferenceResponseDto'] = ResolversParentTypes['UserUiPreferenceResponseDto']> = ResolversObject<{
  favoriteMeetings?: Resolver<Maybe<ResolversTypes['AdvSearchResponse']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  preferenceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  savedJson?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uiPreferenceParamMap?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdvSearchResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AdvSearchResponse'] = ResolversParentTypes['AdvSearchResponse']> = ResolversObject<{
  searchResults?: Resolver<Maybe<Array<Maybe<ResolversTypes['SearchResult']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = ResolversObject<{
  entities?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  resultCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmpathyMomentRecommendationDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmpathyMomentRecommendationDTO'] = ResolversParentTypes['EmpathyMomentRecommendationDTO']> = ResolversObject<{
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  detectedBehaviour?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  empathyMomentId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  originalUtterance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recommendation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suggestedType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suggestedUtterance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamAccountUsersStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TeamAccountUsersStat'] = ResolversParentTypes['TeamAccountUsersStat']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['AccountResponseDTO']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentResponseDTO']>>>, ParentType, ContextType>;
  conversations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationRequest']>>>, ParentType, ContextType>;
  oppties?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpptyDTO']>>>, ParentType, ContextType>;
  usersStats?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamUsersStat']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QUsageUserPageVisitDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QUsageUserPageVisitDto'] = ResolversParentTypes['QUsageUserPageVisitDto']> = ResolversObject<{
  avgUsageTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  daysActive?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastVisit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  noOfVisits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  usageTimePerDay?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  usageTrending?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamsAccountOpptyUsersStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TeamsAccountOpptyUsersStat'] = ResolversParentTypes['TeamsAccountOpptyUsersStat']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['AccountResponseDTO']>, ParentType, ContextType>;
  deals?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamOpptyUsersStat']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnalyticsCustomerPulseDealResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AnalyticsCustomerPulseDealResponse'] = ResolversParentTypes['AnalyticsCustomerPulseDealResponse']> = ResolversObject<{
  accountId?: Resolver<Maybe<ResolversTypes['ConvAccountDTO']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opptyCloseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opptyStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  trend?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvEQAttr']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvEQAttrResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvEQAttr'] = ResolversParentTypes['ConvEQAttr']> = ResolversObject<{
  accountId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  emotionalScore2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingEndTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingEngagement?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meetingSentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meetingStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OverallMeetingStatsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OverallMeetingStatsResponse'] = ResolversParentTypes['OverallMeetingStatsResponse']> = ResolversObject<{
  cvmResponse?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externallySharedCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fullyProcessedCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fullyProcessedVennData?: Resolver<Maybe<Array<Maybe<ResolversTypes['VennDiagramData']>>>, ParentType, ContextType>;
  internalMeetingsCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  otherMeetingsCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pausedOrRemovedCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  playedCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reviewedCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VennDiagramDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VennDiagramData'] = ResolversParentTypes['VennDiagramData']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OverallQUsageResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OverallQUsageResponse'] = ResolversParentTypes['OverallQUsageResponse']> = ResolversObject<{
  activeUsersCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  activeUsersTrend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  activeUsersTrendPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  authorizationTrend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorizationTrendPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averageUsageTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averageUsageTimeTrend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  averageUsageTimeTrendPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averageVisits?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  averageVisitsTrend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  averageVisitsTrendPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  calendarAuthorizationCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currentUsersCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  emailAuthorizationCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gmailAuthorizationCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  googleCalendarAuthorizationCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  invitedUsersCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  invitedUsersTrend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitedUsersTrendPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  outlookAuthorizationCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  outlookCalendarAuthorizationCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  passwordResetRequiredUsersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  realTimeUsersCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  realTimeUsersTrend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  realTimeUsersTrendPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  teamsAuthorizationCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  usersCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  usersTrend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usersTrendPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  webexAuthorizationCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  zoomAuthorizationCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountActivityResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountActivityResponseDTO'] = ResolversParentTypes['AccountActivityResponseDTO']> = ResolversObject<{
  accountTeamID?: Resolver<Maybe<ResolversTypes['IdNameDTO']>, ParentType, ContextType>;
  contacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactActivity']>>>, ParentType, ContextType>;
  conversation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  conversations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationResponseDTO']>>>, ParentType, ContextType>;
  crmAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oppties?: Resolver<Maybe<Array<Maybe<ResolversTypes['Oppty2']>>>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  standing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sticker?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConversationResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConversationResponseDTO'] = ResolversParentTypes['ConversationResponseDTO']> = ResolversObject<{
  accountID?: Resolver<Maybe<ResolversTypes['ConvAccountDTO']>, ParentType, ContextType>;
  aiViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attendees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attendee']>>>, ParentType, ContextType>;
  audioMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confidential?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  contentViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cvProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dataFusionProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalConvId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalMeetingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  galleryViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostID?: Resolver<Maybe<ResolversTypes['ConvUsersDTO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyMoments?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyMoment']>>>, ParentType, ContextType>;
  lastChunk?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meetingEndTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingTopic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyID?: Resolver<Maybe<ResolversTypes['IdNameDTO']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  processedFlag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promises?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvPromiseResponseDTO']>>>, ParentType, ContextType>;
  recordingStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score4']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speakerTimelineLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speakerViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  textKmProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  textMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  textSentProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tonalProcDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  transcriptLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvUserStatDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvUserStatDTO'] = ResolversParentTypes['ConvUserStatDTO']> = ResolversObject<{
  allMeetingCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  favoriteMeetingCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meetingAttendedCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meetingSharedWithMeCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealSellerPerformanceResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealSellerPerformanceResponse'] = ResolversParentTypes['DealSellerPerformanceResponse']> = ResolversObject<{
  dealValueImpactedByQ?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dealsImpactedByQ?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lostAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lostCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  performance?: Resolver<Maybe<Array<Maybe<ResolversTypes['Performance4']>>>, ParentType, ContextType>;
  wonAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wonCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Performance4Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Performance4'] = ResolversParentTypes['Performance4']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dealCycle?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lostDeals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  sellerPerformanceScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sellerSentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sentimentRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  wonDeals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  wonPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealActivitiesSummaryResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealActivitiesSummaryResponse'] = ResolversParentTypes['DealActivitiesSummaryResponse']> = ResolversObject<{
  activityDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attendees?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  attendeesName?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountDealResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountDealResponse'] = ResolversParentTypes['AccountDealResponse']> = ResolversObject<{
  accountId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dealCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealTopicCoverageResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealTopicCoverageResponse'] = ResolversParentTypes['DealTopicCoverageResponse']> = ResolversObject<{
  oppty?: Resolver<Maybe<ResolversTypes['DealSummaryResponse']>, ParentType, ContextType>;
  suggestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  topics?: Resolver<Maybe<Array<Maybe<ResolversTypes['DealTopicData']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DealTopicDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DealTopicData'] = ResolversParentTypes['DealTopicData']> = ResolversObject<{
  conversations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvTopicsResponse']>>>, ParentType, ContextType>;
  currentDealTopicCoveragePercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currentDealTopicCoverageValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealDealStageWiningPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealDealStageWiningValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealDealWinningPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  idealDealWinningValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  topic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvTopicsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvTopicsResponse'] = ResolversParentTypes['ConvTopicsResponse']> = ResolversObject<{
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  topic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalDuration?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmlResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmlResponseDTO'] = ResolversParentTypes['EmlResponseDTO']> = ResolversObject<{
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sendDatetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  threadId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmpathyAndHesitationTurnsReportForConvListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmpathyAndHesitationTurnsReportForConvList'] = ResolversParentTypes['EmpathyAndHesitationTurnsReportForConvList']> = ResolversObject<{
  empathyAndHesitationTurnsReportMap?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaClipStatsResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaClipStatsResponseDTO'] = ResolversParentTypes['MediaClipStatsResponseDTO']> = ResolversObject<{
  createdCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaClipStatsAttr']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaClipStatsAttrResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaClipStatsAttr'] = ResolversParentTypes['MediaClipStatsAttr']> = ResolversObject<{
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mediaClipId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meetingTopic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shared?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConversationKeywordSearchResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConversationKeywordSearchResponse'] = ResolversParentTypes['ConversationKeywordSearchResponse']> = ResolversObject<{
  searchResult?: Resolver<Maybe<ResolversTypes['SearchResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MostSharedConvAttrResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MostSharedConvAttr'] = ResolversParentTypes['MostSharedConvAttr']> = ResolversObject<{
  accountId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  accountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingSentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meetingStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingTopic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyCloseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opptyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MostViewedConvAttrResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MostViewedConvAttr'] = ResolversParentTypes['MostViewedConvAttr']> = ResolversObject<{
  accountId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  accountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingSentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meetingStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingTopic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyCloseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opptyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlaylistStatsResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlaylistStatsResponseDTO'] = ResolversParentTypes['PlaylistStatsResponseDTO']> = ResolversObject<{
  createdCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistStatsAttr']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlaylistStatsAttrResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlaylistStatsAttr'] = ResolversParentTypes['PlaylistStatsAttr']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playlistId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shared?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageVisitsDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageVisitsDto'] = ResolversParentTypes['PageVisitsDto']> = ResolversObject<{
  noOfVisits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qUsersUsage?: Resolver<Maybe<Array<Maybe<ResolversTypes['QUsageUserPageVisitDto']>>>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeyphraseTotalCountAttrDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyphraseTotalCountAttrDTO'] = ResolversParentTypes['KeyphraseTotalCountAttrDTO']> = ResolversObject<{
  keywordTagId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tagvalue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeyPhraseOccurenceResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyPhraseOccurenceResponseDTO'] = ResolversParentTypes['KeyPhraseOccurenceResponseDTO']> = ResolversObject<{
  companyAvgSentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  companyKeyPhraseIdealValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  companyKeyPhraseTotalCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keywordTagId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keywordTagVal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamAvgSentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  teamKeyPhraseIdealValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  teamKeyPhraseTotalCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyPhraseUser']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeyPhraseUserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyPhraseUser'] = ResolversParentTypes['KeyPhraseUser']> = ResolversObject<{
  avgSentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  conversationId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occurences?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyPhraseOccurence']>>>, ParentType, ContextType>;
  roleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeyPhraseOccurenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyPhraseOccurence'] = ResolversParentTypes['KeyPhraseOccurence']> = ResolversObject<{
  conversationId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ZoomMeetingWhitelistDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ZoomMeetingWhitelistDTO'] = ResolversParentTypes['ZoomMeetingWhitelistDTO']> = ResolversObject<{
  authorizedForTeams?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  authorizedForWebex?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invokeBot?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zoomHostEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zoomHostId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zoomMeetingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeyMomentResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyMomentResponseDTO'] = ResolversParentTypes['KeyMomentResponseDTO']> = ResolversObject<{
  convKeyMoments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvKeyMoments2']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvKeyMoments2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvKeyMoments2'] = ResolversParentTypes['ConvKeyMoments2']> = ResolversObject<{
  convID?: Resolver<Maybe<ResolversTypes['ConversationDTO']>, ParentType, ContextType>;
  keyMoments6?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyMoment']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConversationDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConversationDTO'] = ResolversParentTypes['ConversationDTO']> = ResolversObject<{
  accountId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  aiViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  audioMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confidential?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  contentViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalConvId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalMeetingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  galleryViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingEndTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meetingTopic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recordingStartTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speakerTimelineLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speakerViewVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  textMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transcriptLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountContactSearchResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountContactSearchResponse'] = ResolversParentTypes['AccountContactSearchResponse']> = ResolversObject<{
  account?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountContactResponse']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountContactResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountContactResponse'] = ResolversParentTypes['AccountContactResponse']> = ResolversObject<{
  accountTeamID?: Resolver<Maybe<ResolversTypes['IdNameDTO']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactResponse']>>>, ParentType, ContextType>;
  crmAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opptyTeam?: Resolver<Maybe<ResolversTypes['OpptyTeam']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sticker?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactSearchResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContactSearchResponseDTO'] = ResolversParentTypes['ContactSearchResponseDTO']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  contacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contact']>>>, ParentType, ContextType>;
  insertBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oppty?: Resolver<Maybe<ResolversTypes['Oppty2']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateBy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmailSummaryResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmailSummaryResponseDTO'] = ResolversParentTypes['EmailSummaryResponseDTO']> = ResolversObject<{
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sendDatetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  threadId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CalenderEventSearchResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CalenderEventSearchResponse'] = ResolversParentTypes['CalenderEventSearchResponse']> = ResolversObject<{
  searchResult?: Resolver<Maybe<ResolversTypes['SearchResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmpathyChangeMomentResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmpathyChangeMomentResponseDTO'] = ResolversParentTypes['EmpathyChangeMomentResponseDTO']> = ResolversObject<{
  convEmpathyChangeMoments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvEmpathyChangeMoments2']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvEmpathyChangeMoments2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvEmpathyChangeMoments2'] = ResolversParentTypes['ConvEmpathyChangeMoments2']> = ResolversObject<{
  convID?: Resolver<Maybe<ResolversTypes['ConversationDTO']>, ParentType, ContextType>;
  empathyChangeMoments?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmpathyChangeMoment']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmpathyChangeMomentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmpathyChangeMoment'] = ResolversParentTypes['EmpathyChangeMoment']> = ResolversObject<{
  averageEmpathy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convStartOffset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  empathyMomentRecs?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmpathyMomentRec']>>>, ParentType, ContextType>;
  momentId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  polarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usersId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmpathyMomentRecResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EmpathyMomentRec'] = ResolversParentTypes['EmpathyMomentRec']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  detectedBehaviour?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  momentId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  originalUtterance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recommendation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suggestedType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suggestedUtterance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamEmailActivityResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TeamEmailActivityResponseDTO'] = ResolversParentTypes['TeamEmailActivityResponseDTO']> = ResolversObject<{
  dates?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  emails?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThreadCountResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThreadCountResponse'] = ResolversParentTypes['ThreadCountResponse']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  threadCount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvParamResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvParamResponseDTO'] = ResolversParentTypes['ConvParamResponseDTO']> = ResolversObject<{
  agentSpoken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  convId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  custSpoken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  engagement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalMeetingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  frame?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  introVideoMediaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  messages?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  performance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  probability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  questions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  silences?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  spoken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanyProfileKeywordCategRelDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CompanyProfileKeywordCategRelDTO'] = ResolversParentTypes['CompanyProfileKeywordCategRelDTO']> = ResolversObject<{
  companyProfileId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  insertTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keywordCategId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  KeyPhraseExpertResponseDTO?: KeyPhraseExpertResponseDTOResolvers<ContextType>;
  AccountResponseDTO?: AccountResponseDTOResolvers<ContextType>;
  IdNameDTO?: IdNameDTOResolvers<ContextType>;
  ContactActivity?: ContactActivityResolvers<ContextType>;
  Conversation2?: Conversation2Resolvers<ContextType>;
  ConversationData?: ConversationDataResolvers<ContextType>;
  Score4?: Score4Resolvers<ContextType>;
  ConversationRequest?: ConversationRequestResolvers<ContextType>;
  ConvAccountDTO?: ConvAccountDTOResolvers<ContextType>;
  Attendee?: AttendeeResolvers<ContextType>;
  AttendeeMetric?: AttendeeMetricResolvers<ContextType>;
  UniScore?: UniScoreResolvers<ContextType>;
  Trends?: TrendsResolvers<ContextType>;
  ConvUsersDTO?: ConvUsersDTOResolvers<ContextType>;
  KeyMoment?: KeyMomentResolvers<ContextType>;
  ConvBookmarkResponseDTO?: ConvBookmarkResponseDTOResolvers<ContextType>;
  ConvDTO?: ConvDTOResolvers<ContextType>;
  KeyCategory?: KeyCategoryResolvers;
  KeyMomentText?: KeyMomentTextResolvers<ContextType>;
  KeyTag?: KeyTagResolvers<ContextType>;
  ConvPromiseResponseDTO?: ConvPromiseResponseDTOResolvers<ContextType>;
  Oppty2?: Oppty2Resolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
  MeetingMetadata?: MeetingMetadataResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  MeetingMetadataParam?: MeetingMetadataParamResolvers<ContextType>;
  OpptyContactRel?: OpptyContactRelResolvers<ContextType>;
  OpptyTeam?: OpptyTeamResolvers<ContextType>;
  OpptyTeamParam?: OpptyTeamParamResolvers<ContextType>;
  Users2?: Users2Resolvers<ContextType>;
  Alert?: AlertResolvers<ContextType>;
  CustomerDomainWhiteList2?: CustomerDomainWhiteList2Resolvers<ContextType>;
  CustomerDomainWhiteListParam?: CustomerDomainWhiteListParamResolvers<ContextType>;
  AccountTeam?: AccountTeamResolvers<ContextType>;
  AccountTeamParam?: AccountTeamParamResolvers<ContextType>;
  UsersRoleRel?: UsersRoleRelResolvers<ContextType>;
  UserUiPreference?: UserUiPreferenceResolvers<ContextType>;
  UserUiPreferenceParam?: UserUiPreferenceParamResolvers<ContextType>;
  OpptyParam?: OpptyParamResolvers<ContextType>;
  OpptyDTO?: OpptyDTOResolvers<ContextType>;
  AccountTeamResponse?: AccountTeamResponseResolvers<ContextType>;
  AccountTeamDTO?: AccountTeamDTOResolvers<ContextType>;
  AggrConvMetrics?: AggrConvMetricsResolvers<ContextType>;
  AlertResponseDTO?: AlertResponseDTOResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  CompanyProfileDTO?: CompanyProfileDTOResolvers<ContextType>;
  UserManagerDTO?: UserManagerDTOResolvers<ContextType>;
  CompanyParamResponseDTO?: CompanyParamResponseDTOResolvers<ContextType>;
  ConfigPropResponseDTO?: ConfigPropResponseDTOResolvers<ContextType>;
  ConversationAttendeesResponse?: ConversationAttendeesResponseResolvers<ContextType>;
  CommentResponseDTO?: CommentResponseDTOResolvers<ContextType>;
  KeywordCategResponseDTO?: KeywordCategResponseDTOResolvers<ContextType>;
  KeywordTagResponseDTO?: KeywordTagResponseDTOResolvers<ContextType>;
  CompanySlideFirstResponse?: CompanySlideFirstResponseResolvers<ContextType>;
  SlideFirst?: SlideFirstResolvers<ContextType>;
  ContactMetricsResponse?: ContactMetricsResponseResolvers<ContextType>;
  ContactMethodDTO?: ContactMethodDTOResolvers<ContextType>;
  ContactMethodParam?: ContactMethodParamResolvers<ContextType>;
  ContactMethod?: ContactMethodResolvers<ContextType>;
  ConvAttendeeResponseDTO?: ConvAttendeeResponseDTOResolvers<ContextType>;
  ConvMetricsResponse?: ConvMetricsResponseResolvers<ContextType>;
  ConversationAttributionLogRsp?: ConversationAttributionLogRspResolvers<ContextType>;
  AccountPromisesResponseDTO?: AccountPromisesResponseDTOResolvers<ContextType>;
  Promise?: PromiseResolvers<ContextType>;
  ConvInfo?: ConvInfoResolvers<ContextType>;
  DealInfo?: DealInfoResolvers<ContextType>;
  ConvTopicEpisodeResponseDTO?: ConvTopicEpisodeResponseDTOResolvers<ContextType>;
  ConvEQResponseDTO?: ConvEQResponseDTOResolvers<ContextType>;
  ConversationDetailResponse?: ConversationDetailResponseResolvers<ContextType>;
  DealAccount?: DealAccountResolvers<ContextType>;
  ConvNextAction?: ConvNextActionResolvers<ContextType>;
  DealSummaryDetailResponse?: DealSummaryDetailResponseResolvers<ContextType>;
  UserActivity?: UserActivityResolvers<ContextType>;
  DealOppty?: DealOpptyResolvers<ContextType>;
  ConvoStatResponse?: ConvoStatResponseResolvers<ContextType>;
  ConvoStats?: ConvoStatsResolvers<ContextType>;
  CurrentEQForOpptyResponse?: CurrentEQForOpptyResponseResolvers<ContextType>;
  DealDetailResponse?: DealDetailResponseResolvers<ContextType>;
  DealSearchResult?: DealSearchResultResolvers<ContextType>;
  DealEntity?: DealEntityResolvers<ContextType>;
  DealData?: DealDataResolvers<ContextType>;
  AccountOpptyEQResponseDTO?: AccountOpptyEQResponseDTOResolvers<ContextType>;
  DealNextAction?: DealNextActionResolvers<ContextType>;
  CustWebLinkResponseDTO?: CustWebLinkResponseDTOResolvers<ContextType>;
  DealSummaryTrendResponse?: DealSummaryTrendResponseResolvers<ContextType>;
  DealConvoStat?: DealConvoStatResolvers<ContextType>;
  Stages?: StagesResolvers<ContextType>;
  DealStat?: DealStatResolvers<ContextType>;
  DealSummaryResponse?: DealSummaryResponseResolvers<ContextType>;
  Diarization?: DiarizationResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  Option?: OptionResolvers<ContextType>;
  EmlEqResponseDTO?: EmlEqResponseDTOResolvers<ContextType>;
  EmlObjResponseDTO?: EmlObjResponseDTOResolvers<ContextType>;
  EmlBody2?: EmlBody2Resolvers<ContextType>;
  EmlObj?: EmlObjResolvers<ContextType>;
  EmlEq?: EmlEqResolvers<ContextType>;
  EmlMetadata?: EmlMetadataResolvers<ContextType>;
  EmlMetadataParam?: EmlMetadataParamResolvers<ContextType>;
  EmlObjParam?: EmlObjParamResolvers<ContextType>;
  EmlBodyParam?: EmlBodyParamResolvers<ContextType>;
  EmpathyAndHesitationTurnsReport?: EmpathyAndHesitationTurnsReportResolvers<ContextType>;
  EmpathyChangeDetails?: EmpathyChangeDetailsResolvers<ContextType>;
  HesitationChangeDetails?: HesitationChangeDetailsResolvers<ContextType>;
  CalendarEvent?: CalendarEventResolvers<ContextType>;
  CalendarEventAttendee?: CalendarEventAttendeeResolvers<ContextType>;
  KeyPhraseResponse?: KeyPhraseResponseResolvers<ContextType>;
  TeamOpptyUsersStats?: TeamOpptyUsersStatsResolvers<ContextType>;
  IdealConvEQ?: IdealConvEQResolvers<ContextType>;
  TeamUsersStat?: TeamUsersStatResolvers<ContextType>;
  UsersStat?: UsersStatResolvers<ContextType>;
  TeamOpptyUsersStat?: TeamOpptyUsersStatResolvers<ContextType>;
  TeamUnattributedUsersStat?: TeamUnattributedUsersStatResolvers<ContextType>;
  MediaClipResponseDTO?: MediaClipResponseDTOResolvers<ContextType>;
  ConvKeyMomentResponseDTO?: ConvKeyMomentResponseDTOResolvers<ContextType>;
  ConvOpptyDTO?: ConvOpptyDTOResolvers<ContextType>;
  MediaClipParamResponseDTO?: MediaClipParamResponseDTOResolvers<ContextType>;
  ConversationSummaryResponse?: ConversationSummaryResponseResolvers<ContextType>;
  Datum?: DatumResolvers<ContextType>;
  ConvAttendeeAttr?: ConvAttendeeAttrResolvers<ContextType>;
  Opportunity?: OpportunityResolvers<ContextType>;
  OpptyEqbyStageResponseDTO?: OpptyEqbyStageResponseDTOResolvers<ContextType>;
  OpptyTeamResponseDTO?: OpptyTeamResponseDTOResolvers<ContextType>;
  PlaylistResponseDTO?: PlaylistResponseDTOResolvers<ContextType>;
  PlaylistParamResponseDTO?: PlaylistParamResponseDTOResolvers<ContextType>;
  SharedMemberDTO?: SharedMemberDTOResolvers<ContextType>;
  ConvSharedViewData?: ConvSharedViewDataResolvers<ContextType>;
  ConvSlideFirstResponse?: ConvSlideFirstResponseResolvers<ContextType>;
  SummaryReportDTO?: SummaryReportDTOResolvers<ContextType>;
  ConvTimeline?: ConvTimelineResolvers<ContextType>;
  TrendEQForOpptyResponse?: TrendEQForOpptyResponseResolvers<ContextType>;
  UserDelegateResponseDTO?: UserDelegateResponseDTOResolvers<ContextType>;
  ContactResponse?: ContactResponseResolvers<ContextType>;
  LastConv?: LastConvResolvers<ContextType>;
  NextConv?: NextConvResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  KeyPhraseOccurenceContentResponseDTO?: KeyPhraseOccurenceContentResponseDTOResolvers<ContextType>;
  VideoSharingHistoryDTO?: VideoSharingHistoryDTOResolvers<ContextType>;
  UserUiPreferenceResponseDto?: UserUiPreferenceResponseDtoResolvers<ContextType>;
  AdvSearchResponse?: AdvSearchResponseResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
  EmpathyMomentRecommendationDTO?: EmpathyMomentRecommendationDTOResolvers<ContextType>;
  TeamAccountUsersStat?: TeamAccountUsersStatResolvers<ContextType>;
  QUsageUserPageVisitDto?: QUsageUserPageVisitDtoResolvers<ContextType>;
  TeamsAccountOpptyUsersStat?: TeamsAccountOpptyUsersStatResolvers<ContextType>;
  AnalyticsCustomerPulseDealResponse?: AnalyticsCustomerPulseDealResponseResolvers<ContextType>;
  ConvEQAttr?: ConvEQAttrResolvers<ContextType>;
  OverallMeetingStatsResponse?: OverallMeetingStatsResponseResolvers<ContextType>;
  VennDiagramData?: VennDiagramDataResolvers<ContextType>;
  OverallQUsageResponse?: OverallQUsageResponseResolvers<ContextType>;
  AccountActivityResponseDTO?: AccountActivityResponseDTOResolvers<ContextType>;
  ConversationResponseDTO?: ConversationResponseDTOResolvers<ContextType>;
  ConvUserStatDTO?: ConvUserStatDTOResolvers<ContextType>;
  DealSellerPerformanceResponse?: DealSellerPerformanceResponseResolvers<ContextType>;
  Performance4?: Performance4Resolvers<ContextType>;
  DealActivitiesSummaryResponse?: DealActivitiesSummaryResponseResolvers<ContextType>;
  AccountDealResponse?: AccountDealResponseResolvers<ContextType>;
  DealTopicCoverageResponse?: DealTopicCoverageResponseResolvers<ContextType>;
  DealTopicData?: DealTopicDataResolvers<ContextType>;
  ConvTopicsResponse?: ConvTopicsResponseResolvers<ContextType>;
  EmlResponseDTO?: EmlResponseDTOResolvers<ContextType>;
  EmpathyAndHesitationTurnsReportForConvList?: EmpathyAndHesitationTurnsReportForConvListResolvers<ContextType>;
  MediaClipStatsResponseDTO?: MediaClipStatsResponseDTOResolvers<ContextType>;
  MediaClipStatsAttr?: MediaClipStatsAttrResolvers<ContextType>;
  ConversationKeywordSearchResponse?: ConversationKeywordSearchResponseResolvers<ContextType>;
  MostSharedConvAttr?: MostSharedConvAttrResolvers<ContextType>;
  MostViewedConvAttr?: MostViewedConvAttrResolvers<ContextType>;
  PlaylistStatsResponseDTO?: PlaylistStatsResponseDTOResolvers<ContextType>;
  PlaylistStatsAttr?: PlaylistStatsAttrResolvers<ContextType>;
  PageVisitsDto?: PageVisitsDtoResolvers<ContextType>;
  KeyphraseTotalCountAttrDTO?: KeyphraseTotalCountAttrDTOResolvers<ContextType>;
  KeyPhraseOccurenceResponseDTO?: KeyPhraseOccurenceResponseDTOResolvers<ContextType>;
  KeyPhraseUser?: KeyPhraseUserResolvers<ContextType>;
  KeyPhraseOccurence?: KeyPhraseOccurenceResolvers<ContextType>;
  ZoomMeetingWhitelistDTO?: ZoomMeetingWhitelistDTOResolvers<ContextType>;
  KeyMomentResponseDTO?: KeyMomentResponseDTOResolvers<ContextType>;
  ConvKeyMoments2?: ConvKeyMoments2Resolvers<ContextType>;
  ConversationDTO?: ConversationDTOResolvers<ContextType>;
  AccountContactSearchResponse?: AccountContactSearchResponseResolvers<ContextType>;
  AccountContactResponse?: AccountContactResponseResolvers<ContextType>;
  ContactSearchResponseDTO?: ContactSearchResponseDTOResolvers<ContextType>;
  EmailSummaryResponseDTO?: EmailSummaryResponseDTOResolvers<ContextType>;
  CalenderEventSearchResponse?: CalenderEventSearchResponseResolvers<ContextType>;
  EmpathyChangeMomentResponseDTO?: EmpathyChangeMomentResponseDTOResolvers<ContextType>;
  ConvEmpathyChangeMoments2?: ConvEmpathyChangeMoments2Resolvers<ContextType>;
  EmpathyChangeMoment?: EmpathyChangeMomentResolvers<ContextType>;
  EmpathyMomentRec?: EmpathyMomentRecResolvers<ContextType>;
  TeamEmailActivityResponseDTO?: TeamEmailActivityResponseDTOResolvers<ContextType>;
  ThreadCountResponse?: ThreadCountResponseResolvers<ContextType>;
  ConvParamResponseDTO?: ConvParamResponseDTOResolvers<ContextType>;
  CompanyProfileKeywordCategRelDTO?: CompanyProfileKeywordCategRelDTOResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MeshContext> = Resolvers<ContextType>;

import { MeshContext as BaseMeshContext } from '@graphql-mesh/runtime';

import { SelectionSetParamOrFactory } from '@graphql-mesh/types';

export type QueryWeatherbitIoSdk = {
  accessTokenForAuthenticatedUser: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['accessTokenForAuthenticatedUser']>,
  fetchKeyPhraseExpert: (params: {
      root?: any;
      args: QueryfetchKeyPhraseExpertArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['fetchKeyPhraseExpert']>,
  generateAccessToken: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['generateAccessToken']>,
  generateRefreshToken: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['generateRefreshToken']>,
  getAccessConsent: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAccessConsent']>,
  getAccountById: (params: {
      root?: any;
      args: QuerygetAccountByIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAccountById']>,
  getAccountOpptyByAccount: (params: {
      root?: any;
      args: QuerygetAccountOpptyByAccountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAccountOpptyByAccount']>,
  getAccountTeamByAccount: (params: {
      root?: any;
      args: QuerygetAccountTeamByAccountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAccountTeamByAccount']>,
  getAccounts: (params: {
      root?: any;
      args: QuerygetAccountsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAccounts']>,
  getAggrConvMetrics: (params: {
      root?: any;
      args: QuerygetAggrConvMetricsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAggrConvMetrics']>,
  getAggrConvMetricsByParticipant: (params: {
      root?: any;
      args: QuerygetAggrConvMetricsByParticipantArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAggrConvMetricsByParticipant']>,
  getAlertById: (params: {
      root?: any;
      args: QuerygetAlertByIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAlertById']>,
  getAlertByUser: (params: {
      root?: any;
      args: QuerygetAlertByUserArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAlertByUser']>,
  getAllCompanyParams: (params: {
      root?: any;
      args: QuerygetAllCompanyParamsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAllCompanyParams']>,
  getAllCurrentSystemProp: (params: {
      root?: any;
      args: QuerygetAllCurrentSystemPropArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAllCurrentSystemProp']>,
  getAttendees: (params: {
      root?: any;
      args: QuerygetAttendeesArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAttendees']>,
  getAuthCodeAndGenerateToken1: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAuthCodeAndGenerateToken1']>,
  getAuthUrl3: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAuthUrl3']>,
  getAuthUrl4: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAuthUrl4']>,
  getAuthUrl5: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAuthUrl5']>,
  getAuthUrl6: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getAuthUrl6']>,
  getBookmarksByConvId: (params: {
      root?: any;
      args: QuerygetBookmarksByConvIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getBookmarksByConvId']>,
  getBookmarksByConvKeyMomentId: (params: {
      root?: any;
      args: QuerygetBookmarksByConvKeyMomentIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getBookmarksByConvKeyMomentId']>,
  getCommentByConvId: (params: {
      root?: any;
      args: QuerygetCommentByConvIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getCommentByConvId']>,
  getCommentByConvKeyMomentId: (params: {
      root?: any;
      args: QuerygetCommentByConvKeyMomentIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getCommentByConvKeyMomentId']>,
  getCompanyCategAndSubCateg: (params: {
      root?: any;
      args: QuerygetCompanyCategAndSubCategArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getCompanyCategAndSubCateg']>,
  getCompanyProfile: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getCompanyProfile']>,
  getCompanySlideFirst: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getCompanySlideFirst']>,
  getContactEQForOppty: (params: {
      root?: any;
      args: QuerygetContactEQForOpptyArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getContactEQForOppty']>,
  getContactEmailsCount: (params: {
      root?: any;
      args: QuerygetContactEmailsCountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getContactEmailsCount']>,
  getContactMetrics: (params: {
      root?: any;
      args: QuerygetContactMetricsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getContactMetrics']>,
  getContactsEQForOppty: (params: {
      root?: any;
      args: QuerygetContactsEQForOpptyArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getContactsEQForOppty']>,
  getConvAttendeeTeam: (params: {
      root?: any;
      args: QuerygetConvAttendeeTeamArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getConvAttendeeTeam']>,
  getConvAttendeeTeamById: (params: {
      root?: any;
      args: QuerygetConvAttendeeTeamByIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getConvAttendeeTeamById']>,
  getConvMetrics: (params: {
      root?: any;
      args: QuerygetConvMetricsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getConvMetrics']>,
  getConvModLog: (params: {
      root?: any;
      args: QuerygetConvModLogArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getConvModLog']>,
  getConvPromises: (params: {
      root?: any;
      args: QuerygetConvPromisesArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getConvPromises']>,
  getConvStatus: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getConvStatus']>,
  getConvTopicEpisodeById: (params: {
      root?: any;
      args: QuerygetConvTopicEpisodeByIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getConvTopicEpisodeById']>,
  getConvTrends: (params: {
      root?: any;
      args: QuerygetConvTrendsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getConvTrends']>,
  getConversation: (params: {
      root?: any;
      args: QuerygetConversationArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getConversation']>,
  getConversationById: (params: {
      root?: any;
      args: QuerygetConversationByIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getConversationById']>,
  getConversationDetail: (params: {
      root?: any;
      args: QuerygetConversationDetailArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getConversationDetail']>,
  getConversationPreviewByConversation: (params: {
      root?: any;
      args: QuerygetConversationPreviewByConversationArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getConversationPreviewByConversation']>,
  getConvostats: (params: {
      root?: any;
      args: QuerygetConvostatsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getConvostats']>,
  getCoursesForUserEmail: (params: {
      root?: any;
      args: QuerygetCoursesForUserEmailArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getCoursesForUserEmail']>,
  getCurrentCompanyProp: (params: {
      root?: any;
      args: QuerygetCurrentCompanyPropArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getCurrentCompanyProp']>,
  getCurrentEQForContact: (params: {
      root?: any;
      args: QuerygetCurrentEQForContactArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getCurrentEQForContact']>,
  getCurrentEQForOppty: (params: {
      root?: any;
      args: QuerygetCurrentEQForOpptyArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getCurrentEQForOppty']>,
  getCurrentEqForAccount: (params: {
      root?: any;
      args: QuerygetCurrentEqForAccountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getCurrentEqForAccount']>,
  getCurrentSystemProp: (params: {
      root?: any;
      args: QuerygetCurrentSystemPropArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getCurrentSystemProp']>,
  getCurrentUserDetail: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getCurrentUserDetail']>,
  getCustWebLinks: (params: {
      root?: any;
      args: QuerygetCustWebLinksArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getCustWebLinks']>,
  getDataByUri: (params: {
      root?: any;
      args: QuerygetDataByUriArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getDataByUri']>,
  getDealByIdTrend: (params: {
      root?: any;
      args: QuerygetDealByIdTrendArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getDealByIdTrend']>,
  getDealDetailsByMode: (params: {
      root?: any;
      args: QuerygetDealDetailsByModeArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getDealDetailsByMode']>,
  getDealEQScore: (params: {
      root?: any;
      args: QuerygetDealEQScoreArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getDealEQScore']>,
  getDealStageList: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getDealStageList']>,
  getDealSummaryById: (params: {
      root?: any;
      args: QuerygetDealSummaryByIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getDealSummaryById']>,
  getDiarization: (params: {
      root?: any;
      args: QuerygetDiarizationArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getDiarization']>,
  getEQbyAccount: (params: {
      root?: any;
      args: QuerygetEQbyAccountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getEQbyAccount']>,
  getEQbyContact: (params: {
      root?: any;
      args: QuerygetEQbyContactArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getEQbyContact']>,
  getEQbyConv: (params: {
      root?: any;
      args: QuerygetEQbyConvArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getEQbyConv']>,
  getEQbyConv1: (params: {
      root?: any;
      args: QuerygetEQbyConv1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getEQbyConv1']>,
  getEmlEqByEmailObj: (params: {
      root?: any;
      args: QuerygetEmlEqByEmailObjArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getEmlEqByEmailObj']>,
  getEmlEqById: (params: {
      root?: any;
      args: QuerygetEmlEqByIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getEmlEqById']>,
  getEmpathyTurns: (params: {
      root?: any;
      args: QuerygetEmpathyTurnsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getEmpathyTurns']>,
  getEventById: (params: {
      root?: any;
      args: QuerygetEventByIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getEventById']>,
  getKeyMomentsForConvId: (params: {
      root?: any;
      args: QuerygetKeyMomentsForConvIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getKeyMomentsForConvId']>,
  getKeywordCategories: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getKeywordCategories']>,
  getKeywordCategories1: (params: {
      root?: any;
      args: QuerygetKeywordCategories1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getKeywordCategories1']>,
  getManagerEQ: (params: {
      root?: any;
      args: QuerygetManagerEQArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getManagerEQ']>,
  getMediaClipById: (params: {
      root?: any;
      args: QuerygetMediaClipByIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getMediaClipById']>,
  getMediaClipParamsByMediaClipId1: (params: {
      root?: any;
      args: QuerygetMediaClipParamsByMediaClipId1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getMediaClipParamsByMediaClipId1']>,
  getMediaClipPlaylistSharedWithUser: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getMediaClipPlaylistSharedWithUser']>,
  getMeeting: (params: {
      root?: any;
      args: QuerygetMeetingArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getMeeting']>,
  getMentionedUserComments: (params: {
      root?: any;
      args: QuerygetMentionedUserCommentsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getMentionedUserComments']>,
  getMyMediaClips: (params: {
      root?: any;
      args: QuerygetMyMediaClipsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getMyMediaClips']>,
  getOpptyById: (params: {
      root?: any;
      args: QuerygetOpptyByIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getOpptyById']>,
  getOpptyEqbyStage: (params: {
      root?: any;
      args: QuerygetOpptyEqbyStageArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getOpptyEqbyStage']>,
  getOpptyKeyMoments: (params: {
      root?: any;
      args: QuerygetOpptyKeyMomentsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getOpptyKeyMoments']>,
  getOpptyPromises: (params: {
      root?: any;
      args: QuerygetOpptyPromisesArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getOpptyPromises']>,
  getOpptyTeam: (params: {
      root?: any;
      args: QuerygetOpptyTeamArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getOpptyTeam']>,
  getOpptyTeamById: (params: {
      root?: any;
      args: QuerygetOpptyTeamByIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getOpptyTeamById']>,
  getOpptys: (params: {
      root?: any;
      args: QuerygetOpptysArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getOpptys']>,
  getPlaylistById: (params: {
      root?: any;
      args: QuerygetPlaylistByIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getPlaylistById']>,
  getPlaylistParamsByPlaylistId1: (params: {
      root?: any;
      args: QuerygetPlaylistParamsByPlaylistId1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getPlaylistParamsByPlaylistId1']>,
  getPlaylistSharedMembers: (params: {
      root?: any;
      args: QuerygetPlaylistSharedMembersArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getPlaylistSharedMembers']>,
  getPlaylists: (params: {
      root?: any;
      args: QuerygetPlaylistsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getPlaylists']>,
  getPreferences1: (params: {
      root?: any;
      args: QuerygetPreferences1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getPreferences1']>,
  getSellerEQ1: (params: {
      root?: any;
      args: QuerygetSellerEQ1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getSellerEQ1']>,
  getSellerEQ2: (params: {
      root?: any;
      args: QuerygetSellerEQ2Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getSellerEQ2']>,
  getSharedViewData: (params: {
      root?: any;
      args: QuerygetSharedViewDataArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getSharedViewData']>,
  getSlideFirstByConversation: (params: {
      root?: any;
      args: QuerygetSlideFirstByConversationArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getSlideFirstByConversation']>,
  getSummary: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getSummary']>,
  getTeamMembers: (params: {
      root?: any;
      args: QuerygetTeamMembersArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getTeamMembers']>,
  getTimeline: (params: {
      root?: any;
      args: QuerygetTimelineArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getTimeline']>,
  getTimeline1: (params: {
      root?: any;
      args: QuerygetTimeline1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getTimeline1']>,
  getTrendEQForOppty: (params: {
      root?: any;
      args: QuerygetTrendEQForOpptyArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getTrendEQForOppty']>,
  getTrendEqForAccount: (params: {
      root?: any;
      args: QuerygetTrendEqForAccountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getTrendEqForAccount']>,
  getUserEmailsCount: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getUserEmailsCount']>,
  getUserProxy: (params: {
      root?: any;
      args: QuerygetUserProxyArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getUserProxy']>,
  getUsersCount: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['getUsersCount']>,
  populate1: (params: {
      root?: any;
      args: Querypopulate1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['populate1']>,
  redirectMethod: (params: {
      root?: any;
      args: QueryredirectMethodArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['redirectMethod']>,
  redirectUrl: (params: {
      root?: any;
      args: QueryredirectUrlArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['redirectUrl']>,
  revokeAccessToken: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['revokeAccessToken']>,
  revokeAuth: (params: {
      root?: any;
      args: QueryrevokeAuthArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['revokeAuth']>,
  revokeRefreshToken: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['revokeRefreshToken']>,
  searchContact1: (params: {
      root?: any;
      args: QuerysearchContact1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Query['searchContact1']>
};

export type MutationWeatherbitIoSdk = {
  addBulkPlaylistMediaClipRel: (params: {
      root?: any;
      args: MutationaddBulkPlaylistMediaClipRelArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['addBulkPlaylistMediaClipRel']>,
  authenticateUser: (params: {
      root?: any;
      args: MutationauthenticateUserArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['authenticateUser']>,
  authenticateUser2: (params: {
      root?: any;
      args: MutationauthenticateUser2Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['authenticateUser2']>,
  companyKeyPhraseOccurrences: (params: {
      root?: any;
      args: MutationcompanyKeyPhraseOccurrencesArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['companyKeyPhraseOccurrences']>,
  companyKeyPhraseOccurrencesBySentiment: (params: {
      root?: any;
      args: MutationcompanyKeyPhraseOccurrencesBySentimentArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['companyKeyPhraseOccurrencesBySentiment']>,
  convert: (params: {
      root?: any;
      args: MutationconvertArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['convert']>,
  createAlert: (params: {
      root?: any;
      args: MutationcreateAlertArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createAlert']>,
  createConvTopicEpisode: (params: {
      root?: any;
      args: MutationcreateConvTopicEpisodeArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createConvTopicEpisode']>,
  createEmlEq: (params: {
      root?: any;
      args: MutationcreateEmlEqArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createEmlEq']>,
  createOrUpdate: (params: {
      root?: any;
      args: MutationcreateOrUpdateArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdate']>,
  createOrUpdate1: (params: {
      root?: any;
      args: MutationcreateOrUpdate1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdate1']>,
  createOrUpdate2: (params: {
      root?: any;
      args: MutationcreateOrUpdate2Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdate2']>,
  createOrUpdate3: (params: {
      root?: any;
      args: MutationcreateOrUpdate3Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdate3']>,
  createOrUpdateAccount: (params: {
      root?: any;
      args: MutationcreateOrUpdateAccountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdateAccount']>,
  createOrUpdateConvAttendee: (params: {
      root?: any;
      args: MutationcreateOrUpdateConvAttendeeArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdateConvAttendee']>,
  createOrUpdateConvAttendee1: (params: {
      root?: any;
      args: MutationcreateOrUpdateConvAttendee1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdateConvAttendee1']>,
  createOrUpdateKeywordCateg: (params: {
      root?: any;
      args: MutationcreateOrUpdateKeywordCategArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdateKeywordCateg']>,
  createOrUpdateKeywordTag: (params: {
      root?: any;
      args: MutationcreateOrUpdateKeywordTagArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdateKeywordTag']>,
  createOrUpdateOppty: (params: {
      root?: any;
      args: MutationcreateOrUpdateOpptyArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdateOppty']>,
  createOrUpdateOppty1: (params: {
      root?: any;
      args: MutationcreateOrUpdateOppty1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdateOppty1']>,
  createOrUpdateOpptyTeam: (params: {
      root?: any;
      args: MutationcreateOrUpdateOpptyTeamArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdateOpptyTeam']>,
  createOrUpdatePreference: (params: {
      root?: any;
      args: MutationcreateOrUpdatePreferenceArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdatePreference']>,
  createOrUpdateRecommendation: (params: {
      root?: any;
      args: MutationcreateOrUpdateRecommendationArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdateRecommendation']>,
  createOrUpdateUser: (params: {
      root?: any;
      args: MutationcreateOrUpdateUserArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['createOrUpdateUser']>,
  delete: (params: {
      root?: any;
      args: MutationdeleteArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['delete']>,
  delete1: (params: {
      root?: any;
      args: Mutationdelete1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['delete1']>,
  delete2: (params: {
      root?: any;
      args: Mutationdelete2Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['delete2']>,
  delete3: (params: {
      root?: any;
      args: Mutationdelete3Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['delete3']>,
  delete4: (params: {
      root?: any;
      args: Mutationdelete4Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['delete4']>,
  delete5: (params: {
      root?: any;
      args: Mutationdelete5Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['delete5']>,
  delete6: (params: {
      root?: any;
      args: Mutationdelete6Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['delete6']>,
  deletePlaylistMediaClipRel: (params: {
      root?: any;
      args: MutationdeletePlaylistMediaClipRelArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['deletePlaylistMediaClipRel']>,
  deleteTags: (params: {
      root?: any;
      args: MutationdeleteTagsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['deleteTags']>,
  findCustomKeyphraseTrendingTopicCount: (params: {
      root?: any;
      args: MutationfindCustomKeyphraseTrendingTopicCountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['findCustomKeyphraseTrendingTopicCount']>,
  findDealDetailsByMode: (params: {
      root?: any;
      args: MutationfindDealDetailsByModeArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['findDealDetailsByMode']>,
  findKeyphraseTrendingTopicCount: (params: {
      root?: any;
      args: MutationfindKeyphraseTrendingTopicCountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['findKeyphraseTrendingTopicCount']>,
  generateTimeline: (params: {
      root?: any;
      args: MutationgenerateTimelineArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['generateTimeline']>,
  getAccountTeamsUsersStats: (params: {
      root?: any;
      args: MutationgetAccountTeamsUsersStatsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getAccountTeamsUsersStats']>,
  getAccountUsersStat: (params: {
      root?: any;
      args: MutationgetAccountUsersStatArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getAccountUsersStat']>,
  getAllActiveUsers: (params: {
      root?: any;
      args: MutationgetAllActiveUsersArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getAllActiveUsers']>,
  getAllTeamsUserStats: (params: {
      root?: any;
      args: MutationgetAllTeamsUserStatsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getAllTeamsUserStats']>,
  getAssessmentByCompany: (params: {
      root?: any;
      args: MutationgetAssessmentByCompanyArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getAssessmentByCompany']>,
  getAssessments: (params: {
      root?: any;
      args: MutationgetAssessmentsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getAssessments']>,
  getAttendeeByMeetingTranscript: (params: {
      root?: any;
      args: MutationgetAttendeeByMeetingTranscriptArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getAttendeeByMeetingTranscript']>,
  getAuthCodeAndGenerateToken: (params: {
      root?: any;
      args: MutationgetAuthCodeAndGenerateTokenArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getAuthCodeAndGenerateToken']>,
  getAuthUrl: (params: {
      root?: any;
      args: MutationgetAuthUrlArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getAuthUrl']>,
  getAuthUrl1: (params: {
      root?: any;
      args: MutationgetAuthUrl1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getAuthUrl1']>,
  getAuthUrl2: (params: {
      root?: any;
      args: MutationgetAuthUrl2Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getAuthUrl2']>,
  getClosedDealDetails: (params: {
      root?: any;
      args: MutationgetClosedDealDetailsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getClosedDealDetails']>,
  getCompanyDeals: (params: {
      root?: any;
      args: MutationgetCompanyDealsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getCompanyDeals']>,
  getCompanyDealsEQOnRiskScale: (params: {
      root?: any;
      args: MutationgetCompanyDealsEQOnRiskScaleArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getCompanyDealsEQOnRiskScale']>,
  getCompanyMeetingStats: (params: {
      root?: any;
      args: MutationgetCompanyMeetingStatsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getCompanyMeetingStats']>,
  getCompanyParams: (params: {
      root?: any;
      args: MutationgetCompanyParamsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getCompanyParams']>,
  getCompanyQUsage: (params: {
      root?: any;
      args: MutationgetCompanyQUsageArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getCompanyQUsage']>,
  getContacts: (params: {
      root?: any;
      args: MutationgetContactsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getContacts']>,
  getConversationByAccount: (params: {
      root?: any;
      args: MutationgetConversationByAccountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getConversationByAccount']>,
  getConversationUserStat: (params: {
      root?: any;
      args: MutationgetConversationUserStatArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getConversationUserStat']>,
  getCustomerPulse: (params: {
      root?: any;
      args: MutationgetCustomerPulseArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getCustomerPulse']>,
  getDealActivities: (params: {
      root?: any;
      args: MutationgetDealActivitiesArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getDealActivities']>,
  getDealCountByAccounts: (params: {
      root?: any;
      args: MutationgetDealCountByAccountsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getDealCountByAccounts']>,
  getDealEQOnRiskScale: (params: {
      root?: any;
      args: MutationgetDealEQOnRiskScaleArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getDealEQOnRiskScale']>,
  getDealTopics: (params: {
      root?: any;
      args: MutationgetDealTopicsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getDealTopics']>,
  getDeals: (params: {
      root?: any;
      args: MutationgetDealsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getDeals']>,
  getEmailByEmlObjId: (params: {
      root?: any;
      args: MutationgetEmailByEmlObjIdArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getEmailByEmlObjId']>,
  getEmails: (params: {
      root?: any;
      args: MutationgetEmailsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getEmails']>,
  getEmpathyAndHesitationTurns: (params: {
      root?: any;
      args: MutationgetEmpathyAndHesitationTurnsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getEmpathyAndHesitationTurns']>,
  getFavoriteMeeting: (params: {
      root?: any;
      args: MutationgetFavoriteMeetingArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getFavoriteMeeting']>,
  getInvitedUsers: (params: {
      root?: any;
      args: MutationgetInvitedUsersArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getInvitedUsers']>,
  getLastMeeting: (params: {
      root?: any;
      args: MutationgetLastMeetingArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getLastMeeting']>,
  getMediaClipCount: (params: {
      root?: any;
      args: MutationgetMediaClipCountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getMediaClipCount']>,
  getMediaClipStats: (params: {
      root?: any;
      args: MutationgetMediaClipStatsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getMediaClipStats']>,
  getMeetingListBasedOnType: (params: {
      root?: any;
      args: MutationgetMeetingListBasedOnTypeArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getMeetingListBasedOnType']>,
  getMeetingSentiments: (params: {
      root?: any;
      args: MutationgetMeetingSentimentsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getMeetingSentiments']>,
  getMeetingsSharedWithUser: (params: {
      root?: any;
      args: MutationgetMeetingsSharedWithUserArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getMeetingsSharedWithUser']>,
  getMomentsHavingKeyword: (params: {
      root?: any;
      args: MutationgetMomentsHavingKeywordArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getMomentsHavingKeyword']>,
  getMostPopularKeymoments: (params: {
      root?: any;
      args: MutationgetMostPopularKeymomentsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getMostPopularKeymoments']>,
  getMostSharedMeetings: (params: {
      root?: any;
      args: MutationgetMostSharedMeetingsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getMostSharedMeetings']>,
  getMostViewedMeeting: (params: {
      root?: any;
      args: MutationgetMostViewedMeetingArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getMostViewedMeeting']>,
  getOpptyUsersStat: (params: {
      root?: any;
      args: MutationgetOpptyUsersStatArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getOpptyUsersStat']>,
  getPlaylistStats: (params: {
      root?: any;
      args: MutationgetPlaylistStatsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getPlaylistStats']>,
  getPlaylistsCount: (params: {
      root?: any;
      args: MutationgetPlaylistsCountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getPlaylistsCount']>,
  getPlaylistsCount1: (params: {
      root?: any;
      args: MutationgetPlaylistsCount1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getPlaylistsCount1']>,
  getPlaylistsCount2: (params: {
      root?: any;
      args: MutationgetPlaylistsCount2Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getPlaylistsCount2']>,
  getSellerEQ: (params: {
      root?: any;
      args: MutationgetSellerEQArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getSellerEQ']>,
  getSystemProps: (params: {
      root?: any;
      args: MutationgetSystemPropsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getSystemProps']>,
  getTopPageVisitDetails: (params: {
      root?: any;
      args: MutationgetTopPageVisitDetailsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getTopPageVisitDetails']>,
  getUserCallMetr: (params: {
      root?: any;
      args: MutationgetUserCallMetrArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getUserCallMetr']>,
  getUserCallMetrics: (params: {
      root?: any;
      args: MutationgetUserCallMetricsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getUserCallMetrics']>,
  getUsersAuth: (params: {
      root?: any;
      args: MutationgetUsersAuthArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getUsersAuth']>,
  getUsersConvoStat: (params: {
      root?: any;
      args: MutationgetUsersConvoStatArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['getUsersConvoStat']>,
  keyPhras1eOccurences: (params: {
      root?: any;
      args: MutationkeyPhras1eOccurencesArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['keyPhras1eOccurences']>,
  keyPhraseOccurences: (params: {
      root?: any;
      args: MutationkeyPhraseOccurencesArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['keyPhraseOccurences']>,
  logout: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['logout']>,
  populate: (params: {
      root?: any;
      args: MutationpopulateArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['populate']>,
  postDataByUri: (params: {
      root?: any;
      args: MutationpostDataByUriArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['postDataByUri']>,
  resetKeyPhrases: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['resetKeyPhrases']>,
  revoke: (params: {
      root?: any;
      args: MutationrevokeArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['revoke']>,
  revoke1: (params: {
      root?: any;
      args: Mutationrevoke1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['revoke1']>,
  saveMessage: (params: {
      root?: any;
      args: MutationsaveMessageArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['saveMessage']>,
  saveReport: (params: {
      root?: any;
      args: MutationsaveReportArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['saveReport']>,
  search: (params: {
      root?: any;
      args: MutationsearchArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['search']>,
  search1: (params: {
      root?: any;
      args: Mutationsearch1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['search1']>,
  search2: (params: {
      root?: any;
      args: Mutationsearch2Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['search2']>,
  search3: (params: {
      root?: any;
      args: Mutationsearch3Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['search3']>,
  search4: (params: {
      root?: any;
      args: Mutationsearch4Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['search4']>,
  search5: (params: {
      root?: any;
      args: Mutationsearch5Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['search5']>,
  search6: (params: {
      root?: any;
      args: Mutationsearch6Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['search6']>,
  search7: (params: {
      root?: any;
      args: Mutationsearch7Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['search7']>,
  search8: (params: {
      root?: any;
      args: Mutationsearch8Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['search8']>,
  search9: (params: {
      root?: any;
      args: Mutationsearch9Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['search9']>,
  searchAccountAndContact: (params: {
      root?: any;
      args: MutationsearchAccountAndContactArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchAccountAndContact']>,
  searchAccountAndContactCount: (params: {
      root?: any;
      args: MutationsearchAccountAndContactCountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchAccountAndContactCount']>,
  searchAccounts: (params: {
      root?: any;
      args: MutationsearchAccountsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchAccounts']>,
  searchAccountsCount: (params: {
      root?: any;
      args: MutationsearchAccountsCountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchAccountsCount']>,
  searchAlerts: (params: {
      root?: any;
      args: MutationsearchAlertsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchAlerts']>,
  searchContact: (params: {
      root?: any;
      args: MutationsearchContactArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchContact']>,
  searchEmailSummary: (params: {
      root?: any;
      args: MutationsearchEmailSummaryArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchEmailSummary']>,
  searchEvents: (params: {
      root?: any;
      args: MutationsearchEventsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchEvents']>,
  searchEventsCount: (params: {
      root?: any;
      args: MutationsearchEventsCountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchEventsCount']>,
  searchKeywordCateg: (params: {
      root?: any;
      args: MutationsearchKeywordCategArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchKeywordCateg']>,
  searchKeywordCategCount: (params: {
      root?: any;
      args: MutationsearchKeywordCategCountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchKeywordCategCount']>,
  searchKeywordCategWithoutTags: (params: {
      root?: any;
      args: MutationsearchKeywordCategWithoutTagsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchKeywordCategWithoutTags']>,
  searchKeywordTag: (params: {
      root?: any;
      args: MutationsearchKeywordTagArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchKeywordTag']>,
  searchKeywordTagCount: (params: {
      root?: any;
      args: MutationsearchKeywordTagCountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchKeywordTagCount']>,
  searchMeetings: (params: {
      root?: any;
      args: MutationsearchMeetingsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchMeetings']>,
  searchMeetingsByAccountOrOppty: (params: {
      root?: any;
      args: MutationsearchMeetingsByAccountOrOpptyArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchMeetingsByAccountOrOppty']>,
  searchMeetingsCount: (params: {
      root?: any;
      args: MutationsearchMeetingsCountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchMeetingsCount']>,
  searchMoments: (params: {
      root?: any;
      args: MutationsearchMomentsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchMoments']>,
  searchPreference: (params: {
      root?: any;
      args: MutationsearchPreferenceArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchPreference']>,
  searchTeamActivity: (params: {
      root?: any;
      args: MutationsearchTeamActivityArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchTeamActivity']>,
  searchUsers: (params: {
      root?: any;
      args: MutationsearchUsersArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['searchUsers']>,
  selectCompanyKeywordCategory: (params: {
      root?: any;
      args: MutationselectCompanyKeywordCategoryArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['selectCompanyKeywordCategory']>,
  sendMessage: (params: {
      root?: any;
      args: MutationsendMessageArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['sendMessage']>,
  shareClipExternalUser: (params: {
      root?: any;
      args: MutationshareClipExternalUserArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['shareClipExternalUser']>,
  shareMeetingExternalUser: (params: {
      root?: any;
      args: MutationshareMeetingExternalUserArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['shareMeetingExternalUser']>,
  shareMeetingInternalUser: (params: {
      root?: any;
      args: MutationshareMeetingInternalUserArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['shareMeetingInternalUser']>,
  sharePlaylist: (params: {
      root?: any;
      args: MutationsharePlaylistArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['sharePlaylist']>,
  threadCount: (params: {
      root?: any;
      args: MutationthreadCountArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['threadCount']>,
  updateAccessConsent: (params: {
      root?: any;
      args: MutationupdateAccessConsentArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateAccessConsent']>,
  updateAccountOpptyEQ: (params: {
      root?: any;
      args: MutationupdateAccountOpptyEQArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateAccountOpptyEQ']>,
  updateAccountOpptyEQ1: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateAccountOpptyEQ1']>,
  updateAlert: (params: {
      root?: any;
      args: MutationupdateAlertArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateAlert']>,
  updateCalendarEvent: (params: {
      root?: any;
      args: MutationupdateCalendarEventArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateCalendarEvent']>,
  updateConvTopicEpisode: (params: {
      root?: any;
      args: MutationupdateConvTopicEpisodeArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateConvTopicEpisode']>,
  updateConversation: (params: {
      root?: any;
      args: MutationupdateConversationArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateConversation']>,
  updateEmlEq: (params: {
      root?: any;
      args: MutationupdateEmlEqArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateEmlEq']>,
  updateKeyMoment: (params: {
      root?: any;
      args: MutationupdateKeyMomentArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateKeyMoment']>,
  updatePlaylistMediaClipRel: (params: {
      root?: any;
      args: MutationupdatePlaylistMediaClipRelArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updatePlaylistMediaClipRel']>,
  updateQDetails: (params: {
      root?: any;
      args: MutationupdateQDetailsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateQDetails']>,
  updateStatusByIds: (params: {
      root?: any;
      args: MutationupdateStatusByIdsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateStatusByIds']>,
  updateTeamAccess: (params: {
      root?: any;
      args: MutationupdateTeamAccessArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateTeamAccess']>,
  updateTeamMembersManagerDetails: (params: {
      root?: any;
      args: MutationupdateTeamMembersManagerDetailsArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateTeamMembersManagerDetails']>,
  updateUserProxy: (params: {
      root?: any;
      args: MutationupdateUserProxyArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateUserProxy']>,
  updateZoomMeetingInvokeBot: (params: {
      root?: any;
      args: MutationupdateZoomMeetingInvokeBotArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateZoomMeetingInvokeBot']>,
  updateZoomMeetingWhitelist: (params: {
      root?: any;
      args?: {};
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['updateZoomMeetingWhitelist']>,
  uploadExternalMeeting: (params: {
      root?: any;
      args: MutationuploadExternalMeetingArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['uploadExternalMeeting']>,
  upsert: (params: {
      root?: any;
      args: MutationupsertArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsert']>,
  upsert1: (params: {
      root?: any;
      args: Mutationupsert1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsert1']>,
  upsert2: (params: {
      root?: any;
      args: Mutationupsert2Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsert2']>,
  upsert3: (params: {
      root?: any;
      args: Mutationupsert3Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsert3']>,
  upsert4: (params: {
      root?: any;
      args: Mutationupsert4Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsert4']>,
  upsert5: (params: {
      root?: any;
      args: Mutationupsert5Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsert5']>,
  upsertCompanyParam: (params: {
      root?: any;
      args: MutationupsertCompanyParamArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsertCompanyParam']>,
  upsertCompanyProfile: (params: {
      root?: any;
      args: MutationupsertCompanyProfileArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsertCompanyProfile']>,
  upsertCompanyProfileWithKeywordCategRel: (params: {
      root?: any;
      args: MutationupsertCompanyProfileWithKeywordCategRelArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsertCompanyProfileWithKeywordCategRel']>,
  upsertConfigProp: (params: {
      root?: any;
      args: MutationupsertConfigPropArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsertConfigProp']>,
  upsertExternal: (params: {
      root?: any;
      args: MutationupsertExternalArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsertExternal']>,
  upsertLastViewed: (params: {
      root?: any;
      args: MutationupsertLastViewedArgs;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsertLastViewed']>,
  upsertLastViewed1: (params: {
      root?: any;
      args: MutationupsertLastViewed1Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsertLastViewed1']>,
  upsertLastViewed2: (params: {
      root?: any;
      args: MutationupsertLastViewed2Args;
      context: MeshContext;
      info: GraphQLResolveInfo;
      selectionSet?: SelectionSetParamOrFactory;
    }) => Promise<Mutation['upsertLastViewed2']>
};

export type SubscriptionWeatherbitIoSdk = {

};

export type WeatherbitIoContext = {
      ["Weatherbit.io"]: { Query: QueryWeatherbitIoSdk, Mutation: MutationWeatherbitIoSdk, Subscription: SubscriptionWeatherbitIoSdk },
    };

export type MeshContext = WeatherbitIoContext & BaseMeshContext;


import { parse } from 'graphql';
import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { cwd } from 'process';
import { relative, isAbsolute } from 'path';
import ExternalModule_0 from '@graphql-mesh/cache-inmemory-lru';
import ExternalModule_1 from '@graphql-mesh/openapi';
import ExternalModule_2 from '@graphql-mesh/merger-stitching';
import ExternalModule_3 from './sources/Weatherbit.io/oas-schema.js';

const importedModules: Record<string, any> = {
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

const syncImportFn = (moduleId: string) => {
  const relativeModuleId = isAbsolute(moduleId) ? relative(baseDir, moduleId) : moduleId;
  if (!(relativeModuleId in importedModules)) {
    throw new Error(`Cannot find module '${relativeModuleId}'.`);
  }
  return importedModules[relativeModuleId];
};
const importFn = async (moduleId: string) => syncImportFn(moduleId);

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
}), {
  readonly: true,
  validate: false
});

import { GetMeshOptions } from '@graphql-mesh/runtime';
import { YamlConfig } from '@graphql-mesh/types';
import MeshCache from '@graphql-mesh/cache-inmemory-lru';
import { PubSub } from 'graphql-subscriptions';
import { EventEmitter } from 'events';
import { DefaultLogger } from '@graphql-mesh/utils';
import OpenapiHandler from '@graphql-mesh/openapi'
import StitchingMerger from '@graphql-mesh/merger-stitching';
import { resolveAdditionalResolvers } from '@graphql-mesh/utils';
export const rawConfig: YamlConfig.Config = {"sources":[{"name":"Weatherbit.io","handler":{"openapi":{"source":"https://sunstone-app-alpha.q.uniphorecloud.com/v3/api-docs","baseUrl":"https://sunstone-app-alpha.q.uniphorecloud.com","operationHeaders":{"Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b25hbEB1bmlwaG9yZS5jb20iLCJhdWQiOiJpbnRlcm5hbCIsInNjb3BlcyI6IlNFTExFUiIsInZlcnNpb24iOiIxLjUuMC4xMSIsInRlbmFudCI6ImFscGhhIiwiaWF0IjoxNjgwMTk4MTA3fQ.bpwcpYXitfPIfiIB-DgnAQRO2ZdHcVebodSpTvZRskp8YPmlO9rwzlFDjk25qQu2jGnbcx03yri-hfTwIADX_Q"}}}}]}
export function getMeshOptions(): GetMeshOptions {
const cache = new MeshCache({
      ...(rawConfig.cache || {}),
      store: rootStore.child('cache'),
    } as any)
const eventEmitter = new (EventEmitter as any)({ captureRejections: true });
eventEmitter.setMaxListeners(Infinity);
const pubsub = new PubSub({ eventEmitter });
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger('Mesh');
const sources = [];
const transforms = [];
const weatherbitIoTransforms = [];
const additionalTypeDefs = [] as any[];
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
        })
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('StitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })
const additionalResolvers = resolveAdditionalResolvers(
      baseDir,
      rawConfig.additionalResolvers,
      syncImportFn,
      pubsub
  )
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

export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;