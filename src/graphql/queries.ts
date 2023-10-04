import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  Currency: any;
  Date: string;
  DateTime: string;
  Decimal: string;
  ImageContentType: string;
  ImageUrl: string;
  JSONObject: Record<string, unknown>;
  ObjectId: string;
  URL: string;
};

export type AcknowledgeEmailImportInput = {
  /** The publication ID for which the import has to be acknowledged. */
  publication: Scalars['ObjectId'];
};

export type AcknowledgeEmailImportPayload = {
  __typename?: 'AcknowledgeEmailImportPayload';
  /** The date the import started */
  importStartedAt: Scalars['DateTime'];
  /** The status of the import */
  status: EmailImportStatus;
};

export type ActivateFreeTrialPayload = {
  __typename?: 'ActivateFreeTrialPayload';
  user: MyUser;
};

export type AddPostToSeriesInput = {
  /** The ID of the post to be added to the series. */
  postId: Scalars['ObjectId'];
  /** The ID of the series to which the post is to be added. */
  seriesId: Scalars['ObjectId'];
};

export type AddPostToSeriesPayload = {
  __typename?: 'AddPostToSeriesPayload';
  /** The series to which the post was added. */
  series?: Maybe<Series>;
};

export type AddPublicationsToProPlanInput = {
  /**
   * The IDs of the publications to add to the pro plan.
   * Note: This does not change the pro plan subscription and thus the price.
   */
  publicationIds: Array<Scalars['ObjectId']>;
};

/** The payload for the add publications to pro plan mutation. */
export type AddPublicationsToProPlanPayload = {
  __typename?: 'AddPublicationsToProPlanPayload';
  /** The new amount of credits after assigning pro to publications. */
  newPublicationCredits: UserProPublicationCredits;
  /** The old amount credits before assigning pro to publications. */
  oldPublicationCredits: UserProPublicationCredits;
};

export type ArweaveOptionsInput = {
  /** The transaction ID of the post. */
  proofOfAuthorship?: InputMaybe<Scalars['JSONObject']>;
};

/**
 * Contains the flag indicating if the audio blog feature is enabled or not.
 * User can enable or disable the audio blog feature from the publication settings.
 * Shows audio player on blogs if enabled.
 */
export type AudioBlogFeature = Feature & {
  __typename?: 'AudioBlogFeature';
  /** A flag indicating if the audio blog feature is enabled or not. */
  isEnabled: Scalars['Boolean'];
  /** The voice type for the audio blog. */
  voiceType: AudioBlogVoiceType;
};

/** The voice type for the audio blog. */
export enum AudioBlogVoiceType {
  /** Enum for the female voice type of the audio blog. */
  Female = 'FEMALE',
  /** Enum for the male voice type of the audio blog. */
  Male = 'MALE'
}

/** Used when Audioblog feature is enabled. Contains URLs to the audioblog of the post. */
export type AudioUrls = {
  __typename?: 'AudioUrls';
  /** Female version of audio url of the post. */
  female?: Maybe<Scalars['String']>;
  /** Male version of audio url of the post. */
  male?: Maybe<Scalars['String']>;
};

/** The status of the backup i.e., success or failure. */
export enum BackupStatus {
  /** The backup failed. */
  Failed = 'failed',
  /** The backup was successful. */
  Success = 'success'
}

/** A badge that the user has earned. */
export type Badge = Node & {
  __typename?: 'Badge';
  /** The date the badge was earned. */
  dateAssigned?: Maybe<Scalars['DateTime']>;
  /** The description of the badge. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the badge. */
  id: Scalars['ID'];
  /** The image of the badge. */
  image: Scalars['String'];
  /** Link to badge page on Hashnode. */
  infoURL?: Maybe<Scalars['String']>;
  /** The name of the badge. */
  name: Scalars['String'];
  /** A flag to determine if the badge is hidden. */
  suppressed?: Maybe<Scalars['Boolean']>;
};

/**
 * Contains basic information about the beta feature.
 * A beta feature is a feature that is not yet released to all users.
 */
export type BetaFeature = Node & {
  __typename?: 'BetaFeature';
  /** The description of the beta feature. */
  description?: Maybe<Scalars['String']>;
  /** The date the beta feature was created. */
  enabled: Scalars['Boolean'];
  /** The ID of the beta feature. */
  id: Scalars['ID'];
  /** The key of the beta feature. */
  key: Scalars['String'];
  /** The title of the beta feature. */
  title?: Maybe<Scalars['String']>;
  /** The url of the beta feature. */
  url?: Maybe<Scalars['String']>;
};

/** Billing interval for which to set the pricing. */
export enum BillingInterval {
  /** Subscription is billed every month. */
  Monthly = 'MONTHLY',
  /** Subscription is billed every year. */
  Yearly = 'YEARLY'
}

export type BlogWithBetaFeatures = {
  __typename?: 'BlogWithBetaFeatures';
  /** The beta features of the blog. */
  betaFeatures: Array<BetaFeature>;
  /** The ID of the blog with beta features. */
  id: Scalars['ID'];
  /** A flag indicating whether the blog is pro. */
  isPro: Scalars['Boolean'];
  /** The photo of the blog with beta features. */
  photo: Scalars['String'];
  /** The title of the blog with beta features. */
  title: Scalars['String'];
};

export type BuyProPlanCreditsInput = {
  /** The amount of credits to buy. */
  credits: Scalars['Int'];
  /** If true, no credits will be bought. Provides a preview of the result. */
  dryRun?: InputMaybe<Scalars['Boolean']>;
};

export type BuyProPlanCreditsPayload = {
  __typename?: 'BuyProPlanCreditsPayload';
  /** The payment that the user has to make immediately. */
  immediatePayment?: Maybe<Payment>;
  /** The new amount of credits after buying. */
  newPublicationCredits: UserProPublicationCredits;
  /** The payment that the user will be charged for starting from the next billing period. */
  nextPayment: Payment;
  /** The old amount credits before buying. */
  oldPublicationCredits: UserProPublicationCredits;
};

/** The input for the calcel publication pro plan mutation. */
export type CancelPublicationsProPlanInput = {
  /** The IDs of the publications to cancel the pro plan for. */
  publicationIds: Array<Scalars['ObjectId']>;
};

/** The payload for the cancel publications pro plan mutation. */
export type CancelPublicationsProPlanPayload = {
  __typename?: 'CancelPublicationsProPlanPayload';
  publications: Array<Publication>;
};

/**
 * Contains basic information about the comment.
 * A comment is a response to a post.
 */
export type Comment = Node & {
  __typename?: 'Comment';
  /** The author of the comment. */
  author: User;
  /** The content of the comment in markdown and html format. */
  content: Content;
  /** The date the comment was created. */
  dateAdded: Scalars['DateTime'];
  /** The ID of the comment. */
  id: Scalars['ID'];
  /** Total number of reactions on the comment by the authenticated user. User must be authenticated to use this field. */
  myTotalReactions: Scalars['Int'];
  /** Returns a list of replies to the comment. */
  replies: CommentReplyConnection;
  /** A unique string identifying the comment. Used as element id in the DOM on hashnode blogs. */
  stamp?: Maybe<Scalars['String']>;
  /** Total number of reactions on the comment. Reactions are hearts added to any comment. */
  totalReactions: Scalars['Int'];
};


/**
 * Contains basic information about the comment.
 * A comment is a response to a post.
 */
export type CommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};

/**
 * Connection to get list of replies to a comment.
 * Returns a list of edges which contains the posts in publication and cursor to the last item of the previous page.
 */
export type CommentReplyConnection = Connection & {
  __typename?: 'CommentReplyConnection';
  /**
   * A list of edges containing nodes in the connection.
   * A node contains a reply to a comment.
   */
  edges: Array<CommentReplyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int'];
};

/** An edge that contains a node of type reply and cursor to the node. */
export type CommentReplyEdge = Edge & {
  __typename?: 'CommentReplyEdge';
  /** A cursor to the last item of the previous page. */
  cursor: Scalars['String'];
  /** The node containing a reply to a comment. */
  node: Reply;
};

/**
 * Connection to get list of top commenters. Contains a list of edges containing nodes.
 * Each node is a user who commented recently.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type CommenterUserConnection = Connection & {
  __typename?: 'CommenterUserConnection';
  /** A list of edges of commenters. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/**
 * Connection to get list of items.
 * Returns a list of edges which contains the items and cursor to the last item of the previous page.
 * This is a common interface for all connections.
 */
export type Connection = {
  /** A list of edges of items connection. */
  edges: Array<Edge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type Content = {
  __typename?: 'Content';
  /** The HTML version of the content. */
  html: Scalars['String'];
  /** The Markdown version of the content. */
  markdown: Scalars['String'];
  /** The text version from sanitized html content. HTML tags are stripped and only text is returned. */
  text: Scalars['String'];
};

/** Contains information about cover image options of the post. Like URL of the cover image, attribution, etc. */
export type CoverImageOptionsInput = {
  /** Information about the cover image attribution. */
  coverImageAttribution?: InputMaybe<Scalars['String']>;
  /** The name of the cover image photographer, used when cover was chosen from unsplash. */
  coverImagePhotographer?: InputMaybe<Scalars['String']>;
  /** The URL of the cover image. */
  coverImageURL?: InputMaybe<Scalars['String']>;
  /** A flag to indicate if the cover attribution is hidden, used when cover was chosen from unsplash. */
  isCoverAttributionHidden?: InputMaybe<Scalars['Boolean']>;
  /** A flag to indicate if the cover image is sticked to bottom. */
  stickCoverToBottom?: InputMaybe<Scalars['Boolean']>;
};

export type CreateImageUploadInput = {
  /**
   * The content type of the image.
   * Starts with "image/". Example: "image/png".
   */
  contentType: Scalars['ImageContentType'];
};

export type CreateImageUploadPayload = {
  __typename?: 'CreateImageUploadPayload';
  presignedPost: PresignedPost;
};

export type CreateProSubscriptionCheckoutInput = {
  billingInterval: BillingInterval;
  publicationIds?: InputMaybe<Array<Scalars['ObjectId']>>;
};

/** Returns checkout URL for the pro plan. */
export type CreateProSubscriptionCheckoutPayload = {
  __typename?: 'CreateProSubscriptionCheckoutPayload';
  /** The URL to the checkout page. */
  checkoutUrl: Scalars['String'];
};

export type CustomCss = {
  __typename?: 'CustomCSS';
  /** Custom CSS that will be applied on the publication homepage. */
  home?: Maybe<Scalars['String']>;
  /** The same as `home` but minified. */
  homeMinified?: Maybe<Scalars['String']>;
  /** Custom CSS that will be applied on all posts of the publication. */
  post?: Maybe<Scalars['String']>;
  /** The same as `post` but minified. */
  postMinified?: Maybe<Scalars['String']>;
  /** Custom CSS that will be applied on all static pages of the publication. */
  static?: Maybe<Scalars['String']>;
  /** The same as `static` but minified. */
  staticMinified?: Maybe<Scalars['String']>;
};

export type CustomCssFeature = Feature & {
  __typename?: 'CustomCSSFeature';
  /** CSS that is not published yet. */
  draft?: Maybe<CustomCss>;
  /** A flag indicating if the custom CSS feature is enabled or not. */
  isEnabled: Scalars['Boolean'];
  /** CSS that is live. */
  published?: Maybe<CustomCss>;
};

/** Contains the publication's custom CSS preferences. */
export type CustomCssPreferences = {
  __typename?: 'CustomCSSPreferences';
  /** A flag indicating if the custom CSS is enabled for the publication. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The minified version of custom CSS of the publication used in home page. */
  homeMin?: Maybe<Scalars['String']>;
  /** The minified version of custom CSS of the publication used in static pages. */
  staticMin?: Maybe<Scalars['String']>;
};

/** Contains the publication's dark mode preferences. */
export type DarkModePreferences = {
  __typename?: 'DarkModePreferences';
  /** A flag indicating if the dark mode is enabled for the publication. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The custom dark mode logo of the publication. */
  logo?: Maybe<Scalars['String']>;
};

/** Contains the publication's domain information. */
export type DomainInfo = {
  __typename?: 'DomainInfo';
  /** The domain of the publication. */
  domain?: Maybe<DomainStatus>;
  /**
   * The subdomain of the publication on hashnode.dev.
   *
   * It will redirect to you custom domain if it is present and ready.
   */
  hashnodeSubdomain?: Maybe<Scalars['String']>;
  /** The www prefixed domain of the publication. Says if redirect to www domain is configured. */
  wwwPrefixedDomain?: Maybe<DomainStatus>;
};

/** Contains the publication's domain status. */
export type DomainStatus = {
  __typename?: 'DomainStatus';
  /** The host of the publication domain. */
  host: Scalars['String'];
  /** A flag indicating if the publication domain is ready. */
  ready: Scalars['Boolean'];
};

/**
 * Contains basic information about the draft.
 * A draft is a post that is not published yet.
 */
export type Draft = Node & {
  __typename?: 'Draft';
  /** The author of the draft. */
  author?: Maybe<User>;
  /** Content of the draft in HTML and markdown */
  content?: Maybe<Content>;
  /** @deprecated Use content instead */
  contentMarkdown?: Maybe<Scalars['String']>;
  /** The cover image preference of the draft. Contains cover image URL and other details. */
  coverImage?: Maybe<DraftCoverImage>;
  /** Unique identifier for the draft. */
  cuid?: Maybe<Scalars['String']>;
  /** The date the draft was updated. */
  dateUpdated: Scalars['DateTime'];
  /** The ID of the draft. */
  id: Scalars['ID'];
  /** Information about the last backup of the draft. */
  lastBackup?: Maybe<DraftBackup>;
  /** The date the draft last failed to back up. */
  lastFailedBackupAt?: Maybe<Scalars['DateTime']>;
  /** The date the draft was last successfully backed up. */
  lastSuccessfulBackupAt?: Maybe<Scalars['DateTime']>;
  /** Returns list of tags added to the draft. Contains tag id, name, slug, etc. */
  tags: Array<Tag>;
  /** The title of the draft. It would become the title of the post when published. */
  title?: Maybe<Scalars['String']>;
};

export type DraftBackup = {
  __typename?: 'DraftBackup';
  /** The date the backup was created. */
  at?: Maybe<Scalars['DateTime']>;
  /** The status of the backup i.e., success or failure. */
  status?: Maybe<BackupStatus>;
};

/**
 * Connection to get list of drafts.
 * Returns a list of edges which contains the draft and cursor to the last item of the previous page.
 */
export type DraftConnection = Connection & {
  __typename?: 'DraftConnection';
  /** A list of edges of drafts connection. */
  edges: Array<DraftEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int'];
};

/** Contains information about the cover image of the draft. */
export type DraftCoverImage = {
  __typename?: 'DraftCoverImage';
  /** The URL of the cover image. */
  url: Scalars['String'];
};

/** An edge that contains a node of type draft and cursor to the node. */
export type DraftEdge = Edge & {
  __typename?: 'DraftEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** A node in the connection containing a draft. */
  node: Draft;
};

/** Contains the publication's draft count. */
export type DraftsInformation = {
  __typename?: 'DraftsInformation';
  /** The number of drafts in the publication. */
  total: Scalars['Int'];
};

/**
 * An edge that contains a node and cursor to the node.
 * This is a common interface for all edges.
 */
export type Edge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** A node in the connection. */
  node: Node;
};

/** The input for the email import acknowledgement mutation. */
export type EmailCurrentImport = {
  __typename?: 'EmailCurrentImport';
  /** The number of subscribers that have attempted to import */
  attemptedToImport?: Maybe<Scalars['Int']>;
  /** The filename of the csv file containing emails */
  filename?: Maybe<Scalars['String']>;
  /** The date the import started */
  importStartedAt: Scalars['DateTime'];
  /** The status of the import */
  status: EmailImportStatus;
  /** The number of subscribers that have been successfully imported */
  successfullyImported?: Maybe<Scalars['Int']>;
};

