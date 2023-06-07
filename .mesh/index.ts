// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  /**
   *
   *
   * Equivalent to GET /usales/accounts/{id}
   */
  accountResponseDTO?: Maybe<AccountResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/accounts/{id}/team
   */
  accountTeamResponse?: Maybe<AccountTeamResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/alerts/{id}
   */
  alertResponseDTO?: Maybe<AlertResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /auth/accessToken
   */
  authAccessToken?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /auth/google
   */
  authGoogle?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /auth/google/callback
   */
  authGoogleCallback?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /auth/outlook
   */
  authOutlook?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /auth/revoke/{provider}
   */
  authRevoke?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /auth/social
   */
  authSocial?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /usales/events/{id}
   */
  calendarEvent?: Maybe<CalendarEvent>;
  /**
   *
   *
   * Equivalent to GET /usales/companyprofile
   */
  companyProfileDTO?: Maybe<CompanyProfileDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/analytics/company/slide-first
   */
  companySlideFirstResponse?: Maybe<CompanySlideFirstResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/contact/metrics/{contactId}
   */
  contactMetricsResponse?: Maybe<ContactMetricsResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/contact/summary/{contactId}
   */
  contactResponse?: Maybe<ContactResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/attendees/{id}
   */
  convAttendeeResponseDTO?: Maybe<ConvAttendeeResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{convId}/eqscore
   */
  convEQResponseDTO?: Maybe<ConvEQResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/conv/metrics/aggr/{id}
   */
  convMetricsResponse?: Maybe<ConvMetricsResponse>;
  /**
   *
   *
   * Equivalent to GET /conv/mod/{convId}
   */
  convMod?: Maybe<Array<Maybe<ConversationAttributionLogRsp>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}/slide-first
   */
  convSlideFirstResponse?: Maybe<ConvSlideFirstResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/timeline/{conv_id}
   */
  convTimeline?: Maybe<ConvTimeline>;
  /**
   *
   *
   * Equivalent to GET /usales/conv-topic-episodes/{id}
   */
  convTopicEpisodeResponseDTO?: Maybe<ConvTopicEpisodeResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}/participantsWithMetrics
   */
  conversationAttendeesResponse?: Maybe<ConversationAttendeesResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}/preview
   */
  conversationDetailResponse?: Maybe<ConversationDetailResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}
   */
  conversationRequest?: Maybe<ConversationRequest>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/summary/{id}
   */
  conversationSummaryResponse?: Maybe<ConversationSummaryResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/metrics/convs/{convId}/convostats
   */
  convoStatResponse?: Maybe<ConvoStatResponse>;
  /**
   *
   *
   * Equivalent to GET /cq/account/{crmAccountId}/trend
   */
  cqAccountTrend?: Maybe<Array<Maybe<DealDetailResponse>>>;
  /**
   *
   *
   * Equivalent to GET /cq/contact/{crmContactId}/eq
   */
  cqContactEq?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /cq/opportunity/{crmOpportunityId}/contact/{crmContactId}/eq
   */
  cqOpportunityContactEq?: Maybe<Array<Maybe<Contact>>>;
  /**
   *
   *
   * Equivalent to GET /cq/token/access
   */
  cqTokenAccess?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /cq/token/refresh
   */
  cqTokenRefresh?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /cq/token/revoke/access
   */
  cqTokenRevokeAccess?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /cq/token/revoke/refresh
   */
  cqTokenRevokeRefresh?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /cq/opportunity/{crmOpportunityId}/current
   */
  currentEQForOpptyResponse?: Maybe<CurrentEQForOpptyResponse>;
  /**
   *
   *
   * Equivalent to GET /cq/account/{crmAccountId}/current
   */
  dealDetailResponse?: Maybe<DealDetailResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/{id}/details
   */
  dealSummaryDetailResponse?: Maybe<DealSummaryDetailResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/summary/{id}
   */
  dealSummaryResponse?: Maybe<DealSummaryResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/{id}/trend
   */
  dealSummaryTrendResponse?: Maybe<DealSummaryTrendResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/diarization/{conv_id}
   */
  diarization?: Maybe<Diarization>;
  /**
   *
   *
   * Equivalent to GET /usales/empathyandhesitationturns/get/conv
   */
  empathyAndHesitationTurnsReport?: Maybe<EmpathyAndHesitationTurnsReport>;
  /**
   *
   *
   * Equivalent to GET /cq/opportunity/{crmOpportunityId}/contact/eq
   */
  getContactsEQForOppty?: Maybe<Array<Maybe<Contact>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}/details
   */
  getConversationDetail?: Maybe<ConversationDetailResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/accounts/{accountId}/convtrends
   */
  getEQbyAccount?: Maybe<ConvEQResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /cq/manager/{managerEmailId}/{startMMddyyyy}/eq
   */
  getManagerEQ?: Maybe<TeamOpptyUsersStats>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/{id}
   */
  getOpptyById?: Maybe<OpptyDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/keyMoments
   */
  getOpptyKeyMoments?: Maybe<OpptyDTO>;
  /**
   *
   *
   * Equivalent to GET /cq/seller/{sellerEmailId}/eq
   */
  getSellerEQ2?: Maybe<TeamOpptyUsersStats>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}/keyPhrases
   */
  keyPhraseResponse?: Maybe<KeyPhraseResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/mediaclip/{id}
   */
  mediaClipResponseDTO?: Maybe<MediaClipResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/{opptyId}/promises
   */
  opptyDTO?: Maybe<OpptyDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/{oppty_stage}/eqscore
   */
  opptyEqbyStageResponseDTO?: Maybe<OpptyEqbyStageResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/teams/{id}
   */
  opptyTeamResponseDTO?: Maybe<OpptyTeamResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/playlists/{id}
   */
  playlistResponseDTO?: Maybe<PlaylistResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /slack/authurl
   */
  slackAuthurl?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /slack/redirect
   */
  slackRedirect?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/reports/summary
   */
  summaryReportDTO?: Maybe<SummaryReportDTO>;
  /**
   *
   *
   * Equivalent to GET /cq/seller/{sellerEmailId}/{days}/eq
   */
  teamOpptyUsersStats?: Maybe<TeamOpptyUsersStats>;
  /**
   *
   *
   * Equivalent to GET /cq/opportunity/{crmOpportunityId}/trend
   */
  trendEQForOpptyResponse?: Maybe<TrendEQForOpptyResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/accounts/{id}/oppty
   */
  usalesAccountOppty?: Maybe<Array<Maybe<OpptyDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/accounts
   */
  usalesAccounts?: Maybe<Array<Maybe<AccountResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/accounts/promises
   */
  usalesAccountsPromises?: Maybe<Array<Maybe<AccountPromisesResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/alerts
   */
  usalesAlerts?: Maybe<Array<Maybe<AlertResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/bookmarks/convs/{convId}
   */
  usalesBookmarksConv?: Maybe<Array<Maybe<ConvBookmarkResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/bookmarks/keymoments/{convKeyMomentId}
   */
  usalesBookmarksKeymoment?: Maybe<Array<Maybe<ConvBookmarkResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/company-param
   */
  usalesCompanyParam?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /usales/company-params
   */
  usalesCompanyParams?: Maybe<Array<Maybe<CompanyParamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/companyprofile/access-consent
   */
  usalesCompanyprofileAccessConsent?: Maybe<Scalars['Boolean']>;
  /**
   *
   *
   * Equivalent to GET /usales/companyprofile/businesscategs
   */
  usalesCompanyprofileBusinesscategs?: Maybe<Array<Maybe<KeywordCategResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/configprops
   */
  usalesConfigprops?: Maybe<Array<Maybe<ConfigPropResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/contacts/{contact}/emails/count
   */
  usalesContactEmailsCount?: Maybe<Scalars['Int']>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{convId}/comments
   */
  usalesConvComments?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{convId}/contact_eqscore
   */
  usalesConvContactEqscore?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/conv/metrics/{id}
   */
  usalesConvMetric?: Maybe<Array<Maybe<AggrConvMetrics>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}/metrics
   */
  usalesConvMetrics?: Maybe<Array<Maybe<AggrConvMetrics>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs
   */
  usalesConvs?: Maybe<Array<Maybe<ConversationRequest>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/attendees
   */
  usalesConvsAttendees?: Maybe<Array<Maybe<ConvAttendeeResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/status
   */
  usalesConvsStatus?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   *
   *
   * Equivalent to GET /usales/custweblinks
   */
  usalesCustweblinks?: Maybe<Array<Maybe<CustWebLinkResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/deals/{opptyId}/contacts/{contactId}/eqscore
   */
  usalesDealContactEqscore?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/deals/{opptyId}/convtrends
   */
  usalesDealConvtrends?: Maybe<Array<Maybe<ConvEQResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/deals/{opptyId}/eqscore
   */
  usalesDealEqscore?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/deals/stages
   */
  usalesDealsStages?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   *
   *
   * Equivalent to GET /usales/emleqs/{id}
   */
  usalesEmleq?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/emleqs
   */
  usalesEmleqs?: Maybe<Array<Maybe<EmlEqResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/keymoments/{convKeyMomentId}/comments
   */
  usalesKeymomentComments?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/keyword/categ
   */
  usalesKeywordCateg?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   *
   *
   * Equivalent to GET /usales/keyword/categ/{category}
   */
  usalesKeywordCateg2?: Maybe<Array<Maybe<KeywordCategResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/keyword/keyphrase/fetch-expert/{tagId}
   */
  usalesKeywordKeyphraseFetchExpert?: Maybe<Array<Maybe<KeyPhraseExpertResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/mediaClip/param/{mediaClipId}
   */
  usalesMediaClipParam?: Maybe<Array<Maybe<MediaClipParamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/mediaclip/myclips
   */
  usalesMediaclipMyclips?: Maybe<Array<Maybe<MediaClipResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/mindtickle/coursesbyemail/{email}
   */
  usalesMindtickleCoursesbyemail?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /usales/mindtickle/querybyuri/{url}
   */
  usalesMindtickleQuerybyuri?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty
   */
  usalesOppty?: Maybe<Array<Maybe<OpptyDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/teams
   */
  usalesOpptyTeams?: Maybe<Array<Maybe<OpptyTeamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/playlist/param/{playlistId}
   */
  usalesPlaylistParam?: Maybe<Array<Maybe<PlaylistParamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/playlists/myplaylists
   */
  usalesPlaylistsMyplaylists?: Maybe<Array<Maybe<PlaylistResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/playlists/shared-members
   */
  usalesPlaylistsSharedMembers?: Maybe<Array<Maybe<SharedMemberDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/playlists/sharedwithme
   */
  usalesPlaylistsSharedwithme?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/preferences/mine
   */
  usalesPreferencesMine?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/re/{code}
   */
  usalesRe?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/sharedviewdata-conv/{conv_id}
   */
  usalesSharedviewdataConv?: Maybe<Array<Maybe<ConvSharedViewData>>>;
  /**
   *
   *
   * Equivalent to GET /usales/sharedviewdata-name/{name}
   */
  usalesSharedviewdataName?: Maybe<Array<Maybe<ConvSharedViewData>>>;
  /**
   *
   *
   * Equivalent to GET /usales/sys
   */
  usalesSys?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /usales/users/{receiverUserId}/comments
   */
  usalesUserComments?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/users
   */
  usalesUsers?: Maybe<Scalars['Float']>;
  /**
   *
   *
   * Equivalent to GET /usales/users/me/emails/count
   */
  usalesUsersMeEmailsCount?: Maybe<Scalars['Int']>;
  /**
   *
   *
   * Equivalent to GET /usales/users/team/{usersId}
   */
  usalesUsersTeam?: Maybe<Array<Maybe<User>>>;
  /**
   *
   *
   * Equivalent to GET /usales/users/me
   */
  user?: Maybe<User>;
  /**
   *
   *
   * Equivalent to GET /usales/users/{usersId}/proxy
   */
  userDelegateResponseDTO?: Maybe<UserDelegateResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /v1/transcript/populate/{convId}
   */
  v1TranscriptPopulate2?: Maybe<Scalars['String']>;
};


export type QueryaccountResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryaccountTeamResponseArgs = {
  id: Scalars['Float'];
};


export type QueryalertResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryauthRevokeArgs = {
  provider: Scalars['String'];
};


export type QuerycalendarEventArgs = {
  id: Scalars['Float'];
};


export type QuerycontactMetricsResponseArgs = {
  contactId: Scalars['Float'];
  ganularity?: InputMaybe<Scalars['String']>;
  opptyId: Scalars['Float'];
};


export type QuerycontactResponseArgs = {
  contactId: Scalars['Float'];
};


export type QueryconvAttendeeResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryconvEQResponseDTOArgs = {
  convId: Scalars['Float'];
};


export type QueryconvMetricsResponseArgs = {
  id: Scalars['Float'];
};