/** Contains information about the email import. */
export type EmailImport = {
  __typename?: 'EmailImport';
  /** Contains information about the current import example if it is in progress or has finished, date started, etc */
  currentImport?: Maybe<EmailCurrentImport>;
};

/** The status of the email import. */
export enum EmailImportStatus {
  /** There was an error during the import. */
  Failed = 'FAILED',
  /** The import has been acknowledged by the user. */
  Finished = 'FINISHED',
  /** Import has been initialized but is not yet in progress. */
  Initialized = 'INITIALIZED',
  /** Import is in progress. */
  InProgress = 'IN_PROGRESS',
  /** Import has to be reviewed by Hashnode. It is not yet reviewed. */
  InReview = 'IN_REVIEW',
  /** The has been rejected. Nothing has been imported. */
  Rejected = 'REJECTED',
  /** Import was successful. New emails have been imported. */
  Success = 'SUCCESS'
}

/** Common fields that describe a feature. */
export type Feature = {
  /** Whether the feature is enabled or not. */
  isEnabled: Scalars['Boolean'];
};

export type FeedFilter = {
  /** Adds a filter to return posts with maximum number of minutes required to read the post. */
  maxReadTime?: InputMaybe<Scalars['Int']>;
  /** Adds a filter to return posts with minimum number of minutes required to read the post. */
  minReadTime?: InputMaybe<Scalars['Int']>;
  /** Adds a filter to return posts with tagged with provided tags only. */
  tags?: InputMaybe<Array<Scalars['ObjectId']>>;
  /** The type of feed to be returned. */
  type?: InputMaybe<FeedType>;
};

/**
 * Connection for posts within a feed. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type FeedPostConnection = Connection & {
  __typename?: 'FeedPostConnection';
  /** A list of edges containing Post information */
  edges: Array<PostEdge>;
  /** Information for pagination in Post connection. */
  pageInfo: PageInfo;
};

/** Contains information about type of feed to be returned. */
export enum FeedType {
  /** Returns posts which were bookmarked by the user, sorted based on recency. */
  Bookmarks = 'BOOKMARKS',
  /** Returns posts which were featured, sorted based on recency. */
  Featured = 'FEATURED',
  /**
   * Returns only posts of the users you follow or publications you have subscribed to.
   *
   * Note: You have to be authenticated to use this feed type.
   */
  Following = 'FOLLOWING',
  /**
   * Returns only posts based on users following and interactions.
   *
   * Personalised feed is curated per requesting user basis.
   */
  Personalized = 'PERSONALIZED',
  /** Returns posts which were published recently, sorted based on recency. */
  Recent = 'RECENT',
  /** Returns posts based on old personalization algorithm. */
  Relevant = 'RELEVANT'
}

export type FreeTrialInfo = {
  __typename?: 'FreeTrialInfo';
  /**
   * The date the free trial will end or has ended.
   * If no value is returned, the free trial was not yet activated
   */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** Indicates if the user has access to pro features within the free trial period. */
  hasFreeTrialAccess: Scalars['Boolean'];
  /**
   * The date the free trial was started.
   * If no value is returned, the free trial was not yet activated
   */
  startedAt?: Maybe<Scalars['DateTime']>;
};

export enum HttpRedirectionType {
  /** A permanent redirect that corresponds to the 308 HTTP status code. */
  Permanent = 'PERMANENT',
  /** A temporary redirect that corresponds to the 307 HTTP status code. */
  Temporary = 'TEMPORARY'
}

/**
 * Contains basic information about the tag.
 * A tag is a label that categorizes posts with similar topics.
 */
export type ITag = {
  /** Total number of users following this tag. */
  followersCount: Scalars['Int'];
  /** The ID of the tag. */
  id: Scalars['ID'];
  /** Information about the tag. Contains markdown html and text version of the tag's info. */
  info?: Maybe<Content>;
  /** The logo of the tag. Shown in tag page. */
  logo?: Maybe<Scalars['String']>;
  /** The name of the tag. Shown in tag page. */
  name: Scalars['String'];
  /** Alltime usage count of this tag in posts. */
  postsCount: Scalars['Int'];
  /** The slug of the tag. Used to access tags feed.  Example https://hashnode.com/n/graphql */
  slug: Scalars['String'];
  /** The tagline of the tag. */
  tagline?: Maybe<Scalars['String']>;
};

/** Basic information about a user on Hashnode. */
export type IUser = {
  /** Whether or not the user is an ambassador. */
  ambassador: Scalars['Boolean'];
  /** The availability of the user based on tech stack and interests. Shown on the "I am available for" section in user's profile. */
  availableFor?: Maybe<Scalars['String']>;
  /** Returns a list of badges that the user has earned. Shown on blogs /badges page. Example - https://iamshadmirza.com/badges */
  badges: Array<Badge>;
  /**
   * The bio of the user. Visible in about me section of the user's profile.
   * @deprecated Will be removed on 18/09/2023. Use bioV2 instead of bio.
   */
  bio?: Maybe<Scalars['String']>;
  /** The bio of the user. Visible in about me section of the user's profile. */
  bioV2?: Maybe<Content>;
  /**
   * The URL to the cover photo of the user's profile.
   * @deprecated Cover images are not part of user's profile anymore. Will be removed on 25/09/2023.
   */
  coverPhoto?: Maybe<Scalars['String']>;
  /** The date the user joined Hashnode. */
  dateJoined?: Maybe<Scalars['DateTime']>;
  /** Whether or not the user is deactivated. Only available to the authenticated user. */
  deactivated: Scalars['Boolean'];
  /** The number of users that follow the requested user. Visible in the user's profile. */
  followersCount: Scalars['Int'];
  /** The number of users that this user is following. Visible in the user's profile. */
  followingsCount: Scalars['Int'];
  /** The ID of the user. It can be used to identify the user. */
  id: Scalars['ID'];
  /** The location of the user. */
  location?: Maybe<Scalars['String']>;
  /** The name of the user. */
  name: Scalars['String'];
  /** The URL to the profile picture of the user. */
  profilePicture?: Maybe<Scalars['String']>;
  /** Publications associated with the user. Includes personal and team publications. */
  publications: UserPublicationsConnection;
  /** The social media links of the user. Shown on the user's profile. */
  socialMediaLinks?: Maybe<SocialMediaLinks>;
  /** The tagline of the user. Shown on the user's profile below the name. */
  tagline?: Maybe<Scalars['String']>;
  /** Returns a list of tags that the user follows. */
  tagsFollowing: Array<Tag>;
  /** The username of the user. It is unique and tied with user's profile URL. Example - https://hashnode.com/@username */
  username: Scalars['String'];
};


/** Basic information about a user on Hashnode. */
export type IUserPublicationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserPublicationsConnectionFilter>;
  first: Scalars['Int'];
};

/** The input for the email import subscription mutation. */
export type ImportSubscribersInput = {
  /** The content of the csv file */
  csvContent: Scalars['String'];
  /** The filename of the csv file */
  filename: Scalars['String'];
  /** The publication ID for which the import has to be acknowledged. */
  publication: Scalars['ObjectId'];
};

/** Contains information about meta tags of the post. Used for SEO purpose. */
export type MetaTagsInput = {
  /** The description of the post used in og:description for SEO. */
  description?: InputMaybe<Scalars['String']>;
  /** The image URL of the post used in og:image for SEO. */
  image?: InputMaybe<Scalars['String']>;
  /** The title of the post used in og:title for SEO. */
  title?: InputMaybe<Scalars['String']>;
};

/**
 * Money is a scalar type that represents a monetary value.
 * This is used in pro plan.
 */
export type Money = {
  __typename?: 'Money';
  /** The amount of money. */
  amount: Scalars['Decimal'];
  /** The currency code of the money. */
  currencyCode: Scalars['Currency'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  acknowledgeEmailImport: AcknowledgeEmailImportPayload;
  /** Activates the free AI trial for the user. */
  activateFreeTrial: ActivateFreeTrialPayload;
  /** Adds a post to a series. */
  addPostToSeries: AddPostToSeriesPayload;
  /**
   * Adds publications to an existing pro plan of the user making the request.
   * The user must have enough credits to add the publications.
   */
  addPublicationsToProPlan: AddPublicationsToProPlanPayload;
  /**
   * Adds additional credits to the user's pro subscription.
   * This mutation is only available to users with an active pro plan.
   * **Warning:** This changes the amount charged to the user.
   */
  buyProPlanCredits: BuyProPlanCreditsPayload;
  /** Schedules a cancelation of the publications pro plan to the end of the billing period. */
  cancelPublicationsProPlan: CancelPublicationsProPlanPayload;
  /** Returns PresignedPost which contains a signed image upload URL. This URL can be used to upload images to Hashnode's S3 bucket. */
  createImageUploadURL: CreateImageUploadPayload;
  /**
   * Initially sign up for a pro plan.
   * Creates a checkout session that results in a pro plan subscription after success.
   */
  createProSubscriptionCheckout: CreateProSubscriptionCheckoutPayload;
  importSubscribers: NewsletterSubscriberPayload;
  /**
   * Creates a new post.
   * @deprecated Use `publishPost` instead. This mutation will be removed on 05/10/2023
   */
  postPublish?: Maybe<Post>;
  /** Creates a new post. */
  publishPost?: Maybe<PublishPostPayload>;
  recommendPublications: RecommendPublicationsPayload;
  removeRecommendation: RemoveRecommendationPayload;
  /** Reschedule a post. */
  reschedulePost?: Maybe<ScheduledPostPayload>;
  signUpUser: SignUpUserPayload;
  subscribeToNewsletter: SubscribeToNewsletterPayload;
  toggleBlogBetaFeature: ToggleBlogBetaFeaturePayload;
  /**
   * Update the follow state for the user that is provided via id or username.
   * If the authenticated user does not follow the user, the mutation will follow the user.
   * If the authenticated user already follows the user, the mutation will un-follow the user.
   * Only available to the authenticated user.
   */
  toggleFollowUser: ToggleFollowUserPayload;
  /** @deprecated Use toggleFollowUser instead. */
  toggleFollowingUserById: User;
  /** @deprecated Use toggleFollowUser instead. */
  toggleFollowingUserByUsername: User;
  toggleRecommendationFeature: ToggleRecommendationFeaturePayload;
  toggleRecommendationStatus: ToggleRecommendationStatusPayload;
  toggleUserBetaFeature: ToggleUserBetaFeaturePayload;
  unsubscribeFromNewsletter: UnsubscribeFromNewsletterPayload;
  /**
   * Upload an image by URL.
   * @deprecated Will be removed on 25/09/2023. Use `PresignedPost.uploadImageByURLV2` instead.
   */
  uploadImageByURL: Scalars['String'];
  /** Upload an image by URL. */
  uploadImageByURLV2: UploadImagePayload;
};


export type MutationAcknowledgeEmailImportArgs = {
  input: AcknowledgeEmailImportInput;
};


export type MutationAddPostToSeriesArgs = {
  input: AddPostToSeriesInput;
};


export type MutationAddPublicationsToProPlanArgs = {
  input: AddPublicationsToProPlanInput;
};


export type MutationBuyProPlanCreditsArgs = {
  input: BuyProPlanCreditsInput;
};


export type MutationCancelPublicationsProPlanArgs = {
  input: CancelPublicationsProPlanInput;
};


export type MutationCreateImageUploadUrlArgs = {
  input: CreateImageUploadInput;
};


export type MutationCreateProSubscriptionCheckoutArgs = {
  input: CreateProSubscriptionCheckoutInput;
};


export type MutationImportSubscribersArgs = {
  input: ImportSubscribersInput;
};


export type MutationPostPublishArgs = {
  draftId: Scalars['ObjectId'];
  postPublishOptions: PostPublishInput;
  scheduled?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishPostArgs = {
  input: PublishPostInput;
};


export type MutationRecommendPublicationsArgs = {
  input: RecommendPublicationsInput;
};


export type MutationRemoveRecommendationArgs = {
  input: RemoveRecommendationInput;
};


export type MutationReschedulePostArgs = {
  input: ReschedulePostInput;
};


export type MutationSignUpUserArgs = {
  input: SignUpUserInput;
};


export type MutationSubscribeToNewsletterArgs = {
  input: SubscribeToNewsletterInput;
};


export type MutationToggleBlogBetaFeatureArgs = {
  input: ToggleBlogBetaFeatureInput;
};


export type MutationToggleFollowUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationToggleFollowingUserByIdArgs = {
  userId: Scalars['ID'];
};


export type MutationToggleFollowingUserByUsernameArgs = {
  username: Scalars['String'];
};


export type MutationToggleRecommendationFeatureArgs = {
  input: ToggleRecommendationFeatureInput;
};


export type MutationToggleRecommendationStatusArgs = {
  input: ToggleRecommendationStatusInput;
};


export type MutationToggleUserBetaFeatureArgs = {
  input: ToggleUserBetaFeatureInput;
};


export type MutationUnsubscribeFromNewsletterArgs = {
  input: UnsubscribeFromNewsletterInput;
};


export type MutationUploadImageByUrlArgs = {
  unsplashImageId?: InputMaybe<Scalars['String']>;
  url: Scalars['ImageUrl'];
};


export type MutationUploadImageByUrlv2Args = {
  input: UploadImageInput;
};

/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type MyUser = IUser & Node & {
  __typename?: 'MyUser';
  /**
   * Whether or not the user is an ambassador.
   * @deprecated Ambassadors program no longer active
   */
  ambassador: Scalars['Boolean'];
  /** The availability of the user based on tech stack and interests. Shown on the "I am available for" section in user's profile. */
  availableFor?: Maybe<Scalars['String']>;
  /** Returns a list of badges that the user has earned. Shown on blogs /badges page. Example - https://iamshadmirza.com/badges */
  badges: Array<Badge>;
  /** A list of beta features that the user has access to. Only available to the authenticated user. */
  betaFeatures: Array<BetaFeature>;
  /**
   * The bio of the user. Visible in about me section of the user's profile.
   * @deprecated Will be removed on 18/09/2023. Use bioV2 instead of bio.
   */
  bio?: Maybe<Scalars['String']>;
  /** The bio of the user. Visible in about me section of the user's profile. */
  bioV2?: Maybe<Content>;
  /**
   * The URL to the cover photo of the user's profile.
   * @deprecated Cover images are not part of user's profile anymore. Will be removed on 25/09/2023.
   */
  coverPhoto?: Maybe<Scalars['String']>;
  /** The date the user joined Hashnode. */
  dateJoined?: Maybe<Scalars['DateTime']>;
  /** Whether or not the user is deactivated. */
  deactivated: Scalars['Boolean'];
  /** Email address of the user. Only available to the authenticated user. */
  email?: Maybe<Scalars['String']>;
  /** The number of users that follow the requested user. Visible in the user's profile. */
  followersCount: Scalars['Int'];
  /** The number of users that this user is following. Visible in the user's profile. */
  followingsCount: Scalars['Int'];
  /** Information about the user's free trial. User can try ai features for 3 days before subscribing. Checkout https://hashnode.com/ai for more information. */
  freeTrial: FreeTrialInfo;
  /** The ID of the user. It can be used to identify the user. */
  id: Scalars['ID'];
  /** The location of the user. */
  location?: Maybe<Scalars['String']>;
  /** The name of the user. */
  name: Scalars['String'];
  /** Information about your pro plan. Checkout https://hashnode.com/pro for more information. */
  pro?: Maybe<UserProInfo>;
  /** The URL to the profile picture of the user. */
  profilePicture?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  /** Publications associated with the user. Includes personal and team publications. */
  publications: UserPublicationsConnection;
  /** The social media links of the user. Shown on the user's profile. */
  socialMediaLinks?: Maybe<SocialMediaLinks>;
  /** The tagline of the user. Shown on the user's profile below the name. */
  tagline?: Maybe<Scalars['String']>;
  /** Returns a list of tags that the user follows. */
  tagsFollowing: Array<Tag>;
  /** Hashnode users are subscribed to a newsletter by default. This field can be used to unsubscribe from the newsletter. Only available to the authenticated user. */
  unsubscribeCode?: Maybe<Scalars['String']>;
  /** The username of the user. It is unique and tied with user's profile URL. Example - https://hashnode.com/@username */
  username: Scalars['String'];
};


/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type MyUserPublicationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserPublicationsConnectionFilter>;
  first: Scalars['Int'];
};

/**
 * Contains the flag indicating if the newsletter feature is enabled or not.
 * User can enable or disable the newsletter feature from the publication settings.
 * Shows a newsletter prompt on blog if enabled.
 */
export type NewsletterFeature = Feature & {
  __typename?: 'NewsletterFeature';
  frequency?: Maybe<NewsletterFrequency>;
  /** A flag indicating if the newsletter feature is enabled or not. */
  isEnabled: Scalars['Boolean'];
};

export enum NewsletterFrequency {
  Asap = 'asap',
  Weekly = 'weekly'
}

export enum NewsletterSubscribeStatus {
  Pending = 'PENDING'
}

/** The payload for the newsletter subscriber import. */
export type NewsletterSubscriberPayload = {
  __typename?: 'NewsletterSubscriberPayload';
  /** Information about the newsletter subscriber imports */
  status: EmailImportStatus;
};

export enum NewsletterUnsubscribeStatus {
  Unsubscribed = 'UNSUBSCRIBED'
}

/** Node is a common interface for all types example User, Post, Comment, etc. */
export type Node = {
  /** The ID of the node. */
  id: Scalars['ID'];
};

/** Information to help in open graph related meta tags. */
export type OpenGraphMetaData = {
  __typename?: 'OpenGraphMetaData';
  /** The image used in og:image tag for SEO purposes. */
  image?: Maybe<Scalars['String']>;
};

/** Contains information to help in pagination. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /**
   * The cursor of the last item in the current page.
   * Use it as the after input to query the next page.
   */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates if there are more pages. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

/**
 * Contains the preferences publication's autogenerated pages.
 * Used to enable or disable pages like badge, newsletter and members.
 */
export type PagesPreferences = {
  __typename?: 'PagesPreferences';
  /** A flag indicating if the publication's badge page is enabled. */
  badges?: Maybe<Scalars['Boolean']>;
  /** A flag indicating if the publication's member page is enabled. */
  members?: Maybe<Scalars['Boolean']>;
  /** A flag indicating if the publication's newsletter page is enabled. */
  newsletter?: Maybe<Scalars['Boolean']>;
};

/** Specified payment information. */
export type Payment = {
  __typename?: 'Payment';
  /** The date the payment was or will be made. */
  date: Scalars['Date'];
  /** The total amount of the payment including taxes. */
  total: Money;
};

/** The period for which to retrieve popular tags. */
export enum Period {
  /** Included all the record since the beginning. */
  AllTime = 'AllTime',
  /** The last 30 days. */
  Month = 'Month',
  /** The last 7 days. */
  Week = 'Week'
}

/** Contains basic information about the tag returned by popularTags query. */
export type PopularTag = ITag & Node & {
  __typename?: 'PopularTag';
  /** Total number of users following this tag. */
  followersCount: Scalars['Int'];
  /** The ID of the tag. */
  id: Scalars['ID'];
  /** Information about the tag. Contains markdown html and text version of the tag's info. */
  info?: Maybe<Content>;
  /** The logo of the tag. Shown in tag page. */
  logo?: Maybe<Scalars['String']>;
  /** The name of the tag. Shown in tag page. */
  name: Scalars['String'];
  /** Alltime usage count of this tag in posts. */
  postsCount: Scalars['Int'];
  /** The number of posts published in the given period that use this tag. */
  postsCountInPeriod: Scalars['Int'];
  /** The slug of the tag. Used to access tags feed.  Example https://hashnode.com/n/graphql */
  slug: Scalars['String'];
  /** The tagline of the tag. */
  tagline?: Maybe<Scalars['String']>;
};

/** Contains a tag and a cursor for pagination. */
export type PopularTagEdge = Edge & {
  __typename?: 'PopularTagEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The node holding the Tag information */
  node: PopularTag;
};

/**
 * Connection for tags popular in given time frame. Contains a list of edges containing nodes.
 * Each node is a tag.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type PopularTagsConnection = Connection & {
  __typename?: 'PopularTagsConnection';
  /** A list of edges containing Tag information */
  edges: Array<PopularTagEdge>;
  /** Information for pagination in popular Tags connection. */
  pageInfo: PageInfo;
};

export type PopularTagsFilter = {
  /**
   * Determinate how to sort the results. Defaults to posts
   * This will only be applied to Period = AllTime
   */
  sortBy?: InputMaybe<PopularTagsSort>;
};

export type PopularTagsFilterV2 = {
  /** The period for which to retrieve popular tags. Defaults to Week. */
  period?: InputMaybe<Period>;
  /**
   * Determinate how to sort the results. Defaults to posts
   * This will only be applied to Period = AllTime
   */
  sortBy?: InputMaybe<PopularTagsSort>;
};

/** The field by which to sort the popular tags. */
export enum PopularTagsSort {
  /** Sorts by followers, used in Trending tag feed. */
  Followers = 'followers',
  /** Sorts by popularity, used in Hot tag feed. */
  Posts = 'posts'
}

/**
 * Contains basic information about the post.
 * A post is a published article on Hashnode.
 */
export type Post = Node & {
  __typename?: 'Post';
  /** Returns male and female audio url of the post. Available in case the Audioblog is enabled. */
  audioUrls?: Maybe<AudioUrls>;
  /** Returns the user details of the author of the post. */
  author: User;
  /** Flag to indicate if the post is bookmarked by the requesting user. Returns false if the user is not authenticated. */
  bookmarked: Scalars['Boolean'];
  /** Brief is a short description of the post extracted from the content of the post. It's 250 characters long sanitized string. */
  brief?: Maybe<Scalars['String']>;
  /** Canonical URL set by author in case of republished posts. */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** List of users who have commented on the post. */
  commenters: PostCommenterConnection;
  /** A list of comments on the post. */
  comments: PostCommentConnection;
  /** Content of the post. Contains HTML and Markdown version of the post content. */
  content: Content;
  /**
   * A list of contributors of the post. Contributors are users who have commented or replied to the post.
   * @deprecated Will be removed on 10th Oct 2023. Use `commenters` instead.
   */
  contributors: Array<User>;
  /** The cover image preference of the post. Contains cover image URL and other details. */
  coverImage?: Maybe<PostCoverImage>;
  /** Unique ID to identify post, used internally by hashnode. */
  cuid?: Maybe<Scalars['String']>;
  /** Flag to indicate if the post is featured on Hashnode feed. */
  featured: Scalars['Boolean'];
  /** The date and time the post was featured. Used along with featured flag to determine if the post is featured. */
  featuredAt?: Maybe<Scalars['DateTime']>;
  /** A flag to indicate if the post contains LaTeX. Latex is used to write mathematical equations. */
  hasLatexInPost: Scalars['Boolean'];
  /** The ID of the post. Used to uniquely identify the post. */
  id: Scalars['ID'];
  /** A list of users who liked the post. */
  likedBy: PostLikerConnection;
  /** Og Meta data of the post. Contains image url used in open graph meta tags. */
  ogMetaData?: Maybe<OpenGraphMetaData>;
  /** Preference settings for the post. Contains information about if the post is pinned to blog, comments are disabled, etc. */
  preferences: PostPreferences;
  /** The publication the post belongs to. */
  publication?: Maybe<Publication>;
  /** The date and time the post was published. */
  publishedAt: Scalars['DateTime'];
  /** The number of hearts on the post. Shows how many users liked the post. */
  reactionCount: Scalars['Int'];
  /** The estimated time to read the post in minutes. */
  readTimeInMinutes: Scalars['Int'];
  /** The number of replies on the post. */
  replyCount: Scalars['Int'];
  /** The number of comments on the post. */
  responseCount: Scalars['Int'];
  /** SEO information of the post. Contains title and description used in meta tags. */
  seo?: Maybe<Seo>;
  /** Information of the series the post belongs to. */
  series?: Maybe<Series>;
  /** The slug of the post. Used as address of the post on blog. Example - https://johndoe.com/my-post-slug */
  slug: Scalars['String'];
  /** The subtitle of the post. Subtitle is a short description of the post which is also used in SEO if meta tags are not provided. */
  subtitle?: Maybe<Scalars['String']>;
  /** Returns list of tags added to the post. Contains tag id, name, slug, etc. */
  tags?: Maybe<Array<Tag>>;
  /** The title of the post. */
  title: Scalars['String'];
  /** The date and time the post was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Complete URL of the post including the domain name. Example - https://johndoe.com/my-post-slug */
  url?: Maybe<Scalars['String']>;
  /** The number of views on the post. Can be used to show the popularity of the post. */
  views: Scalars['Int'];
};


/**
 * Contains basic information about the post.
 * A post is a published article on Hashnode.
 */
export type PostCommentersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  sortBy?: InputMaybe<PostCommenterSortBy>;
};


/**
 * Contains basic information about the post.
 * A post is a published article on Hashnode.
 */
export type PostCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  sortBy?: InputMaybe<PostCommentSortBy>;
};


/**
 * Contains basic information about the post.
 * A post is a published article on Hashnode.
 */
export type PostLikedByArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};

/**
 * Connection for comments. Contains a list of edges containing nodes.
 * Each node holds a comment.
 * Page info contains information about pagination like hasNextPage and endCursor.
 * Total documents contains the total number of comments.
 */
export type PostCommentConnection = Connection & {
  __typename?: 'PostCommentConnection';
  /** A list of edges containing comments as nodes. */
  edges: Array<PostCommentEdge>;
  /** Information about pagination in a connection. */
  pageInfo: PageInfo;
  /** Total number of nodes available i.e. number of comments. */
  totalDocuments: Scalars['Int'];
};

/** A comment on the post. Contains information about the content of the comment, user who commented, etc. */
export type PostCommentEdge = Edge & {
  __typename?: 'PostCommentEdge';
  /** The cursor for this node used for pagination. */
  cursor: Scalars['String'];
  /** The comment on the post. */
  node: Comment;
};

/** Sorting options for comments. Used to sort comments by top or recent. */
export enum PostCommentSortBy {
  /** Sorts comments by recency. */
  Recent = 'RECENT',
  /** Sorts comments by popularity. */
  Top = 'TOP'
}

/**
 * Connection for commenters (users). Contains a list of edges containing nodes.
 * Each node holds commenter.
 * Page info contains information about pagination like hasNextPage and endCursor.
 * Total documents contains the total number of commenters.
 */
export type PostCommenterConnection = Connection & {
  __typename?: 'PostCommenterConnection';
  /** A list of edges containing commenters as nodes. */
  edges: Array<PostCommenterEdge>;
  /** Information about pagination in a connection. */
  pageInfo: PageInfo;
  /** Total number of nodes available i.e. number of commenters. */
  totalDocuments: Scalars['Int'];
};

/** A commenter on the post. Contains information about the user who commented. */
export type PostCommenterEdge = Edge & {
  __typename?: 'PostCommenterEdge';
  /** The cursor for this node used for pagination. */
  cursor: Scalars['String'];
  /** The commenter on the post. */
  node: User;
};

/** Sorting options for commenters. Used to sort commenters by popularity or recency. */
export enum PostCommenterSortBy {
  /** Sorts commenters by popularity. */
  Popular = 'POPULAR',
  /** Sorts commenters by recency. */
  Recent = 'RECENT'
}

/** Contains information about the cover image of the post. */
export type PostCoverImage = {
  __typename?: 'PostCoverImage';
  /** The URL of the cover image thumbnail. */
  isPortrait: Scalars['Boolean'];
  /** The URL of the cover image. */
  url: Scalars['String'];
};

/** Contains a post and a cursor for pagination. */
export type PostEdge = Edge & {
  __typename?: 'PostEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The node holding the Post information */
  node: Post;
};

/**
 * Connection for users who liked the post. Contains a list of edges containing nodes.
 * Each node is a user who liked the post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 * Total documents contains the total number of users who liked the post.
 */
export type PostLikerConnection = Connection & {
  __typename?: 'PostLikerConnection';
  /** A list of edges containing users as nodes */
  edges: Array<PostLikerEdge>;
  /** Information about pagination in a connection. */
  pageInfo: PageInfo;
  /** Total number of nodes available i.e. number of users who liked the post. */
  totalDocuments: Scalars['Int'];
};

/** A user who liked the post. Contains information about the user and number of reactions added by the user. */
export type PostLikerEdge = Edge & {
  __typename?: 'PostLikerEdge';
  /** The cursor for this node used for pagination. */
  cursor: Scalars['String'];
  /** The user who liked the post. */
  node: User;
  /** The number of reaction added by the user. */
  reactionCount: Scalars['Int'];
};

/** Contains Post preferences. Used to determine if the post is pinned to blog, comments are disabled, or cover image is sticked to bottom. */
export type PostPreferences = {
  __typename?: 'PostPreferences';
  /** A flag to indicate if the comments are disabled for the post. */
  disableComments: Scalars['Boolean'];
  /** A flag to indicate if the post is pinned to blog. Pinned post is shown on top of the blog. */
  pinnedToBlog: Scalars['Boolean'];
  /** A flag to indicate if the cover image is shown below title of the post. Default position of cover is top of title. */
  stickCoverToBottom: Scalars['Boolean'];
};

/** Contains information about the post to be published. */
export type PostPublishInput = {
  /** Options for the arweave transaction of the post. */
  arweaveOptions?: InputMaybe<ArweaveOptionsInput>;
  /** Content of the post in markdown format. */
  contentMarkdown: Scalars['String'];
  /** Options for the cover image of the post. */
  coverImageOptions?: InputMaybe<CoverImageOptionsInput>;
  /** A flag to indicate if the post is delisted, used to hide the post from public feed. */
  delisted?: InputMaybe<Scalars['Boolean']>;
  /** A flag to indicate if the comments are disabled for the post. */
  disableComments?: InputMaybe<Scalars['Boolean']>;
  /** A flag to indicate if the post contains table of content */
  enableTableOfContent?: InputMaybe<Scalars['Boolean']>;
  /** Wether to send a newsletter for this post. */
  isNewsletterActivated?: InputMaybe<Scalars['Boolean']>;
  /** Information about the meta tags added to the post, used for SEO purpose. */
  metaTags?: InputMaybe<MetaTagsInput>;
  /** The URL of the original article if the post is imported from an external source. */
  originalArticleURL?: InputMaybe<Scalars['String']>;
  /** The ID of publication the post belongs to. */
  publicationId: Scalars['ObjectId'];
  /**
   * Publish the post on behalf of another user who is a member of the publication.
   *
   * Only applicable for team publications.
   */
  publishAs?: InputMaybe<Scalars['ObjectId']>;
  /** Date when the post is published. */
  publishDate?: InputMaybe<Scalars['DateTime']>;
  /** Providing a seriesId will add the post to that series. */
  seriesId?: InputMaybe<Scalars['ObjectId']>;
  /** Slug of the post. */
  slug?: InputMaybe<Scalars['String']>;
  /** Flag to indicate if the slug is overridden by the user. */
  slugOverridden?: InputMaybe<Scalars['Boolean']>;
  /** The subtitle of the post. */
  subtitle?: InputMaybe<Scalars['String']>;
  /** A list of tags added to the post. */
  tags: Array<PostPublishTagInput>;
  /** The title of the post. */
  title: Scalars['String'];
};

export type PostPublishTagInput = {
  /**
   * A tag id that is referencing an existing tag.
   *
   * Either this or name and slug should be provided. If both are provided, the id will be used.
   */
  id?: InputMaybe<Scalars['ObjectId']>;
  /**
   * A name of a new tag to create.
   *
   * Either this and slug or id should be provided. If both are provided, the id will be used.
   */
  name?: InputMaybe<Scalars['String']>;
  /**
   * A slug of a new tag to create.
   *
   * Either this and name or id should be provided. If both are provided, the id will be used.
   */
  slug?: InputMaybe<Scalars['String']>;
};