export type QueryconvModArgs = {
  convId: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryconvSlideFirstResponseArgs = {
  id: Scalars['Float'];
};


export type QueryconvTimelineArgs = {
  convId: Scalars['Float'];
};


export type QueryconvTopicEpisodeResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryconversationAttendeesResponseArgs = {
  id: Scalars['Float'];
};


export type QueryconversationDetailResponseArgs = {
  id: Scalars['Float'];
};


export type QueryconversationRequestArgs = {
  id: Scalars['Float'];
};


export type QueryconversationSummaryResponseArgs = {
  id: Scalars['Float'];
};


export type QueryconvoStatResponseArgs = {
  convId: Scalars['Float'];
};


export type QuerycqAccountTrendArgs = {
  crmAccountId: Scalars['String'];
  days?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerycqContactEqArgs = {
  crmContactId: Scalars['String'];
};


export type QuerycqOpportunityContactEqArgs = {
  crmContactId: Scalars['String'];
  crmOpportunityId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerycurrentEQForOpptyResponseArgs = {
  crmOpportunityId: Scalars['String'];
  days?: InputMaybe<Scalars['Float']>;
};


export type QuerydealDetailResponseArgs = {
  crmAccountId: Scalars['String'];
  days?: InputMaybe<Scalars['Float']>;
};


export type QuerydealSummaryDetailResponseArgs = {
  id: Scalars['Float'];
  mode?: InputMaybe<Scalars['String']>;
  tz?: InputMaybe<Scalars['String']>;
};


export type QuerydealSummaryResponseArgs = {
  id: Scalars['Float'];
};


export type QuerydealSummaryTrendResponseArgs = {
  id: Scalars['Float'];
  key?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QuerydiarizationArgs = {
  convId: Scalars['Float'];
};


export type QueryempathyAndHesitationTurnsReportArgs = {
  convId: Scalars['Float'];
};


export type QuerygetContactsEQForOpptyArgs = {
  crmOpportunityId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerygetConversationDetailArgs = {
  id: Scalars['Float'];
  type?: InputMaybe<Scalars['String']>;
};


export type QuerygetEQbyAccountArgs = {
  accountId: Scalars['Float'];
};


export type QuerygetManagerEQArgs = {
  managerEmailId: Scalars['String'];
  startMMddyyyy: Scalars['String'];
};


export type QuerygetOpptyByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetOpptyKeyMomentsArgs = {
  granularity?: InputMaybe<Scalars['String']>;
  keyTag?: InputMaybe<Scalars['String']>;
  opptyId?: InputMaybe<Scalars['Float']>;
  period?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QuerygetSellerEQ2Args = {
  sellerEmailId: Scalars['String'];
};


export type QuerykeyPhraseResponseArgs = {
  id: Scalars['Float'];
};


export type QuerymediaClipResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryopptyDTOArgs = {
  opptyId: Scalars['Float'];
};


export type QueryopptyEqbyStageResponseDTOArgs = {
  opptyStage: Scalars['String'];
};


export type QueryopptyTeamResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryplaylistResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryslackRedirectArgs = {
  code: Scalars['String'];
  state: Scalars['String'];
};


export type QueryteamOpptyUsersStatsArgs = {
  days: Scalars['Int'];
  sellerEmailId: Scalars['String'];
};


export type QuerytrendEQForOpptyResponseArgs = {
  crmOpportunityId: Scalars['String'];
  days?: InputMaybe<Scalars['Float']>;
};


export type QueryusalesAccountOpptyArgs = {
  id: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesAccountsPromisesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  userIds?: InputMaybe<Scalars['String']>;
};


export type QueryusalesAlertsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};


export type QueryusalesBookmarksConvArgs = {
  convId: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesBookmarksKeymomentArgs = {
  convKeyMomentId: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesCompanyParamArgs = {
  prop: Scalars['String'];
};


export type QueryusalesCompanyParamsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesCompanyprofileBusinesscategsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesConfigpropsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesContactEmailsCountArgs = {
  contactId: Scalars['Float'];
};


export type QueryusalesConvCommentsArgs = {
  convId: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesConvContactEqscoreArgs = {
  contact: Scalars['String'];
  convId: Scalars['Float'];
};


export type QueryusalesConvMetricArgs = {
  id: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesConvMetricsArgs = {
  id: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
  participantId: Scalars['String'];
};


export type QueryusalesConvsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesConvsAttendeesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesCustweblinksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesDealContactEqscoreArgs = {
  contactId: Scalars['Float'];
  opptyId: Scalars['Float'];
};


export type QueryusalesDealConvtrendsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  opptyId: Scalars['Float'];
};


export type QueryusalesDealEqscoreArgs = {
  opptyId: Scalars['Float'];
};


export type QueryusalesEmleqArgs = {
  id: Scalars['Float'];
};


export type QueryusalesEmleqsArgs = {
  emlObjId?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesKeymomentCommentsArgs = {
  convKeyMomentId: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesKeywordCateg2Args = {
  category: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesKeywordKeyphraseFetchExpertArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  tagId: Scalars['Float'];
};


export type QueryusalesMediaClipParamArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  mediaClipId: Scalars['Float'];
  name: Scalars['String'];
};


export type QueryusalesMediaclipMyclipsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesMindtickleCoursesbyemailArgs = {
  email: Scalars['String'];
};


export type QueryusalesMindtickleQuerybyuriArgs = {
  uri: Scalars['String'];
};


export type QueryusalesOpptyArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesOpptyTeamsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesPlaylistParamArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  playlistId: Scalars['Float'];
};


export type QueryusalesPlaylistsMyplaylistsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesPlaylistsSharedMembersArgs = {
  history?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  playlistId: Scalars['Float'];
};


export type QueryusalesPreferencesMineArgs = {
  type: Scalars['String'];
};


export type QueryusalesReArgs = {
  code: Scalars['String'];
};


export type QueryusalesSharedviewdataConvArgs = {
  convId: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesSharedviewdataNameArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};


export type QueryusalesSysArgs = {
  prop: Scalars['String'];
};


export type QueryusalesUserCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Float'];
};


export type QueryusalesUsersTeamArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  usersId: Scalars['Float'];
};


export type QueryuserDelegateResponseDTOArgs = {
  usersId: Scalars['Float'];
};


export type Queryv1TranscriptPopulate2Args = {
  convId: Scalars['String'];
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

export type Type13 =
  | 'POSITIVE'
  | 'NEGATIVE'
  | 'NEUTRAL';

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

export type Type12 =
  | 'CUSTOMER'
  | 'EMPLOYEE';

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

export type KeyCategory =
  | 'CUSTOMER_PAIN_POINTS'
  | 'CUSTOMER_OBJECTIONS'
  | 'BUDGET'
  | 'PROJECT_METRICS_OF_SUCCESS'
  | 'COMPETITORS'
  | 'PRODUCT_FEATURES'
  | 'PRICING'
  | 'DECISION_CRITERIA';

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

export type ContactResponse = {
  accounts?: Maybe<Array<Maybe<Array<Maybe<Scalars['JSON']>>>>>;
  avatarUrl?: Maybe<Scalars['String']>;
  contactMethods?: Maybe<Array<Maybe<ContactMethodDTO>>>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  jobTitle?: Maybe<Scalars['String']>;
  keyMoments3?: Maybe<Array<Maybe<KeyMoment>>>;
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

export type ConvSlideFirstResponse = {
  high?: Maybe<Array<Maybe<SlideFirst>>>;
  low?: Maybe<Array<Maybe<SlideFirst>>>;
};

export type ConvTimeline = {
  convId2?: Maybe<Scalars['Float']>;
  data?: Maybe<Scalars['JSON']>;
};

export type ConversationAttendeesResponse = {
  attendees?: Maybe<Array<Maybe<Attendee>>>;
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
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

export type OpptyRisk =
  | 'AT_RISK'
  | 'ON_TRACK'
  | 'EXCEED';

export type DealNextAction = {
  date?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['Boolean']>;
  video?: Maybe<Scalars['Boolean']>;
};

export type CurrentEQForOpptyResponse = {
  deals?: Maybe<DealSummaryDetailResponse>;
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

export type EmpathyAndHesitationTurnsReport = {
  convId?: Maybe<Scalars['Float']>;
  empathyChangeDetailsList?: Maybe<Array<Maybe<EmpathyChangeDetails>>>;
  empathyScore?: Maybe<Scalars['Float']>;
  hesitationChangeDetailsList?: Maybe<Array<Maybe<HesitationChangeDetails>>>;
  hesitationScore?: Maybe<Scalars['Float']>;
};

export type EmpathyChangeDetails = {
  averageEmpathy2?: Maybe<Scalars['Float']>;
  convId3?: Maybe<Scalars['Float']>;
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
  convId4?: Maybe<Scalars['Float']>;
  convOffset?: Maybe<Scalars['Float']>;
  prevContactNameOnTurn?: Maybe<Scalars['String']>;
  userId3?: Maybe<Scalars['Float']>;
  userName?: Maybe<Scalars['String']>;
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

export type TeamUnattributedUsersStat = {
  comments?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  conversations?: Maybe<Array<Maybe<ConversationRequest>>>;
  user?: Maybe<TeamUsersStat>;
};

export type KeyPhraseResponse = {
  id?: Maybe<Scalars['Float']>;
  keyMoments4?: Maybe<Array<Maybe<KeyMoment>>>;
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

export type ConvOpptyDTO = {
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
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

export type SummaryReportDTO = {
  amountImpacted?: Maybe<Scalars['Float']>;
  hrsProcessed?: Maybe<Scalars['Float']>;
  numOfConversations?: Maybe<Scalars['Float']>;
  uniqueContacts?: Maybe<Scalars['Float']>;
  uniqueDeals?: Maybe<Scalars['Float']>;
  uniqueKeyMoments?: Maybe<Scalars['Float']>;
};

export type TrendEQForOpptyResponse = {
  deals?: Maybe<DealSummaryDetailResponse>;
  keyMoments5?: Maybe<OpptyDTO>;
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

export type CustWebLinkResponseDTO = {
  company?: Maybe<Scalars['String']>;
  companyProfile?: Maybe<CompanyProfileDTO>;
  id?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  usersId?: Maybe<Scalars['Float']>;
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

export type KeyPhraseExpertResponseDTO = {
  email?: Maybe<Scalars['String']>;
  engagement?: Maybe<Scalars['Float']>;
  fullName?: Maybe<Scalars['String']>;
  sentiment?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
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

export type UserDelegateResponseDTO = {
  proxyOwners?: Maybe<Array<Maybe<User>>>;
  proxyUsers?: Maybe<Array<Maybe<User>>>;
};

export type Mutation = {
  /**
   *
   *
   * Equivalent to PUT /usales/playlists/media-clip-rel-bulk
   */
  addBulkPlaylistMediaClipRel?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /auth/login
   */
  authenticateUser?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /auth/login2
   */
  authenticateUser2?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/keyphrase/occurrences
   */
  companyKeyPhraseOccurrences?: Maybe<Array<Maybe<KeyPhraseOccurenceContentResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/keyphrase/sentiment
   */
  companyKeyPhraseOccurrencesBySentiment?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/timeline/{conv_id}
   */
  convert?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/alerts
   */
  createAlert?: Maybe<AlertResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/conv-topic-episodes
   */
  createConvTopicEpisode?: Maybe<ConvTopicEpisodeResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/emleqs
   */
  createEmlEq?: Maybe<EmlEqResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/custweblinks
   */
  createOrUpdate?: Maybe<CustWebLinkResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/comments
   */
  createOrUpdate1?: Maybe<CommentResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/clips
   */
  createOrUpdate2?: Maybe<VideoSharingHistoryDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/bookmarks
   */
  createOrUpdate3?: Maybe<ConvBookmarkResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/accounts
   */
  createOrUpdateAccount?: Maybe<AccountResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/attendees
   */
  createOrUpdateConvAttendee?: Maybe<ConvAttendeeResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/conv/attendees/{id}
   */
  createOrUpdateConvAttendee1?: Maybe<ConvAttendeeResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/keyword/categ
   */
  createOrUpdateKeywordCateg?: Maybe<KeywordCategResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/keyword/tag
   */
  createOrUpdateKeywordTag?: Maybe<KeywordTagResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/oppty/{opptyId}
   */
  createOrUpdateOppty?: Maybe<OpptyDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/oppty
   */
  createOrUpdateOppty1?: Maybe<OpptyDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/oppty/teams
   */
  createOrUpdateOpptyTeam?: Maybe<OpptyTeamResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/preferences
   */
  createOrUpdatePreference?: Maybe<UserUiPreferenceResponseDto>;
  /**
   *
   *
   * Equivalent to POST /usales/empathy-moment-recommendation
   */
  createOrUpdateRecommendation?: Maybe<EmpathyMomentRecommendationDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/users
   */
  createOrUpdateUser?: Maybe<User>;
  /**
   *
   *
   * Equivalent to DELETE /usales/zoommeetingwhitelist
   */
  delete?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/emleqs/{id}
   */
  delete1?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/custweblinks/{id}
   */
  delete2?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/conv-topic-episodes/{id}
   */
  delete3?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/comments/{id}
   */
  delete4?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/bookmarks/{id}
   */
  delete5?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/alerts/{id}
   */
  delete6?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to PUT /usales/playlists/delete-media-clip-rel
   */
  deletePlaylistMediaClipRel?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/keyword/tags
   */
  deleteTags?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/keyphrase/custom/trending
   */
  findCustomKeyphraseTrendingTopicCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/oppty/{id}/details
   */
  findDealDetailsByMode?: Maybe<DealSummaryDetailResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/keyphrase/trending
   */
  findKeyphraseTrendingTopicCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/timeline/generate/{conv_id}
   */
  generateTimeline?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/teams/usersstat
   */
  getAccountTeamsUsersStats?: Maybe<Array<Maybe<TeamUsersStat>>>;
  /**
   *
   *
   * Equivalent to POST /usales/teams/account/userstat
   */
  getAccountUsersStat?: Maybe<Array<Maybe<TeamAccountUsersStat>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/active-users
   */
  getAllActiveUsers?: Maybe<Array<Maybe<QUsageUserPageVisitDto>>>;
  /**
   *
   *
   * Equivalent to POST /usales/teams/userstat
   */
  getAllTeamsUserStats?: Maybe<Array<Maybe<TeamsAccountOpptyUsersStat>>>;
  /**
   *
   *
   * Equivalent to POST /usales/company/assessments
   */
  getAssessmentByCompany?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/users/assessments
   */
  getAssessments?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to PUT /usales/convs/meeting-attendee
   */
  getAttendeeByMeetingTranscript?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   *
   *
   * Equivalent to POST /auth/outlook/callback
   */
  getAuthCodeAndGenerateToken?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /auth/social
   */
  getAuthUrl?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /auth/outlook
   */
  getAuthUrl1?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /auth/google
   */
  getAuthUrl2?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/customer-pulse/closed-deals
   */
  getClosedDealDetails?: Maybe<Array<Maybe<AnalyticsCustomerPulseDealResponse>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/company/deals
   */
  getCompanyDeals?: Maybe<DealDetailResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/account-oppty-eq/company
   */
  getCompanyDealsEQOnRiskScale?: Maybe<Array<Maybe<AccountOpptyEQResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/meetingstat
   */
  getCompanyMeetingStats?: Maybe<OverallMeetingStatsResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/company-params
   */
  getCompanyParams?: Maybe<Array<Maybe<CompanyParamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/companystat
   */
  getCompanyQUsage?: Maybe<OverallQUsageResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/contacts
   */
  getContacts?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/accounts/{id}/activities
   */
  getConversationByAccount?: Maybe<AccountActivityResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/userstat
   */
  getConversationUserStat?: Maybe<ConvUserStatDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/customer-pulse
   */
  getCustomerPulse?: Maybe<DealSellerPerformanceResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/oppty/{id}/activities
   */
  getDealActivities?: Maybe<Array<Maybe<DealActivitiesSummaryResponse>>>;
  /**
   *
   *
   * Equivalent to POST /usales/accounts/deals
   */
  getDealCountByAccounts?: Maybe<Array<Maybe<AccountDealResponse>>>;
  /**
   *
   *
   * Equivalent to POST /usales/account-oppty-eq
   */
  getDealEQOnRiskScale?: Maybe<Array<Maybe<AccountOpptyEQResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/oppty/topics
   */
  getDealTopics?: Maybe<DealTopicCoverageResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/deals
   */
  getDeals?: Maybe<DealDetailResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/emails/{emlObjId}
   */
  getEmailByEmlObjId?: Maybe<EmlResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/emails
   */
  getEmails?: Maybe<Array<Maybe<EmlResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/empathyandhesitationturns/getforuserandrange
   */
  getEmpathyAndHesitationTurns?: Maybe<EmpathyAndHesitationTurnsReportForConvList>;
  /**
   *
   *
   * Equivalent to POST /usales/preferences/favorite-meeting
   */
  getFavoriteMeeting?: Maybe<UserUiPreferenceResponseDto>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/invited-users
   */
  getInvitedUsers?: Maybe<Array<Maybe<User>>>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/lastmeeting
   */
  getLastMeeting?: Maybe<Array<Maybe<ConversationRequest>>>;
  /**
   *
   *
   * Equivalent to POST /usales/mediaclip/search/count
   */
  getMediaClipCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/mediaclip/stats
   */
  getMediaClipStats?: Maybe<MediaClipStatsResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/meetings
   */
  getMeetingListBasedOnType?: Maybe<Array<Maybe<ConversationRequest>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/meeting/sentiments
   */
  getMeetingSentiments?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/users/meetings/sharedwithme
   */
  getMeetingsSharedWithUser?: Maybe<AdvSearchResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/{id}/keyword/search
   */
  getMomentsHavingKeyword?: Maybe<ConversationKeywordSearchResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/keytopics/popular
   */
  getMostPopularKeymoments?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/meeting/most-shared
   */
  getMostSharedMeetings?: Maybe<Array<Maybe<MostSharedConvAttr>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/meeting/mostviewed
   */
  getMostViewedMeeting?: Maybe<Array<Maybe<MostViewedConvAttr>>>;
  /**
   *
   *
   * Equivalent to POST /usales/teams/oppty/userstat
   */
  getOpptyUsersStat?: Maybe<TeamOpptyUsersStats>;
  /**
   *
   *
   * Equivalent to POST /usales/playlists/stats
   */
  getPlaylistStats?: Maybe<PlaylistStatsResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/playlists/search/count
   */
  getPlaylistsCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/playlists/{id}
   */
  getPlaylistsCount1?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/mediaclip/{id}
   */
  getPlaylistsCount2?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/sellereq
   */
  getSellerEQ?: Maybe<DealSellerPerformanceResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/configprops
   */
  getSystemProps?: Maybe<Array<Maybe<ConfigPropResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/page-visits
   */
  getTopPageVisitDetails?: Maybe<Array<Maybe<PageVisitsDto>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/users/calldetails
   */
  getUserCallMetr?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/users/callmetrics
   */
  getUserCallMetrics?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/users-auth
   */
  getUsersAuth?: Maybe<Array<Maybe<User>>>;
  /**
   *
   *
   * Equivalent to POST /usales/teams/convostat
   */
  getUsersConvoStat?: Maybe<Array<Maybe<TeamUsersStat>>>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/keyphrase/topic/count
   */
  keyPhras1eOccurences?: Maybe<Array<Maybe<KeyphraseTotalCountAttrDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/keyphrase/occurences
   */
  keyPhraseOccurences?: Maybe<Array<Maybe<KeyPhraseOccurenceResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /auth/logout
   */
  logout?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /v1/transcript/populate
   */
  populate?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/mindtickle/query
   */
  postDataByUri?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to PUT /usales/keyword/keyphrases
   */
  resetKeyPhrases?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /auth/users/details
   */
  revoke?: Maybe<Array<Maybe<User>>>;
  /**
   *
   *
   * Equivalent to POST /auth/revoke/{provider}
   */
  revoke1?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   *
   *
   * Equivalent to POST /usales/meeting/custom-disclaimer
   */
  saveMessage?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /cspviolations
   */
  saveReport?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /v1/transcript/search
   */
  search?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/zoommeetingwhitelist/search
   */
  search1?: Maybe<Array<Maybe<ZoomMeetingWhitelistDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/playlists/search
   */
  search2?: Maybe<Array<Maybe<PlaylistResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/mediaclip/search
   */
  search3?: Maybe<Array<Maybe<MediaClipResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/keymoments/search
   */
  search4?: Maybe<KeyMomentResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/emails/search
   */
  search5?: Maybe<Array<Maybe<EmlResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/custweblinks/search
   */
  search6?: Maybe<Array<Maybe<CustWebLinkResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/promise/search
   */
  search7?: Maybe<Array<Maybe<ConvPromiseResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/conv-topic-episodes/search
   */
  search8?: Maybe<Array<Maybe<ConvTopicEpisodeResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/comments/search
   */
  search9?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/contacts/search
   */
  searchAccountAndContact?: Maybe<AccountContactSearchResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/contacts/search/count
   */
  searchAccountAndContactCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/accounts/search
   */
  searchAccounts?: Maybe<Array<Maybe<AccountResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/accounts/search/count
   */
  searchAccountsCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/alerts/search
   */
  searchAlerts?: Maybe<Array<Maybe<AlertResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/contact/search
   */
  searchContact?: Maybe<Array<Maybe<ContactSearchResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/emails/search-summary
   */
  searchEmailSummary?: Maybe<Array<Maybe<EmailSummaryResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/events/search
   */
  searchEvents?: Maybe<CalenderEventSearchResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/events/search/count
   */
  searchEventsCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/categ/search
   */
  searchKeywordCateg?: Maybe<Array<Maybe<KeywordCategResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/categ/search/count
   */
  searchKeywordCategCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/categ/search/notags
   */
  searchKeywordCategWithoutTags?: Maybe<Array<Maybe<KeywordCategResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/tag/search
   */
  searchKeywordTag?: Maybe<Array<Maybe<KeywordTagResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/tag/search/count
   */
  searchKeywordTagCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/advSearch
   */
  searchMeetings?: Maybe<AdvSearchResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/search/meetings
   */
  searchMeetingsByAccountOrOppty?: Maybe<AdvSearchResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/advSearch/count
   */
  searchMeetingsCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/empathy-moment-recommendation/search
   */
  searchMoments?: Maybe<EmpathyChangeMomentResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/preferences/search
   */
  searchPreference?: Maybe<Array<Maybe<UserUiPreferenceResponseDto>>>;
  /**
   *
   *
   * Equivalent to POST /usales/emails/team-activity
   */
  searchTeamActivity?: Maybe<TeamEmailActivityResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/users/search
   */
  searchUsers?: Maybe<Array<Maybe<User>>>;
  /**
   *
   *
   * Equivalent to PUT /usales/companyprofile/keyword-categ-select
   */
  selectCompanyKeywordCategory?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /slack/sendmessage
   */
  sendMessage?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/shares/share-clip-external
   */
  shareClipExternalUser?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/shares/share-meeting-external
   */
  shareMeetingExternalUser?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/shares/share-meeting-internal/{type}
   */
  shareMeetingInternalUser?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/shares/playlist
   */
  sharePlaylist?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/emails/threadcount
   */
  threadCount?: Maybe<Array<Maybe<ThreadCountResponse>>>;
  /**
   *
   *
   * Equivalent to PUT /usales/companyprofile/access-consent
   */
  updateAccessConsent?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to PUT /usales/account-oppty-eq
   */
  updateAccountOpptyEQ?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to PUT /usales/account-oppty-eq-1
   */
  updateAccountOpptyEQ1?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to PUT /usales/alerts
   */
  updateAlert?: Maybe<AlertResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/events
   */
  updateCalendarEvent?: Maybe<CalendarEvent>;
  /**
   *
   *
   * Equivalent to PUT /usales/conv-topic-episodes
   */
  updateConvTopicEpisode?: Maybe<ConvTopicEpisodeResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/convs
   */
  updateConversation?: Maybe<ConversationRequest>;
  /**
   *
   *
   * Equivalent to PUT /usales/emleqs
   */
  updateEmlEq?: Maybe<EmlEqResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/keymoments
   */
  updateKeyMoment?: Maybe<ConvKeyMomentResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/playlists/media-clip-rel
   */
  updatePlaylistMediaClipRel?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/users/enable
   */
  updateQDetails?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to PUT /usales/keyword/tag/update-status
   */
  updateStatusByIds?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to PUT /auth/teams
   */
  updateTeamAccess?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/users/{managerId}/team
   */
  updateTeamMembersManagerDetails?: Maybe<Array<Maybe<User>>>;
  /**
   *
   *
   * Equivalent to POST /usales/users/proxy
   */
  updateUserProxy?: Maybe<UserDelegateResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/zoommeetingwhitelist/invoke-bot
   */
  updateZoomMeetingInvokeBot?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to PUT /usales/zoommeetingwhitelist/update
   */
  updateZoomMeetingWhitelist?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to PUT /usales/convs/external-meeting
   */
  uploadExternalMeeting?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/playlists
   */
  upsert?: Maybe<PlaylistResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/playlist/param
   */
  upsert1?: Maybe<PlaylistParamResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/mediaclip
   */
  upsert2?: Maybe<MediaClipResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/mediaClip/param
   */
  upsert3?: Maybe<MediaClipParamResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/promise
   */
  upsert4?: Maybe<ConvPromiseResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/param
   */
  upsert5?: Maybe<ConvParamResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/company-param
   */
  upsertCompanyParam?: Maybe<CompanyParamResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/companyprofile
   */
  upsertCompanyProfile?: Maybe<CompanyProfileDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/companyprofile/businesscategs
   */
  upsertCompanyProfileWithKeywordCategRel?: Maybe<CompanyProfileKeywordCategRelDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/configprops
   */
  upsertConfigProp?: Maybe<ConfigPropResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/{convId}/viewed
   */
  upsertExternal?: Maybe<ConvParamResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/playlist/param/last-viewed
   */
  upsertLastViewed?: Maybe<Array<Maybe<PlaylistParamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/mediaClip/param/last-viewed
   */
  upsertLastViewed1?: Maybe<Array<Maybe<MediaClipParamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/param/last-viewed
   */
  upsertLastViewed2?: Maybe<ConvParamResponseDTO>;
};


export type MutationaddBulkPlaylistMediaClipRelArgs = {
  usalesPlaylistsMediaClipRelBulkInput: Array<InputMaybe<PlaylistMediaClipRelRequestDTOInput>>;
};


export type MutationauthenticateUserArgs = {
  loginRequestInput: LoginRequestInput;
};


export type MutationauthenticateUser2Args = {
  loginRequestInput: LoginRequestInput;
};


export type MutationcompanyKeyPhraseOccurrencesArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
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
  usalesZoommeetingwhitelistInput: Array<InputMaybe<Scalars['String']>>;
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
  usalesPlaylistsDeleteMediaClipRelInput: Array<InputMaybe<PlaylistMediaClipRelRequestDTOInput>>;
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
  mode?: InputMaybe<Scalars['String']>;
  tz?: InputMaybe<Scalars['String']>;
};


export type MutationfindKeyphraseTrendingTopicCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgenerateTimelineArgs = {
  convId: Scalars['Float'];
};


export type MutationgetAccountTeamsUsersStatsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetAccountUsersStatArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetAllActiveUsersArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetAllTeamsUserStatsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetAssessmentByCompanyArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetAssessmentsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetAttendeeByMeetingTranscriptArgs = {
  usalesConvsMeetingAttendeeInput?: InputMaybe<UsalesConvsMeetingAttendeeInput>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetCompanyDealsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetCompanyDealsEQOnRiskScaleArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetCompanyMeetingStatsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetCompanyParamsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  usalesCompanyParams2Input: Array<InputMaybe<Scalars['String']>>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetDealCountByAccountsArgs = {
  accountDealRequestInput: AccountDealRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetDealEQOnRiskScaleArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
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
  limit?: InputMaybe<Scalars['Int']>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetLastMeetingArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  usalesConvsLastmeetingInput: Array<InputMaybe<Scalars['Float']>>;
};


export type MutationgetMediaClipCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetMediaClipStatsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetMeetingListBasedOnTypeArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetMostViewedMeetingArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
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
  limit?: InputMaybe<Scalars['Int']>;
  usalesConfigprops2Input: Array<InputMaybe<Scalars['String']>>;
};


export type MutationgetTopPageVisitDetailsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetUserCallMetrArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetUserCallMetricsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetUsersAuthArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetUsersConvoStatArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationkeyPhras1eOccurencesArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationkeyPhraseOccurencesArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationpopulateArgs = {
  eSPopulateRequestInput: ESPopulateRequestInput;
  pegasusJobKey?: InputMaybe<Scalars['String']>;
};


export type MutationpostDataByUriArgs = {
  mindTickleReqInput: MindTickleReqInput;
};


export type MutationrevokeArgs = {
  authUsersDetailsInput: Array<InputMaybe<Scalars['Float']>>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationrevoke1Args = {
  authRevoke2Input: Array<InputMaybe<Scalars['Float']>>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch2Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch3Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch4Args = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type Mutationsearch5Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch6Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch7Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch8Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch9Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchAccountAndContactArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchAccountAndContactCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchAccountsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchAccountsCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchAlertsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchContactArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchEmailSummaryArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchEventsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchEventsCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchKeywordCategArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchKeywordCategCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchKeywordCategWithoutTagsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchKeywordTagArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchTeamActivityArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchUsersArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationupdateAccessConsentArgs = {
  consent: Scalars['Boolean'];
};


export type MutationupdateAccountOpptyEQArgs = {
  pegasusJobKey?: InputMaybe<Scalars['String']>;
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
  all?: InputMaybe<Scalars['Boolean']>;
  usalesUsersEnableInput?: InputMaybe<Array<InputMaybe<UserRequestDTOInput>>>;
};


export type MutationupdateStatusByIdsArgs = {
  usalesKeywordTagUpdateStatusInput: Scalars['JSON'];
};


export type MutationupdateTeamAccessArgs = {
  enable: Scalars['Boolean'];
};


export type MutationupdateTeamMembersManagerDetailsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  managerId: Scalars['Float'];
  usalesUserTeamInput: Array<InputMaybe<Scalars['Float']>>;
};


export type MutationupdateUserProxyArgs = {
  userDelegateRequestDTOInput: UserDelegateRequestDTOInput;
};


export type MutationupdateZoomMeetingInvokeBotArgs = {
  zoomMeetingWhitelistRequestInput: ZoomMeetingWhitelistRequestInput;
};


export type MutationuploadExternalMeetingArgs = {
  usalesConvsExternalMeetingInput?: InputMaybe<UsalesConvsExternalMeetingInput>;
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
  limit?: InputMaybe<Scalars['Int']>;
  playlistParamRequestDTOInput: PlaylistParamRequestDTOInput;
};


export type MutationupsertLastViewed1Args = {
  limit?: InputMaybe<Scalars['Int']>;
  mediaClipParamRequestDTOInput: MediaClipParamRequestDTOInput;
};


export type MutationupsertLastViewed2Args = {
  convParamRequestDTOInput: ConvParamRequestDTOInput;
};

export type PlaylistMediaClipRelRequestDTOInput = {
  mediaClipId?: InputMaybe<Scalars['Float']>;
  mediaClipRelId?: InputMaybe<Scalars['Float']>;
  playlistId?: InputMaybe<Scalars['Float']>;
  pos?: InputMaybe<Scalars['Int']>;
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
  criteria?: InputMaybe<Array<InputMaybe<CriterionInput>>>;
  durationFlag?: InputMaybe<Scalars['String']>;
  entity?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<PaginationInput>;
  searchString?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<SortInput>;
};

export type CriterionInput = {
  name?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  valueType?: InputMaybe<Scalars['String']>;
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type SortInput = {
  asc?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UsalesTimelineInput = {
  timeline?: InputMaybe<Array<InputMaybe<TimelineDataInput>>>;
};

export type TimelineDataInput = {
  ts?: InputMaybe<Scalars['Float']>;
  users?: InputMaybe<Array<InputMaybe<UserInput>>>;
};

export type UserInput = {
  companyProfileDTO?: InputMaybe<CompanyProfileDTOInput>;
  email?: InputMaybe<Scalars['String']>;
  expired?: InputMaybe<Scalars['Boolean']>;
  externalIdToken?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  firstTimeLogin?: InputMaybe<Scalars['Boolean']>;
  firstname?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  invited?: InputMaybe<Scalars['Boolean']>;
  invitedAt?: InputMaybe<Scalars['String']>;
  isBlueJeansAuthorized?: InputMaybe<Scalars['Boolean']>;
  isCalendarAuthorized?: InputMaybe<Scalars['Boolean']>;
  isEmailAuthorized?: InputMaybe<Scalars['Boolean']>;
  isGmailAuthorized?: InputMaybe<Scalars['Boolean']>;
  isGoogleCalendarAuthorized?: InputMaybe<Scalars['Boolean']>;
  isOutlookAuthorized?: InputMaybe<Scalars['Boolean']>;
  isOutlookCalendarAuthorized?: InputMaybe<Scalars['Boolean']>;
  isPasswordResetRequired?: InputMaybe<Scalars['Boolean']>;
  isPasswordSet?: InputMaybe<Scalars['Boolean']>;
  isSlackAuthorized?: InputMaybe<Scalars['Boolean']>;
  isSsoLogin?: InputMaybe<Scalars['Boolean']>;
  isTeamAuthorized?: InputMaybe<Scalars['Boolean']>;
  isWebexAuthorized?: InputMaybe<Scalars['Boolean']>;
  isZoomAuthorized?: InputMaybe<Scalars['Boolean']>;
  lastname?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<UserManagerDTOInput>;
  orgId?: InputMaybe<Scalars['Float']>;
  orgType?: InputMaybe<Scalars['String']>;
  qEnabled?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Array<InputMaybe<IdNameDTOInput>>>;
  scopes?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userType?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  zoomToken?: InputMaybe<Scalars['String']>;
};

export type CompanyProfileDTOInput = {
  companyName?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type UserManagerDTOInput = {
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type IdNameDTOInput = {
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AlertRequestDTOInput = {
  archive?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  exp?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  objId?: InputMaybe<Scalars['Float']>;
  objSubId?: InputMaybe<Scalars['Float']>;
  objType?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updateBy?: InputMaybe<Scalars['Float']>;
  userId?: InputMaybe<Scalars['Float']>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConvTopicEpisodeRequestDTOInput = {
  conversation?: InputMaybe<Scalars['Float']>;
  endTime?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  insertBy?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  keytopicCount1?: InputMaybe<Scalars['Float']>;
  keytopicCount2?: InputMaybe<Scalars['Float']>;
  keytopicCount3?: InputMaybe<Scalars['Float']>;
  keytopicCount4?: InputMaybe<Scalars['Float']>;
  keytopicId1?: InputMaybe<Scalars['String']>;
  keytopicId2?: InputMaybe<Scalars['String']>;
  keytopicId3?: InputMaybe<Scalars['String']>;
  keytopicId4?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  unsupervisedCount1?: InputMaybe<Scalars['Float']>;
  unsupervisedCount2?: InputMaybe<Scalars['Float']>;
  unsupervisedCount3?: InputMaybe<Scalars['Float']>;
  unsupervisedCount4?: InputMaybe<Scalars['Float']>;
  unsupervisedTopic1?: InputMaybe<Scalars['String']>;
  unsupervisedTopic2?: InputMaybe<Scalars['String']>;
  unsupervisedTopic3?: InputMaybe<Scalars['String']>;
  unsupervisedTopic4?: InputMaybe<Scalars['String']>;
  updateBy?: InputMaybe<Scalars['Float']>;
  updateTime?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type EmlEqRequestDTOInput = {
  emlObjId?: InputMaybe<Scalars['Float']>;
  empathy?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  senderName?: InputMaybe<Scalars['String']>;
  sentiment?: InputMaybe<Scalars['Float']>;
};

export type CustWebLinkRequestDTOInput = {
  company?: InputMaybe<Scalars['String']>;
  companyProfileId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  usersId?: InputMaybe<Scalars['Float']>;
};

export type CommentRequestDTOInput = {
  comment?: InputMaybe<Scalars['String']>;
  convID?: InputMaybe<Scalars['Float']>;
  endTime?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  keyMomentId?: InputMaybe<Scalars['Float']>;
  mentions?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
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
  convId?: InputMaybe<Scalars['Float']>;
  inputFile?: InputMaybe<Scalars['String']>;
  keyMomentId?: InputMaybe<Scalars['Float']>;
  videoLength?: InputMaybe<Scalars['Int']>;
  videoStartTime?: InputMaybe<Scalars['Int']>;
};

export type ConvBookmarkRequestDTOInput = {
  convID?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  keyMomentId?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  timeEnd?: InputMaybe<Scalars['Float']>;
  timeStart?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type AccountRequestDTOInput = {
  accountTeam?: InputMaybe<Scalars['Float']>;
  crmAccountId?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  sticker?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConvAttendeeRequestDTOInput = {
  attendeeEmail?: InputMaybe<Scalars['String']>;
  attendeeName?: InputMaybe<Scalars['String']>;
  conv?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  employeeOrContactInd?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type KeywordCategRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  keywordCategName2?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type KeywordTagRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  keywordCateg?: InputMaybe<Scalars['Float']>;
  keywordTagVal?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type OpptyRequestDTOInput = {
  account?: InputMaybe<Scalars['Float']>;
  amount?: InputMaybe<Scalars['Float']>;
  contact?: InputMaybe<Scalars['Float']>;
  crmOpptyId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  opptyAmount?: InputMaybe<Scalars['Float']>;
  opptyCloseDate?: InputMaybe<Scalars['String']>;
  opptyCreateDate?: InputMaybe<Scalars['String']>;
  opptySource?: InputMaybe<Scalars['String']>;
  opptyStage?: InputMaybe<Scalars['String']>;
  opptyStatus?: InputMaybe<Scalars['String']>;
  opptyTeam?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type OpptyTeamRequestDTOInput = {
  endDate?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
  usersId?: InputMaybe<Scalars['Float']>;
  version?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  preferenceType?: InputMaybe<Scalars['String']>;
  savedJson?: InputMaybe<Scalars['String']>;
  uiPreferenceParamMap?: InputMaybe<Scalars['JSON']>;
  userId?: InputMaybe<Scalars['Float']>;
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
  convId?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  detectedBehaviour?: InputMaybe<Scalars['String']>;
  empathyMomentId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  originalUtterance?: InputMaybe<Scalars['String']>;
  recommendation?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  suggestedType?: InputMaybe<Scalars['String']>;
  suggestedUtterance?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updateTime?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type UserRequestDTOInput = {
  email?: InputMaybe<Scalars['String']>;
  expired?: InputMaybe<Scalars['Boolean']>;
  externalIdToken?: InputMaybe<Scalars['JSON']>;
  firstTimeLogin?: InputMaybe<Scalars['Boolean']>;
  firstname?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  lastname?: InputMaybe<Scalars['String']>;
  managerId?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  orgType?: InputMaybe<Scalars['String']>;
  qenabled?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userType?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  zoomToken?: InputMaybe<Scalars['String']>;
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
  attendeeList?: InputMaybe<Array<InputMaybe<AttendeeRequestInput>>>;
  doNotProcess?: InputMaybe<Scalars['Boolean']>;
  externalMeetingId?: InputMaybe<Scalars['String']>;
  meetingStartTime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  recordingStartTime?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type AttendeeRequestInput = {
  attendeeType?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AuthRequestInput = {
  scopes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  accounts?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
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
  meetingEndTime?: InputMaybe<Scalars['String']>;
  meetingStartTime?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Float']>;
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
  daysToProcess?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['String']>;
};

export type MindTickleReqInput = {
  filter?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

export type CspViolationReqInput = {
  cspReport?: InputMaybe<CspReportInput>;
};

export type CspReportInput = {
  blockedUri?: InputMaybe<Scalars['String']>;
  columnNumber?: InputMaybe<Scalars['String']>;
  disposition?: InputMaybe<Scalars['String']>;
  documentUri?: InputMaybe<Scalars['String']>;
  effectiveDirective?: InputMaybe<Scalars['String']>;
  lineNumber?: InputMaybe<Scalars['String']>;
  originalPolicy?: InputMaybe<Scalars['String']>;
  referrer?: InputMaybe<Scalars['String']>;
  scriptSample?: InputMaybe<Scalars['String']>;
  sourceFile?: InputMaybe<Scalars['String']>;
  statusCode?: InputMaybe<Scalars['String']>;
  violatedDirective?: InputMaybe<Scalars['String']>;
};

export type ESSearchInput = {
  criteria?: InputMaybe<Scalars['String']>;
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
  clip?: InputMaybe<ClipRequestInput>;
  description?: InputMaybe<Scalars['String']>;
  emailList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fullVideo?: InputMaybe<Scalars['Boolean']>;
  keyMomentText?: InputMaybe<Scalars['String']>;
  mediaClipId?: InputMaybe<Scalars['Float']>;
  meetingUrl?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ClipRequestInput = {
  convId?: InputMaybe<Scalars['Float']>;
  keymomentId?: InputMaybe<Scalars['Float']>;
  startInSeconds?: InputMaybe<Scalars['Float']>;
  stopInSeconds?: InputMaybe<Scalars['Float']>;
};

export type ShareClipDTOInput = {
  clipLength?: InputMaybe<Scalars['Int']>;
  clipStartTime?: InputMaybe<Scalars['Int']>;
  clipTitle?: InputMaybe<Scalars['String']>;
  convId?: InputMaybe<Scalars['Float']>;
  currtime?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  recipients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ShareMeetingDTOInput = {
  convId?: InputMaybe<Scalars['Float']>;
  currtime?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Float']>;
  mediaClipId?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  permission?: InputMaybe<Scalars['String']>;
  playlistId?: InputMaybe<Scalars['Float']>;
  recipients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoSharingHistoryId?: InputMaybe<Scalars['Float']>;
};

export type ThreadCountResponse = {
  email?: Maybe<Scalars['String']>;
  threadCount?: Maybe<Scalars['String']>;
};

export type CalendarEventRequestDTOInput = {
  accountId?: InputMaybe<Scalars['Float']>;
  botInstrFromCalendar?: InputMaybe<Scalars['Boolean']>;
  calUid?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  opptyId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ConversationDTOInput = {
  accountId?: InputMaybe<Scalars['Float']>;
  aiViewVideoMediaLink?: InputMaybe<Scalars['String']>;
  audioMediaLink?: InputMaybe<Scalars['String']>;
  confidential?: InputMaybe<Scalars['Boolean']>;
  contentViewVideoMediaLink?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  entity?: InputMaybe<Scalars['String']>;
  externalConvId?: InputMaybe<Scalars['String']>;
  externalMeetingId?: InputMaybe<Scalars['String']>;
  galleryViewVideoMediaLink?: InputMaybe<Scalars['String']>;
  hostId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  meetingEndTime?: InputMaybe<Scalars['String']>;
  meetingStartTime?: InputMaybe<Scalars['String']>;
  meetingTopic?: InputMaybe<Scalars['String']>;
  opptyId?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  recordingStartTime?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  speakerTimelineLink?: InputMaybe<Scalars['String']>;
  speakerViewVideoMediaLink?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  textMediaLink?: InputMaybe<Scalars['String']>;
  transcriptLink?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  videoMediaLink?: InputMaybe<Scalars['String']>;
};

export type ConvKeyMomentRequestDTOInput = {
  contentImages?: InputMaybe<Scalars['String']>;
  conversation?: InputMaybe<Scalars['Float']>;
  downVote?: InputMaybe<Scalars['Float']>;
  downVoteUser?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  keywordTagId1?: InputMaybe<Scalars['Float']>;
  keywordTagId2?: InputMaybe<Scalars['Float']>;
  keywordTagId3?: InputMaybe<Scalars['Float']>;
  keywordTagId4?: InputMaybe<Scalars['Float']>;
  kmEndTime?: InputMaybe<Scalars['String']>;
  kmEndUtteranceId?: InputMaybe<Scalars['Float']>;
  kmStartTime?: InputMaybe<Scalars['String']>;
  kmStartUtteranceId?: InputMaybe<Scalars['Float']>;
  polarity?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Float']>;
  startTime?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  upVote?: InputMaybe<Scalars['Float']>;
  upVoteUser?: InputMaybe<Scalars['String']>;
};

export type UserDelegateRequestDTOInput = {
  proxyOwner?: InputMaybe<Scalars['Float']>;
  proxyUsers?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ZoomMeetingWhitelistRequestInput = {
  meetingWhiteLists?: InputMaybe<Array<InputMaybe<MeetingWhiteListInput>>>;
};

export type MeetingWhiteListInput = {
  invokeBot?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['Float']>;
};

export type UsalesConvsExternalMeetingInput = {
  file: Scalars['String'];
  payload: MeetingRequestInput;
  transcript?: InputMaybe<Scalars['String']>;
};

export type PlaylistRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updateTime?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type PlaylistParamRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  playlistId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type MediaClipRequestDTOInput = {
  convId?: InputMaybe<Scalars['Float']>;
  convKeymomentId?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  transcript?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updateTime?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Float']>;
  version?: InputMaybe<Scalars['String']>;
};

export type MediaClipParamRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  mediaClipId?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConvPromiseRequestDTOInput = {
  actionStatus?: InputMaybe<Scalars['String']>;
  classification?: InputMaybe<Scalars['String']>;
  convId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  promiseEndTime?: InputMaybe<Scalars['String']>;
  promiseNextAction?: InputMaybe<Scalars['String']>;
  promiseStartTime?: InputMaybe<Scalars['String']>;
  promiseText?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['String']>;
  speaker?: InputMaybe<Scalars['String']>;
  speakerUsersId?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
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
  agentSpoken?: InputMaybe<Scalars['String']>;
  convId?: InputMaybe<Scalars['Float']>;
  custSpoken?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Float']>;
  engagement?: InputMaybe<Scalars['String']>;
  externalMeetingId?: InputMaybe<Scalars['String']>;
  frame?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  introVideoMediaLink?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  performance?: InputMaybe<Scalars['String']>;
  probability?: InputMaybe<Scalars['String']>;
  questions?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['String']>;
  sentiment?: InputMaybe<Scalars['String']>;
  silences?: InputMaybe<Scalars['String']>;
  spoken?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type CompanyParamRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type CompanyProfileKeywordCategRelDTO = {
  companyProfileId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keywordCategId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
};

export type CompanyProfileKeywordCategRelDTOInput = {
  companyProfileId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  keywordCategId?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
};

export type ConfigPropRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  setId?: InputMaybe<Scalars['Float']>;
  setName?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
  Float: ResolverTypeWrapper<Scalars['Float']>;
  String: ResolverTypeWrapper<Scalars['String']>;
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
  AccountTeamResponse: ResolverTypeWrapper<AccountTeamResponse>;
  AccountTeamDTO: ResolverTypeWrapper<AccountTeamDTO>;
  AlertResponseDTO: ResolverTypeWrapper<AlertResponseDTO>;
  User: ResolverTypeWrapper<User>;
  CompanyProfileDTO: ResolverTypeWrapper<CompanyProfileDTO>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  UserManagerDTO: ResolverTypeWrapper<UserManagerDTO>;
  CalendarEvent: ResolverTypeWrapper<CalendarEvent>;
  CalendarEventAttendee: ResolverTypeWrapper<CalendarEventAttendee>;
  ConversationDetailResponse: ResolverTypeWrapper<ConversationDetailResponse>;
  DealAccount: ResolverTypeWrapper<DealAccount>;
  ConvNextAction: ResolverTypeWrapper<ConvNextAction>;
  DealSummaryDetailResponse: ResolverTypeWrapper<DealSummaryDetailResponse>;
  UserActivity: ResolverTypeWrapper<UserActivity>;
  DealOppty: ResolverTypeWrapper<DealOppty>;
  ConvTopicEpisodeResponseDTO: ResolverTypeWrapper<ConvTopicEpisodeResponseDTO>;
  CompanySlideFirstResponse: ResolverTypeWrapper<CompanySlideFirstResponse>;
  SlideFirst: ResolverTypeWrapper<SlideFirst>;
  ContactMetricsResponse: ResolverTypeWrapper<ContactMetricsResponse>;
  ContactMethodDTO: ResolverTypeWrapper<ContactMethodDTO>;
  ContactMethodParam: ResolverTypeWrapper<ContactMethodParam>;
  ContactMethod: ResolverTypeWrapper<ContactMethod>;
  OpptyDTO: ResolverTypeWrapper<OpptyDTO>;
  ContactResponse: ResolverTypeWrapper<ContactResponse>;
  LastConv: ResolverTypeWrapper<LastConv>;
  NextConv: ResolverTypeWrapper<NextConv>;
  ConvAttendeeResponseDTO: ResolverTypeWrapper<ConvAttendeeResponseDTO>;
  ConvEQResponseDTO: ResolverTypeWrapper<ConvEQResponseDTO>;
  ConvMetricsResponse: ResolverTypeWrapper<ConvMetricsResponse>;
  ConversationAttributionLogRsp: ResolverTypeWrapper<ConversationAttributionLogRsp>;
  ConvSlideFirstResponse: ResolverTypeWrapper<ConvSlideFirstResponse>;
  ConvTimeline: ResolverTypeWrapper<ConvTimeline>;
  ConversationAttendeesResponse: ResolverTypeWrapper<ConversationAttendeesResponse>;
  ConversationSummaryResponse: ResolverTypeWrapper<ConversationSummaryResponse>;
  Datum: ResolverTypeWrapper<Datum>;
  ConvAttendeeAttr: ResolverTypeWrapper<ConvAttendeeAttr>;
  Opportunity: ResolverTypeWrapper<Opportunity>;
  ConvoStatResponse: ResolverTypeWrapper<ConvoStatResponse>;
  ConvoStats: ResolverTypeWrapper<ConvoStats>;
  DealDetailResponse: ResolverTypeWrapper<DealDetailResponse>;
  DealSearchResult: ResolverTypeWrapper<DealSearchResult>;
  DealEntity: ResolverTypeWrapper<DealEntity>;
  DealData: ResolverTypeWrapper<DealData>;
  AccountOpptyEQResponseDTO: ResolverTypeWrapper<AccountOpptyEQResponseDTO>;
  OpptyRisk: OpptyRisk;
  DealNextAction: ResolverTypeWrapper<DealNextAction>;
  CurrentEQForOpptyResponse: ResolverTypeWrapper<CurrentEQForOpptyResponse>;
  DealSummaryResponse: ResolverTypeWrapper<DealSummaryResponse>;
  DealSummaryTrendResponse: ResolverTypeWrapper<DealSummaryTrendResponse>;
  DealConvoStat: ResolverTypeWrapper<DealConvoStat>;
  Stages: ResolverTypeWrapper<Stages>;
  DealStat: ResolverTypeWrapper<DealStat>;
  Diarization: ResolverTypeWrapper<Diarization>;
  Task: ResolverTypeWrapper<Task>;
  Option: ResolverTypeWrapper<Option>;
  EmpathyAndHesitationTurnsReport: ResolverTypeWrapper<EmpathyAndHesitationTurnsReport>;
  EmpathyChangeDetails: ResolverTypeWrapper<EmpathyChangeDetails>;
  HesitationChangeDetails: ResolverTypeWrapper<HesitationChangeDetails>;
  TeamOpptyUsersStats: ResolverTypeWrapper<TeamOpptyUsersStats>;
  IdealConvEQ: ResolverTypeWrapper<IdealConvEQ>;
  TeamUsersStat: ResolverTypeWrapper<TeamUsersStat>;
  UsersStat: ResolverTypeWrapper<UsersStat>;
  TeamOpptyUsersStat: ResolverTypeWrapper<TeamOpptyUsersStat>;
  CommentResponseDTO: ResolverTypeWrapper<CommentResponseDTO>;
  TeamUnattributedUsersStat: ResolverTypeWrapper<TeamUnattributedUsersStat>;
  KeyPhraseResponse: ResolverTypeWrapper<KeyPhraseResponse>;
  MediaClipResponseDTO: ResolverTypeWrapper<MediaClipResponseDTO>;
  ConvKeyMomentResponseDTO: ResolverTypeWrapper<ConvKeyMomentResponseDTO>;
  KeywordTagResponseDTO: ResolverTypeWrapper<KeywordTagResponseDTO>;
  KeywordCategResponseDTO: ResolverTypeWrapper<KeywordCategResponseDTO>;
  ConvOpptyDTO: ResolverTypeWrapper<ConvOpptyDTO>;
  OpptyEqbyStageResponseDTO: ResolverTypeWrapper<OpptyEqbyStageResponseDTO>;
  OpptyTeamResponseDTO: ResolverTypeWrapper<OpptyTeamResponseDTO>;
  PlaylistResponseDTO: ResolverTypeWrapper<PlaylistResponseDTO>;
  SummaryReportDTO: ResolverTypeWrapper<SummaryReportDTO>;
  TrendEQForOpptyResponse: ResolverTypeWrapper<TrendEQForOpptyResponse>;
  AccountPromisesResponseDTO: ResolverTypeWrapper<AccountPromisesResponseDTO>;
  Promise: ResolverTypeWrapper<Promise>;
  ConvInfo: ResolverTypeWrapper<ConvInfo>;
  DealInfo: ResolverTypeWrapper<DealInfo>;
  CompanyParamResponseDTO: ResolverTypeWrapper<CompanyParamResponseDTO>;
  ConfigPropResponseDTO: ResolverTypeWrapper<ConfigPropResponseDTO>;
  AggrConvMetrics: ResolverTypeWrapper<AggrConvMetrics>;
  CustWebLinkResponseDTO: ResolverTypeWrapper<CustWebLinkResponseDTO>;
  EmlEqResponseDTO: ResolverTypeWrapper<EmlEqResponseDTO>;
  EmlObjResponseDTO: ResolverTypeWrapper<EmlObjResponseDTO>;
  EmlBody2: ResolverTypeWrapper<EmlBody2>;
  EmlObj: ResolverTypeWrapper<EmlObj>;
  EmlEq: ResolverTypeWrapper<EmlEq>;
  EmlMetadata: ResolverTypeWrapper<EmlMetadata>;
  EmlMetadataParam: ResolverTypeWrapper<EmlMetadataParam>;
  EmlObjParam: ResolverTypeWrapper<EmlObjParam>;
  EmlBodyParam: ResolverTypeWrapper<EmlBodyParam>;
  KeyPhraseExpertResponseDTO: ResolverTypeWrapper<KeyPhraseExpertResponseDTO>;
  MediaClipParamResponseDTO: ResolverTypeWrapper<MediaClipParamResponseDTO>;
  PlaylistParamResponseDTO: ResolverTypeWrapper<PlaylistParamResponseDTO>;
  SharedMemberDTO: ResolverTypeWrapper<SharedMemberDTO>;
  ConvSharedViewData: ResolverTypeWrapper<ConvSharedViewData>;
  UserDelegateResponseDTO: ResolverTypeWrapper<UserDelegateResponseDTO>;
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
  Float: Scalars['Float'];
  String: Scalars['String'];
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
  AccountTeamResponse: AccountTeamResponse;
  AccountTeamDTO: AccountTeamDTO;
  AlertResponseDTO: AlertResponseDTO;
  User: User;
  CompanyProfileDTO: CompanyProfileDTO;
  JSON: Scalars['JSON'];
  UserManagerDTO: UserManagerDTO;
  CalendarEvent: CalendarEvent;
  CalendarEventAttendee: CalendarEventAttendee;
  ConversationDetailResponse: ConversationDetailResponse;
  DealAccount: DealAccount;
  ConvNextAction: ConvNextAction;
  DealSummaryDetailResponse: DealSummaryDetailResponse;
  UserActivity: UserActivity;
  DealOppty: DealOppty;
  ConvTopicEpisodeResponseDTO: ConvTopicEpisodeResponseDTO;
  CompanySlideFirstResponse: CompanySlideFirstResponse;
  SlideFirst: SlideFirst;
  ContactMetricsResponse: ContactMetricsResponse;
  ContactMethodDTO: ContactMethodDTO;
  ContactMethodParam: ContactMethodParam;
  ContactMethod: ContactMethod;
  OpptyDTO: OpptyDTO;
  ContactResponse: ContactResponse;
  LastConv: LastConv;
  NextConv: NextConv;
  ConvAttendeeResponseDTO: ConvAttendeeResponseDTO;
  ConvEQResponseDTO: ConvEQResponseDTO;
  ConvMetricsResponse: ConvMetricsResponse;
  ConversationAttributionLogRsp: ConversationAttributionLogRsp;
  ConvSlideFirstResponse: ConvSlideFirstResponse;
  ConvTimeline: ConvTimeline;
  ConversationAttendeesResponse: ConversationAttendeesResponse;
  ConversationSummaryResponse: ConversationSummaryResponse;
  Datum: Datum;
  ConvAttendeeAttr: ConvAttendeeAttr;
  Opportunity: Opportunity;
  ConvoStatResponse: ConvoStatResponse;
  ConvoStats: ConvoStats;
  DealDetailResponse: DealDetailResponse;
  DealSearchResult: DealSearchResult;
  DealEntity: DealEntity;
  DealData: DealData;
  AccountOpptyEQResponseDTO: AccountOpptyEQResponseDTO;
  DealNextAction: DealNextAction;
  CurrentEQForOpptyResponse: CurrentEQForOpptyResponse;
  DealSummaryResponse: DealSummaryResponse;
  DealSummaryTrendResponse: DealSummaryTrendResponse;
  DealConvoStat: DealConvoStat;
  Stages: Stages;
  DealStat: DealStat;
  Diarization: Diarization;
  Task: Task;
  Option: Option;
  EmpathyAndHesitationTurnsReport: EmpathyAndHesitationTurnsReport;
  EmpathyChangeDetails: EmpathyChangeDetails;
  HesitationChangeDetails: HesitationChangeDetails;
  TeamOpptyUsersStats: TeamOpptyUsersStats;
  IdealConvEQ: IdealConvEQ;
  TeamUsersStat: TeamUsersStat;
  UsersStat: UsersStat;
  TeamOpptyUsersStat: TeamOpptyUsersStat;
  CommentResponseDTO: CommentResponseDTO;
  TeamUnattributedUsersStat: TeamUnattributedUsersStat;
  KeyPhraseResponse: KeyPhraseResponse;
  MediaClipResponseDTO: MediaClipResponseDTO;
  ConvKeyMomentResponseDTO: ConvKeyMomentResponseDTO;
  KeywordTagResponseDTO: KeywordTagResponseDTO;
  KeywordCategResponseDTO: KeywordCategResponseDTO;
  ConvOpptyDTO: ConvOpptyDTO;
  OpptyEqbyStageResponseDTO: OpptyEqbyStageResponseDTO;
  OpptyTeamResponseDTO: OpptyTeamResponseDTO;
  PlaylistResponseDTO: PlaylistResponseDTO;
  SummaryReportDTO: SummaryReportDTO;
  TrendEQForOpptyResponse: TrendEQForOpptyResponse;
  AccountPromisesResponseDTO: AccountPromisesResponseDTO;
  Promise: Promise;
  ConvInfo: ConvInfo;
  DealInfo: DealInfo;
  CompanyParamResponseDTO: CompanyParamResponseDTO;
  ConfigPropResponseDTO: ConfigPropResponseDTO;
  AggrConvMetrics: AggrConvMetrics;
  CustWebLinkResponseDTO: CustWebLinkResponseDTO;
  EmlEqResponseDTO: EmlEqResponseDTO;
  EmlObjResponseDTO: EmlObjResponseDTO;
  EmlBody2: EmlBody2;
  EmlObj: EmlObj;
  EmlEq: EmlEq;
  EmlMetadata: EmlMetadata;
  EmlMetadataParam: EmlMetadataParam;
  EmlObjParam: EmlObjParam;
  EmlBodyParam: EmlBodyParam;
  KeyPhraseExpertResponseDTO: KeyPhraseExpertResponseDTO;
  MediaClipParamResponseDTO: MediaClipParamResponseDTO;
  PlaylistParamResponseDTO: PlaylistParamResponseDTO;
  SharedMemberDTO: SharedMemberDTO;
  ConvSharedViewData: ConvSharedViewData;
  UserDelegateResponseDTO: UserDelegateResponseDTO;
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
  accountResponseDTO?: Resolver<Maybe<ResolversTypes['AccountResponseDTO']>, ParentType, ContextType, RequireFields<QueryaccountResponseDTOArgs, 'id'>>;
  accountTeamResponse?: Resolver<Maybe<ResolversTypes['AccountTeamResponse']>, ParentType, ContextType, RequireFields<QueryaccountTeamResponseArgs, 'id'>>;
  alertResponseDTO?: Resolver<Maybe<ResolversTypes['AlertResponseDTO']>, ParentType, ContextType, RequireFields<QueryalertResponseDTOArgs, 'id'>>;
  authAccessToken?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  authGoogle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authGoogleCallback?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  authOutlook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authRevoke?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryauthRevokeArgs, 'provider'>>;
  authSocial?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  calendarEvent?: Resolver<Maybe<ResolversTypes['CalendarEvent']>, ParentType, ContextType, RequireFields<QuerycalendarEventArgs, 'id'>>;
  companyProfileDTO?: Resolver<Maybe<ResolversTypes['CompanyProfileDTO']>, ParentType, ContextType>;
  companySlideFirstResponse?: Resolver<Maybe<ResolversTypes['CompanySlideFirstResponse']>, ParentType, ContextType>;
  contactMetricsResponse?: Resolver<Maybe<ResolversTypes['ContactMetricsResponse']>, ParentType, ContextType, RequireFields<QuerycontactMetricsResponseArgs, 'contactId' | 'opptyId'>>;
  contactResponse?: Resolver<Maybe<ResolversTypes['ContactResponse']>, ParentType, ContextType, RequireFields<QuerycontactResponseArgs, 'contactId'>>;
  convAttendeeResponseDTO?: Resolver<Maybe<ResolversTypes['ConvAttendeeResponseDTO']>, ParentType, ContextType, RequireFields<QueryconvAttendeeResponseDTOArgs, 'id'>>;
  convEQResponseDTO?: Resolver<Maybe<ResolversTypes['ConvEQResponseDTO']>, ParentType, ContextType, RequireFields<QueryconvEQResponseDTOArgs, 'convId'>>;
  convMetricsResponse?: Resolver<Maybe<ResolversTypes['ConvMetricsResponse']>, ParentType, ContextType, RequireFields<QueryconvMetricsResponseArgs, 'id'>>;
  convMod?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationAttributionLogRsp']>>>, ParentType, ContextType, RequireFields<QueryconvModArgs, 'convId'>>;
  convSlideFirstResponse?: Resolver<Maybe<ResolversTypes['ConvSlideFirstResponse']>, ParentType, ContextType, RequireFields<QueryconvSlideFirstResponseArgs, 'id'>>;
  convTimeline?: Resolver<Maybe<ResolversTypes['ConvTimeline']>, ParentType, ContextType, RequireFields<QueryconvTimelineArgs, 'convId'>>;
  convTopicEpisodeResponseDTO?: Resolver<Maybe<ResolversTypes['ConvTopicEpisodeResponseDTO']>, ParentType, ContextType, RequireFields<QueryconvTopicEpisodeResponseDTOArgs, 'id'>>;
  conversationAttendeesResponse?: Resolver<Maybe<ResolversTypes['ConversationAttendeesResponse']>, ParentType, ContextType, RequireFields<QueryconversationAttendeesResponseArgs, 'id'>>;
  conversationDetailResponse?: Resolver<Maybe<ResolversTypes['ConversationDetailResponse']>, ParentType, ContextType, RequireFields<QueryconversationDetailResponseArgs, 'id'>>;
  conversationRequest?: Resolver<Maybe<ResolversTypes['ConversationRequest']>, ParentType, ContextType, RequireFields<QueryconversationRequestArgs, 'id'>>;
  conversationSummaryResponse?: Resolver<Maybe<ResolversTypes['ConversationSummaryResponse']>, ParentType, ContextType, RequireFields<QueryconversationSummaryResponseArgs, 'id'>>;
  convoStatResponse?: Resolver<Maybe<ResolversTypes['ConvoStatResponse']>, ParentType, ContextType, RequireFields<QueryconvoStatResponseArgs, 'convId'>>;
  cqAccountTrend?: Resolver<Maybe<Array<Maybe<ResolversTypes['DealDetailResponse']>>>, ParentType, ContextType, RequireFields<QuerycqAccountTrendArgs, 'crmAccountId'>>;
  cqContactEq?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QuerycqContactEqArgs, 'crmContactId'>>;
  cqOpportunityContactEq?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contact']>>>, ParentType, ContextType, RequireFields<QuerycqOpportunityContactEqArgs, 'crmContactId' | 'crmOpportunityId'>>;
  cqTokenAccess?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  cqTokenRefresh?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  cqTokenRevokeAccess?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cqTokenRevokeRefresh?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentEQForOpptyResponse?: Resolver<Maybe<ResolversTypes['CurrentEQForOpptyResponse']>, ParentType, ContextType, RequireFields<QuerycurrentEQForOpptyResponseArgs, 'crmOpportunityId'>>;
  dealDetailResponse?: Resolver<Maybe<ResolversTypes['DealDetailResponse']>, ParentType, ContextType, RequireFields<QuerydealDetailResponseArgs, 'crmAccountId'>>;
  dealSummaryDetailResponse?: Resolver<Maybe<ResolversTypes['DealSummaryDetailResponse']>, ParentType, ContextType, RequireFields<QuerydealSummaryDetailResponseArgs, 'id'>>;
  dealSummaryResponse?: Resolver<Maybe<ResolversTypes['DealSummaryResponse']>, ParentType, ContextType, RequireFields<QuerydealSummaryResponseArgs, 'id'>>;
  dealSummaryTrendResponse?: Resolver<Maybe<ResolversTypes['DealSummaryTrendResponse']>, ParentType, ContextType, RequireFields<QuerydealSummaryTrendResponseArgs, 'id'>>;
  diarization?: Resolver<Maybe<ResolversTypes['Diarization']>, ParentType, ContextType, RequireFields<QuerydiarizationArgs, 'convId'>>;
  empathyAndHesitationTurnsReport?: Resolver<Maybe<ResolversTypes['EmpathyAndHesitationTurnsReport']>, ParentType, ContextType, RequireFields<QueryempathyAndHesitationTurnsReportArgs, 'convId'>>;
  getContactsEQForOppty?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contact']>>>, ParentType, ContextType, RequireFields<QuerygetContactsEQForOpptyArgs, 'crmOpportunityId'>>;
  getConversationDetail?: Resolver<Maybe<ResolversTypes['ConversationDetailResponse']>, ParentType, ContextType, RequireFields<QuerygetConversationDetailArgs, 'id'>>;
  getEQbyAccount?: Resolver<Maybe<ResolversTypes['ConvEQResponseDTO']>, ParentType, ContextType, RequireFields<QuerygetEQbyAccountArgs, 'accountId'>>;
  getManagerEQ?: Resolver<Maybe<ResolversTypes['TeamOpptyUsersStats']>, ParentType, ContextType, RequireFields<QuerygetManagerEQArgs, 'managerEmailId' | 'startMMddyyyy'>>;
  getOpptyById?: Resolver<Maybe<ResolversTypes['OpptyDTO']>, ParentType, ContextType, RequireFields<QuerygetOpptyByIdArgs, 'id'>>;
  getOpptyKeyMoments?: Resolver<Maybe<ResolversTypes['OpptyDTO']>, ParentType, ContextType, Partial<QuerygetOpptyKeyMomentsArgs>>;
  getSellerEQ2?: Resolver<Maybe<ResolversTypes['TeamOpptyUsersStats']>, ParentType, ContextType, RequireFields<QuerygetSellerEQ2Args, 'sellerEmailId'>>;
  keyPhraseResponse?: Resolver<Maybe<ResolversTypes['KeyPhraseResponse']>, ParentType, ContextType, RequireFields<QuerykeyPhraseResponseArgs, 'id'>>;
  mediaClipResponseDTO?: Resolver<Maybe<ResolversTypes['MediaClipResponseDTO']>, ParentType, ContextType, RequireFields<QuerymediaClipResponseDTOArgs, 'id'>>;
  opptyDTO?: Resolver<Maybe<ResolversTypes['OpptyDTO']>, ParentType, ContextType, RequireFields<QueryopptyDTOArgs, 'opptyId'>>;
  opptyEqbyStageResponseDTO?: Resolver<Maybe<ResolversTypes['OpptyEqbyStageResponseDTO']>, ParentType, ContextType, RequireFields<QueryopptyEqbyStageResponseDTOArgs, 'opptyStage'>>;
  opptyTeamResponseDTO?: Resolver<Maybe<ResolversTypes['OpptyTeamResponseDTO']>, ParentType, ContextType, RequireFields<QueryopptyTeamResponseDTOArgs, 'id'>>;
  playlistResponseDTO?: Resolver<Maybe<ResolversTypes['PlaylistResponseDTO']>, ParentType, ContextType, RequireFields<QueryplaylistResponseDTOArgs, 'id'>>;
  slackAuthurl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slackRedirect?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryslackRedirectArgs, 'code' | 'state'>>;
  summaryReportDTO?: Resolver<Maybe<ResolversTypes['SummaryReportDTO']>, ParentType, ContextType>;
  teamOpptyUsersStats?: Resolver<Maybe<ResolversTypes['TeamOpptyUsersStats']>, ParentType, ContextType, RequireFields<QueryteamOpptyUsersStatsArgs, 'days' | 'sellerEmailId'>>;
  trendEQForOpptyResponse?: Resolver<Maybe<ResolversTypes['TrendEQForOpptyResponse']>, ParentType, ContextType, RequireFields<QuerytrendEQForOpptyResponseArgs, 'crmOpportunityId'>>;
  usalesAccountOppty?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpptyDTO']>>>, ParentType, ContextType, RequireFields<QueryusalesAccountOpptyArgs, 'id'>>;
  usalesAccounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountResponseDTO']>>>, ParentType, ContextType, Partial<QueryusalesAccountsArgs>>;
  usalesAccountsPromises?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountPromisesResponseDTO']>>>, ParentType, ContextType, Partial<QueryusalesAccountsPromisesArgs>>;
  usalesAlerts?: Resolver<Maybe<Array<Maybe<ResolversTypes['AlertResponseDTO']>>>, ParentType, ContextType, Partial<QueryusalesAlertsArgs>>;
  usalesBookmarksConv?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvBookmarkResponseDTO']>>>, ParentType, ContextType, RequireFields<QueryusalesBookmarksConvArgs, 'convId'>>;
  usalesBookmarksKeymoment?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvBookmarkResponseDTO']>>>, ParentType, ContextType, RequireFields<QueryusalesBookmarksKeymomentArgs, 'convKeyMomentId'>>;
  usalesCompanyParam?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryusalesCompanyParamArgs, 'prop'>>;
  usalesCompanyParams?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompanyParamResponseDTO']>>>, ParentType, ContextType, Partial<QueryusalesCompanyParamsArgs>>;
  usalesCompanyprofileAccessConsent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  usalesCompanyprofileBusinesscategs?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeywordCategResponseDTO']>>>, ParentType, ContextType, Partial<QueryusalesCompanyprofileBusinesscategsArgs>>;
  usalesConfigprops?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConfigPropResponseDTO']>>>, ParentType, ContextType, Partial<QueryusalesConfigpropsArgs>>;
  usalesContactEmailsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryusalesContactEmailsCountArgs, 'contactId'>>;
  usalesConvComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentResponseDTO']>>>, ParentType, ContextType, RequireFields<QueryusalesConvCommentsArgs, 'convId'>>;
  usalesConvContactEqscore?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryusalesConvContactEqscoreArgs, 'contact' | 'convId'>>;
  usalesConvMetric?: Resolver<Maybe<Array<Maybe<ResolversTypes['AggrConvMetrics']>>>, ParentType, ContextType, RequireFields<QueryusalesConvMetricArgs, 'id'>>;
  usalesConvMetrics?: Resolver<Maybe<Array<Maybe<ResolversTypes['AggrConvMetrics']>>>, ParentType, ContextType, RequireFields<QueryusalesConvMetricsArgs, 'id' | 'participantId'>>;
  usalesConvs?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationRequest']>>>, ParentType, ContextType, Partial<QueryusalesConvsArgs>>;
  usalesConvsAttendees?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvAttendeeResponseDTO']>>>, ParentType, ContextType, Partial<QueryusalesConvsAttendeesArgs>>;
  usalesConvsStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  usalesCustweblinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustWebLinkResponseDTO']>>>, ParentType, ContextType, Partial<QueryusalesCustweblinksArgs>>;
  usalesDealContactEqscore?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryusalesDealContactEqscoreArgs, 'contactId' | 'opptyId'>>;
  usalesDealConvtrends?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvEQResponseDTO']>>>, ParentType, ContextType, RequireFields<QueryusalesDealConvtrendsArgs, 'opptyId'>>;
  usalesDealEqscore?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryusalesDealEqscoreArgs, 'opptyId'>>;
  usalesDealsStages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  usalesEmleq?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryusalesEmleqArgs, 'id'>>;
  usalesEmleqs?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmlEqResponseDTO']>>>, ParentType, ContextType, Partial<QueryusalesEmleqsArgs>>;
  usalesKeymomentComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentResponseDTO']>>>, ParentType, ContextType, RequireFields<QueryusalesKeymomentCommentsArgs, 'convKeyMomentId'>>;
  usalesKeywordCateg?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  usalesKeywordCateg2?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeywordCategResponseDTO']>>>, ParentType, ContextType, RequireFields<QueryusalesKeywordCateg2Args, 'category'>>;
  usalesKeywordKeyphraseFetchExpert?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyPhraseExpertResponseDTO']>>>, ParentType, ContextType, RequireFields<QueryusalesKeywordKeyphraseFetchExpertArgs, 'tagId'>>;
  usalesMediaClipParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaClipParamResponseDTO']>>>, ParentType, ContextType, RequireFields<QueryusalesMediaClipParamArgs, 'mediaClipId' | 'name'>>;
  usalesMediaclipMyclips?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaClipResponseDTO']>>>, ParentType, ContextType, Partial<QueryusalesMediaclipMyclipsArgs>>;
  usalesMindtickleCoursesbyemail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryusalesMindtickleCoursesbyemailArgs, 'email'>>;
  usalesMindtickleQuerybyuri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryusalesMindtickleQuerybyuriArgs, 'uri'>>;
  usalesOppty?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpptyDTO']>>>, ParentType, ContextType, Partial<QueryusalesOpptyArgs>>;
  usalesOpptyTeams?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpptyTeamResponseDTO']>>>, ParentType, ContextType, Partial<QueryusalesOpptyTeamsArgs>>;
  usalesPlaylistParam?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistParamResponseDTO']>>>, ParentType, ContextType, RequireFields<QueryusalesPlaylistParamArgs, 'name' | 'playlistId'>>;
  usalesPlaylistsMyplaylists?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistResponseDTO']>>>, ParentType, ContextType, Partial<QueryusalesPlaylistsMyplaylistsArgs>>;
  usalesPlaylistsSharedMembers?: Resolver<Maybe<Array<Maybe<ResolversTypes['SharedMemberDTO']>>>, ParentType, ContextType, RequireFields<QueryusalesPlaylistsSharedMembersArgs, 'playlistId'>>;
  usalesPlaylistsSharedwithme?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  usalesPreferencesMine?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryusalesPreferencesMineArgs, 'type'>>;
  usalesRe?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryusalesReArgs, 'code'>>;
  usalesSharedviewdataConv?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvSharedViewData']>>>, ParentType, ContextType, RequireFields<QueryusalesSharedviewdataConvArgs, 'convId'>>;
  usalesSharedviewdataName?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConvSharedViewData']>>>, ParentType, ContextType, RequireFields<QueryusalesSharedviewdataNameArgs, 'name'>>;
  usalesSys?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryusalesSysArgs, 'prop'>>;
  usalesUserComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentResponseDTO']>>>, ParentType, ContextType, RequireFields<QueryusalesUserCommentsArgs, 'userId'>>;
  usalesUsers?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  usalesUsersMeEmailsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  usalesUsersTeam?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryusalesUsersTeamArgs, 'usersId'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userDelegateResponseDTO?: Resolver<Maybe<ResolversTypes['UserDelegateResponseDTO']>, ParentType, ContextType, RequireFields<QueryuserDelegateResponseDTOArgs, 'usersId'>>;
  v1TranscriptPopulate2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<Queryv1TranscriptPopulate2Args, 'convId'>>;
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

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type UserManagerDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserManagerDTO'] = ResolversParentTypes['UserManagerDTO']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type ContactResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContactResponse'] = ResolversParentTypes['ContactResponse']> = ResolversObject<{
  accounts?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['JSON']>>>>>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactMethods?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactMethodDTO']>>>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  jobTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyMoments3?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyMoment']>>>, ParentType, ContextType>;
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

export type ConvSlideFirstResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvSlideFirstResponse'] = ResolversParentTypes['ConvSlideFirstResponse']> = ResolversObject<{
  high?: Resolver<Maybe<Array<Maybe<ResolversTypes['SlideFirst']>>>, ParentType, ContextType>;
  low?: Resolver<Maybe<Array<Maybe<ResolversTypes['SlideFirst']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConvTimelineResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvTimeline'] = ResolversParentTypes['ConvTimeline']> = ResolversObject<{
  convId2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
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

export type CurrentEQForOpptyResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CurrentEQForOpptyResponse'] = ResolversParentTypes['CurrentEQForOpptyResponse']> = ResolversObject<{
  deals?: Resolver<Maybe<ResolversTypes['DealSummaryDetailResponse']>, ParentType, ContextType>;
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
  convId3?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
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
  convId4?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convOffset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  prevContactNameOnTurn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId3?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type TeamUnattributedUsersStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TeamUnattributedUsersStat'] = ResolversParentTypes['TeamUnattributedUsersStat']> = ResolversObject<{
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommentResponseDTO']>>>, ParentType, ContextType>;
  conversations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConversationRequest']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['TeamUsersStat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeyPhraseResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyPhraseResponse'] = ResolversParentTypes['KeyPhraseResponse']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  keyMoments4?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeyMoment']>>>, ParentType, ContextType>;
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

export type ConvOpptyDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConvOpptyDTO'] = ResolversParentTypes['ConvOpptyDTO']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type SummaryReportDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SummaryReportDTO'] = ResolversParentTypes['SummaryReportDTO']> = ResolversObject<{
  amountImpacted?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hrsProcessed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numOfConversations?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uniqueContacts?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uniqueDeals?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uniqueKeyMoments?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TrendEQForOpptyResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TrendEQForOpptyResponse'] = ResolversParentTypes['TrendEQForOpptyResponse']> = ResolversObject<{
  deals?: Resolver<Maybe<ResolversTypes['DealSummaryDetailResponse']>, ParentType, ContextType>;
  keyMoments5?: Resolver<Maybe<ResolversTypes['OpptyDTO']>, ParentType, ContextType>;
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

export type CustWebLinkResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CustWebLinkResponseDTO'] = ResolversParentTypes['CustWebLinkResponseDTO']> = ResolversObject<{
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyProfile?: Resolver<Maybe<ResolversTypes['CompanyProfileDTO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orgId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usersId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
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

export type KeyPhraseExpertResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KeyPhraseExpertResponseDTO'] = ResolversParentTypes['KeyPhraseExpertResponseDTO']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  engagement?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
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

export type UserDelegateResponseDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserDelegateResponseDTO'] = ResolversParentTypes['UserDelegateResponseDTO']> = ResolversObject<{
  proxyOwners?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  proxyUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
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
  getAttendeeByMeetingTranscript?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, Partial<MutationgetAttendeeByMeetingTranscriptArgs>>;
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
  updateAccountOpptyEQ?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationupdateAccountOpptyEQArgs>>;
  updateAccountOpptyEQ1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateAlert?: Resolver<Maybe<ResolversTypes['AlertResponseDTO']>, ParentType, ContextType, RequireFields<MutationupdateAlertArgs, 'alertRequestDTOInput'>>;
  updateCalendarEvent?: Resolver<Maybe<ResolversTypes['CalendarEvent']>, ParentType, ContextType, RequireFields<MutationupdateCalendarEventArgs, 'calendarEventRequestDTOInput'>>;
  updateConvTopicEpisode?: Resolver<Maybe<ResolversTypes['ConvTopicEpisodeResponseDTO']>, ParentType, ContextType, RequireFields<MutationupdateConvTopicEpisodeArgs, 'convTopicEpisodeRequestDTOInput'>>;
  updateConversation?: Resolver<Maybe<ResolversTypes['ConversationRequest']>, ParentType, ContextType, RequireFields<MutationupdateConversationArgs, 'conversationDTOInput'>>;
  updateEmlEq?: Resolver<Maybe<ResolversTypes['EmlEqResponseDTO']>, ParentType, ContextType, RequireFields<MutationupdateEmlEqArgs, 'emlEqRequestDTOInput'>>;
  updateKeyMoment?: Resolver<Maybe<ResolversTypes['ConvKeyMomentResponseDTO']>, ParentType, ContextType, RequireFields<MutationupdateKeyMomentArgs, 'convKeyMomentRequestDTOInput'>>;
  updatePlaylistMediaClipRel?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdatePlaylistMediaClipRelArgs, 'playlistMediaClipRelRequestDTOInput'>>;
  updateQDetails?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<MutationupdateQDetailsArgs>>;
  updateStatusByIds?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdateStatusByIdsArgs, 'usalesKeywordTagUpdateStatusInput'>>;
  updateTeamAccess?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationupdateTeamAccessArgs, 'enable'>>;
  updateTeamMembersManagerDetails?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationupdateTeamMembersManagerDetailsArgs, 'managerId' | 'usalesUserTeamInput'>>;
  updateUserProxy?: Resolver<Maybe<ResolversTypes['UserDelegateResponseDTO']>, ParentType, ContextType, RequireFields<MutationupdateUserProxyArgs, 'userDelegateRequestDTOInput'>>;
  updateZoomMeetingInvokeBot?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdateZoomMeetingInvokeBotArgs, 'zoomMeetingWhitelistRequestInput'>>;
  updateZoomMeetingWhitelist?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uploadExternalMeeting?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<MutationuploadExternalMeetingArgs>>;
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
  AccountTeamResponse?: AccountTeamResponseResolvers<ContextType>;
  AccountTeamDTO?: AccountTeamDTOResolvers<ContextType>;
  AlertResponseDTO?: AlertResponseDTOResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  CompanyProfileDTO?: CompanyProfileDTOResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  UserManagerDTO?: UserManagerDTOResolvers<ContextType>;
  CalendarEvent?: CalendarEventResolvers<ContextType>;
  CalendarEventAttendee?: CalendarEventAttendeeResolvers<ContextType>;
  ConversationDetailResponse?: ConversationDetailResponseResolvers<ContextType>;
  DealAccount?: DealAccountResolvers<ContextType>;
  ConvNextAction?: ConvNextActionResolvers<ContextType>;
  DealSummaryDetailResponse?: DealSummaryDetailResponseResolvers<ContextType>;
  UserActivity?: UserActivityResolvers<ContextType>;
  DealOppty?: DealOpptyResolvers<ContextType>;
  ConvTopicEpisodeResponseDTO?: ConvTopicEpisodeResponseDTOResolvers<ContextType>;
  CompanySlideFirstResponse?: CompanySlideFirstResponseResolvers<ContextType>;
  SlideFirst?: SlideFirstResolvers<ContextType>;
  ContactMetricsResponse?: ContactMetricsResponseResolvers<ContextType>;
  ContactMethodDTO?: ContactMethodDTOResolvers<ContextType>;
  ContactMethodParam?: ContactMethodParamResolvers<ContextType>;
  ContactMethod?: ContactMethodResolvers<ContextType>;
  OpptyDTO?: OpptyDTOResolvers<ContextType>;
  ContactResponse?: ContactResponseResolvers<ContextType>;
  LastConv?: LastConvResolvers<ContextType>;
  NextConv?: NextConvResolvers<ContextType>;
  ConvAttendeeResponseDTO?: ConvAttendeeResponseDTOResolvers<ContextType>;
  ConvEQResponseDTO?: ConvEQResponseDTOResolvers<ContextType>;
  ConvMetricsResponse?: ConvMetricsResponseResolvers<ContextType>;
  ConversationAttributionLogRsp?: ConversationAttributionLogRspResolvers<ContextType>;
  ConvSlideFirstResponse?: ConvSlideFirstResponseResolvers<ContextType>;
  ConvTimeline?: ConvTimelineResolvers<ContextType>;
  ConversationAttendeesResponse?: ConversationAttendeesResponseResolvers<ContextType>;
  ConversationSummaryResponse?: ConversationSummaryResponseResolvers<ContextType>;
  Datum?: DatumResolvers<ContextType>;
  ConvAttendeeAttr?: ConvAttendeeAttrResolvers<ContextType>;
  Opportunity?: OpportunityResolvers<ContextType>;
  ConvoStatResponse?: ConvoStatResponseResolvers<ContextType>;
  ConvoStats?: ConvoStatsResolvers<ContextType>;
  DealDetailResponse?: DealDetailResponseResolvers<ContextType>;
  DealSearchResult?: DealSearchResultResolvers<ContextType>;
  DealEntity?: DealEntityResolvers<ContextType>;
  DealData?: DealDataResolvers<ContextType>;
  AccountOpptyEQResponseDTO?: AccountOpptyEQResponseDTOResolvers<ContextType>;
  DealNextAction?: DealNextActionResolvers<ContextType>;
  CurrentEQForOpptyResponse?: CurrentEQForOpptyResponseResolvers<ContextType>;
  DealSummaryResponse?: DealSummaryResponseResolvers<ContextType>;
  DealSummaryTrendResponse?: DealSummaryTrendResponseResolvers<ContextType>;
  DealConvoStat?: DealConvoStatResolvers<ContextType>;
  Stages?: StagesResolvers<ContextType>;
  DealStat?: DealStatResolvers<ContextType>;
  Diarization?: DiarizationResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  Option?: OptionResolvers<ContextType>;
  EmpathyAndHesitationTurnsReport?: EmpathyAndHesitationTurnsReportResolvers<ContextType>;
  EmpathyChangeDetails?: EmpathyChangeDetailsResolvers<ContextType>;
  HesitationChangeDetails?: HesitationChangeDetailsResolvers<ContextType>;
  TeamOpptyUsersStats?: TeamOpptyUsersStatsResolvers<ContextType>;
  IdealConvEQ?: IdealConvEQResolvers<ContextType>;
  TeamUsersStat?: TeamUsersStatResolvers<ContextType>;
  UsersStat?: UsersStatResolvers<ContextType>;
  TeamOpptyUsersStat?: TeamOpptyUsersStatResolvers<ContextType>;
  CommentResponseDTO?: CommentResponseDTOResolvers<ContextType>;
  TeamUnattributedUsersStat?: TeamUnattributedUsersStatResolvers<ContextType>;
  KeyPhraseResponse?: KeyPhraseResponseResolvers<ContextType>;
  MediaClipResponseDTO?: MediaClipResponseDTOResolvers<ContextType>;
  ConvKeyMomentResponseDTO?: ConvKeyMomentResponseDTOResolvers<ContextType>;
  KeywordTagResponseDTO?: KeywordTagResponseDTOResolvers<ContextType>;
  KeywordCategResponseDTO?: KeywordCategResponseDTOResolvers<ContextType>;
  ConvOpptyDTO?: ConvOpptyDTOResolvers<ContextType>;
  OpptyEqbyStageResponseDTO?: OpptyEqbyStageResponseDTOResolvers<ContextType>;
  OpptyTeamResponseDTO?: OpptyTeamResponseDTOResolvers<ContextType>;
  PlaylistResponseDTO?: PlaylistResponseDTOResolvers<ContextType>;
  SummaryReportDTO?: SummaryReportDTOResolvers<ContextType>;
  TrendEQForOpptyResponse?: TrendEQForOpptyResponseResolvers<ContextType>;
  AccountPromisesResponseDTO?: AccountPromisesResponseDTOResolvers<ContextType>;
  Promise?: PromiseResolvers<ContextType>;
  ConvInfo?: ConvInfoResolvers<ContextType>;
  DealInfo?: DealInfoResolvers<ContextType>;
  CompanyParamResponseDTO?: CompanyParamResponseDTOResolvers<ContextType>;
  ConfigPropResponseDTO?: ConfigPropResponseDTOResolvers<ContextType>;
  AggrConvMetrics?: AggrConvMetricsResolvers<ContextType>;
  CustWebLinkResponseDTO?: CustWebLinkResponseDTOResolvers<ContextType>;
  EmlEqResponseDTO?: EmlEqResponseDTOResolvers<ContextType>;
  EmlObjResponseDTO?: EmlObjResponseDTOResolvers<ContextType>;
  EmlBody2?: EmlBody2Resolvers<ContextType>;
  EmlObj?: EmlObjResolvers<ContextType>;
  EmlEq?: EmlEqResolvers<ContextType>;
  EmlMetadata?: EmlMetadataResolvers<ContextType>;
  EmlMetadataParam?: EmlMetadataParamResolvers<ContextType>;
  EmlObjParam?: EmlObjParamResolvers<ContextType>;
  EmlBodyParam?: EmlBodyParamResolvers<ContextType>;
  KeyPhraseExpertResponseDTO?: KeyPhraseExpertResponseDTOResolvers<ContextType>;
  MediaClipParamResponseDTO?: MediaClipParamResponseDTOResolvers<ContextType>;
  PlaylistParamResponseDTO?: PlaylistParamResponseDTOResolvers<ContextType>;
  SharedMemberDTO?: SharedMemberDTOResolvers<ContextType>;
  ConvSharedViewData?: ConvSharedViewDataResolvers<ContextType>;
  UserDelegateResponseDTO?: UserDelegateResponseDTOResolvers<ContextType>;
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


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace QSalesTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  /**
   *
   *
   * Equivalent to GET /usales/accounts/{id}
   */
  accountResponseDTO?: Maybe<AccountResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/accounts/{id}/team
   */
  accountTeamResponse?: Maybe<AccountTeamResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/alerts/{id}
   */
  alertResponseDTO?: Maybe<AlertResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /auth/accessToken
   */
  authAccessToken?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /auth/google
   */
  authGoogle?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /auth/google/callback
   */
  authGoogleCallback?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /auth/outlook
   */
  authOutlook?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /auth/revoke/{provider}
   */
  authRevoke?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /auth/social
   */
  authSocial?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /usales/events/{id}
   */
  calendarEvent?: Maybe<CalendarEvent>;
  /**
   *
   *
   * Equivalent to GET /usales/companyprofile
   */
  companyProfileDTO?: Maybe<CompanyProfileDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/analytics/company/slide-first
   */
  companySlideFirstResponse?: Maybe<CompanySlideFirstResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/contact/metrics/{contactId}
   */
  contactMetricsResponse?: Maybe<ContactMetricsResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/contact/summary/{contactId}
   */
  contactResponse?: Maybe<ContactResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/attendees/{id}
   */
  convAttendeeResponseDTO?: Maybe<ConvAttendeeResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{convId}/eqscore
   */
  convEQResponseDTO?: Maybe<ConvEQResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/conv/metrics/aggr/{id}
   */
  convMetricsResponse?: Maybe<ConvMetricsResponse>;
  /**
   *
   *
   * Equivalent to GET /conv/mod/{convId}
   */
  convMod?: Maybe<Array<Maybe<ConversationAttributionLogRsp>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}/slide-first
   */
  convSlideFirstResponse?: Maybe<ConvSlideFirstResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/timeline/{conv_id}
   */
  convTimeline?: Maybe<ConvTimeline>;
  /**
   *
   *
   * Equivalent to GET /usales/conv-topic-episodes/{id}
   */
  convTopicEpisodeResponseDTO?: Maybe<ConvTopicEpisodeResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}/participantsWithMetrics
   */
  conversationAttendeesResponse?: Maybe<ConversationAttendeesResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}/preview
   */
  conversationDetailResponse?: Maybe<ConversationDetailResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}
   */
  conversationRequest?: Maybe<ConversationRequest>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/summary/{id}
   */
  conversationSummaryResponse?: Maybe<ConversationSummaryResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/metrics/convs/{convId}/convostats
   */
  convoStatResponse?: Maybe<ConvoStatResponse>;
  /**
   *
   *
   * Equivalent to GET /cq/account/{crmAccountId}/trend
   */
  cqAccountTrend?: Maybe<Array<Maybe<DealDetailResponse>>>;
  /**
   *
   *
   * Equivalent to GET /cq/contact/{crmContactId}/eq
   */
  cqContactEq?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /cq/opportunity/{crmOpportunityId}/contact/{crmContactId}/eq
   */
  cqOpportunityContactEq?: Maybe<Array<Maybe<Contact>>>;
  /**
   *
   *
   * Equivalent to GET /cq/token/access
   */
  cqTokenAccess?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /cq/token/refresh
   */
  cqTokenRefresh?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /cq/token/revoke/access
   */
  cqTokenRevokeAccess?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /cq/token/revoke/refresh
   */
  cqTokenRevokeRefresh?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /cq/opportunity/{crmOpportunityId}/current
   */
  currentEQForOpptyResponse?: Maybe<CurrentEQForOpptyResponse>;
  /**
   *
   *
   * Equivalent to GET /cq/account/{crmAccountId}/current
   */
  dealDetailResponse?: Maybe<DealDetailResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/{id}/details
   */
  dealSummaryDetailResponse?: Maybe<DealSummaryDetailResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/summary/{id}
   */
  dealSummaryResponse?: Maybe<DealSummaryResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/{id}/trend
   */
  dealSummaryTrendResponse?: Maybe<DealSummaryTrendResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/diarization/{conv_id}
   */
  diarization?: Maybe<Diarization>;
  /**
   *
   *
   * Equivalent to GET /usales/empathyandhesitationturns/get/conv
   */
  empathyAndHesitationTurnsReport?: Maybe<EmpathyAndHesitationTurnsReport>;
  /**
   *
   *
   * Equivalent to GET /cq/opportunity/{crmOpportunityId}/contact/eq
   */
  getContactsEQForOppty?: Maybe<Array<Maybe<Contact>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}/details
   */
  getConversationDetail?: Maybe<ConversationDetailResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/accounts/{accountId}/convtrends
   */
  getEQbyAccount?: Maybe<ConvEQResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /cq/manager/{managerEmailId}/{startMMddyyyy}/eq
   */
  getManagerEQ?: Maybe<TeamOpptyUsersStats>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/{id}
   */
  getOpptyById?: Maybe<OpptyDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/keyMoments
   */
  getOpptyKeyMoments?: Maybe<OpptyDTO>;
  /**
   *
   *
   * Equivalent to GET /cq/seller/{sellerEmailId}/eq
   */
  getSellerEQ2?: Maybe<TeamOpptyUsersStats>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}/keyPhrases
   */
  keyPhraseResponse?: Maybe<KeyPhraseResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/mediaclip/{id}
   */
  mediaClipResponseDTO?: Maybe<MediaClipResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/{opptyId}/promises
   */
  opptyDTO?: Maybe<OpptyDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/{oppty_stage}/eqscore
   */
  opptyEqbyStageResponseDTO?: Maybe<OpptyEqbyStageResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/teams/{id}
   */
  opptyTeamResponseDTO?: Maybe<OpptyTeamResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /usales/playlists/{id}
   */
  playlistResponseDTO?: Maybe<PlaylistResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /slack/authurl
   */
  slackAuthurl?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /slack/redirect
   */
  slackRedirect?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/reports/summary
   */
  summaryReportDTO?: Maybe<SummaryReportDTO>;
  /**
   *
   *
   * Equivalent to GET /cq/seller/{sellerEmailId}/{days}/eq
   */
  teamOpptyUsersStats?: Maybe<TeamOpptyUsersStats>;
  /**
   *
   *
   * Equivalent to GET /cq/opportunity/{crmOpportunityId}/trend
   */
  trendEQForOpptyResponse?: Maybe<TrendEQForOpptyResponse>;
  /**
   *
   *
   * Equivalent to GET /usales/accounts/{id}/oppty
   */
  usalesAccountOppty?: Maybe<Array<Maybe<OpptyDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/accounts
   */
  usalesAccounts?: Maybe<Array<Maybe<AccountResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/accounts/promises
   */
  usalesAccountsPromises?: Maybe<Array<Maybe<AccountPromisesResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/alerts
   */
  usalesAlerts?: Maybe<Array<Maybe<AlertResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/bookmarks/convs/{convId}
   */
  usalesBookmarksConv?: Maybe<Array<Maybe<ConvBookmarkResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/bookmarks/keymoments/{convKeyMomentId}
   */
  usalesBookmarksKeymoment?: Maybe<Array<Maybe<ConvBookmarkResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/company-param
   */
  usalesCompanyParam?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /usales/company-params
   */
  usalesCompanyParams?: Maybe<Array<Maybe<CompanyParamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/companyprofile/access-consent
   */
  usalesCompanyprofileAccessConsent?: Maybe<Scalars['Boolean']>;
  /**
   *
   *
   * Equivalent to GET /usales/companyprofile/businesscategs
   */
  usalesCompanyprofileBusinesscategs?: Maybe<Array<Maybe<KeywordCategResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/configprops
   */
  usalesConfigprops?: Maybe<Array<Maybe<ConfigPropResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/contacts/{contact}/emails/count
   */
  usalesContactEmailsCount?: Maybe<Scalars['Int']>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{convId}/comments
   */
  usalesConvComments?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{convId}/contact_eqscore
   */
  usalesConvContactEqscore?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/conv/metrics/{id}
   */
  usalesConvMetric?: Maybe<Array<Maybe<AggrConvMetrics>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/{id}/metrics
   */
  usalesConvMetrics?: Maybe<Array<Maybe<AggrConvMetrics>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs
   */
  usalesConvs?: Maybe<Array<Maybe<ConversationRequest>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/attendees
   */
  usalesConvsAttendees?: Maybe<Array<Maybe<ConvAttendeeResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/convs/status
   */
  usalesConvsStatus?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   *
   *
   * Equivalent to GET /usales/custweblinks
   */
  usalesCustweblinks?: Maybe<Array<Maybe<CustWebLinkResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/deals/{opptyId}/contacts/{contactId}/eqscore
   */
  usalesDealContactEqscore?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/deals/{opptyId}/convtrends
   */
  usalesDealConvtrends?: Maybe<Array<Maybe<ConvEQResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/deals/{opptyId}/eqscore
   */
  usalesDealEqscore?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/deals/stages
   */
  usalesDealsStages?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   *
   *
   * Equivalent to GET /usales/emleqs/{id}
   */
  usalesEmleq?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/emleqs
   */
  usalesEmleqs?: Maybe<Array<Maybe<EmlEqResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/keymoments/{convKeyMomentId}/comments
   */
  usalesKeymomentComments?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/keyword/categ
   */
  usalesKeywordCateg?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   *
   *
   * Equivalent to GET /usales/keyword/categ/{category}
   */
  usalesKeywordCateg2?: Maybe<Array<Maybe<KeywordCategResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/keyword/keyphrase/fetch-expert/{tagId}
   */
  usalesKeywordKeyphraseFetchExpert?: Maybe<Array<Maybe<KeyPhraseExpertResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/mediaClip/param/{mediaClipId}
   */
  usalesMediaClipParam?: Maybe<Array<Maybe<MediaClipParamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/mediaclip/myclips
   */
  usalesMediaclipMyclips?: Maybe<Array<Maybe<MediaClipResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/mindtickle/coursesbyemail/{email}
   */
  usalesMindtickleCoursesbyemail?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /usales/mindtickle/querybyuri/{url}
   */
  usalesMindtickleQuerybyuri?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty
   */
  usalesOppty?: Maybe<Array<Maybe<OpptyDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/oppty/teams
   */
  usalesOpptyTeams?: Maybe<Array<Maybe<OpptyTeamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/playlist/param/{playlistId}
   */
  usalesPlaylistParam?: Maybe<Array<Maybe<PlaylistParamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/playlists/myplaylists
   */
  usalesPlaylistsMyplaylists?: Maybe<Array<Maybe<PlaylistResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/playlists/shared-members
   */
  usalesPlaylistsSharedMembers?: Maybe<Array<Maybe<SharedMemberDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/playlists/sharedwithme
   */
  usalesPlaylistsSharedwithme?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/preferences/mine
   */
  usalesPreferencesMine?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/re/{code}
   */
  usalesRe?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to GET /usales/sharedviewdata-conv/{conv_id}
   */
  usalesSharedviewdataConv?: Maybe<Array<Maybe<ConvSharedViewData>>>;
  /**
   *
   *
   * Equivalent to GET /usales/sharedviewdata-name/{name}
   */
  usalesSharedviewdataName?: Maybe<Array<Maybe<ConvSharedViewData>>>;
  /**
   *
   *
   * Equivalent to GET /usales/sys
   */
  usalesSys?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to GET /usales/users/{receiverUserId}/comments
   */
  usalesUserComments?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  /**
   *
   *
   * Equivalent to GET /usales/users
   */
  usalesUsers?: Maybe<Scalars['Float']>;
  /**
   *
   *
   * Equivalent to GET /usales/users/me/emails/count
   */
  usalesUsersMeEmailsCount?: Maybe<Scalars['Int']>;
  /**
   *
   *
   * Equivalent to GET /usales/users/team/{usersId}
   */
  usalesUsersTeam?: Maybe<Array<Maybe<User>>>;
  /**
   *
   *
   * Equivalent to GET /usales/users/me
   */
  user?: Maybe<User>;
  /**
   *
   *
   * Equivalent to GET /usales/users/{usersId}/proxy
   */
  userDelegateResponseDTO?: Maybe<UserDelegateResponseDTO>;
  /**
   *
   *
   * Equivalent to GET /v1/transcript/populate/{convId}
   */
  v1TranscriptPopulate2?: Maybe<Scalars['String']>;
};


export type QueryaccountResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryaccountTeamResponseArgs = {
  id: Scalars['Float'];
};


export type QueryalertResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryauthRevokeArgs = {
  provider: Scalars['String'];
};


export type QuerycalendarEventArgs = {
  id: Scalars['Float'];
};


export type QuerycontactMetricsResponseArgs = {
  contactId: Scalars['Float'];
  ganularity?: InputMaybe<Scalars['String']>;
  opptyId: Scalars['Float'];
};


export type QuerycontactResponseArgs = {
  contactId: Scalars['Float'];
};


export type QueryconvAttendeeResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryconvEQResponseDTOArgs = {
  convId: Scalars['Float'];
};


export type QueryconvMetricsResponseArgs = {
  id: Scalars['Float'];
};


export type QueryconvModArgs = {
  convId: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryconvSlideFirstResponseArgs = {
  id: Scalars['Float'];
};


export type QueryconvTimelineArgs = {
  convId: Scalars['Float'];
};


export type QueryconvTopicEpisodeResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryconversationAttendeesResponseArgs = {
  id: Scalars['Float'];
};


export type QueryconversationDetailResponseArgs = {
  id: Scalars['Float'];
};


export type QueryconversationRequestArgs = {
  id: Scalars['Float'];
};


export type QueryconversationSummaryResponseArgs = {
  id: Scalars['Float'];
};


export type QueryconvoStatResponseArgs = {
  convId: Scalars['Float'];
};


export type QuerycqAccountTrendArgs = {
  crmAccountId: Scalars['String'];
  days?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerycqContactEqArgs = {
  crmContactId: Scalars['String'];
};


export type QuerycqOpportunityContactEqArgs = {
  crmContactId: Scalars['String'];
  crmOpportunityId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerycurrentEQForOpptyResponseArgs = {
  crmOpportunityId: Scalars['String'];
  days?: InputMaybe<Scalars['Float']>;
};


export type QuerydealDetailResponseArgs = {
  crmAccountId: Scalars['String'];
  days?: InputMaybe<Scalars['Float']>;
};


export type QuerydealSummaryDetailResponseArgs = {
  id: Scalars['Float'];
  mode?: InputMaybe<Scalars['String']>;
  tz?: InputMaybe<Scalars['String']>;
};


export type QuerydealSummaryResponseArgs = {
  id: Scalars['Float'];
};


export type QuerydealSummaryTrendResponseArgs = {
  id: Scalars['Float'];
  key?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QuerydiarizationArgs = {
  convId: Scalars['Float'];
};


export type QueryempathyAndHesitationTurnsReportArgs = {
  convId: Scalars['Float'];
};


export type QuerygetContactsEQForOpptyArgs = {
  crmOpportunityId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerygetConversationDetailArgs = {
  id: Scalars['Float'];
  type?: InputMaybe<Scalars['String']>;
};


export type QuerygetEQbyAccountArgs = {
  accountId: Scalars['Float'];
};


export type QuerygetManagerEQArgs = {
  managerEmailId: Scalars['String'];
  startMMddyyyy: Scalars['String'];
};


export type QuerygetOpptyByIdArgs = {
  id: Scalars['Float'];
};


export type QuerygetOpptyKeyMomentsArgs = {
  granularity?: InputMaybe<Scalars['String']>;
  keyTag?: InputMaybe<Scalars['String']>;
  opptyId?: InputMaybe<Scalars['Float']>;
  period?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QuerygetSellerEQ2Args = {
  sellerEmailId: Scalars['String'];
};


export type QuerykeyPhraseResponseArgs = {
  id: Scalars['Float'];
};


export type QuerymediaClipResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryopptyDTOArgs = {
  opptyId: Scalars['Float'];
};


export type QueryopptyEqbyStageResponseDTOArgs = {
  opptyStage: Scalars['String'];
};


export type QueryopptyTeamResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryplaylistResponseDTOArgs = {
  id: Scalars['Float'];
};


export type QueryslackRedirectArgs = {
  code: Scalars['String'];
  state: Scalars['String'];
};


export type QueryteamOpptyUsersStatsArgs = {
  days: Scalars['Int'];
  sellerEmailId: Scalars['String'];
};


export type QuerytrendEQForOpptyResponseArgs = {
  crmOpportunityId: Scalars['String'];
  days?: InputMaybe<Scalars['Float']>;
};


export type QueryusalesAccountOpptyArgs = {
  id: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesAccountsPromisesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  userIds?: InputMaybe<Scalars['String']>;
};


export type QueryusalesAlertsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};


export type QueryusalesBookmarksConvArgs = {
  convId: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesBookmarksKeymomentArgs = {
  convKeyMomentId: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesCompanyParamArgs = {
  prop: Scalars['String'];
};


export type QueryusalesCompanyParamsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesCompanyprofileBusinesscategsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesConfigpropsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesContactEmailsCountArgs = {
  contactId: Scalars['Float'];
};


export type QueryusalesConvCommentsArgs = {
  convId: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesConvContactEqscoreArgs = {
  contact: Scalars['String'];
  convId: Scalars['Float'];
};


export type QueryusalesConvMetricArgs = {
  id: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesConvMetricsArgs = {
  id: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
  participantId: Scalars['String'];
};


export type QueryusalesConvsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesConvsAttendeesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesCustweblinksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesDealContactEqscoreArgs = {
  contactId: Scalars['Float'];
  opptyId: Scalars['Float'];
};


export type QueryusalesDealConvtrendsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  opptyId: Scalars['Float'];
};


export type QueryusalesDealEqscoreArgs = {
  opptyId: Scalars['Float'];
};


export type QueryusalesEmleqArgs = {
  id: Scalars['Float'];
};


export type QueryusalesEmleqsArgs = {
  emlObjId?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesKeymomentCommentsArgs = {
  convKeyMomentId: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesKeywordCateg2Args = {
  category: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesKeywordKeyphraseFetchExpertArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  tagId: Scalars['Float'];
};


export type QueryusalesMediaClipParamArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  mediaClipId: Scalars['Float'];
  name: Scalars['String'];
};


export type QueryusalesMediaclipMyclipsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesMindtickleCoursesbyemailArgs = {
  email: Scalars['String'];
};


export type QueryusalesMindtickleQuerybyuriArgs = {
  uri: Scalars['String'];
};


export type QueryusalesOpptyArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesOpptyTeamsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesPlaylistParamArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  playlistId: Scalars['Float'];
};


export type QueryusalesPlaylistsMyplaylistsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesPlaylistsSharedMembersArgs = {
  history?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  playlistId: Scalars['Float'];
};


export type QueryusalesPreferencesMineArgs = {
  type: Scalars['String'];
};


export type QueryusalesReArgs = {
  code: Scalars['String'];
};


export type QueryusalesSharedviewdataConvArgs = {
  convId: Scalars['Float'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryusalesSharedviewdataNameArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};


export type QueryusalesSysArgs = {
  prop: Scalars['String'];
};


export type QueryusalesUserCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Float'];
};


export type QueryusalesUsersTeamArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  usersId: Scalars['Float'];
};


export type QueryuserDelegateResponseDTOArgs = {
  usersId: Scalars['Float'];
};


export type Queryv1TranscriptPopulate2Args = {
  convId: Scalars['String'];
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

export type Type13 =
  | 'POSITIVE'
  | 'NEGATIVE'
  | 'NEUTRAL';

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

export type Type12 =
  | 'CUSTOMER'
  | 'EMPLOYEE';

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

export type KeyCategory =
  | 'CUSTOMER_PAIN_POINTS'
  | 'CUSTOMER_OBJECTIONS'
  | 'BUDGET'
  | 'PROJECT_METRICS_OF_SUCCESS'
  | 'COMPETITORS'
  | 'PRODUCT_FEATURES'
  | 'PRICING'
  | 'DECISION_CRITERIA';

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

export type ContactResponse = {
  accounts?: Maybe<Array<Maybe<Array<Maybe<Scalars['JSON']>>>>>;
  avatarUrl?: Maybe<Scalars['String']>;
  contactMethods?: Maybe<Array<Maybe<ContactMethodDTO>>>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  jobTitle?: Maybe<Scalars['String']>;
  keyMoments3?: Maybe<Array<Maybe<KeyMoment>>>;
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

export type ConvSlideFirstResponse = {
  high?: Maybe<Array<Maybe<SlideFirst>>>;
  low?: Maybe<Array<Maybe<SlideFirst>>>;
};

export type ConvTimeline = {
  convId2?: Maybe<Scalars['Float']>;
  data?: Maybe<Scalars['JSON']>;
};

export type ConversationAttendeesResponse = {
  attendees?: Maybe<Array<Maybe<Attendee>>>;
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
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

export type OpptyRisk =
  | 'AT_RISK'
  | 'ON_TRACK'
  | 'EXCEED';

export type DealNextAction = {
  date?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['Boolean']>;
  video?: Maybe<Scalars['Boolean']>;
};

export type CurrentEQForOpptyResponse = {
  deals?: Maybe<DealSummaryDetailResponse>;
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

export type EmpathyAndHesitationTurnsReport = {
  convId?: Maybe<Scalars['Float']>;
  empathyChangeDetailsList?: Maybe<Array<Maybe<EmpathyChangeDetails>>>;
  empathyScore?: Maybe<Scalars['Float']>;
  hesitationChangeDetailsList?: Maybe<Array<Maybe<HesitationChangeDetails>>>;
  hesitationScore?: Maybe<Scalars['Float']>;
};

export type EmpathyChangeDetails = {
  averageEmpathy2?: Maybe<Scalars['Float']>;
  convId3?: Maybe<Scalars['Float']>;
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
  convId4?: Maybe<Scalars['Float']>;
  convOffset?: Maybe<Scalars['Float']>;
  prevContactNameOnTurn?: Maybe<Scalars['String']>;
  userId3?: Maybe<Scalars['Float']>;
  userName?: Maybe<Scalars['String']>;
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

export type TeamUnattributedUsersStat = {
  comments?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  conversations?: Maybe<Array<Maybe<ConversationRequest>>>;
  user?: Maybe<TeamUsersStat>;
};

export type KeyPhraseResponse = {
  id?: Maybe<Scalars['Float']>;
  keyMoments4?: Maybe<Array<Maybe<KeyMoment>>>;
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

export type ConvOpptyDTO = {
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
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

export type SummaryReportDTO = {
  amountImpacted?: Maybe<Scalars['Float']>;
  hrsProcessed?: Maybe<Scalars['Float']>;
  numOfConversations?: Maybe<Scalars['Float']>;
  uniqueContacts?: Maybe<Scalars['Float']>;
  uniqueDeals?: Maybe<Scalars['Float']>;
  uniqueKeyMoments?: Maybe<Scalars['Float']>;
};

export type TrendEQForOpptyResponse = {
  deals?: Maybe<DealSummaryDetailResponse>;
  keyMoments5?: Maybe<OpptyDTO>;
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

export type CustWebLinkResponseDTO = {
  company?: Maybe<Scalars['String']>;
  companyProfile?: Maybe<CompanyProfileDTO>;
  id?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  usersId?: Maybe<Scalars['Float']>;
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

export type KeyPhraseExpertResponseDTO = {
  email?: Maybe<Scalars['String']>;
  engagement?: Maybe<Scalars['Float']>;
  fullName?: Maybe<Scalars['String']>;
  sentiment?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
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

export type UserDelegateResponseDTO = {
  proxyOwners?: Maybe<Array<Maybe<User>>>;
  proxyUsers?: Maybe<Array<Maybe<User>>>;
};

export type Mutation = {
  /**
   *
   *
   * Equivalent to PUT /usales/playlists/media-clip-rel-bulk
   */
  addBulkPlaylistMediaClipRel?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /auth/login
   */
  authenticateUser?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /auth/login2
   */
  authenticateUser2?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/keyphrase/occurrences
   */
  companyKeyPhraseOccurrences?: Maybe<Array<Maybe<KeyPhraseOccurenceContentResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/keyphrase/sentiment
   */
  companyKeyPhraseOccurrencesBySentiment?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/timeline/{conv_id}
   */
  convert?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/alerts
   */
  createAlert?: Maybe<AlertResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/conv-topic-episodes
   */
  createConvTopicEpisode?: Maybe<ConvTopicEpisodeResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/emleqs
   */
  createEmlEq?: Maybe<EmlEqResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/custweblinks
   */
  createOrUpdate?: Maybe<CustWebLinkResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/comments
   */
  createOrUpdate1?: Maybe<CommentResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/clips
   */
  createOrUpdate2?: Maybe<VideoSharingHistoryDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/bookmarks
   */
  createOrUpdate3?: Maybe<ConvBookmarkResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/accounts
   */
  createOrUpdateAccount?: Maybe<AccountResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/attendees
   */
  createOrUpdateConvAttendee?: Maybe<ConvAttendeeResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/conv/attendees/{id}
   */
  createOrUpdateConvAttendee1?: Maybe<ConvAttendeeResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/keyword/categ
   */
  createOrUpdateKeywordCateg?: Maybe<KeywordCategResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/keyword/tag
   */
  createOrUpdateKeywordTag?: Maybe<KeywordTagResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/oppty/{opptyId}
   */
  createOrUpdateOppty?: Maybe<OpptyDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/oppty
   */
  createOrUpdateOppty1?: Maybe<OpptyDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/oppty/teams
   */
  createOrUpdateOpptyTeam?: Maybe<OpptyTeamResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/preferences
   */
  createOrUpdatePreference?: Maybe<UserUiPreferenceResponseDto>;
  /**
   *
   *
   * Equivalent to POST /usales/empathy-moment-recommendation
   */
  createOrUpdateRecommendation?: Maybe<EmpathyMomentRecommendationDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/users
   */
  createOrUpdateUser?: Maybe<User>;
  /**
   *
   *
   * Equivalent to DELETE /usales/zoommeetingwhitelist
   */
  delete?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/emleqs/{id}
   */
  delete1?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/custweblinks/{id}
   */
  delete2?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/conv-topic-episodes/{id}
   */
  delete3?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/comments/{id}
   */
  delete4?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/bookmarks/{id}
   */
  delete5?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/alerts/{id}
   */
  delete6?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to PUT /usales/playlists/delete-media-clip-rel
   */
  deletePlaylistMediaClipRel?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/keyword/tags
   */
  deleteTags?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/keyphrase/custom/trending
   */
  findCustomKeyphraseTrendingTopicCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/oppty/{id}/details
   */
  findDealDetailsByMode?: Maybe<DealSummaryDetailResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/keyphrase/trending
   */
  findKeyphraseTrendingTopicCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/timeline/generate/{conv_id}
   */
  generateTimeline?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/teams/usersstat
   */
  getAccountTeamsUsersStats?: Maybe<Array<Maybe<TeamUsersStat>>>;
  /**
   *
   *
   * Equivalent to POST /usales/teams/account/userstat
   */
  getAccountUsersStat?: Maybe<Array<Maybe<TeamAccountUsersStat>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/active-users
   */
  getAllActiveUsers?: Maybe<Array<Maybe<QUsageUserPageVisitDto>>>;
  /**
   *
   *
   * Equivalent to POST /usales/teams/userstat
   */
  getAllTeamsUserStats?: Maybe<Array<Maybe<TeamsAccountOpptyUsersStat>>>;
  /**
   *
   *
   * Equivalent to POST /usales/company/assessments
   */
  getAssessmentByCompany?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/users/assessments
   */
  getAssessments?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to PUT /usales/convs/meeting-attendee
   */
  getAttendeeByMeetingTranscript?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   *
   *
   * Equivalent to POST /auth/outlook/callback
   */
  getAuthCodeAndGenerateToken?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /auth/social
   */
  getAuthUrl?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /auth/outlook
   */
  getAuthUrl1?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /auth/google
   */
  getAuthUrl2?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/customer-pulse/closed-deals
   */
  getClosedDealDetails?: Maybe<Array<Maybe<AnalyticsCustomerPulseDealResponse>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/company/deals
   */
  getCompanyDeals?: Maybe<DealDetailResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/account-oppty-eq/company
   */
  getCompanyDealsEQOnRiskScale?: Maybe<Array<Maybe<AccountOpptyEQResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/meetingstat
   */
  getCompanyMeetingStats?: Maybe<OverallMeetingStatsResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/company-params
   */
  getCompanyParams?: Maybe<Array<Maybe<CompanyParamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/companystat
   */
  getCompanyQUsage?: Maybe<OverallQUsageResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/contacts
   */
  getContacts?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/accounts/{id}/activities
   */
  getConversationByAccount?: Maybe<AccountActivityResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/userstat
   */
  getConversationUserStat?: Maybe<ConvUserStatDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/customer-pulse
   */
  getCustomerPulse?: Maybe<DealSellerPerformanceResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/oppty/{id}/activities
   */
  getDealActivities?: Maybe<Array<Maybe<DealActivitiesSummaryResponse>>>;
  /**
   *
   *
   * Equivalent to POST /usales/accounts/deals
   */
  getDealCountByAccounts?: Maybe<Array<Maybe<AccountDealResponse>>>;
  /**
   *
   *
   * Equivalent to POST /usales/account-oppty-eq
   */
  getDealEQOnRiskScale?: Maybe<Array<Maybe<AccountOpptyEQResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/oppty/topics
   */
  getDealTopics?: Maybe<DealTopicCoverageResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/deals
   */
  getDeals?: Maybe<DealDetailResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/emails/{emlObjId}
   */
  getEmailByEmlObjId?: Maybe<EmlResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/emails
   */
  getEmails?: Maybe<Array<Maybe<EmlResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/empathyandhesitationturns/getforuserandrange
   */
  getEmpathyAndHesitationTurns?: Maybe<EmpathyAndHesitationTurnsReportForConvList>;
  /**
   *
   *
   * Equivalent to POST /usales/preferences/favorite-meeting
   */
  getFavoriteMeeting?: Maybe<UserUiPreferenceResponseDto>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/invited-users
   */
  getInvitedUsers?: Maybe<Array<Maybe<User>>>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/lastmeeting
   */
  getLastMeeting?: Maybe<Array<Maybe<ConversationRequest>>>;
  /**
   *
   *
   * Equivalent to POST /usales/mediaclip/search/count
   */
  getMediaClipCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/mediaclip/stats
   */
  getMediaClipStats?: Maybe<MediaClipStatsResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/meetings
   */
  getMeetingListBasedOnType?: Maybe<Array<Maybe<ConversationRequest>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/meeting/sentiments
   */
  getMeetingSentiments?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/users/meetings/sharedwithme
   */
  getMeetingsSharedWithUser?: Maybe<AdvSearchResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/{id}/keyword/search
   */
  getMomentsHavingKeyword?: Maybe<ConversationKeywordSearchResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/keytopics/popular
   */
  getMostPopularKeymoments?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/meeting/most-shared
   */
  getMostSharedMeetings?: Maybe<Array<Maybe<MostSharedConvAttr>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/meeting/mostviewed
   */
  getMostViewedMeeting?: Maybe<Array<Maybe<MostViewedConvAttr>>>;
  /**
   *
   *
   * Equivalent to POST /usales/teams/oppty/userstat
   */
  getOpptyUsersStat?: Maybe<TeamOpptyUsersStats>;
  /**
   *
   *
   * Equivalent to POST /usales/playlists/stats
   */
  getPlaylistStats?: Maybe<PlaylistStatsResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/playlists/search/count
   */
  getPlaylistsCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/playlists/{id}
   */
  getPlaylistsCount1?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to DELETE /usales/mediaclip/{id}
   */
  getPlaylistsCount2?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/sellereq
   */
  getSellerEQ?: Maybe<DealSellerPerformanceResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/configprops
   */
  getSystemProps?: Maybe<Array<Maybe<ConfigPropResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/page-visits
   */
  getTopPageVisitDetails?: Maybe<Array<Maybe<PageVisitsDto>>>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/users/calldetails
   */
  getUserCallMetr?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/users/callmetrics
   */
  getUserCallMetrics?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/analytics/usage/users-auth
   */
  getUsersAuth?: Maybe<Array<Maybe<User>>>;
  /**
   *
   *
   * Equivalent to POST /usales/teams/convostat
   */
  getUsersConvoStat?: Maybe<Array<Maybe<TeamUsersStat>>>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/keyphrase/topic/count
   */
  keyPhras1eOccurences?: Maybe<Array<Maybe<KeyphraseTotalCountAttrDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/keyphrase/occurences
   */
  keyPhraseOccurences?: Maybe<Array<Maybe<KeyPhraseOccurenceResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /auth/logout
   */
  logout?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /v1/transcript/populate
   */
  populate?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/mindtickle/query
   */
  postDataByUri?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to PUT /usales/keyword/keyphrases
   */
  resetKeyPhrases?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /auth/users/details
   */
  revoke?: Maybe<Array<Maybe<User>>>;
  /**
   *
   *
   * Equivalent to POST /auth/revoke/{provider}
   */
  revoke1?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   *
   *
   * Equivalent to POST /usales/meeting/custom-disclaimer
   */
  saveMessage?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /cspviolations
   */
  saveReport?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /v1/transcript/search
   */
  search?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/zoommeetingwhitelist/search
   */
  search1?: Maybe<Array<Maybe<ZoomMeetingWhitelistDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/playlists/search
   */
  search2?: Maybe<Array<Maybe<PlaylistResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/mediaclip/search
   */
  search3?: Maybe<Array<Maybe<MediaClipResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/keymoments/search
   */
  search4?: Maybe<KeyMomentResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/emails/search
   */
  search5?: Maybe<Array<Maybe<EmlResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/custweblinks/search
   */
  search6?: Maybe<Array<Maybe<CustWebLinkResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/promise/search
   */
  search7?: Maybe<Array<Maybe<ConvPromiseResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/conv-topic-episodes/search
   */
  search8?: Maybe<Array<Maybe<ConvTopicEpisodeResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/comments/search
   */
  search9?: Maybe<Array<Maybe<CommentResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/contacts/search
   */
  searchAccountAndContact?: Maybe<AccountContactSearchResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/contacts/search/count
   */
  searchAccountAndContactCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/accounts/search
   */
  searchAccounts?: Maybe<Array<Maybe<AccountResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/accounts/search/count
   */
  searchAccountsCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/alerts/search
   */
  searchAlerts?: Maybe<Array<Maybe<AlertResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/contact/search
   */
  searchContact?: Maybe<Array<Maybe<ContactSearchResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/emails/search-summary
   */
  searchEmailSummary?: Maybe<Array<Maybe<EmailSummaryResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/events/search
   */
  searchEvents?: Maybe<CalenderEventSearchResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/events/search/count
   */
  searchEventsCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/categ/search
   */
  searchKeywordCateg?: Maybe<Array<Maybe<KeywordCategResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/categ/search/count
   */
  searchKeywordCategCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/categ/search/notags
   */
  searchKeywordCategWithoutTags?: Maybe<Array<Maybe<KeywordCategResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/tag/search
   */
  searchKeywordTag?: Maybe<Array<Maybe<KeywordTagResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/keyword/tag/search/count
   */
  searchKeywordTagCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/advSearch
   */
  searchMeetings?: Maybe<AdvSearchResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/search/meetings
   */
  searchMeetingsByAccountOrOppty?: Maybe<AdvSearchResponse>;
  /**
   *
   *
   * Equivalent to POST /usales/advSearch/count
   */
  searchMeetingsCount?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/empathy-moment-recommendation/search
   */
  searchMoments?: Maybe<EmpathyChangeMomentResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/preferences/search
   */
  searchPreference?: Maybe<Array<Maybe<UserUiPreferenceResponseDto>>>;
  /**
   *
   *
   * Equivalent to POST /usales/emails/team-activity
   */
  searchTeamActivity?: Maybe<TeamEmailActivityResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/users/search
   */
  searchUsers?: Maybe<Array<Maybe<User>>>;
  /**
   *
   *
   * Equivalent to PUT /usales/companyprofile/keyword-categ-select
   */
  selectCompanyKeywordCategory?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /slack/sendmessage
   */
  sendMessage?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/shares/share-clip-external
   */
  shareClipExternalUser?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/shares/share-meeting-external
   */
  shareMeetingExternalUser?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/shares/share-meeting-internal/{type}
   */
  shareMeetingInternalUser?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/shares/playlist
   */
  sharePlaylist?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/emails/threadcount
   */
  threadCount?: Maybe<Array<Maybe<ThreadCountResponse>>>;
  /**
   *
   *
   * Equivalent to PUT /usales/companyprofile/access-consent
   */
  updateAccessConsent?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to PUT /usales/account-oppty-eq
   */
  updateAccountOpptyEQ?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to PUT /usales/account-oppty-eq-1
   */
  updateAccountOpptyEQ1?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to PUT /usales/alerts
   */
  updateAlert?: Maybe<AlertResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/events
   */
  updateCalendarEvent?: Maybe<CalendarEvent>;
  /**
   *
   *
   * Equivalent to PUT /usales/conv-topic-episodes
   */
  updateConvTopicEpisode?: Maybe<ConvTopicEpisodeResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/convs
   */
  updateConversation?: Maybe<ConversationRequest>;
  /**
   *
   *
   * Equivalent to PUT /usales/emleqs
   */
  updateEmlEq?: Maybe<EmlEqResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/keymoments
   */
  updateKeyMoment?: Maybe<ConvKeyMomentResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/playlists/media-clip-rel
   */
  updatePlaylistMediaClipRel?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/users/enable
   */
  updateQDetails?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to PUT /usales/keyword/tag/update-status
   */
  updateStatusByIds?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to PUT /auth/teams
   */
  updateTeamAccess?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to POST /usales/users/{managerId}/team
   */
  updateTeamMembersManagerDetails?: Maybe<Array<Maybe<User>>>;
  /**
   *
   *
   * Equivalent to POST /usales/users/proxy
   */
  updateUserProxy?: Maybe<UserDelegateResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/zoommeetingwhitelist/invoke-bot
   */
  updateZoomMeetingInvokeBot?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to PUT /usales/zoommeetingwhitelist/update
   */
  updateZoomMeetingWhitelist?: Maybe<Scalars['String']>;
  /**
   *
   *
   * Equivalent to PUT /usales/convs/external-meeting
   */
  uploadExternalMeeting?: Maybe<Scalars['JSON']>;
  /**
   *
   *
   * Equivalent to POST /usales/playlists
   */
  upsert?: Maybe<PlaylistResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/playlist/param
   */
  upsert1?: Maybe<PlaylistParamResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/mediaclip
   */
  upsert2?: Maybe<MediaClipResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/mediaClip/param
   */
  upsert3?: Maybe<MediaClipParamResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/promise
   */
  upsert4?: Maybe<ConvPromiseResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/param
   */
  upsert5?: Maybe<ConvParamResponseDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/company-param
   */
  upsertCompanyParam?: Maybe<CompanyParamResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/companyprofile
   */
  upsertCompanyProfile?: Maybe<CompanyProfileDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/companyprofile/businesscategs
   */
  upsertCompanyProfileWithKeywordCategRel?: Maybe<CompanyProfileKeywordCategRelDTO>;
  /**
   *
   *
   * Equivalent to PUT /usales/configprops
   */
  upsertConfigProp?: Maybe<ConfigPropResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/{convId}/viewed
   */
  upsertExternal?: Maybe<ConvParamResponseDTO>;
  /**
   *
   *
   * Equivalent to POST /usales/playlist/param/last-viewed
   */
  upsertLastViewed?: Maybe<Array<Maybe<PlaylistParamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/mediaClip/param/last-viewed
   */
  upsertLastViewed1?: Maybe<Array<Maybe<MediaClipParamResponseDTO>>>;
  /**
   *
   *
   * Equivalent to POST /usales/convs/param/last-viewed
   */
  upsertLastViewed2?: Maybe<ConvParamResponseDTO>;
};


export type MutationaddBulkPlaylistMediaClipRelArgs = {
  usalesPlaylistsMediaClipRelBulkInput: Array<InputMaybe<PlaylistMediaClipRelRequestDTOInput>>;
};


export type MutationauthenticateUserArgs = {
  loginRequestInput: LoginRequestInput;
};


export type MutationauthenticateUser2Args = {
  loginRequestInput: LoginRequestInput;
};


export type MutationcompanyKeyPhraseOccurrencesArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
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
  usalesZoommeetingwhitelistInput: Array<InputMaybe<Scalars['String']>>;
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
  usalesPlaylistsDeleteMediaClipRelInput: Array<InputMaybe<PlaylistMediaClipRelRequestDTOInput>>;
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
  mode?: InputMaybe<Scalars['String']>;
  tz?: InputMaybe<Scalars['String']>;
};


export type MutationfindKeyphraseTrendingTopicCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgenerateTimelineArgs = {
  convId: Scalars['Float'];
};


export type MutationgetAccountTeamsUsersStatsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetAccountUsersStatArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetAllActiveUsersArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetAllTeamsUserStatsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetAssessmentByCompanyArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetAssessmentsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetAttendeeByMeetingTranscriptArgs = {
  usalesConvsMeetingAttendeeInput?: InputMaybe<UsalesConvsMeetingAttendeeInput>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetCompanyDealsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetCompanyDealsEQOnRiskScaleArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetCompanyMeetingStatsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetCompanyParamsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  usalesCompanyParams2Input: Array<InputMaybe<Scalars['String']>>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetDealCountByAccountsArgs = {
  accountDealRequestInput: AccountDealRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetDealEQOnRiskScaleArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
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
  limit?: InputMaybe<Scalars['Int']>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetLastMeetingArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  usalesConvsLastmeetingInput: Array<InputMaybe<Scalars['Float']>>;
};


export type MutationgetMediaClipCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetMediaClipStatsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetMeetingListBasedOnTypeArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetMostViewedMeetingArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
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
  limit?: InputMaybe<Scalars['Int']>;
  usalesConfigprops2Input: Array<InputMaybe<Scalars['String']>>;
};


export type MutationgetTopPageVisitDetailsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetUserCallMetrArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetUserCallMetricsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationgetUsersAuthArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationgetUsersConvoStatArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationkeyPhras1eOccurencesArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationkeyPhraseOccurencesArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationpopulateArgs = {
  eSPopulateRequestInput: ESPopulateRequestInput;
  pegasusJobKey?: InputMaybe<Scalars['String']>;
};


export type MutationpostDataByUriArgs = {
  mindTickleReqInput: MindTickleReqInput;
};


export type MutationrevokeArgs = {
  authUsersDetailsInput: Array<InputMaybe<Scalars['Float']>>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationrevoke1Args = {
  authRevoke2Input: Array<InputMaybe<Scalars['Float']>>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch2Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch3Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch4Args = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type Mutationsearch5Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch6Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch7Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch8Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type Mutationsearch9Args = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchAccountAndContactArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchAccountAndContactCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchAccountsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchAccountsCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchAlertsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchContactArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchEmailSummaryArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchEventsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchEventsCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchKeywordCategArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchKeywordCategCountArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchKeywordCategWithoutTagsArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchKeywordTagArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationsearchTeamActivityArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
};


export type MutationsearchUsersArgs = {
  advSearchRequestInput: AdvSearchRequestInput;
  limit?: InputMaybe<Scalars['Int']>;
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
  limit?: InputMaybe<Scalars['Int']>;
};


export type MutationupdateAccessConsentArgs = {
  consent: Scalars['Boolean'];
};


export type MutationupdateAccountOpptyEQArgs = {
  pegasusJobKey?: InputMaybe<Scalars['String']>;
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
  all?: InputMaybe<Scalars['Boolean']>;
  usalesUsersEnableInput?: InputMaybe<Array<InputMaybe<UserRequestDTOInput>>>;
};


export type MutationupdateStatusByIdsArgs = {
  usalesKeywordTagUpdateStatusInput: Scalars['JSON'];
};


export type MutationupdateTeamAccessArgs = {
  enable: Scalars['Boolean'];
};


export type MutationupdateTeamMembersManagerDetailsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  managerId: Scalars['Float'];
  usalesUserTeamInput: Array<InputMaybe<Scalars['Float']>>;
};


export type MutationupdateUserProxyArgs = {
  userDelegateRequestDTOInput: UserDelegateRequestDTOInput;
};


export type MutationupdateZoomMeetingInvokeBotArgs = {
  zoomMeetingWhitelistRequestInput: ZoomMeetingWhitelistRequestInput;
};


export type MutationuploadExternalMeetingArgs = {
  usalesConvsExternalMeetingInput?: InputMaybe<UsalesConvsExternalMeetingInput>;
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
  limit?: InputMaybe<Scalars['Int']>;
  playlistParamRequestDTOInput: PlaylistParamRequestDTOInput;
};


export type MutationupsertLastViewed1Args = {
  limit?: InputMaybe<Scalars['Int']>;
  mediaClipParamRequestDTOInput: MediaClipParamRequestDTOInput;
};


export type MutationupsertLastViewed2Args = {
  convParamRequestDTOInput: ConvParamRequestDTOInput;
};

export type PlaylistMediaClipRelRequestDTOInput = {
  mediaClipId?: InputMaybe<Scalars['Float']>;
  mediaClipRelId?: InputMaybe<Scalars['Float']>;
  playlistId?: InputMaybe<Scalars['Float']>;
  pos?: InputMaybe<Scalars['Int']>;
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
  criteria?: InputMaybe<Array<InputMaybe<CriterionInput>>>;
  durationFlag?: InputMaybe<Scalars['String']>;
  entity?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<PaginationInput>;
  searchString?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<SortInput>;
};

export type CriterionInput = {
  name?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  valueType?: InputMaybe<Scalars['String']>;
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type SortInput = {
  asc?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UsalesTimelineInput = {
  timeline?: InputMaybe<Array<InputMaybe<TimelineDataInput>>>;
};

export type TimelineDataInput = {
  ts?: InputMaybe<Scalars['Float']>;
  users?: InputMaybe<Array<InputMaybe<UserInput>>>;
};

export type UserInput = {
  companyProfileDTO?: InputMaybe<CompanyProfileDTOInput>;
  email?: InputMaybe<Scalars['String']>;
  expired?: InputMaybe<Scalars['Boolean']>;
  externalIdToken?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  firstTimeLogin?: InputMaybe<Scalars['Boolean']>;
  firstname?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  invited?: InputMaybe<Scalars['Boolean']>;
  invitedAt?: InputMaybe<Scalars['String']>;
  isBlueJeansAuthorized?: InputMaybe<Scalars['Boolean']>;
  isCalendarAuthorized?: InputMaybe<Scalars['Boolean']>;
  isEmailAuthorized?: InputMaybe<Scalars['Boolean']>;
  isGmailAuthorized?: InputMaybe<Scalars['Boolean']>;
  isGoogleCalendarAuthorized?: InputMaybe<Scalars['Boolean']>;
  isOutlookAuthorized?: InputMaybe<Scalars['Boolean']>;
  isOutlookCalendarAuthorized?: InputMaybe<Scalars['Boolean']>;
  isPasswordResetRequired?: InputMaybe<Scalars['Boolean']>;
  isPasswordSet?: InputMaybe<Scalars['Boolean']>;
  isSlackAuthorized?: InputMaybe<Scalars['Boolean']>;
  isSsoLogin?: InputMaybe<Scalars['Boolean']>;
  isTeamAuthorized?: InputMaybe<Scalars['Boolean']>;
  isWebexAuthorized?: InputMaybe<Scalars['Boolean']>;
  isZoomAuthorized?: InputMaybe<Scalars['Boolean']>;
  lastname?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<UserManagerDTOInput>;
  orgId?: InputMaybe<Scalars['Float']>;
  orgType?: InputMaybe<Scalars['String']>;
  qEnabled?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Array<InputMaybe<IdNameDTOInput>>>;
  scopes?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userType?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  zoomToken?: InputMaybe<Scalars['String']>;
};

export type CompanyProfileDTOInput = {
  companyName?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type UserManagerDTOInput = {
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type IdNameDTOInput = {
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AlertRequestDTOInput = {
  archive?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  exp?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  objId?: InputMaybe<Scalars['Float']>;
  objSubId?: InputMaybe<Scalars['Float']>;
  objType?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updateBy?: InputMaybe<Scalars['Float']>;
  userId?: InputMaybe<Scalars['Float']>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConvTopicEpisodeRequestDTOInput = {
  conversation?: InputMaybe<Scalars['Float']>;
  endTime?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  insertBy?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  keytopicCount1?: InputMaybe<Scalars['Float']>;
  keytopicCount2?: InputMaybe<Scalars['Float']>;
  keytopicCount3?: InputMaybe<Scalars['Float']>;
  keytopicCount4?: InputMaybe<Scalars['Float']>;
  keytopicId1?: InputMaybe<Scalars['String']>;
  keytopicId2?: InputMaybe<Scalars['String']>;
  keytopicId3?: InputMaybe<Scalars['String']>;
  keytopicId4?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  unsupervisedCount1?: InputMaybe<Scalars['Float']>;
  unsupervisedCount2?: InputMaybe<Scalars['Float']>;
  unsupervisedCount3?: InputMaybe<Scalars['Float']>;
  unsupervisedCount4?: InputMaybe<Scalars['Float']>;
  unsupervisedTopic1?: InputMaybe<Scalars['String']>;
  unsupervisedTopic2?: InputMaybe<Scalars['String']>;
  unsupervisedTopic3?: InputMaybe<Scalars['String']>;
  unsupervisedTopic4?: InputMaybe<Scalars['String']>;
  updateBy?: InputMaybe<Scalars['Float']>;
  updateTime?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type EmlEqRequestDTOInput = {
  emlObjId?: InputMaybe<Scalars['Float']>;
  empathy?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  senderName?: InputMaybe<Scalars['String']>;
  sentiment?: InputMaybe<Scalars['Float']>;
};

export type CustWebLinkRequestDTOInput = {
  company?: InputMaybe<Scalars['String']>;
  companyProfileId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  usersId?: InputMaybe<Scalars['Float']>;
};

export type CommentRequestDTOInput = {
  comment?: InputMaybe<Scalars['String']>;
  convID?: InputMaybe<Scalars['Float']>;
  endTime?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  keyMomentId?: InputMaybe<Scalars['Float']>;
  mentions?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
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
  convId?: InputMaybe<Scalars['Float']>;
  inputFile?: InputMaybe<Scalars['String']>;
  keyMomentId?: InputMaybe<Scalars['Float']>;
  videoLength?: InputMaybe<Scalars['Int']>;
  videoStartTime?: InputMaybe<Scalars['Int']>;
};

export type ConvBookmarkRequestDTOInput = {
  convID?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  keyMomentId?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  timeEnd?: InputMaybe<Scalars['Float']>;
  timeStart?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type AccountRequestDTOInput = {
  accountTeam?: InputMaybe<Scalars['Float']>;
  crmAccountId?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  sticker?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConvAttendeeRequestDTOInput = {
  attendeeEmail?: InputMaybe<Scalars['String']>;
  attendeeName?: InputMaybe<Scalars['String']>;
  conv?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  employeeOrContactInd?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type KeywordCategRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  keywordCategName2?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type KeywordTagRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  keywordCateg?: InputMaybe<Scalars['Float']>;
  keywordTagVal?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type OpptyRequestDTOInput = {
  account?: InputMaybe<Scalars['Float']>;
  amount?: InputMaybe<Scalars['Float']>;
  contact?: InputMaybe<Scalars['Float']>;
  crmOpptyId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  opptyAmount?: InputMaybe<Scalars['Float']>;
  opptyCloseDate?: InputMaybe<Scalars['String']>;
  opptyCreateDate?: InputMaybe<Scalars['String']>;
  opptySource?: InputMaybe<Scalars['String']>;
  opptyStage?: InputMaybe<Scalars['String']>;
  opptyStatus?: InputMaybe<Scalars['String']>;
  opptyTeam?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type OpptyTeamRequestDTOInput = {
  endDate?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
  usersId?: InputMaybe<Scalars['Float']>;
  version?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  preferenceType?: InputMaybe<Scalars['String']>;
  savedJson?: InputMaybe<Scalars['String']>;
  uiPreferenceParamMap?: InputMaybe<Scalars['JSON']>;
  userId?: InputMaybe<Scalars['Float']>;
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
  convId?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  detectedBehaviour?: InputMaybe<Scalars['String']>;
  empathyMomentId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  originalUtterance?: InputMaybe<Scalars['String']>;
  recommendation?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  suggestedType?: InputMaybe<Scalars['String']>;
  suggestedUtterance?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updateTime?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type UserRequestDTOInput = {
  email?: InputMaybe<Scalars['String']>;
  expired?: InputMaybe<Scalars['Boolean']>;
  externalIdToken?: InputMaybe<Scalars['JSON']>;
  firstTimeLogin?: InputMaybe<Scalars['Boolean']>;
  firstname?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  lastname?: InputMaybe<Scalars['String']>;
  managerId?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  orgType?: InputMaybe<Scalars['String']>;
  qenabled?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userType?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  zoomToken?: InputMaybe<Scalars['String']>;
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
  attendeeList?: InputMaybe<Array<InputMaybe<AttendeeRequestInput>>>;
  doNotProcess?: InputMaybe<Scalars['Boolean']>;
  externalMeetingId?: InputMaybe<Scalars['String']>;
  meetingStartTime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  recordingStartTime?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type AttendeeRequestInput = {
  attendeeType?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AuthRequestInput = {
  scopes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  accounts?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
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
  meetingEndTime?: InputMaybe<Scalars['String']>;
  meetingStartTime?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Float']>;
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
  daysToProcess?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['String']>;
};

export type MindTickleReqInput = {
  filter?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

export type CspViolationReqInput = {
  cspReport?: InputMaybe<CspReportInput>;
};

export type CspReportInput = {
  blockedUri?: InputMaybe<Scalars['String']>;
  columnNumber?: InputMaybe<Scalars['String']>;
  disposition?: InputMaybe<Scalars['String']>;
  documentUri?: InputMaybe<Scalars['String']>;
  effectiveDirective?: InputMaybe<Scalars['String']>;
  lineNumber?: InputMaybe<Scalars['String']>;
  originalPolicy?: InputMaybe<Scalars['String']>;
  referrer?: InputMaybe<Scalars['String']>;
  scriptSample?: InputMaybe<Scalars['String']>;
  sourceFile?: InputMaybe<Scalars['String']>;
  statusCode?: InputMaybe<Scalars['String']>;
  violatedDirective?: InputMaybe<Scalars['String']>;
};

export type ESSearchInput = {
  criteria?: InputMaybe<Scalars['String']>;
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
  clip?: InputMaybe<ClipRequestInput>;
  description?: InputMaybe<Scalars['String']>;
  emailList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fullVideo?: InputMaybe<Scalars['Boolean']>;
  keyMomentText?: InputMaybe<Scalars['String']>;
  mediaClipId?: InputMaybe<Scalars['Float']>;
  meetingUrl?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ClipRequestInput = {
  convId?: InputMaybe<Scalars['Float']>;
  keymomentId?: InputMaybe<Scalars['Float']>;
  startInSeconds?: InputMaybe<Scalars['Float']>;
  stopInSeconds?: InputMaybe<Scalars['Float']>;
};

export type ShareClipDTOInput = {
  clipLength?: InputMaybe<Scalars['Int']>;
  clipStartTime?: InputMaybe<Scalars['Int']>;
  clipTitle?: InputMaybe<Scalars['String']>;
  convId?: InputMaybe<Scalars['Float']>;
  currtime?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  recipients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ShareMeetingDTOInput = {
  convId?: InputMaybe<Scalars['Float']>;
  currtime?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Float']>;
  mediaClipId?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  permission?: InputMaybe<Scalars['String']>;
  playlistId?: InputMaybe<Scalars['Float']>;
  recipients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoSharingHistoryId?: InputMaybe<Scalars['Float']>;
};

export type ThreadCountResponse = {
  email?: Maybe<Scalars['String']>;
  threadCount?: Maybe<Scalars['String']>;
};

export type CalendarEventRequestDTOInput = {
  accountId?: InputMaybe<Scalars['Float']>;
  botInstrFromCalendar?: InputMaybe<Scalars['Boolean']>;
  calUid?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  opptyId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ConversationDTOInput = {
  accountId?: InputMaybe<Scalars['Float']>;
  aiViewVideoMediaLink?: InputMaybe<Scalars['String']>;
  audioMediaLink?: InputMaybe<Scalars['String']>;
  confidential?: InputMaybe<Scalars['Boolean']>;
  contentViewVideoMediaLink?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  entity?: InputMaybe<Scalars['String']>;
  externalConvId?: InputMaybe<Scalars['String']>;
  externalMeetingId?: InputMaybe<Scalars['String']>;
  galleryViewVideoMediaLink?: InputMaybe<Scalars['String']>;
  hostId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  meetingEndTime?: InputMaybe<Scalars['String']>;
  meetingStartTime?: InputMaybe<Scalars['String']>;
  meetingTopic?: InputMaybe<Scalars['String']>;
  opptyId?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  recordingStartTime?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  speakerTimelineLink?: InputMaybe<Scalars['String']>;
  speakerViewVideoMediaLink?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  textMediaLink?: InputMaybe<Scalars['String']>;
  transcriptLink?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  videoMediaLink?: InputMaybe<Scalars['String']>;
};

export type ConvKeyMomentRequestDTOInput = {
  contentImages?: InputMaybe<Scalars['String']>;
  conversation?: InputMaybe<Scalars['Float']>;
  downVote?: InputMaybe<Scalars['Float']>;
  downVoteUser?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  keywordTagId1?: InputMaybe<Scalars['Float']>;
  keywordTagId2?: InputMaybe<Scalars['Float']>;
  keywordTagId3?: InputMaybe<Scalars['Float']>;
  keywordTagId4?: InputMaybe<Scalars['Float']>;
  kmEndTime?: InputMaybe<Scalars['String']>;
  kmEndUtteranceId?: InputMaybe<Scalars['Float']>;
  kmStartTime?: InputMaybe<Scalars['String']>;
  kmStartUtteranceId?: InputMaybe<Scalars['Float']>;
  polarity?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Float']>;
  startTime?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  upVote?: InputMaybe<Scalars['Float']>;
  upVoteUser?: InputMaybe<Scalars['String']>;
};

export type UserDelegateRequestDTOInput = {
  proxyOwner?: InputMaybe<Scalars['Float']>;
  proxyUsers?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ZoomMeetingWhitelistRequestInput = {
  meetingWhiteLists?: InputMaybe<Array<InputMaybe<MeetingWhiteListInput>>>;
};

export type MeetingWhiteListInput = {
  invokeBot?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['Float']>;
};

export type UsalesConvsExternalMeetingInput = {
  file: Scalars['String'];
  payload: MeetingRequestInput;
  transcript?: InputMaybe<Scalars['String']>;
};

export type PlaylistRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updateTime?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type PlaylistParamRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  playlistId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type MediaClipRequestDTOInput = {
  convId?: InputMaybe<Scalars['Float']>;
  convKeymomentId?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  source?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  transcript?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updateTime?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Float']>;
  version?: InputMaybe<Scalars['String']>;
};

export type MediaClipParamRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  mediaClipId?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConvPromiseRequestDTOInput = {
  actionStatus?: InputMaybe<Scalars['String']>;
  classification?: InputMaybe<Scalars['String']>;
  convId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
  promiseEndTime?: InputMaybe<Scalars['String']>;
  promiseNextAction?: InputMaybe<Scalars['String']>;
  promiseStartTime?: InputMaybe<Scalars['String']>;
  promiseText?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['String']>;
  speaker?: InputMaybe<Scalars['String']>;
  speakerUsersId?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
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
  agentSpoken?: InputMaybe<Scalars['String']>;
  convId?: InputMaybe<Scalars['Float']>;
  custSpoken?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Float']>;
  engagement?: InputMaybe<Scalars['String']>;
  externalMeetingId?: InputMaybe<Scalars['String']>;
  frame?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  introVideoMediaLink?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orgId?: InputMaybe<Scalars['Float']>;
  performance?: InputMaybe<Scalars['String']>;
  probability?: InputMaybe<Scalars['String']>;
  questions?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['String']>;
  sentiment?: InputMaybe<Scalars['String']>;
  silences?: InputMaybe<Scalars['String']>;
  spoken?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type CompanyParamRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type CompanyProfileKeywordCategRelDTO = {
  companyProfileId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  insertTime?: Maybe<Scalars['String']>;
  keywordCategId?: Maybe<Scalars['Float']>;
  orgId?: Maybe<Scalars['Float']>;
};

export type CompanyProfileKeywordCategRelDTOInput = {
  companyProfileId?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  insertTime?: InputMaybe<Scalars['String']>;
  keywordCategId?: InputMaybe<Scalars['Float']>;
  orgId?: InputMaybe<Scalars['Float']>;
};

export type ConfigPropRequestDTOInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  setId?: InputMaybe<Scalars['Float']>;
  setName?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

    }
    export type QueryQSalesSdk = {
  /** 

Equivalent to GET /usales/accounts/{id} **/
  accountResponseDTO: InContextSdkMethod<QSalesTypes.Query['accountResponseDTO'], QSalesTypes.QueryaccountResponseDTOArgs, MeshContext>,
  /** 

Equivalent to GET /usales/accounts/{id}/team **/
  accountTeamResponse: InContextSdkMethod<QSalesTypes.Query['accountTeamResponse'], QSalesTypes.QueryaccountTeamResponseArgs, MeshContext>,
  /** 

Equivalent to GET /usales/alerts/{id} **/
  alertResponseDTO: InContextSdkMethod<QSalesTypes.Query['alertResponseDTO'], QSalesTypes.QueryalertResponseDTOArgs, MeshContext>,
  /** 

Equivalent to GET /auth/accessToken **/
  authAccessToken: InContextSdkMethod<QSalesTypes.Query['authAccessToken'], {}, MeshContext>,
  /** 

Equivalent to GET /auth/google **/
  authGoogle: InContextSdkMethod<QSalesTypes.Query['authGoogle'], {}, MeshContext>,
  /** 

Equivalent to GET /auth/google/callback **/
  authGoogleCallback: InContextSdkMethod<QSalesTypes.Query['authGoogleCallback'], {}, MeshContext>,
  /** 

Equivalent to GET /auth/outlook **/
  authOutlook: InContextSdkMethod<QSalesTypes.Query['authOutlook'], {}, MeshContext>,
  /** 

Equivalent to GET /auth/revoke/{provider} **/
  authRevoke: InContextSdkMethod<QSalesTypes.Query['authRevoke'], QSalesTypes.QueryauthRevokeArgs, MeshContext>,
  /** 

Equivalent to GET /auth/social **/
  authSocial: InContextSdkMethod<QSalesTypes.Query['authSocial'], {}, MeshContext>,
  /** 

Equivalent to GET /usales/events/{id} **/
  calendarEvent: InContextSdkMethod<QSalesTypes.Query['calendarEvent'], QSalesTypes.QuerycalendarEventArgs, MeshContext>,
  /** 

Equivalent to GET /usales/companyprofile **/
  companyProfileDTO: InContextSdkMethod<QSalesTypes.Query['companyProfileDTO'], {}, MeshContext>,
  /** 

Equivalent to GET /usales/analytics/company/slide-first **/
  companySlideFirstResponse: InContextSdkMethod<QSalesTypes.Query['companySlideFirstResponse'], {}, MeshContext>,
  /** 

Equivalent to GET /usales/contact/metrics/{contactId} **/
  contactMetricsResponse: InContextSdkMethod<QSalesTypes.Query['contactMetricsResponse'], QSalesTypes.QuerycontactMetricsResponseArgs, MeshContext>,
  /** 

Equivalent to GET /usales/contact/summary/{contactId} **/
  contactResponse: InContextSdkMethod<QSalesTypes.Query['contactResponse'], QSalesTypes.QuerycontactResponseArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs/attendees/{id} **/
  convAttendeeResponseDTO: InContextSdkMethod<QSalesTypes.Query['convAttendeeResponseDTO'], QSalesTypes.QueryconvAttendeeResponseDTOArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs/{convId}/eqscore **/
  convEQResponseDTO: InContextSdkMethod<QSalesTypes.Query['convEQResponseDTO'], QSalesTypes.QueryconvEQResponseDTOArgs, MeshContext>,
  /** 

Equivalent to GET /usales/conv/metrics/aggr/{id} **/
  convMetricsResponse: InContextSdkMethod<QSalesTypes.Query['convMetricsResponse'], QSalesTypes.QueryconvMetricsResponseArgs, MeshContext>,
  /** 

Equivalent to GET /conv/mod/{convId} **/
  convMod: InContextSdkMethod<QSalesTypes.Query['convMod'], QSalesTypes.QueryconvModArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs/{id}/slide-first **/
  convSlideFirstResponse: InContextSdkMethod<QSalesTypes.Query['convSlideFirstResponse'], QSalesTypes.QueryconvSlideFirstResponseArgs, MeshContext>,
  /** 

Equivalent to GET /usales/timeline/{conv_id} **/
  convTimeline: InContextSdkMethod<QSalesTypes.Query['convTimeline'], QSalesTypes.QueryconvTimelineArgs, MeshContext>,
  /** 

Equivalent to GET /usales/conv-topic-episodes/{id} **/
  convTopicEpisodeResponseDTO: InContextSdkMethod<QSalesTypes.Query['convTopicEpisodeResponseDTO'], QSalesTypes.QueryconvTopicEpisodeResponseDTOArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs/{id}/participantsWithMetrics **/
  conversationAttendeesResponse: InContextSdkMethod<QSalesTypes.Query['conversationAttendeesResponse'], QSalesTypes.QueryconversationAttendeesResponseArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs/{id}/preview **/
  conversationDetailResponse: InContextSdkMethod<QSalesTypes.Query['conversationDetailResponse'], QSalesTypes.QueryconversationDetailResponseArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs/{id} **/
  conversationRequest: InContextSdkMethod<QSalesTypes.Query['conversationRequest'], QSalesTypes.QueryconversationRequestArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs/summary/{id} **/
  conversationSummaryResponse: InContextSdkMethod<QSalesTypes.Query['conversationSummaryResponse'], QSalesTypes.QueryconversationSummaryResponseArgs, MeshContext>,
  /** 

Equivalent to GET /usales/metrics/convs/{convId}/convostats **/
  convoStatResponse: InContextSdkMethod<QSalesTypes.Query['convoStatResponse'], QSalesTypes.QueryconvoStatResponseArgs, MeshContext>,
  /** 

Equivalent to GET /cq/account/{crmAccountId}/trend **/
  cqAccountTrend: InContextSdkMethod<QSalesTypes.Query['cqAccountTrend'], QSalesTypes.QuerycqAccountTrendArgs, MeshContext>,
  /** 

Equivalent to GET /cq/contact/{crmContactId}/eq **/
  cqContactEq: InContextSdkMethod<QSalesTypes.Query['cqContactEq'], QSalesTypes.QuerycqContactEqArgs, MeshContext>,
  /** 

Equivalent to GET /cq/opportunity/{crmOpportunityId}/contact/{crmContactId}/eq **/
  cqOpportunityContactEq: InContextSdkMethod<QSalesTypes.Query['cqOpportunityContactEq'], QSalesTypes.QuerycqOpportunityContactEqArgs, MeshContext>,
  /** 

Equivalent to GET /cq/token/access **/
  cqTokenAccess: InContextSdkMethod<QSalesTypes.Query['cqTokenAccess'], {}, MeshContext>,
  /** 

Equivalent to GET /cq/token/refresh **/
  cqTokenRefresh: InContextSdkMethod<QSalesTypes.Query['cqTokenRefresh'], {}, MeshContext>,
  /** 

Equivalent to GET /cq/token/revoke/access **/
  cqTokenRevokeAccess: InContextSdkMethod<QSalesTypes.Query['cqTokenRevokeAccess'], {}, MeshContext>,
  /** 

Equivalent to GET /cq/token/revoke/refresh **/
  cqTokenRevokeRefresh: InContextSdkMethod<QSalesTypes.Query['cqTokenRevokeRefresh'], {}, MeshContext>,
  /** 

Equivalent to GET /cq/opportunity/{crmOpportunityId}/current **/
  currentEQForOpptyResponse: InContextSdkMethod<QSalesTypes.Query['currentEQForOpptyResponse'], QSalesTypes.QuerycurrentEQForOpptyResponseArgs, MeshContext>,
  /** 

Equivalent to GET /cq/account/{crmAccountId}/current **/
  dealDetailResponse: InContextSdkMethod<QSalesTypes.Query['dealDetailResponse'], QSalesTypes.QuerydealDetailResponseArgs, MeshContext>,
  /** 

Equivalent to GET /usales/oppty/{id}/details **/
  dealSummaryDetailResponse: InContextSdkMethod<QSalesTypes.Query['dealSummaryDetailResponse'], QSalesTypes.QuerydealSummaryDetailResponseArgs, MeshContext>,
  /** 

Equivalent to GET /usales/oppty/summary/{id} **/
  dealSummaryResponse: InContextSdkMethod<QSalesTypes.Query['dealSummaryResponse'], QSalesTypes.QuerydealSummaryResponseArgs, MeshContext>,
  /** 

Equivalent to GET /usales/oppty/{id}/trend **/
  dealSummaryTrendResponse: InContextSdkMethod<QSalesTypes.Query['dealSummaryTrendResponse'], QSalesTypes.QuerydealSummaryTrendResponseArgs, MeshContext>,
  /** 

Equivalent to GET /usales/diarization/{conv_id} **/
  diarization: InContextSdkMethod<QSalesTypes.Query['diarization'], QSalesTypes.QuerydiarizationArgs, MeshContext>,
  /** 

Equivalent to GET /usales/empathyandhesitationturns/get/conv **/
  empathyAndHesitationTurnsReport: InContextSdkMethod<QSalesTypes.Query['empathyAndHesitationTurnsReport'], QSalesTypes.QueryempathyAndHesitationTurnsReportArgs, MeshContext>,
  /** 

Equivalent to GET /cq/opportunity/{crmOpportunityId}/contact/eq **/
  getContactsEQForOppty: InContextSdkMethod<QSalesTypes.Query['getContactsEQForOppty'], QSalesTypes.QuerygetContactsEQForOpptyArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs/{id}/details **/
  getConversationDetail: InContextSdkMethod<QSalesTypes.Query['getConversationDetail'], QSalesTypes.QuerygetConversationDetailArgs, MeshContext>,
  /** 

Equivalent to GET /usales/accounts/{accountId}/convtrends **/
  getEQbyAccount: InContextSdkMethod<QSalesTypes.Query['getEQbyAccount'], QSalesTypes.QuerygetEQbyAccountArgs, MeshContext>,
  /** 

Equivalent to GET /cq/manager/{managerEmailId}/{startMMddyyyy}/eq **/
  getManagerEQ: InContextSdkMethod<QSalesTypes.Query['getManagerEQ'], QSalesTypes.QuerygetManagerEQArgs, MeshContext>,
  /** 

Equivalent to GET /usales/oppty/{id} **/
  getOpptyById: InContextSdkMethod<QSalesTypes.Query['getOpptyById'], QSalesTypes.QuerygetOpptyByIdArgs, MeshContext>,
  /** 

Equivalent to GET /usales/oppty/keyMoments **/
  getOpptyKeyMoments: InContextSdkMethod<QSalesTypes.Query['getOpptyKeyMoments'], QSalesTypes.QuerygetOpptyKeyMomentsArgs, MeshContext>,
  /** 

Equivalent to GET /cq/seller/{sellerEmailId}/eq **/
  getSellerEQ2: InContextSdkMethod<QSalesTypes.Query['getSellerEQ2'], QSalesTypes.QuerygetSellerEQ2Args, MeshContext>,
  /** 

Equivalent to GET /usales/convs/{id}/keyPhrases **/
  keyPhraseResponse: InContextSdkMethod<QSalesTypes.Query['keyPhraseResponse'], QSalesTypes.QuerykeyPhraseResponseArgs, MeshContext>,
  /** 

Equivalent to GET /usales/mediaclip/{id} **/
  mediaClipResponseDTO: InContextSdkMethod<QSalesTypes.Query['mediaClipResponseDTO'], QSalesTypes.QuerymediaClipResponseDTOArgs, MeshContext>,
  /** 

Equivalent to GET /usales/oppty/{opptyId}/promises **/
  opptyDTO: InContextSdkMethod<QSalesTypes.Query['opptyDTO'], QSalesTypes.QueryopptyDTOArgs, MeshContext>,
  /** 

Equivalent to GET /usales/{oppty_stage}/eqscore **/
  opptyEqbyStageResponseDTO: InContextSdkMethod<QSalesTypes.Query['opptyEqbyStageResponseDTO'], QSalesTypes.QueryopptyEqbyStageResponseDTOArgs, MeshContext>,
  /** 

Equivalent to GET /usales/oppty/teams/{id} **/
  opptyTeamResponseDTO: InContextSdkMethod<QSalesTypes.Query['opptyTeamResponseDTO'], QSalesTypes.QueryopptyTeamResponseDTOArgs, MeshContext>,
  /** 

Equivalent to GET /usales/playlists/{id} **/
  playlistResponseDTO: InContextSdkMethod<QSalesTypes.Query['playlistResponseDTO'], QSalesTypes.QueryplaylistResponseDTOArgs, MeshContext>,
  /** 

Equivalent to GET /slack/authurl **/
  slackAuthurl: InContextSdkMethod<QSalesTypes.Query['slackAuthurl'], {}, MeshContext>,
  /** 

Equivalent to GET /slack/redirect **/
  slackRedirect: InContextSdkMethod<QSalesTypes.Query['slackRedirect'], QSalesTypes.QueryslackRedirectArgs, MeshContext>,
  /** 

Equivalent to GET /usales/reports/summary **/
  summaryReportDTO: InContextSdkMethod<QSalesTypes.Query['summaryReportDTO'], {}, MeshContext>,
  /** 

Equivalent to GET /cq/seller/{sellerEmailId}/{days}/eq **/
  teamOpptyUsersStats: InContextSdkMethod<QSalesTypes.Query['teamOpptyUsersStats'], QSalesTypes.QueryteamOpptyUsersStatsArgs, MeshContext>,
  /** 

Equivalent to GET /cq/opportunity/{crmOpportunityId}/trend **/
  trendEQForOpptyResponse: InContextSdkMethod<QSalesTypes.Query['trendEQForOpptyResponse'], QSalesTypes.QuerytrendEQForOpptyResponseArgs, MeshContext>,
  /** 

Equivalent to GET /usales/accounts/{id}/oppty **/
  usalesAccountOppty: InContextSdkMethod<QSalesTypes.Query['usalesAccountOppty'], QSalesTypes.QueryusalesAccountOpptyArgs, MeshContext>,
  /** 

Equivalent to GET /usales/accounts **/
  usalesAccounts: InContextSdkMethod<QSalesTypes.Query['usalesAccounts'], QSalesTypes.QueryusalesAccountsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/accounts/promises **/
  usalesAccountsPromises: InContextSdkMethod<QSalesTypes.Query['usalesAccountsPromises'], QSalesTypes.QueryusalesAccountsPromisesArgs, MeshContext>,
  /** 

Equivalent to GET /usales/alerts **/
  usalesAlerts: InContextSdkMethod<QSalesTypes.Query['usalesAlerts'], QSalesTypes.QueryusalesAlertsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/bookmarks/convs/{convId} **/
  usalesBookmarksConv: InContextSdkMethod<QSalesTypes.Query['usalesBookmarksConv'], QSalesTypes.QueryusalesBookmarksConvArgs, MeshContext>,
  /** 

Equivalent to GET /usales/bookmarks/keymoments/{convKeyMomentId} **/
  usalesBookmarksKeymoment: InContextSdkMethod<QSalesTypes.Query['usalesBookmarksKeymoment'], QSalesTypes.QueryusalesBookmarksKeymomentArgs, MeshContext>,
  /** 

Equivalent to GET /usales/company-param **/
  usalesCompanyParam: InContextSdkMethod<QSalesTypes.Query['usalesCompanyParam'], QSalesTypes.QueryusalesCompanyParamArgs, MeshContext>,
  /** 

Equivalent to GET /usales/company-params **/
  usalesCompanyParams: InContextSdkMethod<QSalesTypes.Query['usalesCompanyParams'], QSalesTypes.QueryusalesCompanyParamsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/companyprofile/access-consent **/
  usalesCompanyprofileAccessConsent: InContextSdkMethod<QSalesTypes.Query['usalesCompanyprofileAccessConsent'], {}, MeshContext>,
  /** 

Equivalent to GET /usales/companyprofile/businesscategs **/
  usalesCompanyprofileBusinesscategs: InContextSdkMethod<QSalesTypes.Query['usalesCompanyprofileBusinesscategs'], QSalesTypes.QueryusalesCompanyprofileBusinesscategsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/configprops **/
  usalesConfigprops: InContextSdkMethod<QSalesTypes.Query['usalesConfigprops'], QSalesTypes.QueryusalesConfigpropsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/contacts/{contact}/emails/count **/
  usalesContactEmailsCount: InContextSdkMethod<QSalesTypes.Query['usalesContactEmailsCount'], QSalesTypes.QueryusalesContactEmailsCountArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs/{convId}/comments **/
  usalesConvComments: InContextSdkMethod<QSalesTypes.Query['usalesConvComments'], QSalesTypes.QueryusalesConvCommentsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs/{convId}/contact_eqscore **/
  usalesConvContactEqscore: InContextSdkMethod<QSalesTypes.Query['usalesConvContactEqscore'], QSalesTypes.QueryusalesConvContactEqscoreArgs, MeshContext>,
  /** 

Equivalent to GET /usales/conv/metrics/{id} **/
  usalesConvMetric: InContextSdkMethod<QSalesTypes.Query['usalesConvMetric'], QSalesTypes.QueryusalesConvMetricArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs/{id}/metrics **/
  usalesConvMetrics: InContextSdkMethod<QSalesTypes.Query['usalesConvMetrics'], QSalesTypes.QueryusalesConvMetricsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs **/
  usalesConvs: InContextSdkMethod<QSalesTypes.Query['usalesConvs'], QSalesTypes.QueryusalesConvsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs/attendees **/
  usalesConvsAttendees: InContextSdkMethod<QSalesTypes.Query['usalesConvsAttendees'], QSalesTypes.QueryusalesConvsAttendeesArgs, MeshContext>,
  /** 

Equivalent to GET /usales/convs/status **/
  usalesConvsStatus: InContextSdkMethod<QSalesTypes.Query['usalesConvsStatus'], {}, MeshContext>,
  /** 

Equivalent to GET /usales/custweblinks **/
  usalesCustweblinks: InContextSdkMethod<QSalesTypes.Query['usalesCustweblinks'], QSalesTypes.QueryusalesCustweblinksArgs, MeshContext>,
  /** 

Equivalent to GET /usales/deals/{opptyId}/contacts/{contactId}/eqscore **/
  usalesDealContactEqscore: InContextSdkMethod<QSalesTypes.Query['usalesDealContactEqscore'], QSalesTypes.QueryusalesDealContactEqscoreArgs, MeshContext>,
  /** 

Equivalent to GET /usales/deals/{opptyId}/convtrends **/
  usalesDealConvtrends: InContextSdkMethod<QSalesTypes.Query['usalesDealConvtrends'], QSalesTypes.QueryusalesDealConvtrendsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/deals/{opptyId}/eqscore **/
  usalesDealEqscore: InContextSdkMethod<QSalesTypes.Query['usalesDealEqscore'], QSalesTypes.QueryusalesDealEqscoreArgs, MeshContext>,
  /** 

Equivalent to GET /usales/deals/stages **/
  usalesDealsStages: InContextSdkMethod<QSalesTypes.Query['usalesDealsStages'], {}, MeshContext>,
  /** 

Equivalent to GET /usales/emleqs/{id} **/
  usalesEmleq: InContextSdkMethod<QSalesTypes.Query['usalesEmleq'], QSalesTypes.QueryusalesEmleqArgs, MeshContext>,
  /** 

Equivalent to GET /usales/emleqs **/
  usalesEmleqs: InContextSdkMethod<QSalesTypes.Query['usalesEmleqs'], QSalesTypes.QueryusalesEmleqsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/keymoments/{convKeyMomentId}/comments **/
  usalesKeymomentComments: InContextSdkMethod<QSalesTypes.Query['usalesKeymomentComments'], QSalesTypes.QueryusalesKeymomentCommentsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/keyword/categ **/
  usalesKeywordCateg: InContextSdkMethod<QSalesTypes.Query['usalesKeywordCateg'], {}, MeshContext>,
  /** 

Equivalent to GET /usales/keyword/categ/{category} **/
  usalesKeywordCateg2: InContextSdkMethod<QSalesTypes.Query['usalesKeywordCateg2'], QSalesTypes.QueryusalesKeywordCateg2Args, MeshContext>,
  /** 

Equivalent to GET /usales/keyword/keyphrase/fetch-expert/{tagId} **/
  usalesKeywordKeyphraseFetchExpert: InContextSdkMethod<QSalesTypes.Query['usalesKeywordKeyphraseFetchExpert'], QSalesTypes.QueryusalesKeywordKeyphraseFetchExpertArgs, MeshContext>,
  /** 

Equivalent to GET /usales/mediaClip/param/{mediaClipId} **/
  usalesMediaClipParam: InContextSdkMethod<QSalesTypes.Query['usalesMediaClipParam'], QSalesTypes.QueryusalesMediaClipParamArgs, MeshContext>,
  /** 

Equivalent to GET /usales/mediaclip/myclips **/
  usalesMediaclipMyclips: InContextSdkMethod<QSalesTypes.Query['usalesMediaclipMyclips'], QSalesTypes.QueryusalesMediaclipMyclipsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/mindtickle/coursesbyemail/{email} **/
  usalesMindtickleCoursesbyemail: InContextSdkMethod<QSalesTypes.Query['usalesMindtickleCoursesbyemail'], QSalesTypes.QueryusalesMindtickleCoursesbyemailArgs, MeshContext>,
  /** 

Equivalent to GET /usales/mindtickle/querybyuri/{url} **/
  usalesMindtickleQuerybyuri: InContextSdkMethod<QSalesTypes.Query['usalesMindtickleQuerybyuri'], QSalesTypes.QueryusalesMindtickleQuerybyuriArgs, MeshContext>,
  /** 

Equivalent to GET /usales/oppty **/
  usalesOppty: InContextSdkMethod<QSalesTypes.Query['usalesOppty'], QSalesTypes.QueryusalesOpptyArgs, MeshContext>,
  /** 

Equivalent to GET /usales/oppty/teams **/
  usalesOpptyTeams: InContextSdkMethod<QSalesTypes.Query['usalesOpptyTeams'], QSalesTypes.QueryusalesOpptyTeamsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/playlist/param/{playlistId} **/
  usalesPlaylistParam: InContextSdkMethod<QSalesTypes.Query['usalesPlaylistParam'], QSalesTypes.QueryusalesPlaylistParamArgs, MeshContext>,
  /** 

Equivalent to GET /usales/playlists/myplaylists **/
  usalesPlaylistsMyplaylists: InContextSdkMethod<QSalesTypes.Query['usalesPlaylistsMyplaylists'], QSalesTypes.QueryusalesPlaylistsMyplaylistsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/playlists/shared-members **/
  usalesPlaylistsSharedMembers: InContextSdkMethod<QSalesTypes.Query['usalesPlaylistsSharedMembers'], QSalesTypes.QueryusalesPlaylistsSharedMembersArgs, MeshContext>,
  /** 

Equivalent to GET /usales/playlists/sharedwithme **/
  usalesPlaylistsSharedwithme: InContextSdkMethod<QSalesTypes.Query['usalesPlaylistsSharedwithme'], {}, MeshContext>,
  /** 

Equivalent to GET /usales/preferences/mine **/
  usalesPreferencesMine: InContextSdkMethod<QSalesTypes.Query['usalesPreferencesMine'], QSalesTypes.QueryusalesPreferencesMineArgs, MeshContext>,
  /** 

Equivalent to GET /usales/re/{code} **/
  usalesRe: InContextSdkMethod<QSalesTypes.Query['usalesRe'], QSalesTypes.QueryusalesReArgs, MeshContext>,
  /** 

Equivalent to GET /usales/sharedviewdata-conv/{conv_id} **/
  usalesSharedviewdataConv: InContextSdkMethod<QSalesTypes.Query['usalesSharedviewdataConv'], QSalesTypes.QueryusalesSharedviewdataConvArgs, MeshContext>,
  /** 

Equivalent to GET /usales/sharedviewdata-name/{name} **/
  usalesSharedviewdataName: InContextSdkMethod<QSalesTypes.Query['usalesSharedviewdataName'], QSalesTypes.QueryusalesSharedviewdataNameArgs, MeshContext>,
  /** 

Equivalent to GET /usales/sys **/
  usalesSys: InContextSdkMethod<QSalesTypes.Query['usalesSys'], QSalesTypes.QueryusalesSysArgs, MeshContext>,
  /** 

Equivalent to GET /usales/users/{receiverUserId}/comments **/
  usalesUserComments: InContextSdkMethod<QSalesTypes.Query['usalesUserComments'], QSalesTypes.QueryusalesUserCommentsArgs, MeshContext>,
  /** 

Equivalent to GET /usales/users **/
  usalesUsers: InContextSdkMethod<QSalesTypes.Query['usalesUsers'], {}, MeshContext>,
  /** 

Equivalent to GET /usales/users/me/emails/count **/
  usalesUsersMeEmailsCount: InContextSdkMethod<QSalesTypes.Query['usalesUsersMeEmailsCount'], {}, MeshContext>,
  /** 

Equivalent to GET /usales/users/team/{usersId} **/
  usalesUsersTeam: InContextSdkMethod<QSalesTypes.Query['usalesUsersTeam'], QSalesTypes.QueryusalesUsersTeamArgs, MeshContext>,
  /** 

Equivalent to GET /usales/users/me **/
  user: InContextSdkMethod<QSalesTypes.Query['user'], {}, MeshContext>,
  /** 

Equivalent to GET /usales/users/{usersId}/proxy **/
  userDelegateResponseDTO: InContextSdkMethod<QSalesTypes.Query['userDelegateResponseDTO'], QSalesTypes.QueryuserDelegateResponseDTOArgs, MeshContext>,
  /** 

Equivalent to GET /v1/transcript/populate/{convId} **/
  v1TranscriptPopulate2: InContextSdkMethod<QSalesTypes.Query['v1TranscriptPopulate2'], QSalesTypes.Queryv1TranscriptPopulate2Args, MeshContext>
};

export type MutationQSalesSdk = {
  /** 

Equivalent to PUT /usales/playlists/media-clip-rel-bulk **/
  addBulkPlaylistMediaClipRel: InContextSdkMethod<QSalesTypes.Mutation['addBulkPlaylistMediaClipRel'], QSalesTypes.MutationaddBulkPlaylistMediaClipRelArgs, MeshContext>,
  /** 

Equivalent to POST /auth/login **/
  authenticateUser: InContextSdkMethod<QSalesTypes.Mutation['authenticateUser'], QSalesTypes.MutationauthenticateUserArgs, MeshContext>,
  /** 

Equivalent to POST /auth/login2 **/
  authenticateUser2: InContextSdkMethod<QSalesTypes.Mutation['authenticateUser2'], QSalesTypes.MutationauthenticateUser2Args, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/keyphrase/occurrences **/
  companyKeyPhraseOccurrences: InContextSdkMethod<QSalesTypes.Mutation['companyKeyPhraseOccurrences'], QSalesTypes.MutationcompanyKeyPhraseOccurrencesArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/keyphrase/sentiment **/
  companyKeyPhraseOccurrencesBySentiment: InContextSdkMethod<QSalesTypes.Mutation['companyKeyPhraseOccurrencesBySentiment'], QSalesTypes.MutationcompanyKeyPhraseOccurrencesBySentimentArgs, MeshContext>,
  /** 

Equivalent to POST /usales/timeline/{conv_id} **/
  convert: InContextSdkMethod<QSalesTypes.Mutation['convert'], QSalesTypes.MutationconvertArgs, MeshContext>,
  /** 

Equivalent to POST /usales/alerts **/
  createAlert: InContextSdkMethod<QSalesTypes.Mutation['createAlert'], QSalesTypes.MutationcreateAlertArgs, MeshContext>,
  /** 

Equivalent to POST /usales/conv-topic-episodes **/
  createConvTopicEpisode: InContextSdkMethod<QSalesTypes.Mutation['createConvTopicEpisode'], QSalesTypes.MutationcreateConvTopicEpisodeArgs, MeshContext>,
  /** 

Equivalent to POST /usales/emleqs **/
  createEmlEq: InContextSdkMethod<QSalesTypes.Mutation['createEmlEq'], QSalesTypes.MutationcreateEmlEqArgs, MeshContext>,
  /** 

Equivalent to POST /usales/custweblinks **/
  createOrUpdate: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdate'], QSalesTypes.MutationcreateOrUpdateArgs, MeshContext>,
  /** 

Equivalent to POST /usales/comments **/
  createOrUpdate1: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdate1'], QSalesTypes.MutationcreateOrUpdate1Args, MeshContext>,
  /** 

Equivalent to POST /usales/clips **/
  createOrUpdate2: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdate2'], QSalesTypes.MutationcreateOrUpdate2Args, MeshContext>,
  /** 

Equivalent to POST /usales/bookmarks **/
  createOrUpdate3: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdate3'], QSalesTypes.MutationcreateOrUpdate3Args, MeshContext>,
  /** 

Equivalent to POST /usales/accounts **/
  createOrUpdateAccount: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdateAccount'], QSalesTypes.MutationcreateOrUpdateAccountArgs, MeshContext>,
  /** 

Equivalent to POST /usales/convs/attendees **/
  createOrUpdateConvAttendee: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdateConvAttendee'], QSalesTypes.MutationcreateOrUpdateConvAttendeeArgs, MeshContext>,
  /** 

Equivalent to POST /usales/conv/attendees/{id} **/
  createOrUpdateConvAttendee1: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdateConvAttendee1'], QSalesTypes.MutationcreateOrUpdateConvAttendee1Args, MeshContext>,
  /** 

Equivalent to PUT /usales/keyword/categ **/
  createOrUpdateKeywordCateg: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdateKeywordCateg'], QSalesTypes.MutationcreateOrUpdateKeywordCategArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/keyword/tag **/
  createOrUpdateKeywordTag: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdateKeywordTag'], QSalesTypes.MutationcreateOrUpdateKeywordTagArgs, MeshContext>,
  /** 

Equivalent to POST /usales/oppty/{opptyId} **/
  createOrUpdateOppty: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdateOppty'], QSalesTypes.MutationcreateOrUpdateOpptyArgs, MeshContext>,
  /** 

Equivalent to POST /usales/oppty **/
  createOrUpdateOppty1: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdateOppty1'], QSalesTypes.MutationcreateOrUpdateOppty1Args, MeshContext>,
  /** 

Equivalent to POST /usales/oppty/teams **/
  createOrUpdateOpptyTeam: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdateOpptyTeam'], QSalesTypes.MutationcreateOrUpdateOpptyTeamArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/preferences **/
  createOrUpdatePreference: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdatePreference'], QSalesTypes.MutationcreateOrUpdatePreferenceArgs, MeshContext>,
  /** 

Equivalent to POST /usales/empathy-moment-recommendation **/
  createOrUpdateRecommendation: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdateRecommendation'], QSalesTypes.MutationcreateOrUpdateRecommendationArgs, MeshContext>,
  /** 

Equivalent to POST /usales/users **/
  createOrUpdateUser: InContextSdkMethod<QSalesTypes.Mutation['createOrUpdateUser'], QSalesTypes.MutationcreateOrUpdateUserArgs, MeshContext>,
  /** 

Equivalent to DELETE /usales/zoommeetingwhitelist **/
  delete: InContextSdkMethod<QSalesTypes.Mutation['delete'], QSalesTypes.MutationdeleteArgs, MeshContext>,
  /** 

Equivalent to DELETE /usales/emleqs/{id} **/
  delete1: InContextSdkMethod<QSalesTypes.Mutation['delete1'], QSalesTypes.Mutationdelete1Args, MeshContext>,
  /** 

Equivalent to DELETE /usales/custweblinks/{id} **/
  delete2: InContextSdkMethod<QSalesTypes.Mutation['delete2'], QSalesTypes.Mutationdelete2Args, MeshContext>,
  /** 

Equivalent to DELETE /usales/conv-topic-episodes/{id} **/
  delete3: InContextSdkMethod<QSalesTypes.Mutation['delete3'], QSalesTypes.Mutationdelete3Args, MeshContext>,
  /** 

Equivalent to DELETE /usales/comments/{id} **/
  delete4: InContextSdkMethod<QSalesTypes.Mutation['delete4'], QSalesTypes.Mutationdelete4Args, MeshContext>,
  /** 

Equivalent to DELETE /usales/bookmarks/{id} **/
  delete5: InContextSdkMethod<QSalesTypes.Mutation['delete5'], QSalesTypes.Mutationdelete5Args, MeshContext>,
  /** 

Equivalent to DELETE /usales/alerts/{id} **/
  delete6: InContextSdkMethod<QSalesTypes.Mutation['delete6'], QSalesTypes.Mutationdelete6Args, MeshContext>,
  /** 

Equivalent to PUT /usales/playlists/delete-media-clip-rel **/
  deletePlaylistMediaClipRel: InContextSdkMethod<QSalesTypes.Mutation['deletePlaylistMediaClipRel'], QSalesTypes.MutationdeletePlaylistMediaClipRelArgs, MeshContext>,
  /** 

Equivalent to DELETE /usales/keyword/tags **/
  deleteTags: InContextSdkMethod<QSalesTypes.Mutation['deleteTags'], QSalesTypes.MutationdeleteTagsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/keyword/keyphrase/custom/trending **/
  findCustomKeyphraseTrendingTopicCount: InContextSdkMethod<QSalesTypes.Mutation['findCustomKeyphraseTrendingTopicCount'], QSalesTypes.MutationfindCustomKeyphraseTrendingTopicCountArgs, MeshContext>,
  /** 

Equivalent to POST /usales/oppty/{id}/details **/
  findDealDetailsByMode: InContextSdkMethod<QSalesTypes.Mutation['findDealDetailsByMode'], QSalesTypes.MutationfindDealDetailsByModeArgs, MeshContext>,
  /** 

Equivalent to POST /usales/keyword/keyphrase/trending **/
  findKeyphraseTrendingTopicCount: InContextSdkMethod<QSalesTypes.Mutation['findKeyphraseTrendingTopicCount'], QSalesTypes.MutationfindKeyphraseTrendingTopicCountArgs, MeshContext>,
  /** 

Equivalent to POST /usales/timeline/generate/{conv_id} **/
  generateTimeline: InContextSdkMethod<QSalesTypes.Mutation['generateTimeline'], QSalesTypes.MutationgenerateTimelineArgs, MeshContext>,
  /** 

Equivalent to POST /usales/teams/usersstat **/
  getAccountTeamsUsersStats: InContextSdkMethod<QSalesTypes.Mutation['getAccountTeamsUsersStats'], QSalesTypes.MutationgetAccountTeamsUsersStatsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/teams/account/userstat **/
  getAccountUsersStat: InContextSdkMethod<QSalesTypes.Mutation['getAccountUsersStat'], QSalesTypes.MutationgetAccountUsersStatArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/usage/active-users **/
  getAllActiveUsers: InContextSdkMethod<QSalesTypes.Mutation['getAllActiveUsers'], QSalesTypes.MutationgetAllActiveUsersArgs, MeshContext>,
  /** 

Equivalent to POST /usales/teams/userstat **/
  getAllTeamsUserStats: InContextSdkMethod<QSalesTypes.Mutation['getAllTeamsUserStats'], QSalesTypes.MutationgetAllTeamsUserStatsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/company/assessments **/
  getAssessmentByCompany: InContextSdkMethod<QSalesTypes.Mutation['getAssessmentByCompany'], QSalesTypes.MutationgetAssessmentByCompanyArgs, MeshContext>,
  /** 

Equivalent to POST /usales/users/assessments **/
  getAssessments: InContextSdkMethod<QSalesTypes.Mutation['getAssessments'], QSalesTypes.MutationgetAssessmentsArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/convs/meeting-attendee **/
  getAttendeeByMeetingTranscript: InContextSdkMethod<QSalesTypes.Mutation['getAttendeeByMeetingTranscript'], QSalesTypes.MutationgetAttendeeByMeetingTranscriptArgs, MeshContext>,
  /** 

Equivalent to POST /auth/outlook/callback **/
  getAuthCodeAndGenerateToken: InContextSdkMethod<QSalesTypes.Mutation['getAuthCodeAndGenerateToken'], QSalesTypes.MutationgetAuthCodeAndGenerateTokenArgs, MeshContext>,
  /** 

Equivalent to POST /auth/social **/
  getAuthUrl: InContextSdkMethod<QSalesTypes.Mutation['getAuthUrl'], QSalesTypes.MutationgetAuthUrlArgs, MeshContext>,
  /** 

Equivalent to POST /auth/outlook **/
  getAuthUrl1: InContextSdkMethod<QSalesTypes.Mutation['getAuthUrl1'], QSalesTypes.MutationgetAuthUrl1Args, MeshContext>,
  /** 

Equivalent to POST /auth/google **/
  getAuthUrl2: InContextSdkMethod<QSalesTypes.Mutation['getAuthUrl2'], QSalesTypes.MutationgetAuthUrl2Args, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/customer-pulse/closed-deals **/
  getClosedDealDetails: InContextSdkMethod<QSalesTypes.Mutation['getClosedDealDetails'], QSalesTypes.MutationgetClosedDealDetailsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/company/deals **/
  getCompanyDeals: InContextSdkMethod<QSalesTypes.Mutation['getCompanyDeals'], QSalesTypes.MutationgetCompanyDealsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/account-oppty-eq/company **/
  getCompanyDealsEQOnRiskScale: InContextSdkMethod<QSalesTypes.Mutation['getCompanyDealsEQOnRiskScale'], QSalesTypes.MutationgetCompanyDealsEQOnRiskScaleArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/usage/meetingstat **/
  getCompanyMeetingStats: InContextSdkMethod<QSalesTypes.Mutation['getCompanyMeetingStats'], QSalesTypes.MutationgetCompanyMeetingStatsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/company-params **/
  getCompanyParams: InContextSdkMethod<QSalesTypes.Mutation['getCompanyParams'], QSalesTypes.MutationgetCompanyParamsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/usage/companystat **/
  getCompanyQUsage: InContextSdkMethod<QSalesTypes.Mutation['getCompanyQUsage'], QSalesTypes.MutationgetCompanyQUsageArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/contacts **/
  getContacts: InContextSdkMethod<QSalesTypes.Mutation['getContacts'], QSalesTypes.MutationgetContactsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/accounts/{id}/activities **/
  getConversationByAccount: InContextSdkMethod<QSalesTypes.Mutation['getConversationByAccount'], QSalesTypes.MutationgetConversationByAccountArgs, MeshContext>,
  /** 

Equivalent to POST /usales/convs/userstat **/
  getConversationUserStat: InContextSdkMethod<QSalesTypes.Mutation['getConversationUserStat'], QSalesTypes.MutationgetConversationUserStatArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/customer-pulse **/
  getCustomerPulse: InContextSdkMethod<QSalesTypes.Mutation['getCustomerPulse'], QSalesTypes.MutationgetCustomerPulseArgs, MeshContext>,
  /** 

Equivalent to POST /usales/oppty/{id}/activities **/
  getDealActivities: InContextSdkMethod<QSalesTypes.Mutation['getDealActivities'], QSalesTypes.MutationgetDealActivitiesArgs, MeshContext>,
  /** 

Equivalent to POST /usales/accounts/deals **/
  getDealCountByAccounts: InContextSdkMethod<QSalesTypes.Mutation['getDealCountByAccounts'], QSalesTypes.MutationgetDealCountByAccountsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/account-oppty-eq **/
  getDealEQOnRiskScale: InContextSdkMethod<QSalesTypes.Mutation['getDealEQOnRiskScale'], QSalesTypes.MutationgetDealEQOnRiskScaleArgs, MeshContext>,
  /** 

Equivalent to POST /usales/oppty/topics **/
  getDealTopics: InContextSdkMethod<QSalesTypes.Mutation['getDealTopics'], QSalesTypes.MutationgetDealTopicsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/deals **/
  getDeals: InContextSdkMethod<QSalesTypes.Mutation['getDeals'], QSalesTypes.MutationgetDealsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/emails/{emlObjId} **/
  getEmailByEmlObjId: InContextSdkMethod<QSalesTypes.Mutation['getEmailByEmlObjId'], QSalesTypes.MutationgetEmailByEmlObjIdArgs, MeshContext>,
  /** 

Equivalent to POST /usales/emails **/
  getEmails: InContextSdkMethod<QSalesTypes.Mutation['getEmails'], QSalesTypes.MutationgetEmailsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/empathyandhesitationturns/getforuserandrange **/
  getEmpathyAndHesitationTurns: InContextSdkMethod<QSalesTypes.Mutation['getEmpathyAndHesitationTurns'], QSalesTypes.MutationgetEmpathyAndHesitationTurnsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/preferences/favorite-meeting **/
  getFavoriteMeeting: InContextSdkMethod<QSalesTypes.Mutation['getFavoriteMeeting'], QSalesTypes.MutationgetFavoriteMeetingArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/usage/invited-users **/
  getInvitedUsers: InContextSdkMethod<QSalesTypes.Mutation['getInvitedUsers'], QSalesTypes.MutationgetInvitedUsersArgs, MeshContext>,
  /** 

Equivalent to POST /usales/convs/lastmeeting **/
  getLastMeeting: InContextSdkMethod<QSalesTypes.Mutation['getLastMeeting'], QSalesTypes.MutationgetLastMeetingArgs, MeshContext>,
  /** 

Equivalent to POST /usales/mediaclip/search/count **/
  getMediaClipCount: InContextSdkMethod<QSalesTypes.Mutation['getMediaClipCount'], QSalesTypes.MutationgetMediaClipCountArgs, MeshContext>,
  /** 

Equivalent to POST /usales/mediaclip/stats **/
  getMediaClipStats: InContextSdkMethod<QSalesTypes.Mutation['getMediaClipStats'], QSalesTypes.MutationgetMediaClipStatsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/usage/meetings **/
  getMeetingListBasedOnType: InContextSdkMethod<QSalesTypes.Mutation['getMeetingListBasedOnType'], QSalesTypes.MutationgetMeetingListBasedOnTypeArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/meeting/sentiments **/
  getMeetingSentiments: InContextSdkMethod<QSalesTypes.Mutation['getMeetingSentiments'], QSalesTypes.MutationgetMeetingSentimentsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/users/meetings/sharedwithme **/
  getMeetingsSharedWithUser: InContextSdkMethod<QSalesTypes.Mutation['getMeetingsSharedWithUser'], QSalesTypes.MutationgetMeetingsSharedWithUserArgs, MeshContext>,
  /** 

Equivalent to POST /usales/convs/{id}/keyword/search **/
  getMomentsHavingKeyword: InContextSdkMethod<QSalesTypes.Mutation['getMomentsHavingKeyword'], QSalesTypes.MutationgetMomentsHavingKeywordArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/keytopics/popular **/
  getMostPopularKeymoments: InContextSdkMethod<QSalesTypes.Mutation['getMostPopularKeymoments'], QSalesTypes.MutationgetMostPopularKeymomentsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/meeting/most-shared **/
  getMostSharedMeetings: InContextSdkMethod<QSalesTypes.Mutation['getMostSharedMeetings'], QSalesTypes.MutationgetMostSharedMeetingsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/meeting/mostviewed **/
  getMostViewedMeeting: InContextSdkMethod<QSalesTypes.Mutation['getMostViewedMeeting'], QSalesTypes.MutationgetMostViewedMeetingArgs, MeshContext>,
  /** 

Equivalent to POST /usales/teams/oppty/userstat **/
  getOpptyUsersStat: InContextSdkMethod<QSalesTypes.Mutation['getOpptyUsersStat'], QSalesTypes.MutationgetOpptyUsersStatArgs, MeshContext>,
  /** 

Equivalent to POST /usales/playlists/stats **/
  getPlaylistStats: InContextSdkMethod<QSalesTypes.Mutation['getPlaylistStats'], QSalesTypes.MutationgetPlaylistStatsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/playlists/search/count **/
  getPlaylistsCount: InContextSdkMethod<QSalesTypes.Mutation['getPlaylistsCount'], QSalesTypes.MutationgetPlaylistsCountArgs, MeshContext>,
  /** 

Equivalent to DELETE /usales/playlists/{id} **/
  getPlaylistsCount1: InContextSdkMethod<QSalesTypes.Mutation['getPlaylistsCount1'], QSalesTypes.MutationgetPlaylistsCount1Args, MeshContext>,
  /** 

Equivalent to DELETE /usales/mediaclip/{id} **/
  getPlaylistsCount2: InContextSdkMethod<QSalesTypes.Mutation['getPlaylistsCount2'], QSalesTypes.MutationgetPlaylistsCount2Args, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/sellereq **/
  getSellerEQ: InContextSdkMethod<QSalesTypes.Mutation['getSellerEQ'], QSalesTypes.MutationgetSellerEQArgs, MeshContext>,
  /** 

Equivalent to POST /usales/configprops **/
  getSystemProps: InContextSdkMethod<QSalesTypes.Mutation['getSystemProps'], QSalesTypes.MutationgetSystemPropsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/usage/page-visits **/
  getTopPageVisitDetails: InContextSdkMethod<QSalesTypes.Mutation['getTopPageVisitDetails'], QSalesTypes.MutationgetTopPageVisitDetailsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/users/calldetails **/
  getUserCallMetr: InContextSdkMethod<QSalesTypes.Mutation['getUserCallMetr'], QSalesTypes.MutationgetUserCallMetrArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/users/callmetrics **/
  getUserCallMetrics: InContextSdkMethod<QSalesTypes.Mutation['getUserCallMetrics'], QSalesTypes.MutationgetUserCallMetricsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/analytics/usage/users-auth **/
  getUsersAuth: InContextSdkMethod<QSalesTypes.Mutation['getUsersAuth'], QSalesTypes.MutationgetUsersAuthArgs, MeshContext>,
  /** 

Equivalent to POST /usales/teams/convostat **/
  getUsersConvoStat: InContextSdkMethod<QSalesTypes.Mutation['getUsersConvoStat'], QSalesTypes.MutationgetUsersConvoStatArgs, MeshContext>,
  /** 

Equivalent to POST /usales/keyword/keyphrase/topic/count **/
  keyPhras1eOccurences: InContextSdkMethod<QSalesTypes.Mutation['keyPhras1eOccurences'], QSalesTypes.MutationkeyPhras1eOccurencesArgs, MeshContext>,
  /** 

Equivalent to POST /usales/keyword/keyphrase/occurences **/
  keyPhraseOccurences: InContextSdkMethod<QSalesTypes.Mutation['keyPhraseOccurences'], QSalesTypes.MutationkeyPhraseOccurencesArgs, MeshContext>,
  /** 

Equivalent to POST /auth/logout **/
  logout: InContextSdkMethod<QSalesTypes.Mutation['logout'], {}, MeshContext>,
  /** 

Equivalent to POST /v1/transcript/populate **/
  populate: InContextSdkMethod<QSalesTypes.Mutation['populate'], QSalesTypes.MutationpopulateArgs, MeshContext>,
  /** 

Equivalent to POST /usales/mindtickle/query **/
  postDataByUri: InContextSdkMethod<QSalesTypes.Mutation['postDataByUri'], QSalesTypes.MutationpostDataByUriArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/keyword/keyphrases **/
  resetKeyPhrases: InContextSdkMethod<QSalesTypes.Mutation['resetKeyPhrases'], {}, MeshContext>,
  /** 

Equivalent to POST /auth/users/details **/
  revoke: InContextSdkMethod<QSalesTypes.Mutation['revoke'], QSalesTypes.MutationrevokeArgs, MeshContext>,
  /** 

Equivalent to POST /auth/revoke/{provider} **/
  revoke1: InContextSdkMethod<QSalesTypes.Mutation['revoke1'], QSalesTypes.Mutationrevoke1Args, MeshContext>,
  /** 

Equivalent to POST /usales/meeting/custom-disclaimer **/
  saveMessage: InContextSdkMethod<QSalesTypes.Mutation['saveMessage'], QSalesTypes.MutationsaveMessageArgs, MeshContext>,
  /** 

Equivalent to POST /cspviolations **/
  saveReport: InContextSdkMethod<QSalesTypes.Mutation['saveReport'], QSalesTypes.MutationsaveReportArgs, MeshContext>,
  /** 

Equivalent to POST /v1/transcript/search **/
  search: InContextSdkMethod<QSalesTypes.Mutation['search'], QSalesTypes.MutationsearchArgs, MeshContext>,
  /** 

Equivalent to POST /usales/zoommeetingwhitelist/search **/
  search1: InContextSdkMethod<QSalesTypes.Mutation['search1'], QSalesTypes.Mutationsearch1Args, MeshContext>,
  /** 

Equivalent to POST /usales/playlists/search **/
  search2: InContextSdkMethod<QSalesTypes.Mutation['search2'], QSalesTypes.Mutationsearch2Args, MeshContext>,
  /** 

Equivalent to POST /usales/mediaclip/search **/
  search3: InContextSdkMethod<QSalesTypes.Mutation['search3'], QSalesTypes.Mutationsearch3Args, MeshContext>,
  /** 

Equivalent to POST /usales/keymoments/search **/
  search4: InContextSdkMethod<QSalesTypes.Mutation['search4'], QSalesTypes.Mutationsearch4Args, MeshContext>,
  /** 

Equivalent to POST /usales/emails/search **/
  search5: InContextSdkMethod<QSalesTypes.Mutation['search5'], QSalesTypes.Mutationsearch5Args, MeshContext>,
  /** 

Equivalent to POST /usales/custweblinks/search **/
  search6: InContextSdkMethod<QSalesTypes.Mutation['search6'], QSalesTypes.Mutationsearch6Args, MeshContext>,
  /** 

Equivalent to POST /usales/convs/promise/search **/
  search7: InContextSdkMethod<QSalesTypes.Mutation['search7'], QSalesTypes.Mutationsearch7Args, MeshContext>,
  /** 

Equivalent to POST /usales/conv-topic-episodes/search **/
  search8: InContextSdkMethod<QSalesTypes.Mutation['search8'], QSalesTypes.Mutationsearch8Args, MeshContext>,
  /** 

Equivalent to POST /usales/comments/search **/
  search9: InContextSdkMethod<QSalesTypes.Mutation['search9'], QSalesTypes.Mutationsearch9Args, MeshContext>,
  /** 

Equivalent to POST /usales/contacts/search **/
  searchAccountAndContact: InContextSdkMethod<QSalesTypes.Mutation['searchAccountAndContact'], QSalesTypes.MutationsearchAccountAndContactArgs, MeshContext>,
  /** 

Equivalent to POST /usales/contacts/search/count **/
  searchAccountAndContactCount: InContextSdkMethod<QSalesTypes.Mutation['searchAccountAndContactCount'], QSalesTypes.MutationsearchAccountAndContactCountArgs, MeshContext>,
  /** 

Equivalent to POST /usales/accounts/search **/
  searchAccounts: InContextSdkMethod<QSalesTypes.Mutation['searchAccounts'], QSalesTypes.MutationsearchAccountsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/accounts/search/count **/
  searchAccountsCount: InContextSdkMethod<QSalesTypes.Mutation['searchAccountsCount'], QSalesTypes.MutationsearchAccountsCountArgs, MeshContext>,
  /** 

Equivalent to POST /usales/alerts/search **/
  searchAlerts: InContextSdkMethod<QSalesTypes.Mutation['searchAlerts'], QSalesTypes.MutationsearchAlertsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/contact/search **/
  searchContact: InContextSdkMethod<QSalesTypes.Mutation['searchContact'], QSalesTypes.MutationsearchContactArgs, MeshContext>,
  /** 

Equivalent to POST /usales/emails/search-summary **/
  searchEmailSummary: InContextSdkMethod<QSalesTypes.Mutation['searchEmailSummary'], QSalesTypes.MutationsearchEmailSummaryArgs, MeshContext>,
  /** 

Equivalent to POST /usales/events/search **/
  searchEvents: InContextSdkMethod<QSalesTypes.Mutation['searchEvents'], QSalesTypes.MutationsearchEventsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/events/search/count **/
  searchEventsCount: InContextSdkMethod<QSalesTypes.Mutation['searchEventsCount'], QSalesTypes.MutationsearchEventsCountArgs, MeshContext>,
  /** 

Equivalent to POST /usales/keyword/categ/search **/
  searchKeywordCateg: InContextSdkMethod<QSalesTypes.Mutation['searchKeywordCateg'], QSalesTypes.MutationsearchKeywordCategArgs, MeshContext>,
  /** 

Equivalent to POST /usales/keyword/categ/search/count **/
  searchKeywordCategCount: InContextSdkMethod<QSalesTypes.Mutation['searchKeywordCategCount'], QSalesTypes.MutationsearchKeywordCategCountArgs, MeshContext>,
  /** 

Equivalent to POST /usales/keyword/categ/search/notags **/
  searchKeywordCategWithoutTags: InContextSdkMethod<QSalesTypes.Mutation['searchKeywordCategWithoutTags'], QSalesTypes.MutationsearchKeywordCategWithoutTagsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/keyword/tag/search **/
  searchKeywordTag: InContextSdkMethod<QSalesTypes.Mutation['searchKeywordTag'], QSalesTypes.MutationsearchKeywordTagArgs, MeshContext>,
  /** 

Equivalent to POST /usales/keyword/tag/search/count **/
  searchKeywordTagCount: InContextSdkMethod<QSalesTypes.Mutation['searchKeywordTagCount'], QSalesTypes.MutationsearchKeywordTagCountArgs, MeshContext>,
  /** 

Equivalent to POST /usales/advSearch **/
  searchMeetings: InContextSdkMethod<QSalesTypes.Mutation['searchMeetings'], QSalesTypes.MutationsearchMeetingsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/search/meetings **/
  searchMeetingsByAccountOrOppty: InContextSdkMethod<QSalesTypes.Mutation['searchMeetingsByAccountOrOppty'], QSalesTypes.MutationsearchMeetingsByAccountOrOpptyArgs, MeshContext>,
  /** 

Equivalent to POST /usales/advSearch/count **/
  searchMeetingsCount: InContextSdkMethod<QSalesTypes.Mutation['searchMeetingsCount'], QSalesTypes.MutationsearchMeetingsCountArgs, MeshContext>,
  /** 

Equivalent to POST /usales/empathy-moment-recommendation/search **/
  searchMoments: InContextSdkMethod<QSalesTypes.Mutation['searchMoments'], QSalesTypes.MutationsearchMomentsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/preferences/search **/
  searchPreference: InContextSdkMethod<QSalesTypes.Mutation['searchPreference'], QSalesTypes.MutationsearchPreferenceArgs, MeshContext>,
  /** 

Equivalent to POST /usales/emails/team-activity **/
  searchTeamActivity: InContextSdkMethod<QSalesTypes.Mutation['searchTeamActivity'], QSalesTypes.MutationsearchTeamActivityArgs, MeshContext>,
  /** 

Equivalent to POST /usales/users/search **/
  searchUsers: InContextSdkMethod<QSalesTypes.Mutation['searchUsers'], QSalesTypes.MutationsearchUsersArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/companyprofile/keyword-categ-select **/
  selectCompanyKeywordCategory: InContextSdkMethod<QSalesTypes.Mutation['selectCompanyKeywordCategory'], QSalesTypes.MutationselectCompanyKeywordCategoryArgs, MeshContext>,
  /** 

Equivalent to POST /slack/sendmessage **/
  sendMessage: InContextSdkMethod<QSalesTypes.Mutation['sendMessage'], QSalesTypes.MutationsendMessageArgs, MeshContext>,
  /** 

Equivalent to POST /usales/shares/share-clip-external **/
  shareClipExternalUser: InContextSdkMethod<QSalesTypes.Mutation['shareClipExternalUser'], QSalesTypes.MutationshareClipExternalUserArgs, MeshContext>,
  /** 

Equivalent to POST /usales/shares/share-meeting-external **/
  shareMeetingExternalUser: InContextSdkMethod<QSalesTypes.Mutation['shareMeetingExternalUser'], QSalesTypes.MutationshareMeetingExternalUserArgs, MeshContext>,
  /** 

Equivalent to POST /usales/shares/share-meeting-internal/{type} **/
  shareMeetingInternalUser: InContextSdkMethod<QSalesTypes.Mutation['shareMeetingInternalUser'], QSalesTypes.MutationshareMeetingInternalUserArgs, MeshContext>,
  /** 

Equivalent to POST /usales/shares/playlist **/
  sharePlaylist: InContextSdkMethod<QSalesTypes.Mutation['sharePlaylist'], QSalesTypes.MutationsharePlaylistArgs, MeshContext>,
  /** 

Equivalent to POST /usales/emails/threadcount **/
  threadCount: InContextSdkMethod<QSalesTypes.Mutation['threadCount'], QSalesTypes.MutationthreadCountArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/companyprofile/access-consent **/
  updateAccessConsent: InContextSdkMethod<QSalesTypes.Mutation['updateAccessConsent'], QSalesTypes.MutationupdateAccessConsentArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/account-oppty-eq **/
  updateAccountOpptyEQ: InContextSdkMethod<QSalesTypes.Mutation['updateAccountOpptyEQ'], QSalesTypes.MutationupdateAccountOpptyEQArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/account-oppty-eq-1 **/
  updateAccountOpptyEQ1: InContextSdkMethod<QSalesTypes.Mutation['updateAccountOpptyEQ1'], {}, MeshContext>,
  /** 

Equivalent to PUT /usales/alerts **/
  updateAlert: InContextSdkMethod<QSalesTypes.Mutation['updateAlert'], QSalesTypes.MutationupdateAlertArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/events **/
  updateCalendarEvent: InContextSdkMethod<QSalesTypes.Mutation['updateCalendarEvent'], QSalesTypes.MutationupdateCalendarEventArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/conv-topic-episodes **/
  updateConvTopicEpisode: InContextSdkMethod<QSalesTypes.Mutation['updateConvTopicEpisode'], QSalesTypes.MutationupdateConvTopicEpisodeArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/convs **/
  updateConversation: InContextSdkMethod<QSalesTypes.Mutation['updateConversation'], QSalesTypes.MutationupdateConversationArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/emleqs **/
  updateEmlEq: InContextSdkMethod<QSalesTypes.Mutation['updateEmlEq'], QSalesTypes.MutationupdateEmlEqArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/keymoments **/
  updateKeyMoment: InContextSdkMethod<QSalesTypes.Mutation['updateKeyMoment'], QSalesTypes.MutationupdateKeyMomentArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/playlists/media-clip-rel **/
  updatePlaylistMediaClipRel: InContextSdkMethod<QSalesTypes.Mutation['updatePlaylistMediaClipRel'], QSalesTypes.MutationupdatePlaylistMediaClipRelArgs, MeshContext>,
  /** 

Equivalent to POST /usales/users/enable **/
  updateQDetails: InContextSdkMethod<QSalesTypes.Mutation['updateQDetails'], QSalesTypes.MutationupdateQDetailsArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/keyword/tag/update-status **/
  updateStatusByIds: InContextSdkMethod<QSalesTypes.Mutation['updateStatusByIds'], QSalesTypes.MutationupdateStatusByIdsArgs, MeshContext>,
  /** 

Equivalent to PUT /auth/teams **/
  updateTeamAccess: InContextSdkMethod<QSalesTypes.Mutation['updateTeamAccess'], QSalesTypes.MutationupdateTeamAccessArgs, MeshContext>,
  /** 

Equivalent to POST /usales/users/{managerId}/team **/
  updateTeamMembersManagerDetails: InContextSdkMethod<QSalesTypes.Mutation['updateTeamMembersManagerDetails'], QSalesTypes.MutationupdateTeamMembersManagerDetailsArgs, MeshContext>,
  /** 

Equivalent to POST /usales/users/proxy **/
  updateUserProxy: InContextSdkMethod<QSalesTypes.Mutation['updateUserProxy'], QSalesTypes.MutationupdateUserProxyArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/zoommeetingwhitelist/invoke-bot **/
  updateZoomMeetingInvokeBot: InContextSdkMethod<QSalesTypes.Mutation['updateZoomMeetingInvokeBot'], QSalesTypes.MutationupdateZoomMeetingInvokeBotArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/zoommeetingwhitelist/update **/
  updateZoomMeetingWhitelist: InContextSdkMethod<QSalesTypes.Mutation['updateZoomMeetingWhitelist'], {}, MeshContext>,
  /** 

Equivalent to PUT /usales/convs/external-meeting **/
  uploadExternalMeeting: InContextSdkMethod<QSalesTypes.Mutation['uploadExternalMeeting'], QSalesTypes.MutationuploadExternalMeetingArgs, MeshContext>,
  /** 

Equivalent to POST /usales/playlists **/
  upsert: InContextSdkMethod<QSalesTypes.Mutation['upsert'], QSalesTypes.MutationupsertArgs, MeshContext>,
  /** 

Equivalent to POST /usales/playlist/param **/
  upsert1: InContextSdkMethod<QSalesTypes.Mutation['upsert1'], QSalesTypes.Mutationupsert1Args, MeshContext>,
  /** 

Equivalent to POST /usales/mediaclip **/
  upsert2: InContextSdkMethod<QSalesTypes.Mutation['upsert2'], QSalesTypes.Mutationupsert2Args, MeshContext>,
  /** 

Equivalent to POST /usales/mediaClip/param **/
  upsert3: InContextSdkMethod<QSalesTypes.Mutation['upsert3'], QSalesTypes.Mutationupsert3Args, MeshContext>,
  /** 

Equivalent to POST /usales/convs/promise **/
  upsert4: InContextSdkMethod<QSalesTypes.Mutation['upsert4'], QSalesTypes.Mutationupsert4Args, MeshContext>,
  /** 

Equivalent to POST /usales/convs/param **/
  upsert5: InContextSdkMethod<QSalesTypes.Mutation['upsert5'], QSalesTypes.Mutationupsert5Args, MeshContext>,
  /** 

Equivalent to PUT /usales/company-param **/
  upsertCompanyParam: InContextSdkMethod<QSalesTypes.Mutation['upsertCompanyParam'], QSalesTypes.MutationupsertCompanyParamArgs, MeshContext>,
  /** 

Equivalent to POST /usales/companyprofile **/
  upsertCompanyProfile: InContextSdkMethod<QSalesTypes.Mutation['upsertCompanyProfile'], QSalesTypes.MutationupsertCompanyProfileArgs, MeshContext>,
  /** 

Equivalent to POST /usales/companyprofile/businesscategs **/
  upsertCompanyProfileWithKeywordCategRel: InContextSdkMethod<QSalesTypes.Mutation['upsertCompanyProfileWithKeywordCategRel'], QSalesTypes.MutationupsertCompanyProfileWithKeywordCategRelArgs, MeshContext>,
  /** 

Equivalent to PUT /usales/configprops **/
  upsertConfigProp: InContextSdkMethod<QSalesTypes.Mutation['upsertConfigProp'], QSalesTypes.MutationupsertConfigPropArgs, MeshContext>,
  /** 

Equivalent to POST /usales/convs/{convId}/viewed **/
  upsertExternal: InContextSdkMethod<QSalesTypes.Mutation['upsertExternal'], QSalesTypes.MutationupsertExternalArgs, MeshContext>,
  /** 

Equivalent to POST /usales/playlist/param/last-viewed **/
  upsertLastViewed: InContextSdkMethod<QSalesTypes.Mutation['upsertLastViewed'], QSalesTypes.MutationupsertLastViewedArgs, MeshContext>,
  /** 

Equivalent to POST /usales/mediaClip/param/last-viewed **/
  upsertLastViewed1: InContextSdkMethod<QSalesTypes.Mutation['upsertLastViewed1'], QSalesTypes.MutationupsertLastViewed1Args, MeshContext>,
  /** 

Equivalent to POST /usales/convs/param/last-viewed **/
  upsertLastViewed2: InContextSdkMethod<QSalesTypes.Mutation['upsertLastViewed2'], QSalesTypes.MutationupsertLastViewed2Args, MeshContext>
};

export type SubscriptionQSalesSdk = {

};

export type QSalesContext = {
      ["Q-Sales"]: { Query: QueryQSalesSdk, Mutation: MutationQSalesSdk, Subscription: SubscriptionQSalesSdk },
    };

export type MeshContext = QSalesContext & BaseMeshContext;


import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { fileURLToPath } from '@graphql-mesh/utils';

const importedModules: Record<string, any> = {

};

const baseDir = pathModule.join(__dirname, '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  if (!(relativeModuleId in importedModules)) {
    throw new Error(`Cannot find module '${relativeModuleId}'.`);
  }
  return Promise.resolve(importedModules[relativeModuleId]);
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: 'ts',
}), {
  readonly: true,
  validate: false
});


                import { findAndParseConfig } from '@graphql-mesh/cli';
                function getMeshOptions() {
                  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
                  return findAndParseConfig({
                    dir: baseDir,
                    artifactsDir: ".mesh",
                    configName: "mesh",
                  });
                }
              

export const documentsInSDL = /*#__PURE__*/ [];

export async function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  const meshConfig = await getMeshOptions();
  return getMesh<MeshContext>(meshConfig);
}

export async function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const { sdkRequesterFactory } = await getBuiltMesh();
  return getSdk<TOperationContext>(sdkRequesterFactory(globalContext));
}

export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;