/** Contains the publication's preferences for layout, theme and other personalisations. */
export type Preferences = {
  __typename?: 'Preferences';
  /**
   * The publication's custom CSS preferences. Can be used to add custom CSS to the blog.
   * @deprecated Use `features.customCSS.published` instead.
   */
  customCSS?: Maybe<CustomCssPreferences>;
  /**
   * The publication's custom CSS preference draft. Used to save custom CSS till they are published.
   * @deprecated Use `features.customCSS.draft` instead.
   */
  customCSSDraft?: Maybe<CustomCssPreferences>;
  /** The publication's darkmode preferences. Can be used to load blog in dark mode by default and add a custom dark mode logo. */
  darkMode?: Maybe<DarkModePreferences>;
  /** A flag indicating if the hashnode's footer branding is disabled for the publication. */
  disableFooterBranding?: Maybe<Scalars['Boolean']>;
  /** An object containing pages enabled for the publication. */
  enabledPages?: Maybe<PagesPreferences>;
  /** The selected publication's layout, can be stacked, grid or magazine. */
  layout?: Maybe<PublicationLayout>;
  /** The publication's logo url. */
  logo?: Maybe<Scalars['String']>;
  /** The items in the publication's navigation bar. */
  navbarItems: Array<PublicationNavbarItem>;
};

/** Contains signing information about the image upload. */
export type PresignedPost = {
  __typename?: 'PresignedPost';
  /** The fields to include in the POST request. */
  fields: Scalars['JSONObject'];
  /** The Presigned URL to upload the image to. */
  url: Scalars['String'];
};

export type Price = {
  __typename?: 'Price';
  /** Price with taxes. */
  gross: Money;
  /** Price without taxes. */
  net: Money;
  /** The tax amount. */
  tax: Money;
};

export type ProPricing = {
  __typename?: 'ProPricing';
  /** Price for each additional publication added to the pro plan. */
  addOn: Price;
  /** Price of the base pro plan. */
  base: Price;
};

export type ProPricingInput = {
  /** The billing interval for which to get the pricing. */
  billingInterval: BillingInterval;
  /** Provide the two character ISO country code in order to be able to get the pricing with taxes. */
  countryCode?: InputMaybe<Scalars['String']>;
  /** The coupon code to apply to the pricing, used to get discount during checkout. */
  couponCode?: InputMaybe<Scalars['String']>;
};

/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type Publication = Node & {
  __typename?: 'Publication';
  /** The about section of the publication. */
  about?: Maybe<Content>;
  /** Is the recommendations feature enabled on this publication */
  areRecommendationsEnabled: Scalars['Boolean'];
  /** The author who owns the publication. */
  author: User;
  /** The canonical URL of the publication. */
  canonicalURL: Scalars['String'];
  /** The description of the publication, used in og:description meta tag. */
  descriptionSEO?: Maybe<Scalars['String']>;
  /** The title of the publication. Shown in blog home page. */
  displayTitle?: Maybe<Scalars['String']>;
  /** Domain information of the publication. */
  domainInfo: DomainInfo;
  /** Returns the list of drafts in the publication. */
  drafts: DraftConnection;
  /** Returns the publication's email imports, used with newsletter feature. */
  emailImport?: Maybe<EmailImport>;
  /** The favicon of the publication. Used in browser tab. */
  favicon?: Maybe<Scalars['String']>;
  /** Object containing information about beta features enabled for the publication. */
  features: PublicationFeatures;
  /** Total number of followers of the publication. */
  followersCount?: Maybe<Scalars['Int']>;
  /** Whether the publication has earned any badges or not. */
  hasBadges: Scalars['Boolean'];
  /** Color code of the header color of the publication. Used to style header of blog. */
  headerColor?: Maybe<Scalars['String']>;
  /** The ID of the publication. */
  id: Scalars['ID'];
  /** Summary of the contact information and information related to copyrights, usually used in German-speaking countries. */
  imprint?: Maybe<Scalars['String']>;
  /** The integrations connected to the publication. */
  integrations?: Maybe<PublicationIntegrations>;
  /** Returns true if the publication is active and false if deleted. */
  isActive?: Maybe<Scalars['Boolean']>;
  /**
   * Wether or not the authenticated user is following this publication.
   *
   * Returns `null` if the user is not authenticated.
   */
  isFollowedByMe?: Maybe<Scalars['Boolean']>;
  /** Returns true if GitHub backup is configured and active and false otherwise. */
  isGitHubBackupEnabled: Scalars['Boolean'];
  /** A flag to indicate if the publication is using Headless CMS. This can be used to check if the post redirect needs authentication. */
  isHeadless: Scalars['Boolean'];
  /** True if the publication is a team publication and false otherwise. */
  isTeam: Scalars['Boolean'];
  /** Links to the publication's social media profiles. */
  links?: Maybe<PublicationLinks>;
  /** The meta tags associated with the publication. */
  metaTags?: Maybe<Scalars['String']>;
  /** Information about the publication's Open Graph metadata i.e. image. */
  ogMetaData: OpenGraphMetaData;
  /** Returns the pinned post of the publication. */
  pinnedPost?: Maybe<Post>;
  /** Returns the post with the given slug. */
  post?: Maybe<Post>;
  /** Returns the list of posts in the publication. */
  posts: PublicationPostConnection;
  /**
   * Total number of posts in the publication. This included published posts under this blog.
   * @deprecated Use `posts.totalDocuments` instead.
   */
  postsCount?: Maybe<Scalars['Int']>;
  /** The publication preferences around layout, theme and other personalisations. */
  preferences: Preferences;
  /** Returns information about the publication's pro status. */
  pro?: Maybe<PublicationProInfo>;
  /** Publications that are recommended by this publication. */
  recommendedPublications: Array<UserRecommendedPublicationEdge>;
  /** Publications that are recommending this publication. */
  recommendingPublications: Array<UserRecommendingPublicationEdge>;
  /** Configured redirection rules for the publication. */
  redirectionRules: Array<RedirectionRule>;
  /** Returns the scheduled drafts of the publication. */
  scheduledDrafts: DraftConnection;
  /** Returns series by slug in the publication. */
  series?: Maybe<Series>;
  /** Returns the list of series in the publication. */
  seriesList: SeriesConnection;
  /** Contains the publication's sponsorships information. */
  sponsorship?: Maybe<PublicationSponsorship>;
  /** Returns the static page with the given slug. */
  staticPage?: Maybe<StaticPage>;
  /** Returns a list of static pages in the publication. */
  staticPages: StaticPageConnection;
  /** Returns the list of submitted drafts in the publication. */
  submittedDrafts: DraftConnection;
  /**
   * The title of the publication.
   * Title is used as logo if logo is not provided.
   */
  title: Scalars['String'];
  /** The domain of the publication. Used to access publication. Example https://johndoe.com */
  url: Scalars['String'];
  /** Determines the structure of the post URLs. */
  urlPattern: UrlPattern;
  /** @deprecated Use `domainInfo.hashnodeSubdomain` instead. */
  username?: Maybe<Scalars['String']>;
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationDraftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PublicationDraftConnectionFilter>;
  first: Scalars['Int'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationPostArgs = {
  slug: Scalars['String'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PublicationPostConnectionFilter>;
  first: Scalars['Int'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationRecommendedPublicationsArgs = {
  filter?: InputMaybe<RecommendedPublicationsFilter>;
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationScheduledDraftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PublicationDraftConnectionFilter>;
  first: Scalars['Int'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationSeriesArgs = {
  slug: Scalars['String'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationSeriesListArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationStaticPageArgs = {
  slug: Scalars['String'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationStaticPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type PublicationSubmittedDraftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PublicationDraftConnectionFilter>;
  first: Scalars['Int'];
};

/**
 * Connection to get list of drafts in publications.
 * Returns a list of edges which contains the drafts in publication and cursor to the last item of the previous page.
 */
export type PublicationDraftConnectionFilter = {
  /** Search filter will be applied to the title of a draft */
  search?: InputMaybe<Scalars['String']>;
};

/** Contains the publication's beta features. */
export type PublicationFeatures = {
  __typename?: 'PublicationFeatures';
  /** Audio player for blog posts. */
  audioBlog: AudioBlogFeature;
  /** Individual styling for the publication. */
  customCSS: CustomCssFeature;
  /** Newsletter feature for the publication which adds a `/newsletter` route for collecting subscribers and allows sending out newsletters. */
  newsletter: NewsletterFeature;
  /** Show the read time for blog posts. */
  readTime: ReadTimeFeature;
  /** Widget that shows up if a text on a blog post is selected. Allows for easy sharing or copying of the selected text. */
  textSelectionSharer: TextSelectionSharerFeature;
  /** Show the view count for blog posts. */
  viewCount: ViewCountFeature;
};

/**
 * Contains the publication's integrations.
 * Used to connect the publication with third party services like Google Analytics, Facebook Pixel, etc.
 */
export type PublicationIntegrations = {
  __typename?: 'PublicationIntegrations';
  /** Custom domain for integration with Fathom Analytics. */
  fathomCustomDomain?: Maybe<Scalars['String']>;
  /** A flag indicating if the custom domain is enabled for integration with Fathom Analytics. */
  fathomCustomDomainEnabled?: Maybe<Scalars['Boolean']>;
  /** Fathom Analytics Site ID for integration with Fathom Analytics. */
  fathomSiteID?: Maybe<Scalars['String']>;
  /** FB Pixel ID for integration with Facebook Pixel. */
  fbPixelID?: Maybe<Scalars['String']>;
  /** Google Analytics Tracking ID for integration with Google Analytics. */
  gaTrackingID?: Maybe<Scalars['String']>;
  /** Hotjar Site ID for integration with Hotjar. */
  hotjarSiteID?: Maybe<Scalars['String']>;
  /** Matomo Site ID for integration with Matomo Analytics. */
  matomoSiteID?: Maybe<Scalars['String']>;
  /** Matomo URL for integration with Matomo Analytics. */
  matomoURL?: Maybe<Scalars['String']>;
  /** A flag indicating if the custom domain is enabled for integration with Plausible Analytics. */
  plausibleAnalyticsEnabled?: Maybe<Scalars['Boolean']>;
  /** The ID for the Hashnode-provided Umami analytics instance. */
  umamiWebsiteUUID?: Maybe<Scalars['String']>;
  /** Web Monetization Payment Pointer for integration with Web Monetization. */
  wmPaymentPointer?: Maybe<Scalars['String']>;
};

/** Contains publication's layout choices. */
export enum PublicationLayout {
  /** Changes the layout of blog into grid 3 post cards per row. */
  Grid = 'grid',
  /**
   * Changes the layout of blog into magazine style.
   * This is the newest layout.
   */
  Magazine = 'magazine',
  /** Changes the layout of blog into stacked list of posts. */
  Stacked = 'stacked'
}

/** Contains the publication's social media links. */
export type PublicationLinks = {
  __typename?: 'PublicationLinks';
  /** Daily.dev URL of the publication. */
  dailydev?: Maybe<Scalars['String']>;
  /** GitHub URL of the publication. */
  github?: Maybe<Scalars['String']>;
  /** Hashnode profile of author of the publication. */
  hashnode?: Maybe<Scalars['String']>;
  /** Instagram URL of the publication. */
  instagram?: Maybe<Scalars['String']>;
  /** LinkedIn URL of the publication. */
  linkedin?: Maybe<Scalars['String']>;
  /** Mastodon URL of the publication. */
  mastodon?: Maybe<Scalars['String']>;
  /** Twitter URL of the publication. */
  twitter?: Maybe<Scalars['String']>;
  /** Website URL of the publication. */
  website?: Maybe<Scalars['String']>;
  /** YouTube URL of the publication. */
  youtube?: Maybe<Scalars['String']>;
};

/** Contains the publication's navbar items. */
export type PublicationNavbarItem = {
  __typename?: 'PublicationNavbarItem';
  /** The unique identifier of the navbar item. */
  id: Scalars['ID'];
  /** The label of the navbar item. */
  label?: Maybe<Scalars['String']>;
  /** The static page added to the navbar item. */
  page?: Maybe<StaticPage>;
  /** The order of the navbar item. */
  priority?: Maybe<Scalars['Int']>;
  /** The series added to the navbar item. */
  series?: Maybe<Series>;
  /** The type of the navbar item, can be series, link or page. */
  type: PublicationNavigationType;
  /** The URL of the navbar item. */
  url?: Maybe<Scalars['String']>;
};

/** The type of the navbar item, can be series, link or page. */
export enum PublicationNavigationType {
  /** The navbar item is a link. */
  Link = 'link',
  /** The navbar item is a static page. */
  Page = 'page',
  /** The navbar item is a series. */
  Series = 'series'
}

/**
 * Connection for posts within a publication. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type PublicationPostConnection = Connection & {
  __typename?: 'PublicationPostConnection';
  /** A list of edges containing Post information */
  edges: Array<PostEdge>;
  /** Information for pagination in Post connection. */
  pageInfo: PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int'];
};

/**
 * Connection to get list of posts in publications.
 * Returns a list of edges which contains the posts in publication and cursor to the last item of the previous page.
 */
export type PublicationPostConnectionFilter = {
  /** Remove pinned post from the result set. */
  excludePinnedPost?: InputMaybe<Scalars['Boolean']>;
  /**
   * Filtering by tag slugs and tag IDs will return posts that match either of the filters.
   *
   * It is an "OR" filter and not an "AND" filter.
   */
  tagSlugs?: InputMaybe<Array<Scalars['String']>>;
  /**
   * Filtering by tag slugs and tag IDs will return posts that match either of the filters.
   *
   * It is an "OR" filter and not an "AND" filter.
   */
  tags?: InputMaybe<Array<Scalars['ObjectId']>>;
};

/** Returns information about the publication's pro plan status. */
export type PublicationProInfo = {
  __typename?: 'PublicationProInfo';
  /** The day the pro plan has or will be canceled. */
  cancelationEffectiveDate?: Maybe<Scalars['Date']>;
  /** The point in time when the pro plan was canceled. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** Indicates if the publication is allowed to use pro features. */
  hasProAccess: Scalars['Boolean'];
};

/**
 * Contains the publication's Sponsorship information.
 * User can sponsor their favorite publications and pay them directly using Stripe.
 */
export type PublicationSponsorship = {
  __typename?: 'PublicationSponsorship';
  /**
   * The content shared by author of the publication to their sponsors.
   * This is used as note to inform that author is open for sponsorship.
   */
  content?: Maybe<Content>;
  /** The Stripe configuration of the publication's Sponsorship. */
  stripe?: Maybe<StripeConfiguration>;
};

/** Contains information about the post to be published. */
export type PublishPostInput = {
  /** Content of the post in markdown format. */
  contentMarkdown: Scalars['String'];
  /** Options for the cover image of the post. */
  coverImageOptions?: InputMaybe<CoverImageOptionsInput>;
  /** A flag to indicate if the comments are disabled for the post. */
  disableComments?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the draft to be published. */
  draftId: Scalars['ObjectId'];
  /** Information about the meta tags added to the post, used for SEO purpose. */
  metaTags?: InputMaybe<MetaTagsInput>;
  /** The URL of the original article if the post is imported from an external source. */
  originalArticleURL?: InputMaybe<Scalars['String']>;
  /** The ID of publication the post belongs to. */
  publicationId: Scalars['ObjectId'];
  /**
   * Publish the post on behalf of another user who is a member of the publication.
   *
   * Only applicable for team publications.
   */
  publishAs?: InputMaybe<Scalars['ObjectId']>;
  /** Date when the post is published. */
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** Providing a seriesId will add the post to that series. */
  seriesId?: InputMaybe<Scalars['ObjectId']>;
  /** Settings for the post like table of contents and newsletter activation. */
  settings?: InputMaybe<PublishPostSettingsInput>;
  /** Slug of the post. */
  slug?: InputMaybe<Scalars['String']>;
  /** The subtitle of the post. */
  subtitle?: InputMaybe<Scalars['String']>;
  /** A list of tags added to the post. */
  tags: Array<PublishPostTagInput>;
  /** The title of the post. */
  title: Scalars['String'];
};

export type PublishPostPayload = {
  __typename?: 'PublishPostPayload';
  post?: Maybe<Post>;
};

export type PublishPostSettingsInput = {
  /** A flag to indicate if the post is delisted, used to hide the post from public feed. */
  delisted?: InputMaybe<Scalars['Boolean']>;
  /** A flag to indicate if the post contains table of content */
  enableTableOfContent?: InputMaybe<Scalars['Boolean']>;
  /** Wether to send a newsletter for this post. */
  isNewsletterActivated?: InputMaybe<Scalars['Boolean']>;
  /** A flag to indicate if the post is scheduled. */
  scheduled?: InputMaybe<Scalars['Boolean']>;
  /** Flag to indicate if the slug is overridden by the user. */
  slugOverridden?: InputMaybe<Scalars['Boolean']>;
};

export type PublishPostTagInput = {
  /**
   * A tag id that is referencing an existing tag.
   *
   * Either this or name and slug should be provided. If both are provided, the id will be used.
   */
  id?: InputMaybe<Scalars['ObjectId']>;
  /**
   * A name of a new tag to create.
   *
   * Either this and slug or id should be provided. If both are provided, the id will be used.
   */
  name?: InputMaybe<Scalars['String']>;
  /**
   * A slug of a new tag to create.
   *
   * Either this and name or id should be provided. If both are provided, the id will be used.
   */
  slug?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  /** Returns a list of beta features. */
  blogsWithBetaFeatures: Array<BlogWithBetaFeatures>;
  /**
   * Returns a paginated list of comments. Passing $first is mandatory.
   * Used in Hashnode discussions feed.
   */
  discussions: FeedPostConnection;
  /**
   * Returns a draft by ID.
   * Draft is a post that is not published yet.
   */
  draft?: Maybe<Draft>;
  /**
   * Returns a paginated list of posts based on the provided filter.
   * Used in Hashnode home feed.
   */
  feed: FeedPostConnection;
  /**
   * Get a presigned POST URL for uploading an image.
   * @deprecated Will be removed on 27/09/2023. Use `Mutation.createImageUploadURL` instead.
   */
  imageUploadURL: PresignedPost;
  /** Returns the current authenticated user. Only available to the authenticated user. */
  me: MyUser;
  /** Returns Tags sorted by their usage in posts within the given period. */
  popularTags: Array<PopularTag>;
  /** Returns a list of Tags sorted by their usage in posts within the given period. */
  popularTagsV2: PopularTagsConnection;
  /** Returns post by ID. Can be used to render post page on blog. */
  post?: Maybe<Post>;
  /** Get the pricing for the pro plan. */
  proPricing: ProPricing;
  /**
   * Returns the publication with the given ID or host.
   * User can pass anyone of them.
   */
  publication?: Maybe<Publication>;
  /** Returns the recommended publication to follow. */
  recommendedPublications: Array<Publication>;
  /** Returns the recommended publication to follow. */
  recommendedPublicationsV2: RecommendedPublicationsConnection;
  /** Returns Tags to recommend based on usage and popularity. */
  recommendedTags: Array<Tag>;
  /** Returns Tags to recommend based on usage and popularity. */
  recommendedTagsV2: PopularTagsConnection;
  /** Get a scheduled post by ID. */
  scheduledPost?: Maybe<ScheduledPost>;
  /** Returns a paginated list of posts based on search query for a particular publication. */
  searchPostsOfPublication: SearchPostConnection;
  /**
   * Search for publications by title or Hashnode subdomain.
   *
   * Returns at most 10 publications.
   */
  searchPublications: Array<Publication>;
  /** Returns tag details by its slug. */
  tag?: Maybe<Tag>;
  /** Returns users who have most actively participated in discussions by commenting in the last 7 days. */
  topCommenters: CommenterUserConnection;
  /**
   * Returns a paginated list of comments. Passing $first is mandatory.
   * Used in Hashnode discussions feed.
   * Used for widgets on hashnode main. This is a hack to get around the urql cache issue.
   * TODO: ⚠️ Remove this query once the cache issue is fixed.
   * https://linear.app/hashnode/issue/HE-2629/urql-relay-pagination-issue
   */
  topDiscussions: FeedPostConnection;
  /** Returns the user with the username. */
  user?: Maybe<User>;
};


export type QueryDiscussionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


export type QueryDraftArgs = {
  id: Scalars['ObjectId'];
};


export type QueryFeedArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FeedFilter>;
  first: Scalars['Int'];
};


export type QueryImageUploadUrlArgs = {
  contentType: Scalars['ImageContentType'];
};


export type QueryPopularTagsArgs = {
  filter?: InputMaybe<PopularTagsFilter>;
  limit: Scalars['Int'];
  period?: InputMaybe<Period>;
};


export type QueryPopularTagsV2Args = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PopularTagsFilterV2>;
  first: Scalars['Int'];
};


export type QueryPostArgs = {
  id: Scalars['ObjectId'];
};


export type QueryProPricingArgs = {
  input: ProPricingInput;
};


export type QueryPublicationArgs = {
  host?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ObjectId']>;
};


export type QueryRecommendedPublicationsArgs = {
  limit: Scalars['Int'];
};


export type QueryRecommendedPublicationsV2Args = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


export type QueryRecommendedTagsArgs = {
  limit: Scalars['Int'];
};


export type QueryRecommendedTagsV2Args = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


export type QueryScheduledPostArgs = {
  id?: InputMaybe<Scalars['ObjectId']>;
};


export type QuerySearchPostsOfPublicationArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter: SearchPostsOfPublicationFilter;
  first: Scalars['Int'];
};


export type QuerySearchPublicationsArgs = {
  searchTerm: Scalars['String'];
};


export type QueryTagArgs = {
  slug: Scalars['String'];
};


export type QueryTopCommentersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


export type QueryTopDiscussionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};

/**
 * Contains the flag indicating if the read time feature is enabled or not.
 * User can enable or disable the read time feature from the publication settings.
 * Shows read time on blogs if enabled.
 */
export type ReadTimeFeature = Feature & {
  __typename?: 'ReadTimeFeature';
  /** A flag indicating if the read time feature is enabled or not. */
  isEnabled: Scalars['Boolean'];
};

export type RecommendPublicationsInput = {
  recommendedPublicationIds: Array<Scalars['ID']>;
  recommendingPublicationId: Scalars['ID'];
};

export type RecommendPublicationsPayload = {
  __typename?: 'RecommendPublicationsPayload';
  recommendedPublications: Array<UserRecommendedPublicationEdge>;
};

/** Contains a publication and a cursor for pagination. */
export type RecommendedPublicationEdge = Edge & {
  __typename?: 'RecommendedPublicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The node holding the Publication information */
  node: Publication;
};

/**
 * Connection for recommended publication in given time frame. Contains a list of edges containing nodes.
 * Each node is a tag.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type RecommendedPublicationsConnection = Connection & {
  __typename?: 'RecommendedPublicationsConnection';
  /** A list of edges containing Tag information */
  edges: Array<RecommendedPublicationEdge>;
  /** Information for pagination in popular Tags connection. */
  pageInfo: PageInfo;
};

export type RecommendedPublicationsFilter = {
  isEnabled?: InputMaybe<Scalars['Boolean']>;
};

/**
 * Connection for recommended tags for user. Contains a list of edges containing nodes.
 * Each node is a tag.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type RecommendedTagsConnection = Connection & {
  __typename?: 'RecommendedTagsConnection';
  /** A list of edges containing Tag information */
  edges: Array<TagEdge>;
  /** Information for pagination in popular Tags connection. */
  pageInfo: PageInfo;
};

export type RedirectionRule = {
  __typename?: 'RedirectionRule';
  /** The destination URL of the redirection rule. */
  destination: Scalars['String'];
  /** The source URL of the redirection rule. */
  source: Scalars['String'];
  /** The type of the redirection rule. */
  type: HttpRedirectionType;
};

export type RemoveRecommendationInput = {
  recommendedPublicationId: Scalars['ID'];
  recommendingPublicationId: Scalars['ID'];
};

export type RemoveRecommendationPayload = {
  __typename?: 'RemoveRecommendationPayload';
  recommendedPublication: Publication;
};

/**
 * Contains basic information about the reply.
 * A reply is a response to a comment.
 */
export type Reply = Node & {
  __typename?: 'Reply';
  /** The author of the reply. */
  author: User;
  /** The content of the reply in markdown and html format. */
  content: Content;
  /** The date the reply was created. */
  dateAdded: Scalars['DateTime'];
  /** The ID of the reply. */
  id: Scalars['ID'];
  /** Total number of reactions on the reply by the authenticated user. User must be authenticated to use this field. */
  myTotalReactions: Scalars['Int'];
  /**
   * A unique string identifying the reply. Used as element id in the DOM on hashnode blogs.
   * It can be used to scroll to the reply in browser.
   */
  stamp?: Maybe<Scalars['String']>;
  /** Total number of reactions on the reply. Reactions are hearts added to any reply. */
  totalReactions: Scalars['Int'];
};

export type ReschedulePostInput = {
  /** The Draft ID of the scheduled post. */
  draftId: Scalars['ObjectId'];
  /** New scheduled date for the post to be rescheduled. */
  scheduledDate: Scalars['DateTime'];
};

/** Information to help in seo related meta tags. */
export type Seo = {
  __typename?: 'SEO';
  /** The description used in og:description tag for SEO purposes. */
  description?: Maybe<Scalars['String']>;
  /** The title used in og:title tag for SEO purposes. */
  title?: Maybe<Scalars['String']>;
};

/**
 * Contains basic information about the scheduled post.
 * A scheduled post is a post that is scheduled to be published in the future.
 */
export type ScheduledPost = Node & {
  __typename?: 'ScheduledPost';
  /** The date the scheduled post was created. */
  author: User;
  /** Returns the draft associated with the scheduled post. */
  draft?: Maybe<Draft>;
  /** The ID of the scheduled post. */
  id: Scalars['ID'];
  /** Returns the publication the post is scheduled for. */
  publication: Publication;
  /** Returns user who scheduled the post. This is usually the author of the post. */
  scheduledBy?: Maybe<User>;
  /** The scheduled date for the post to be published. This is the date the post will be published. */
  scheduledDate: Scalars['DateTime'];
};

export type ScheduledPostPayload = {
  __typename?: 'ScheduledPostPayload';
  /** Payload returned in response of reschedulePost mutation. */
  payload: ScheduledPost;
};

/** Enum of all the scopes that can be used with the @requireAuth directive. */
export enum Scope {
  AcknowledgeEmailImport = 'acknowledge_email_import',
  ActiveProUser = 'active_pro_user',
  AdminOwnerOnly = 'admin_owner_only',
  AssignProPublications = 'assign_pro_publications',
  ChangeProSubscription = 'change_pro_subscription',
  CreatePro = 'create_pro',
  ImportSubscribersToPublication = 'import_subscribers_to_publication',
  PublishPost = 'publish_post',
  RecommendPublications = 'recommend_publications',
  Signup = 'signup',
  WritePost = 'write_post',
  WriteSeries = 'write_series'
}

/**
 * Connection for posts within a publication search. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type SearchPostConnection = Connection & {
  __typename?: 'SearchPostConnection';
  /** A list of edges containing Post information */
  edges: Array<PostEdge>;
  /** Information for pagination in Post connection. */
  pageInfo: PageInfo;
};

export type SearchPostsOfPublicationFilter = {
  /** The ID of publications to search from. */
  publicationId: Scalars['ObjectId'];
  /** The query to be searched in post. */
  query: Scalars['String'];
};

/**
 * Contains basic information about the series.
 * A series is a collection of posts that are related to each other.
 */
export type Series = Node & {
  __typename?: 'Series';
  /** Returns the user who is author of the series. */
  author: User;
  /** The cover image of the series. */
  coverImage?: Maybe<Scalars['String']>;
  /** The date and time the series was created. */
  createdAt: Scalars['DateTime'];
  /** Unique identifier for the series. */
  cuid?: Maybe<Scalars['ID']>;
  /** The description of the series. Contains markdown and html version of the series's description. */
  description?: Maybe<Content>;
  /** The ID of the series. */
  id: Scalars['ID'];
  /** The name of the series. Shown in series page. */
  name: Scalars['String'];
  /**
   * The number of posts in the series.
   * @deprecated Use `posts.totalDocuments` instead.
   */
  numberOfPosts: Scalars['Int'];
  /** Returns a list of posts in the series. */
  posts: SeriesPostConnection;
  /** The slug of the series. Used to access series page.  Example https://johndoe.com/series/series-slug */
  slug: Scalars['String'];
  /** The sort order of the series, determines if the latest posts should appear first or last in series. */
  sortOrder: SortOrder;
};


/**
 * Contains basic information about the series.
 * A series is a collection of posts that are related to each other.
 */
export type SeriesPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};

/**
 * Connection for Series. Contains a list of edges containing nodes.
 * Each node is a Series.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type SeriesConnection = Connection & {
  __typename?: 'SeriesConnection';
  /** A list of edges containing Series information */
  edges: Array<SeriesEdge>;
  /** Information for pagination in SeriesList connection. */
  pageInfo: PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int'];
};

/** Contains a Series and a cursor for pagination. */
export type SeriesEdge = Edge & {
  __typename?: 'SeriesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The node holding the Series information */
  node: Series;
};

/**
 * Connection for posts within a series. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type SeriesPostConnection = Connection & {
  __typename?: 'SeriesPostConnection';
  /** A list of edges containing Post information */
  edges: Array<PostEdge>;
  /** Information for pagination in Post connection. */
  pageInfo: PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int'];
};

export type SignUpUserInput = {
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  tagline?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type SignUpUserPayload = {
  __typename?: 'SignUpUserPayload';
  profile: MyUser;
  ssoAuthUrl: Scalars['String'];
};

/** Available social media links. */
export type SocialMediaLinks = {
  __typename?: 'SocialMediaLinks';
  /** The user's Facebook profile. */
  facebook?: Maybe<Scalars['String']>;
  /** The user's GitHub profile. */
  github?: Maybe<Scalars['String']>;
  /** The user's Instagram profile. */
  instagram?: Maybe<Scalars['String']>;
  /** The user's LinkedIn profile. */
  linkedin?: Maybe<Scalars['String']>;
  /** The user's StackOverflow profile. */
  stackoverflow?: Maybe<Scalars['String']>;
  /** The user's Twitter profile. */
  twitter?: Maybe<Scalars['String']>;
  /** The user's website. */
  website?: Maybe<Scalars['String']>;
  /** The user's YouTube profile. */
  youtube?: Maybe<Scalars['String']>;
};

export type SocialMediaLinksInput = {
  facebook?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  stackoverflow?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

/** SortOrder is a common enum for all types that can be sorted. */
export enum SortOrder {
  Asc = 'asc',
  Dsc = 'dsc'
}

/**
 * Contains basic information about the static page.
 * Static pages are pages that are written in markdown and can be added to blog.
 */
export type StaticPage = Node & {
  __typename?: 'StaticPage';
  /** Content of the static page. Contains markdown and html version of the static page's content. */
  content: Content;
  /** A flag to determine if the static page is hidden from public or not, this is used to hide the page instead of deleting it. */
  hidden: Scalars['Boolean'];
  /** The ID of the static page. */
  id: Scalars['ID'];
  /** Information about the static page's Open Graph metadata i.e. image. */
  ogMetaData?: Maybe<OpenGraphMetaData>;
  /** Information about the static page's SEO metadata i.e. title and description. */
  seo?: Maybe<Seo>;
  /** The slug of the static page. Used to access static page.  Example https://johndoe.com/my-page */
  slug: Scalars['String'];
  /** The title of the static page. Shown in nav bar. */
  title: Scalars['String'];
};

/**
 * Connection to get list of static pages.
 * Returns a list of edges which contains the static page and cursor to the last item of the previous page.
 */
export type StaticPageConnection = Connection & {
  __typename?: 'StaticPageConnection';
  /** A list of edges containing nodes in the connection. */
  edges: Array<StaticPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int'];
};

/** An edge that contains a node of type static page and cursor to the node. */
export type StaticPageEdge = Edge & {
  __typename?: 'StaticPageEdge';
  /** A cursor to the last item of the previous page. */
  cursor: Scalars['String'];
  /** The node containing a static page. */
  node: StaticPage;
};

/** Contains the publication's Stripe configuration. */
export type StripeConfiguration = {
  __typename?: 'StripeConfiguration';
  /** The Stripe account ID of the publication. */
  accountId?: Maybe<Scalars['String']>;
  /** A flag indicating if the publication is connected to Stripe. */
  connected: Scalars['Boolean'];
  /** The country of origin of the publication. */
  country?: Maybe<Scalars['String']>;
};

export type SubscribeToNewsletterInput = {
  /** The email of the subscriber. */
  email: Scalars['String'];
  /** The ID of the publication to subscribe to. */
  publicationId: Scalars['ObjectId'];
};

export type SubscribeToNewsletterPayload = {
  __typename?: 'SubscribeToNewsletterPayload';
  status?: Maybe<NewsletterSubscribeStatus>;
};

export type Tag = ITag & Node & {
  __typename?: 'Tag';
  /** Total number of users following this tag. */
  followersCount: Scalars['Int'];
  /** The ID of the tag. */
  id: Scalars['ID'];
  /** Information about the tag. Contains markdown html and text version of the tag's info. */
  info?: Maybe<Content>;
  /** The logo of the tag. Shown in tag page. */
  logo?: Maybe<Scalars['String']>;
  /** The name of the tag. Shown in tag page. */
  name: Scalars['String'];
  /** Paginated list of posts published under this tag */
  posts: FeedPostConnection;
  /** Alltime usage count of this tag in posts. */
  postsCount: Scalars['Int'];
  /** The slug of the tag. Used to access tags feed.  Example https://hashnode.com/n/graphql */
  slug: Scalars['String'];
  /** The tagline of the tag. */
  tagline?: Maybe<Scalars['String']>;
};


export type TagPostsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter: TagPostConnectionFilter;
  first: Scalars['Int'];
};

/** Contains a tag and a cursor for pagination. */
export type TagEdge = Edge & {
  __typename?: 'TagEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The node holding the Tag information */
  node: Tag;
};

export type TagPostConnectionFilter = {
  /** Sort tag feed by recents, popular, or trending. Defaults to recents. */
  sortBy?: InputMaybe<TagPostsSort>;
};

/** The field by which to sort the tag feed. */
export enum TagPostsSort {
  /** Sorts by popularity, used in Hot tag feed. */
  Popular = 'popular',
  /** Determinate how to sort the results. Defaults to recents, used in New tag feed. */
  Recent = 'recent',
  /** Trending is particular used to fetch top posts trending within a week time under a tag */
  Trending = 'trending'
}

/**
 * Contains the flag indicating if the text selection sharer feature is enabled or not.
 * User can enable or disable the text selection sharer feature from the publication settings.
 * Shows a widget if a text on a blog post is selected. Allows for easy sharing or copying of the selected text.
 */
export type TextSelectionSharerFeature = Feature & {
  __typename?: 'TextSelectionSharerFeature';
  /** A flag indicating if the text selection sharer feature is enabled or not. */
  isEnabled: Scalars['Boolean'];
};

/** Input for toggling a beta feature for a blog. */
export type ToggleBlogBetaFeatureInput = {
  blogId: Scalars['ObjectId'];
  key: Scalars['String'];
};

/** Payload for toggling a beta feature for a blog. */
export type ToggleBlogBetaFeaturePayload = {
  __typename?: 'ToggleBlogBetaFeaturePayload';
  betaFeature: BetaFeature;
};

/** Payload for the toggleFollowingUser mutation. */
export type ToggleFollowUserPayload = {
  __typename?: 'ToggleFollowUserPayload';
  /** The user that was followed/unfollowed. */
  user?: Maybe<User>;
};

export type ToggleRecommendationFeatureInput = {
  publicationId: Scalars['ID'];
};

export type ToggleRecommendationFeaturePayload = {
  __typename?: 'ToggleRecommendationFeaturePayload';
  areRecommendationsEnabled: Scalars['Boolean'];
  publication: Publication;
};

export type ToggleRecommendationStatusInput = {
  recommendedPublicationId: Scalars['ID'];
  recommendingPublicationId: Scalars['ID'];
};

export type ToggleRecommendationStatusPayload = {
  __typename?: 'ToggleRecommendationStatusPayload';
  isEnabled: Scalars['Boolean'];
  recommendedPublication: Publication;
};

/** Input for toggling a beta feature for a user. */
export type ToggleUserBetaFeatureInput = {
  key: Scalars['String'];
};

/** Payload for toggling a beta feature for a user. */
export type ToggleUserBetaFeaturePayload = {
  __typename?: 'ToggleUserBetaFeaturePayload';
  betaFeature: BetaFeature;
};

export type UnsubscribeFromNewsletterInput = {
  /** The email that is currently subscribed. */
  email: Scalars['String'];
  /** The ID of the publication to unsubscribe from. */
  publicationId: Scalars['ObjectId'];
};

export type UnsubscribeFromNewsletterPayload = {
  __typename?: 'UnsubscribeFromNewsletterPayload';
  status?: Maybe<NewsletterUnsubscribeStatus>;
};

export type UploadImageInput = {
  /**
   * Required for Unsplash images.
   * Used for Unsplash attribution.
   */
  unsplashImageId?: InputMaybe<Scalars['String']>;
  /** URL of image, it can be from unsplash.com or hashnode's cdn. */
  url: Scalars['URL'];
};

export type UploadImagePayload = {
  __typename?: 'UploadImagePayload';
  imageURL: Scalars['URL'];
};

export enum UrlPattern {
  /** Post URLs contain the slug (for example `my slug`) and a random id (like `1234`) , e.g. "/my-slug-1234". */
  Default = 'DEFAULT',
  /** Post URLs only contain the slug, e.g. "/my-slug". */
  Simple = 'SIMPLE'
}

/** Basic information about a user on Hashnode. */
export type User = IUser & Node & {
  __typename?: 'User';
  /**
   * Whether or not the user is an ambassador.
   * @deprecated Ambassadors program no longer active
   */
  ambassador: Scalars['Boolean'];
  /** The availability of the user based on tech stack and interests. Shown on the "I am available for" section in user's profile. */
  availableFor?: Maybe<Scalars['String']>;
  /** Returns a list of badges that the user has earned. Shown on blogs /badges page. Example - https://iamshadmirza.com/badges */
  badges: Array<Badge>;
  /**
   * The bio of the user. Visible in about me section of the user's profile.
   * @deprecated Will be removed on 18/09/2023. Use bioV2 instead of bio.
   */
  bio?: Maybe<Scalars['String']>;
  /** The bio of the user. Visible in about me section of the user's profile. */
  bioV2?: Maybe<Content>;
  /**
   * The URL to the cover photo of the user's profile.
   * @deprecated Cover images are not part of user's profile anymore. Will be removed on 25/09/2023.
   */
  coverPhoto?: Maybe<Scalars['String']>;
  /** The date the user joined Hashnode. */
  dateJoined?: Maybe<Scalars['DateTime']>;
  /** Whether or not the user is deactivated. Only available to the authenticated user. */
  deactivated: Scalars['Boolean'];
  /** The number of users that follow the requested user. Visible in the user's profile. */
  followersCount: Scalars['Int'];
  /**
   * Wether or not the authenticated user follows this user.
   * Returns false if the authenticated user this user.
   */
  following: Scalars['Boolean'];
  /** The number of users that this user is following. Visible in the user's profile. */
  followingsCount: Scalars['Int'];
  /**
   * Wether or not this user follows the authenticated user.
   * Returns false if the authenticated user this user.
   */
  followsBack: Scalars['Boolean'];
  /** The ID of the user. It can be used to identify the user. */
  id: Scalars['ID'];
  /** Wether or not this is a pro user. */
  isPro: Scalars['Boolean'];
  /** The location of the user. */
  location?: Maybe<Scalars['String']>;
  /** The name of the user. */
  name: Scalars['String'];
  /** The URL to the profile picture of the user. */
  profilePicture?: Maybe<Scalars['String']>;
  /** Publications associated with the user. Includes personal and team publications. */
  publications: UserPublicationsConnection;
  /** The social media links of the user. Shown on the user's profile. */
  socialMediaLinks?: Maybe<SocialMediaLinks>;
  /** The tagline of the user. Shown on the user's profile below the name. */
  tagline?: Maybe<Scalars['String']>;
  /** Returns a list of tags that the user follows. */
  tagsFollowing: Array<Tag>;
  /** The username of the user. It is unique and tied with user's profile URL. Example - https://hashnode.com/@username */
  username: Scalars['String'];
};


/** Basic information about a user on Hashnode. */
export type UserPublicationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserPublicationsConnectionFilter>;
  first: Scalars['Int'];
};

/** Contains a node of type user and cursor for pagination. */
export type UserEdge = Edge & {
  __typename?: 'UserEdge';
  /** The cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The node containing User information */
  node: User;
};

/** Specifies the billing interval for a pro plan. */
export type UserProBillingInfo = {
  __typename?: 'UserProBillingInfo';
  /**
   * The two-letter ISO country code of the user's billing address.
   * Can be used to retrieve pricing information with the applicable taxes.
   */
  countryCode?: Maybe<Scalars['String']>;
  /** The coupon code that was used to get a discount on the subscription. */
  couponCode?: Maybe<Scalars['String']>;
  /** Specifies invoicing frequency. */
  interval: BillingInterval;
  /** The last payment that has been made for the subscription. */
  lastPayment?: Maybe<Payment>;
  /** The next payment that will be made for the subscription. */
  nextPayment?: Maybe<Payment>;
};

/** Information about the user's pro plan. */
export type UserProInfo = {
  __typename?: 'UserProInfo';
  /** Billing information for the user's pro plan. */
  billing: UserProBillingInfo;
  /** Indicates if the user has access to pro features. */
  hasProAccess: Scalars['Boolean'];
  /** Information about the user's publication credits. */
  publicationCredits: UserProPublicationCredits;
  /** Information about the user's pro subscription. */
  subscription: UserProSubscriptionInfo;
};

/**
 * Information about the user's publication credits.
 * Used to determine how many publications can be added to the user's pro plan without paying extra.
 */
export type UserProPublicationCredits = {
  __typename?: 'UserProPublicationCredits';
  /** Determines how many publications can be added to the user's pro plan without paying extra. */
  available: Scalars['Int'];
  /** The total amount of publications that can be added to the user's pro plan. */
  total: Scalars['Int'];
  /** Credits that are used and not scheduled for cancelation. */
  usedUncanceled: Scalars['Int'];
};

/** Information about the user's pro subscription. */
export type UserProSubscriptionInfo = {
  __typename?: 'UserProSubscriptionInfo';
  /** The date the cancelation of the user's pro plan subscription will take effect. */
  cancelAt?: Maybe<Scalars['DateTime']>;
  /** The URL of a page where the user can cancel the subscription. */
  cancelUrl: Scalars['String'];
  /** The date the user's pro plan subscription was canceled. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** Time at which the user subscribed to the pro plan. */
  signedUpAt: Scalars['DateTime'];
  /** The current status of the user's pro plan subscription. */
  status: UserProSubscriptionStatus;
  /** The URL of a page where the user can update the subscription (e.g. payment details). */
  updateUrl: Scalars['String'];
};

/** Specifies subscription status. */
export enum UserProSubscriptionStatus {
  /** The user has an active pro plan subscription. */
  Active = 'ACTIVE',
  /** The user has a pro plan subscription that is canceled. */
  Deleted = 'DELETED',
  /** The user has a pro plan subscription that is past due. */
  PastDue = 'PAST_DUE'
}

/** Specifies the input for profile updates. */
export type UserProfileInput = {
  bio?: InputMaybe<Scalars['String']>;
  socialMedia?: InputMaybe<SocialMediaLinksInput>;
};

/** The role of the user in the publication. */
export enum UserPublicationRole {
  /** Contributors can join the publication and contribute an article. They cannot directly publish a new article. */
  Contributor = 'CONTRIBUTOR',
  /**
   * The editor has access to the publication dashboard to customize the blog and approve/reject posts.
   * They also have access to the member panel to add/modify/remove members. Editors cannot remove other editors or update their roles.
   */
  Editor = 'EDITOR',
  /** The owner is the creator of the publication and can do all things, including delete publication. */
  Owner = 'OWNER'
}

/**
 * Connection to get list of publications.
 * Returns a list of edges which contains the publications and cursor to the last item of the previous page.
 */
export type UserPublicationsConnection = Connection & {
  __typename?: 'UserPublicationsConnection';
  /** A list of edges of publications connection. */
  edges: Array<UserPublicationsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total amount of publications taking into account the filter. */
  totalDocuments: Scalars['Int'];
};

/** Filter to apply to the publications. */
export type UserPublicationsConnectionFilter = {
  /** Only return pro publications. */
  isPro?: InputMaybe<Scalars['Boolean']>;
  /** Only include publication in which the user has one of the provided roles. */
  roles?: InputMaybe<Array<UserPublicationRole>>;
};

/** An edge that contains a node of type publication and cursor to the node. */
export type UserPublicationsEdge = Edge & {
  __typename?: 'UserPublicationsEdge';
  /** The cursor to the node. */
  cursor: Scalars['String'];
  /** Node containing the publication. */
  node: Publication;
  /** The role of the user in the publication. */
  role: UserPublicationRole;
};

export type UserRecommendedPublicationEdge = {
  __typename?: 'UserRecommendedPublicationEdge';
  /** Wether or not the recommendation is enabled. */
  isEnabled: Scalars['Boolean'];
  /** The publication that is recommended by the publication this connection originates from. */
  node: Publication;
  /** The amount of followers the publication referenced in `node` has gained by recommendations from the publication. */
  totalFollowersGained: Scalars['Int'];
};

export type UserRecommendingPublicationEdge = {
  __typename?: 'UserRecommendingPublicationEdge';
  /** The publication that is recommending the publication this connection originates from. */
  node: Publication;
  /** The amount of followers the publication has gained by recommendations from the publication referenced in `node`. */
  totalFollowersGained: Scalars['Int'];
};

/**
 * Contains the flag indicating if the view count feature is enabled or not.
 * User can enable or disable the view count feature from the publication settings.
 * Shows total views on blogs if enabled.
 */
export type ViewCountFeature = Feature & {
  __typename?: 'ViewCountFeature';
  /** A flag indicating if the view count feature is enabled or not. */
  isEnabled: Scalars['Boolean'];
};

export type CheckGitHubBackupEnabledQueryVariables = Exact<{
  id: Scalars['ObjectId'];
}>;


export type CheckGitHubBackupEnabledQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', isGitHubBackupEnabled: boolean } | null };

export type LastDraftBackupQueryVariables = Exact<{
  id: Scalars['ObjectId'];
}>;


export type LastDraftBackupQuery = { __typename?: 'Query', draft?: { __typename?: 'Draft', lastSuccessfulBackupAt?: string | null, lastFailedBackupAt?: string | null } | null };

export type PublicationActiveStatusQueryVariables = Exact<{
  publicationId: Scalars['ObjectId'];
}>;


export type PublicationActiveStatusQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', isActive?: boolean | null } | null };

export type TopDiscussionsFeedQueryVariables = Exact<{
  first: Scalars['Int'];
  includeComments?: InputMaybe<Scalars['Boolean']>;
}>;


export type TopDiscussionsFeedQuery = { __typename?: 'Query', topDiscussions: { __typename?: 'FeedPostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, title: string, responseCount: number, replyCount: number, views: number, _id: string, totalReactions: number, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, comments?: { __typename?: 'PostCommentConnection', edges: Array<{ __typename?: 'PostCommentEdge', node: { __typename?: 'Comment', id: string, content: { __typename?: 'Content', text: string }, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null } } }> } } }> } };

export type RequiredTopDiscussionCommentConnectionFragment = { __typename?: 'PostCommentConnection', edges: Array<{ __typename?: 'PostCommentEdge', node: { __typename?: 'Comment', id: string, content: { __typename?: 'Content', text: string }, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null } } }> };

export type DiscussionsTopCommentersQueryVariables = Exact<{ [key: string]: never; }>;


export type DiscussionsTopCommentersQuery = { __typename?: 'Query', topCommenters: { __typename?: 'CommenterUserConnection', edges: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null } }> } };

export type RecentPostsFromBlogQueryVariables = Exact<{
  host: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  filter?: InputMaybe<PublicationPostConnectionFilter>;
}>;


export type RecentPostsFromBlogQuery = { __typename?: 'Query', publication?: { __typename?: 'Publication', id: string, posts: { __typename?: 'PublicationPostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', title: string, views: number, _id: string, dateAdded: string } }> } } | null };

export type ToggleBetaFeatureMutationVariables = Exact<{
  input: ToggleBlogBetaFeatureInput;
}>;


export type ToggleBetaFeatureMutation = { __typename?: 'Mutation', toggleBlogBetaFeature: { __typename?: 'ToggleBlogBetaFeaturePayload', betaFeature: { __typename?: 'BetaFeature', id: string, key: string, enabled: boolean, title?: string | null } } };

export type RecommendedTagsV2QueryVariables = Exact<{
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type RecommendedTagsV2Query = { __typename?: 'Query', recommendedTagsV2: { __typename?: 'PopularTagsConnection', edges: Array<{ __typename?: 'PopularTagEdge', cursor: string, node: { __typename?: 'PopularTag', id: string, name: string, slug: string, logo?: string | null, followersCount: number, postsCount: number } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } } };

export type RecommendedPublicationsV2QueryVariables = Exact<{
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type RecommendedPublicationsV2Query = { __typename?: 'Query', recommendedPublicationsV2: { __typename?: 'RecommendedPublicationsConnection', edges: Array<{ __typename?: 'RecommendedPublicationEdge', node: { __typename?: 'Publication', title: string, displayTitle?: string | null, url: string, id: string, favicon?: string | null, isTeam: boolean, author: { __typename?: 'User', id: string, name: string, username: string, profilePicture?: string | null } } }> } };

export type PopularTagsV2QueryVariables = Exact<{
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PopularTagsFilterV2>;
}>;


export type PopularTagsV2Query = { __typename?: 'Query', popularTagsV2: { __typename?: 'PopularTagsConnection', edges: Array<{ __typename?: 'PopularTagEdge', node: { __typename?: 'PopularTag', id: string, name: string, slug: string, logo?: string | null, followersCount: number, postsCountInPeriod: number, _id: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } } };

export type ActivateFreeTrialMutationVariables = Exact<{ [key: string]: never; }>;


export type ActivateFreeTrialMutation = { __typename?: 'Mutation', activateFreeTrial: { __typename?: 'ActivateFreeTrialPayload', user: { __typename?: 'MyUser', id: string, username: string, name: string, freeTrial: { __typename?: 'FreeTrialInfo', hasFreeTrialAccess: boolean, endsAt?: string | null, startedAt?: string | null } } } };

export type ReschedulePostMutationVariables = Exact<{
  input: ReschedulePostInput;
}>;


export type ReschedulePostMutation = { __typename?: 'Mutation', reschedulePost?: { __typename?: 'ScheduledPostPayload', payload: { __typename?: 'ScheduledPost', id: string, author: { __typename?: 'User', id: string, username: string } } } | null };

export type PublishPostMutationVariables = Exact<{
  input: PublishPostInput;
}>;


export type PublishPostMutation = { __typename?: 'Mutation', publishPost?: { __typename?: 'PublishPostPayload', post?: { __typename?: 'Post', id: string, title: string, slug: string, url?: string | null, publication?: { __typename?: 'Publication', id: string, title: string } | null } | null } | null };

export type DiscussionsFeedQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type DiscussionsFeedQuery = { __typename?: 'Query', discussions: { __typename?: 'FeedPostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, slug: string, replyCount: number, responseCount: number, brief?: string | null, subtitle?: string | null, bookmarked: boolean, views: number, url?: string | null, title: string, cuid?: string | null, _id: string, readTime: number, isFeatured: boolean, totalReactions: number, dateAdded: string, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, series?: { __typename?: 'Series', slug: string, name: string, cuid?: string | null, _id: string } | null, tags?: Array<{ __typename?: 'Tag', logo?: string | null, name: string, slug: string, _id: string }> | null, publication?: { __typename?: 'Publication', url: string, canonicalURL: string, title: string, displayTitle?: string | null, isHeadless: boolean, favicon?: string | null, headerColor?: string | null, metaTags?: string | null, isTeam: boolean, urlPattern: UrlPattern, _id: string, domainInfo: { __typename?: 'DomainInfo', hashnodeSubdomain?: string | null, domain?: { __typename?: 'DomainStatus', host: string, ready: boolean } | null } } | null, comments: { __typename?: 'PostCommentConnection', edges: Array<{ __typename?: 'PostCommentEdge', node: { __typename?: 'Comment', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, replies: { __typename?: 'CommentReplyConnection', edges: Array<{ __typename?: 'CommentReplyEdge', node: { __typename?: 'Reply', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } }, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } }, coverImage?: { __typename?: 'PostCoverImage', isPortrait: boolean, url: string } | null, contributors: Array<{ __typename?: 'User', name: string, username: string, _id: string, photo?: string | null }>, preferences: { __typename?: 'PostPreferences', disableComments: boolean } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } } };

export type PostCommentsQueryVariables = Exact<{
  postId: Scalars['ObjectId'];
  commentsFirst: Scalars['Int'];
  commentsSortBy?: InputMaybe<PostCommentSortBy>;
}>;


export type PostCommentsQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, comments: { __typename?: 'PostCommentConnection', edges: Array<{ __typename?: 'PostCommentEdge', node: { __typename?: 'Comment', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, replies: { __typename?: 'CommentReplyConnection', edges: Array<{ __typename?: 'CommentReplyEdge', node: { __typename?: 'Reply', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } }, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } } } | null };

export type CommentsWithReactionsQueryVariables = Exact<{
  postId: Scalars['ObjectId'];
  commentsFirst: Scalars['Int'];
  commentsSortBy?: InputMaybe<PostCommentSortBy>;
  repliesFirst: Scalars['Int'];
}>;


export type CommentsWithReactionsQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, comments: { __typename?: 'PostCommentConnection', edges: Array<{ __typename?: 'PostCommentEdge', node: { __typename?: 'Comment', id: string, totalReactions: number, myTotalReactions: number, replies: { __typename?: 'CommentReplyConnection', edges: Array<{ __typename?: 'CommentReplyEdge', node: { __typename?: 'Reply', id: string, totalReactions: number, myTotalReactions: number } }> } } }> } } | null };

export type RequiredCommentConnectionFragment = { __typename?: 'PostCommentConnection', edges: Array<{ __typename?: 'PostCommentEdge', node: { __typename?: 'Comment', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } };

export type RequiredCommentWithRepliesConnectionFragment = { __typename?: 'PostCommentConnection', edges: Array<{ __typename?: 'PostCommentEdge', node: { __typename?: 'Comment', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, replies: { __typename?: 'CommentReplyConnection', edges: Array<{ __typename?: 'CommentReplyEdge', node: { __typename?: 'Reply', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } }, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } };

export type RequiredReplyConnectionFragment = { __typename?: 'CommentReplyConnection', edges: Array<{ __typename?: 'CommentReplyEdge', node: { __typename?: 'Reply', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } };

export type RequiredReplyFieldsFragment = { __typename?: 'Reply', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } };

export type RequiredCommentWithRepliesFieldsFragment = { __typename?: 'Comment', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, replies: { __typename?: 'CommentReplyConnection', edges: Array<{ __typename?: 'CommentReplyEdge', node: { __typename?: 'Reply', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } }, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } };

export type RequiredCommentFieldsFragment = { __typename?: 'Comment', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } };

export type PostDiscussionQueryVariables = Exact<{
  postId: Scalars['ObjectId'];
}>;


export type PostDiscussionQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, slug: string, replyCount: number, responseCount: number, brief?: string | null, subtitle?: string | null, bookmarked: boolean, views: number, url?: string | null, title: string, cuid?: string | null, _id: string, readTime: number, isFeatured: boolean, totalReactions: number, dateAdded: string, seo?: { __typename?: 'SEO', title?: string | null, description?: string | null } | null, ogMetaData?: { __typename?: 'OpenGraphMetaData', image?: string | null } | null, author: { __typename?: 'User', tagline?: string | null, name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, series?: { __typename?: 'Series', slug: string, name: string, cuid?: string | null, _id: string } | null, tags?: Array<{ __typename?: 'Tag', logo?: string | null, name: string, slug: string, _id: string }> | null, publication?: { __typename?: 'Publication', url: string, canonicalURL: string, title: string, displayTitle?: string | null, isHeadless: boolean, favicon?: string | null, headerColor?: string | null, metaTags?: string | null, isTeam: boolean, urlPattern: UrlPattern, _id: string, domainInfo: { __typename?: 'DomainInfo', hashnodeSubdomain?: string | null, domain?: { __typename?: 'DomainStatus', host: string, ready: boolean } | null } } | null, comments: { __typename?: 'PostCommentConnection', edges: Array<{ __typename?: 'PostCommentEdge', node: { __typename?: 'Comment', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, replies: { __typename?: 'CommentReplyConnection', edges: Array<{ __typename?: 'CommentReplyEdge', node: { __typename?: 'Reply', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } }, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } }, commenters: { __typename?: 'PostCommenterConnection', edges: Array<{ __typename?: 'PostCommenterEdge', node: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null } }> }, coverImage?: { __typename?: 'PostCoverImage', isPortrait: boolean, url: string } | null, contributors: Array<{ __typename?: 'User', name: string, username: string, _id: string, photo?: string | null }>, preferences: { __typename?: 'PostPreferences', disableComments: boolean } } | null };

export type RequiredPostCommenterConnectionFragment = { __typename?: 'PostCommenterConnection', edges: Array<{ __typename?: 'PostCommenterEdge', node: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null } }> };

export type RequiredTopCommenterFieldsFragment = { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null };

export type FeedQueryVariables = Exact<{
  first: Scalars['Int'];
  filter?: InputMaybe<FeedFilter>;
  after?: InputMaybe<Scalars['String']>;
  commentsFirst?: Scalars['Int'];
}>;


export type FeedQuery = { __typename?: 'Query', feed: { __typename?: 'FeedPostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, slug: string, replyCount: number, responseCount: number, brief?: string | null, subtitle?: string | null, bookmarked: boolean, views: number, url?: string | null, title: string, cuid?: string | null, _id: string, readTime: number, isFeatured: boolean, totalReactions: number, dateAdded: string, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, series?: { __typename?: 'Series', slug: string, name: string, cuid?: string | null, _id: string } | null, tags?: Array<{ __typename?: 'Tag', logo?: string | null, name: string, slug: string, _id: string }> | null, publication?: { __typename?: 'Publication', url: string, canonicalURL: string, title: string, displayTitle?: string | null, isHeadless: boolean, favicon?: string | null, headerColor?: string | null, metaTags?: string | null, isTeam: boolean, urlPattern: UrlPattern, _id: string, domainInfo: { __typename?: 'DomainInfo', hashnodeSubdomain?: string | null, domain?: { __typename?: 'DomainStatus', host: string, ready: boolean } | null } } | null, comments: { __typename?: 'PostCommentConnection', edges: Array<{ __typename?: 'PostCommentEdge', node: { __typename?: 'Comment', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } }, coverImage?: { __typename?: 'PostCoverImage', isPortrait: boolean, url: string } | null, contributors: Array<{ __typename?: 'User', name: string, username: string, _id: string, photo?: string | null }>, preferences: { __typename?: 'PostPreferences', disableComments: boolean } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } } };

export type RequiredPublicationFieldsFragment = { __typename?: 'Publication', url: string, canonicalURL: string, title: string, displayTitle?: string | null, isHeadless: boolean, favicon?: string | null, headerColor?: string | null, metaTags?: string | null, isTeam: boolean, urlPattern: UrlPattern, _id: string, domainInfo: { __typename?: 'DomainInfo', hashnodeSubdomain?: string | null, domain?: { __typename?: 'DomainStatus', host: string, ready: boolean } | null } };

export type RequiredPostFieldsFragment = { __typename?: 'Post', id: string, slug: string, replyCount: number, responseCount: number, brief?: string | null, subtitle?: string | null, bookmarked: boolean, views: number, url?: string | null, title: string, cuid?: string | null, _id: string, readTime: number, isFeatured: boolean, totalReactions: number, dateAdded: string, coverImage?: { __typename?: 'PostCoverImage', isPortrait: boolean, url: string } | null, contributors: Array<{ __typename?: 'User', name: string, username: string, _id: string, photo?: string | null }>, preferences: { __typename?: 'PostPreferences', disableComments: boolean } };

export type RequiredUserFieldsFragment = { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null };

export type RequiredSeriesFieldsFragment = { __typename?: 'Series', slug: string, name: string, cuid?: string | null, _id: string };

export type RequiredTagFieldsFragment = { __typename?: 'Tag', logo?: string | null, name: string, slug: string, _id: string };

export type TagsFeedQueryVariables = Exact<{
  slug: Scalars['String'];
  first: Scalars['Int'];
  filter: TagPostConnectionFilter;
  after?: InputMaybe<Scalars['String']>;
}>;


export type TagsFeedQuery = { __typename?: 'Query', tag?: { __typename?: 'Tag', id: string, feed: { __typename?: 'FeedPostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, slug: string, replyCount: number, responseCount: number, brief?: string | null, subtitle?: string | null, bookmarked: boolean, views: number, url?: string | null, title: string, cuid?: string | null, _id: string, readTime: number, isFeatured: boolean, totalReactions: number, dateAdded: string, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, series?: { __typename?: 'Series', slug: string, name: string, cuid?: string | null, _id: string } | null, tags?: Array<{ __typename?: 'Tag', logo?: string | null, name: string, slug: string, _id: string }> | null, publication?: { __typename?: 'Publication', url: string, canonicalURL: string, title: string, displayTitle?: string | null, isHeadless: boolean, favicon?: string | null, headerColor?: string | null, metaTags?: string | null, isTeam: boolean, urlPattern: UrlPattern, _id: string, domainInfo: { __typename?: 'DomainInfo', hashnodeSubdomain?: string | null, domain?: { __typename?: 'DomainStatus', host: string, ready: boolean } | null } } | null, comments: { __typename?: 'PostCommentConnection', edges: Array<{ __typename?: 'PostCommentEdge', node: { __typename?: 'Comment', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } }, coverImage?: { __typename?: 'PostCoverImage', isPortrait: boolean, url: string } | null, contributors: Array<{ __typename?: 'User', name: string, username: string, _id: string, photo?: string | null }>, preferences: { __typename?: 'PostPreferences', disableComments: boolean } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage?: boolean | null } } } | null };

export type TagsPageInitialQueryVariables = Exact<{
  slug: Scalars['String'];
  first: Scalars['Int'];
  filter: TagPostConnectionFilter;
}>;


export type TagsPageInitialQuery = { __typename?: 'Query', tag?: { __typename?: 'Tag', followersCount: number, id: string, logo?: string | null, name: string, postsCount: number, slug: string, tagline?: string | null, info?: { __typename?: 'Content', html: string } | null, trending: { __typename?: 'FeedPostConnection', edges: Array<{ __typename?: 'PostEdge', node: { __typename?: 'Post', id: string, slug: string, replyCount: number, responseCount: number, brief?: string | null, subtitle?: string | null, bookmarked: boolean, views: number, url?: string | null, title: string, cuid?: string | null, _id: string, readTime: number, isFeatured: boolean, totalReactions: number, dateAdded: string, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, series?: { __typename?: 'Series', slug: string, name: string, cuid?: string | null, _id: string } | null, tags?: Array<{ __typename?: 'Tag', logo?: string | null, name: string, slug: string, _id: string }> | null, publication?: { __typename?: 'Publication', url: string, canonicalURL: string, title: string, displayTitle?: string | null, isHeadless: boolean, favicon?: string | null, headerColor?: string | null, metaTags?: string | null, isTeam: boolean, urlPattern: UrlPattern, _id: string, domainInfo: { __typename?: 'DomainInfo', hashnodeSubdomain?: string | null, domain?: { __typename?: 'DomainStatus', host: string, ready: boolean } | null } } | null, comments: { __typename?: 'PostCommentConnection', edges: Array<{ __typename?: 'PostCommentEdge', node: { __typename?: 'Comment', id: string, dateAdded: string, stamp?: string | null, totalReactions: number, author: { __typename?: 'User', name: string, isPro: boolean, username: string, _id: string, photo?: string | null }, content: { __typename?: 'Content', html: string, markdown: string, text: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } }, coverImage?: { __typename?: 'PostCoverImage', isPortrait: boolean, url: string } | null, contributors: Array<{ __typename?: 'User', name: string, username: string, _id: string, photo?: string | null }>, preferences: { __typename?: 'PostPreferences', disableComments: boolean } } }> } } | null };

export type SignUpUserMutationVariables = Exact<{
  input: SignUpUserInput;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'SignUpUserPayload', ssoAuthUrl: string, profile: { __typename?: 'MyUser', id: string, name: string, profilePicture?: string | null, email?: string | null, username: string, unsubscribeCode?: string | null, provider?: string | null } } };

export type UploadImageByUrlv2MutationVariables = Exact<{
  input: UploadImageInput;
}>;


export type UploadImageByUrlv2Mutation = { __typename?: 'Mutation', uploadImageByURLV2: { __typename?: 'UploadImagePayload', imageURL: string } };

export type CreateImageUploadUrlMutationVariables = Exact<{
  input: CreateImageUploadInput;
}>;


export type CreateImageUploadUrlMutation = { __typename?: 'Mutation', createImageUploadURL: { __typename?: 'CreateImageUploadPayload', presignedPost: { __typename?: 'PresignedPost', url: string, fields: Record<string, unknown> } } };

// @ts-ignore
export const RequiredCommentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredCommentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"photo"},"name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"isPro"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"markdown"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateAdded"}},{"kind":"Field","name":{"kind":"Name","value":"stamp"}},{"kind":"Field","name":{"kind":"Name","value":"totalReactions"}}]}}]} as unknown as DocumentNode<RequiredCommentFieldsFragment, unknown>;
// @ts-ignore
export const RequiredTopDiscussionCommentConnectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredTopDiscussionCommentConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"photo"},"name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"isPro"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RequiredTopDiscussionCommentConnectionFragment, unknown>;
// @ts-ignore
export const RequiredCommentConnectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredCommentConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredCommentFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},...RequiredCommentFieldsFragmentDoc.definitions]} as unknown as DocumentNode<RequiredCommentConnectionFragment, unknown>;
// @ts-ignore
export const RequiredReplyFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredReplyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Reply"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"photo"},"name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"isPro"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"markdown"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateAdded"}},{"kind":"Field","name":{"kind":"Name","value":"stamp"}},{"kind":"Field","name":{"kind":"Name","value":"totalReactions"}}]}}]} as unknown as DocumentNode<RequiredReplyFieldsFragment, unknown>;
// @ts-ignore
export const RequiredReplyConnectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredReplyConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CommentReplyConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredReplyFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},...RequiredReplyFieldsFragmentDoc.definitions]} as unknown as DocumentNode<RequiredReplyConnectionFragment, unknown>;
// @ts-ignore
export const RequiredCommentWithRepliesFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredCommentWithRepliesFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredCommentFields"}},{"kind":"Field","name":{"kind":"Name","value":"replies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredReplyConnection"}}]}}]}},...RequiredCommentFieldsFragmentDoc.definitions,...RequiredReplyConnectionFragmentDoc.definitions]} as unknown as DocumentNode<RequiredCommentWithRepliesFieldsFragment, unknown>;
// @ts-ignore
export const RequiredCommentWithRepliesConnectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredCommentWithRepliesConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredCommentWithRepliesFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},...RequiredCommentWithRepliesFieldsFragmentDoc.definitions]} as unknown as DocumentNode<RequiredCommentWithRepliesConnectionFragment, unknown>;
// @ts-ignore
export const RequiredTopCommenterFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredTopCommenterFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"photo"},"name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"isPro"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<RequiredTopCommenterFieldsFragment, unknown>;
// @ts-ignore
export const RequiredPostCommenterConnectionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredPostCommenterConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommenterConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredTopCommenterFields"}}]}}]}}]}},...RequiredTopCommenterFieldsFragmentDoc.definitions]} as unknown as DocumentNode<RequiredPostCommenterConnectionFragment, unknown>;
// @ts-ignore
export const RequiredPublicationFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredPublicationFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"canonicalURL"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"isHeadless"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"headerColor"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"domainInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hashnodeSubdomain"}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"host"}},{"kind":"Field","name":{"kind":"Name","value":"ready"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"urlPattern"}}]}}]} as unknown as DocumentNode<RequiredPublicationFieldsFragment, unknown>;
// @ts-ignore
export const RequiredPostFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredPostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isPortrait"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"readTime"},"name":{"kind":"Name","value":"readTimeInMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"replyCount"}},{"kind":"Field","name":{"kind":"Name","value":"responseCount"}},{"kind":"Field","name":{"kind":"Name","value":"brief"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","alias":{"kind":"Name","value":"isFeatured"},"name":{"kind":"Name","value":"featured"}},{"kind":"Field","name":{"kind":"Name","value":"contributors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"photo"},"name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookmarked"}},{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","alias":{"kind":"Name","value":"totalReactions"},"name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"dateAdded"},"name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"cuid"}},{"kind":"Field","name":{"kind":"Name","value":"preferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disableComments"}}]}}]}}]} as unknown as DocumentNode<RequiredPostFieldsFragment, unknown>;
// @ts-ignore
export const RequiredUserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"photo"},"name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"isPro"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<RequiredUserFieldsFragment, unknown>;
// @ts-ignore
export const RequiredSeriesFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredSeriesFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Series"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cuid"}}]}}]} as unknown as DocumentNode<RequiredSeriesFieldsFragment, unknown>;
// @ts-ignore
export const RequiredTagFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequiredTagFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<RequiredTagFieldsFragment, unknown>;
// @ts-ignore
export const CheckGitHubBackupEnabledDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckGitHubBackupEnabled"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isGitHubBackupEnabled"}}]}}]}}]} as unknown as DocumentNode<CheckGitHubBackupEnabledQuery, CheckGitHubBackupEnabledQueryVariables>;
// @ts-ignore
export const LastDraftBackupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LastDraftBackup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"draft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastSuccessfulBackupAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastFailedBackupAt"}}]}}]}}]} as unknown as DocumentNode<LastDraftBackupQuery, LastDraftBackupQueryVariables>;
// @ts-ignore
export const PublicationActiveStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PublicationActiveStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<PublicationActiveStatusQuery, PublicationActiveStatusQueryVariables>;
// @ts-ignore
export const TopDiscussionsFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TopDiscussionsFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeComments"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topDiscussions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"totalReactions"},"name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"responseCount"}},{"kind":"Field","name":{"kind":"Name","value":"replyCount"}},{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"photo"},"name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"isPro"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"EnumValue","value":"TOP"}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeComments"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredTopDiscussionCommentConnection"}}]}}]}}]}}]}}]}},...RequiredTopDiscussionCommentConnectionFragmentDoc.definitions]} as unknown as DocumentNode<TopDiscussionsFeedQuery, TopDiscussionsFeedQueryVariables>;
// @ts-ignore
export const DiscussionsTopCommentersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DiscussionsTopCommenters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topCommenters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredTopCommenterFields"}}]}}]}}]}}]}},...RequiredTopCommenterFieldsFragmentDoc.definitions]} as unknown as DocumentNode<DiscussionsTopCommentersQuery, DiscussionsTopCommentersQueryVariables>;
// @ts-ignore
export const RecentPostsFromBlogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RecentPostsFromBlog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"host"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationPostConnectionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"host"},"value":{"kind":"Variable","name":{"kind":"Name","value":"host"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"dateAdded"},"name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"views"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<RecentPostsFromBlogQuery, RecentPostsFromBlogQueryVariables>;
// @ts-ignore
export const ToggleBetaFeatureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleBetaFeature"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ToggleBlogBetaFeatureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleBlogBetaFeature"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"betaFeature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<ToggleBetaFeatureMutation, ToggleBetaFeatureMutationVariables>;
// @ts-ignore
export const RecommendedTagsV2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RecommendedTagsV2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recommendedTagsV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"postsCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<RecommendedTagsV2Query, RecommendedTagsV2QueryVariables>;
// @ts-ignore
export const RecommendedPublicationsV2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RecommendedPublicationsV2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recommendedPublicationsV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"displayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"}},{"kind":"Field","name":{"kind":"Name","value":"isTeam"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<RecommendedPublicationsV2Query, RecommendedPublicationsV2QueryVariables>;
// @ts-ignore
export const PopularTagsV2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PopularTagsV2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PopularTagsFilterV2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"popularTagsV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"_id"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"postsCountInPeriod"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<PopularTagsV2Query, PopularTagsV2QueryVariables>;
// @ts-ignore
export const ActivateFreeTrialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ActivateFreeTrial"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateFreeTrial"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"freeTrial"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasFreeTrialAccess"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ActivateFreeTrialMutation, ActivateFreeTrialMutationVariables>;
// @ts-ignore
export const ReschedulePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ReschedulePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReschedulePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reschedulePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payload"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ReschedulePostMutation, ReschedulePostMutationVariables>;
// @ts-ignore
export const PublishPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PublishPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublishPostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<PublishPostMutation, PublishPostMutationVariables>;
// @ts-ignore
export const DiscussionsFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DiscussionsFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"discussions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredPostFields"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredUserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredSeriesFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredTagFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredPublicationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"2"}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"EnumValue","value":"TOP"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredCommentWithRepliesConnection"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}},...RequiredPostFieldsFragmentDoc.definitions,...RequiredUserFieldsFragmentDoc.definitions,...RequiredSeriesFieldsFragmentDoc.definitions,...RequiredTagFieldsFragmentDoc.definitions,...RequiredPublicationFieldsFragmentDoc.definitions,...RequiredCommentWithRepliesConnectionFragmentDoc.definitions]} as unknown as DocumentNode<DiscussionsFeedQuery, DiscussionsFeedQueryVariables>;
// @ts-ignore
export const PostCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentsFirst"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentsSortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentsFirst"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentsSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredCommentWithRepliesConnection"}}]}}]}}]}},...RequiredCommentWithRepliesConnectionFragmentDoc.definitions]} as unknown as DocumentNode<PostCommentsQuery, PostCommentsQueryVariables>;
// @ts-ignore
export const CommentsWithReactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CommentsWithReactions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentsFirst"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentsSortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostCommentSortBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repliesFirst"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentsFirst"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentsSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalReactions"}},{"kind":"Field","name":{"kind":"Name","value":"myTotalReactions"}},{"kind":"Field","name":{"kind":"Name","value":"replies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repliesFirst"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalReactions"}},{"kind":"Field","name":{"kind":"Name","value":"myTotalReactions"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CommentsWithReactionsQuery, CommentsWithReactionsQueryVariables>;
// @ts-ignore
export const PostDiscussionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostDiscussion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredPostFields"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ogMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredUserFields"}},{"kind":"Field","name":{"kind":"Name","value":"tagline"}}]}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredSeriesFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredTagFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredPublicationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"50"}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"EnumValue","value":"TOP"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredCommentWithRepliesConnection"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commenters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"EnumValue","value":"POPULAR"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredPostCommenterConnection"}}]}}]}}]}},...RequiredPostFieldsFragmentDoc.definitions,...RequiredUserFieldsFragmentDoc.definitions,...RequiredSeriesFieldsFragmentDoc.definitions,...RequiredTagFieldsFragmentDoc.definitions,...RequiredPublicationFieldsFragmentDoc.definitions,...RequiredCommentWithRepliesConnectionFragmentDoc.definitions,...RequiredPostCommenterConnectionFragmentDoc.definitions]} as unknown as DocumentNode<PostDiscussionQuery, PostDiscussionQueryVariables>;
// @ts-ignore
export const FeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Feed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FeedFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentsFirst"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredPostFields"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredUserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredSeriesFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredTagFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredPublicationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentsFirst"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"EnumValue","value":"TOP"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredCommentConnection"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}},...RequiredPostFieldsFragmentDoc.definitions,...RequiredUserFieldsFragmentDoc.definitions,...RequiredSeriesFieldsFragmentDoc.definitions,...RequiredTagFieldsFragmentDoc.definitions,...RequiredPublicationFieldsFragmentDoc.definitions,...RequiredCommentConnectionFragmentDoc.definitions]} as unknown as DocumentNode<FeedQuery, FeedQueryVariables>;
// @ts-ignore
export const TagsFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TagsFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TagPostConnectionFilter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"feed"},"name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredPostFields"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredUserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredSeriesFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredTagFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredPublicationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"EnumValue","value":"TOP"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredCommentConnection"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]}},...RequiredPostFieldsFragmentDoc.definitions,...RequiredUserFieldsFragmentDoc.definitions,...RequiredSeriesFieldsFragmentDoc.definitions,...RequiredTagFieldsFragmentDoc.definitions,...RequiredPublicationFieldsFragmentDoc.definitions,...RequiredCommentConnectionFragmentDoc.definitions]} as unknown as DocumentNode<TagsFeedQuery, TagsFeedQueryVariables>;
// @ts-ignore
export const TagsPageInitialDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TagsPageInitial"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TagPostConnectionFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followersCount"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"postsCount"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"tagline"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"trending"},"name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredPostFields"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredUserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredSeriesFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredTagFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredPublicationFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"EnumValue","value":"TOP"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequiredCommentConnection"}}]}}]}}]}}]}}]}}]}},...RequiredPostFieldsFragmentDoc.definitions,...RequiredUserFieldsFragmentDoc.definitions,...RequiredSeriesFieldsFragmentDoc.definitions,...RequiredTagFieldsFragmentDoc.definitions,...RequiredPublicationFieldsFragmentDoc.definitions,...RequiredCommentConnectionFragmentDoc.definitions]} as unknown as DocumentNode<TagsPageInitialQuery, TagsPageInitialQueryVariables>;
// @ts-ignore
export const SignUpUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUpUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUpUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"unsubscribeCode"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ssoAuthUrl"}}]}}]}}]} as unknown as DocumentNode<SignUpUserMutation, SignUpUserMutationVariables>;
// @ts-ignore
export const UploadImageByUrlv2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadImageByURLV2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UploadImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadImageByURLV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageURL"}}]}}]}}]} as unknown as DocumentNode<UploadImageByUrlv2Mutation, UploadImageByUrlv2MutationVariables>;
// @ts-ignore
export const CreateImageUploadUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateImageUploadURL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateImageUploadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createImageUploadURL"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"presignedPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"fields"}}]}}]}}]}}]} as unknown as DocumentNode<CreateImageUploadUrlMutation, CreateImageUploadUrlMutationVariables>;