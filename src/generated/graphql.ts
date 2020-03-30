export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Internal = {
   __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
   __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Query = {
   __typename?: 'Query';
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  wordpressSiteMetadata?: Maybe<Wordpress__Site_Metadata>;
  allWordpressSiteMetadata: Wordpress__Site_MetadataConnection;
  wordpressPost?: Maybe<Wordpress__Post>;
  allWordpressPost: Wordpress__PostConnection;
  wordpressPage?: Maybe<Wordpress__Page>;
  allWordpressPage: Wordpress__PageConnection;
  wordpressWpTaxonomies?: Maybe<Wordpress__Wp_Taxonomies>;
  allWordpressWpTaxonomies: Wordpress__Wp_TaxonomiesConnection;
  wordpressCategory?: Maybe<Wordpress__Category>;
  allWordpressCategory: Wordpress__CategoryConnection;
  wordpressTag?: Maybe<Wordpress__Tag>;
  allWordpressTag: Wordpress__TagConnection;
  wordpressWpUsers?: Maybe<Wordpress__Wp_Users>;
  allWordpressWpUsers: Wordpress__Wp_UsersConnection;
  wordpressAcfOptions?: Maybe<Wordpress__Acf_Options>;
  allWordpressAcfOptions: Wordpress__Acf_OptionsConnection;
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressSiteMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  home?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressSiteMetadataArgs = {
  filter?: Maybe<Wordpress__Site_MetadataFilterInput>;
  sort?: Maybe<Wordpress__Site_MetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  tags?: Maybe<Wordpress__TagFilterListInput>;
  categories?: Maybe<Wordpress__CategoryFilterListInput>;
  _links?: Maybe<Wordpress__Post_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressPostArgs = {
  filter?: Maybe<Wordpress__PostFilterInput>;
  sort?: Maybe<Wordpress__PostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  menu_order?: Maybe<IntQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  _links?: Maybe<Wordpress__Page_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressPageArgs = {
  filter?: Maybe<Wordpress__PageFilterInput>;
  sort?: Maybe<Wordpress__PageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpTaxonomiesArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  types?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  rest_base?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Taxonomies_LinksFilterInput>;
};


export type QueryAllWordpressWpTaxonomiesArgs = {
  filter?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  sort?: Maybe<Wordpress__Wp_TaxonomiesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  taxonomy?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  _links?: Maybe<Wordpress__Category_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressCategoryArgs = {
  filter?: Maybe<Wordpress__CategoryFilterInput>;
  sort?: Maybe<Wordpress__CategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressTagArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  _links?: Maybe<Wordpress__Tag_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressTagArgs = {
  filter?: Maybe<Wordpress__TagFilterInput>;
  sort?: Maybe<Wordpress__TagSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpUsersArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  avatar_urls?: Maybe<Wordpress__Wp_UsersAvatar_UrlsFilterInput>;
  authored_wordpress__POST?: Maybe<Wordpress__PostFilterListInput>;
  authored_wordpress__PAGE?: Maybe<Wordpress__PageFilterListInput>;
  _links?: Maybe<Wordpress__Wp_Users_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressWpUsersArgs = {
  filter?: Maybe<Wordpress__Wp_UsersFilterInput>;
  sort?: Maybe<Wordpress__Wp_UsersSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressAcfOptionsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressAcfOptionsArgs = {
  filter?: Maybe<Wordpress__Acf_OptionsFilterInput>;
  sort?: Maybe<Wordpress__Acf_OptionsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
   __typename?: 'Site';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteConnection = {
   __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
   __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataSocialTwitter = 'siteMetadata___social___twitter',
  SiteMetadataMenuLinks = 'siteMetadata___menuLinks',
  SiteMetadataMenuLinksName = 'siteMetadata___menuLinks___name',
  SiteMetadataMenuLinksLink = 'siteMetadata___menuLinks___link',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime'
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
   __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
   __typename?: 'SitePage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  path?: Maybe<Scalars['String']>;
  internalComponentName?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  componentChunkName?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
   __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
   __typename?: 'SitePageContext';
  id?: Maybe<Scalars['Int']>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
};

export type SitePageEdge = {
   __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextId = 'context___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsBaseUrl = 'pluginCreator___pluginOptions___baseUrl',
  PluginCreatorPluginOptionsProtocol = 'pluginCreator___pluginOptions___protocol',
  PluginCreatorPluginOptionsHostingWpcom = 'pluginCreator___pluginOptions___hostingWPCOM',
  PluginCreatorPluginOptionsUseAcf = 'pluginCreator___pluginOptions___useACF',
  PluginCreatorPluginOptionsVerboseOutput = 'pluginCreator___pluginOptions___verboseOutput',
  PluginCreatorPluginOptionsPerPage = 'pluginCreator___pluginOptions___perPage',
  PluginCreatorPluginOptionsSearchAndReplaceContentUrlsSourceUrl = 'pluginCreator___pluginOptions___searchAndReplaceContentUrls___sourceUrl',
  PluginCreatorPluginOptionsSearchAndReplaceContentUrlsReplacementUrl = 'pluginCreator___pluginOptions___searchAndReplaceContentUrls___replacementUrl',
  PluginCreatorPluginOptionsConcurrentRequests = 'pluginCreator___pluginOptions___concurrentRequests',
  PluginCreatorPluginOptionsIncludedRoutes = 'pluginCreator___pluginOptions___includedRoutes',
  PluginCreatorPluginOptionsPathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
   __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
   __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
   __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
   __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsBaseUrl = 'pluginOptions___baseUrl',
  PluginOptionsProtocol = 'pluginOptions___protocol',
  PluginOptionsHostingWpcom = 'pluginOptions___hostingWPCOM',
  PluginOptionsUseAcf = 'pluginOptions___useACF',
  PluginOptionsVerboseOutput = 'pluginOptions___verboseOutput',
  PluginOptionsPerPage = 'pluginOptions___perPage',
  PluginOptionsSearchAndReplaceContentUrlsSourceUrl = 'pluginOptions___searchAndReplaceContentUrls___sourceUrl',
  PluginOptionsSearchAndReplaceContentUrlsReplacementUrl = 'pluginOptions___searchAndReplaceContentUrls___replacementUrl',
  PluginOptionsConcurrentRequests = 'pluginOptions___concurrentRequests',
  PluginOptionsIncludedRoutes = 'pluginOptions___includedRoutes',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
   __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
   __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
   __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
   __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
   __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
   __typename?: 'SitePluginPluginOptions';
  baseUrl?: Maybe<Scalars['String']>;
  protocol?: Maybe<Scalars['String']>;
  hostingWPCOM?: Maybe<Scalars['Boolean']>;
  useACF?: Maybe<Scalars['Boolean']>;
  verboseOutput?: Maybe<Scalars['Boolean']>;
  perPage?: Maybe<Scalars['Int']>;
  searchAndReplaceContentUrls?: Maybe<SitePluginPluginOptionsSearchAndReplaceContentUrls>;
  concurrentRequests?: Maybe<Scalars['Int']>;
  includedRoutes?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathToConfigModule?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  baseUrl?: Maybe<StringQueryOperatorInput>;
  protocol?: Maybe<StringQueryOperatorInput>;
  hostingWPCOM?: Maybe<BooleanQueryOperatorInput>;
  useACF?: Maybe<BooleanQueryOperatorInput>;
  verboseOutput?: Maybe<BooleanQueryOperatorInput>;
  perPage?: Maybe<IntQueryOperatorInput>;
  searchAndReplaceContentUrls?: Maybe<SitePluginPluginOptionsSearchAndReplaceContentUrlsFilterInput>;
  concurrentRequests?: Maybe<IntQueryOperatorInput>;
  includedRoutes?: Maybe<StringQueryOperatorInput>;
  pathToConfigModule?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsSearchAndReplaceContentUrls = {
   __typename?: 'SitePluginPluginOptionsSearchAndReplaceContentUrls';
  sourceUrl?: Maybe<Scalars['String']>;
  replacementUrl?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSearchAndReplaceContentUrlsFilterInput = {
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  replacementUrl?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
   __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  social?: Maybe<SiteSiteMetadataSocial>;
  menuLinks?: Maybe<Array<Maybe<SiteSiteMetadataMenuLinks>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  social?: Maybe<SiteSiteMetadataSocialFilterInput>;
  menuLinks?: Maybe<SiteSiteMetadataMenuLinksFilterListInput>;
};

export type SiteSiteMetadataMenuLinks = {
   __typename?: 'SiteSiteMetadataMenuLinks';
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataMenuLinksFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataMenuLinksFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataMenuLinksFilterInput>;
};

export type SiteSiteMetadataSocial = {
   __typename?: 'SiteSiteMetadataSocial';
  twitter?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataSocialFilterInput = {
  twitter?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_Options = Node & {
   __typename?: 'wordpress__acf_options';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_OptionsConnection = {
   __typename?: 'wordpress__acf_optionsConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_OptionsEdge>;
  nodes: Array<Wordpress__Acf_Options>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Acf_OptionsGroupConnection>;
};


export type Wordpress__Acf_OptionsConnectionDistinctArgs = {
  field: Wordpress__Acf_OptionsFieldsEnum;
};


export type Wordpress__Acf_OptionsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Acf_OptionsFieldsEnum;
};

export type Wordpress__Acf_OptionsEdge = {
   __typename?: 'wordpress__acf_optionsEdge';
  next?: Maybe<Wordpress__Acf_Options>;
  node: Wordpress__Acf_Options;
  previous?: Maybe<Wordpress__Acf_Options>;
};

export enum Wordpress__Acf_OptionsFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id'
}

export type Wordpress__Acf_OptionsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Acf_OptionsGroupConnection = {
   __typename?: 'wordpress__acf_optionsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_OptionsEdge>;
  nodes: Array<Wordpress__Acf_Options>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_OptionsSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_OptionsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Category = Node & {
   __typename?: 'wordpress__CATEGORY';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  wordpress_parent?: Maybe<Scalars['Int']>;
  taxonomy?: Maybe<Wordpress__Wp_Taxonomies>;
  _links?: Maybe<Wordpress__Category_Links>;
  path?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_Links = {
   __typename?: 'wordpress__CATEGORY_links';
  self?: Maybe<Array<Maybe<Wordpress__Category_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Category_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Category_LinksAbout>>>;
  wp_post_type?: Maybe<Array<Maybe<Wordpress__Category_LinksWp_Post_Type>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Category_LinksCuries>>>;
};

export type Wordpress__Category_LinksAbout = {
   __typename?: 'wordpress__CATEGORY_linksAbout';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Category_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksAboutFilterInput>;
};

export type Wordpress__Category_LinksCollection = {
   __typename?: 'wordpress__CATEGORY_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Category_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksCollectionFilterInput>;
};

export type Wordpress__Category_LinksCuries = {
   __typename?: 'wordpress__CATEGORY_linksCuries';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Category_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Category_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksCuriesFilterInput>;
};

export type Wordpress__Category_LinksFilterInput = {
  self?: Maybe<Wordpress__Category_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Category_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Category_LinksAboutFilterListInput>;
  wp_post_type?: Maybe<Wordpress__Category_LinksWp_Post_TypeFilterListInput>;
  curies?: Maybe<Wordpress__Category_LinksCuriesFilterListInput>;
};

export type Wordpress__Category_LinksSelf = {
   __typename?: 'wordpress__CATEGORY_linksSelf';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Category_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksSelfFilterInput>;
};

export type Wordpress__Category_LinksWp_Post_Type = {
   __typename?: 'wordpress__CATEGORY_linksWp_post_type';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_LinksWp_Post_TypeFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Category_LinksWp_Post_TypeFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksWp_Post_TypeFilterInput>;
};

export type Wordpress__CategoryConnection = {
   __typename?: 'wordpress__CATEGORYConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__CategoryEdge>;
  nodes: Array<Wordpress__Category>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__CategoryGroupConnection>;
};


export type Wordpress__CategoryConnectionDistinctArgs = {
  field: Wordpress__CategoryFieldsEnum;
};


export type Wordpress__CategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__CategoryFieldsEnum;
};

export type Wordpress__CategoryEdge = {
   __typename?: 'wordpress__CATEGORYEdge';
  next?: Maybe<Wordpress__Category>;
  node: Wordpress__Category;
  previous?: Maybe<Wordpress__Category>;
};

export enum Wordpress__CategoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Count = 'count',
  Description = 'description',
  Link = 'link',
  Name = 'name',
  Slug = 'slug',
  WordpressParent = 'wordpress_parent',
  TaxonomyId = 'taxonomy___id',
  TaxonomyParentId = 'taxonomy___parent___id',
  TaxonomyParentParentId = 'taxonomy___parent___parent___id',
  TaxonomyParentParentChildren = 'taxonomy___parent___parent___children',
  TaxonomyParentChildren = 'taxonomy___parent___children',
  TaxonomyParentChildrenId = 'taxonomy___parent___children___id',
  TaxonomyParentChildrenChildren = 'taxonomy___parent___children___children',
  TaxonomyParentInternalContent = 'taxonomy___parent___internal___content',
  TaxonomyParentInternalContentDigest = 'taxonomy___parent___internal___contentDigest',
  TaxonomyParentInternalDescription = 'taxonomy___parent___internal___description',
  TaxonomyParentInternalFieldOwners = 'taxonomy___parent___internal___fieldOwners',
  TaxonomyParentInternalIgnoreType = 'taxonomy___parent___internal___ignoreType',
  TaxonomyParentInternalMediaType = 'taxonomy___parent___internal___mediaType',
  TaxonomyParentInternalOwner = 'taxonomy___parent___internal___owner',
  TaxonomyParentInternalType = 'taxonomy___parent___internal___type',
  TaxonomyChildren = 'taxonomy___children',
  TaxonomyChildrenId = 'taxonomy___children___id',
  TaxonomyChildrenParentId = 'taxonomy___children___parent___id',
  TaxonomyChildrenParentChildren = 'taxonomy___children___parent___children',
  TaxonomyChildrenChildren = 'taxonomy___children___children',
  TaxonomyChildrenChildrenId = 'taxonomy___children___children___id',
  TaxonomyChildrenChildrenChildren = 'taxonomy___children___children___children',
  TaxonomyChildrenInternalContent = 'taxonomy___children___internal___content',
  TaxonomyChildrenInternalContentDigest = 'taxonomy___children___internal___contentDigest',
  TaxonomyChildrenInternalDescription = 'taxonomy___children___internal___description',
  TaxonomyChildrenInternalFieldOwners = 'taxonomy___children___internal___fieldOwners',
  TaxonomyChildrenInternalIgnoreType = 'taxonomy___children___internal___ignoreType',
  TaxonomyChildrenInternalMediaType = 'taxonomy___children___internal___mediaType',
  TaxonomyChildrenInternalOwner = 'taxonomy___children___internal___owner',
  TaxonomyChildrenInternalType = 'taxonomy___children___internal___type',
  TaxonomyInternalContent = 'taxonomy___internal___content',
  TaxonomyInternalContentDigest = 'taxonomy___internal___contentDigest',
  TaxonomyInternalDescription = 'taxonomy___internal___description',
  TaxonomyInternalFieldOwners = 'taxonomy___internal___fieldOwners',
  TaxonomyInternalIgnoreType = 'taxonomy___internal___ignoreType',
  TaxonomyInternalMediaType = 'taxonomy___internal___mediaType',
  TaxonomyInternalOwner = 'taxonomy___internal___owner',
  TaxonomyInternalType = 'taxonomy___internal___type',
  TaxonomyWordpressId = 'taxonomy___wordpress_id',
  TaxonomyName = 'taxonomy___name',
  TaxonomySlug = 'taxonomy___slug',
  TaxonomyDescription = 'taxonomy___description',
  TaxonomyTypes = 'taxonomy___types',
  TaxonomyHierarchical = 'taxonomy___hierarchical',
  TaxonomyRestBase = 'taxonomy___rest_base',
  TaxonomyLinksCollection = 'taxonomy____links___collection',
  TaxonomyLinksCollectionHref = 'taxonomy____links___collection___href',
  TaxonomyLinksWpItems = 'taxonomy____links___wp_items',
  TaxonomyLinksWpItemsHref = 'taxonomy____links___wp_items___href',
  TaxonomyLinksCuries = 'taxonomy____links___curies',
  TaxonomyLinksCuriesName = 'taxonomy____links___curies___name',
  TaxonomyLinksCuriesHref = 'taxonomy____links___curies___href',
  TaxonomyLinksCuriesTemplated = 'taxonomy____links___curies___templated',
  LinksSelf = '_links___self',
  LinksSelfHref = '_links___self___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksAbout = '_links___about',
  LinksAboutHref = '_links___about___href',
  LinksWpPostType = '_links___wp_post_type',
  LinksWpPostTypeHref = '_links___wp_post_type___href',
  LinksCuries = '_links___curies',
  LinksCuriesName = '_links___curies___name',
  LinksCuriesHref = '_links___curies___href',
  LinksCuriesTemplated = '_links___curies___templated',
  Path = 'path'
}

export type Wordpress__CategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  taxonomy?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  _links?: Maybe<Wordpress__Category_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__CategoryFilterListInput = {
  elemMatch?: Maybe<Wordpress__CategoryFilterInput>;
};

export type Wordpress__CategoryGroupConnection = {
   __typename?: 'wordpress__CATEGORYGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__CategoryEdge>;
  nodes: Array<Wordpress__Category>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__CategorySortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__CategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Page = Node & {
   __typename?: 'wordpress__PAGE';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  guid?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  wordpress_parent?: Maybe<Scalars['Int']>;
  menu_order?: Maybe<Scalars['Int']>;
  comment_status?: Maybe<Scalars['String']>;
  ping_status?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  author?: Maybe<Wordpress__Wp_Users>;
  _links?: Maybe<Wordpress__Page_Links>;
  path?: Maybe<Scalars['String']>;
};


export type Wordpress__PageDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Wordpress__PageModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_Links = {
   __typename?: 'wordpress__PAGE_links';
  self?: Maybe<Array<Maybe<Wordpress__Page_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Page_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Page_LinksAbout>>>;
  author?: Maybe<Array<Maybe<Wordpress__Page_LinksAuthor>>>;
  replies?: Maybe<Array<Maybe<Wordpress__Page_LinksReplies>>>;
  version_history?: Maybe<Array<Maybe<Wordpress__Page_LinksVersion_History>>>;
  predecessor_version?: Maybe<Array<Maybe<Wordpress__Page_LinksPredecessor_Version>>>;
  wp_attachment?: Maybe<Array<Maybe<Wordpress__Page_LinksWp_Attachment>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Page_LinksCuries>>>;
};

export type Wordpress__Page_LinksAbout = {
   __typename?: 'wordpress__PAGE_linksAbout';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksAboutFilterInput>;
};

export type Wordpress__Page_LinksAuthor = {
   __typename?: 'wordpress__PAGE_linksAuthor';
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksAuthorFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksAuthorFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksAuthorFilterInput>;
};

export type Wordpress__Page_LinksCollection = {
   __typename?: 'wordpress__PAGE_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksCollectionFilterInput>;
};

export type Wordpress__Page_LinksCuries = {
   __typename?: 'wordpress__PAGE_linksCuries';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Page_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Page_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksCuriesFilterInput>;
};

export type Wordpress__Page_LinksFilterInput = {
  self?: Maybe<Wordpress__Page_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Page_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Page_LinksAboutFilterListInput>;
  author?: Maybe<Wordpress__Page_LinksAuthorFilterListInput>;
  replies?: Maybe<Wordpress__Page_LinksRepliesFilterListInput>;
  version_history?: Maybe<Wordpress__Page_LinksVersion_HistoryFilterListInput>;
  predecessor_version?: Maybe<Wordpress__Page_LinksPredecessor_VersionFilterListInput>;
  wp_attachment?: Maybe<Wordpress__Page_LinksWp_AttachmentFilterListInput>;
  curies?: Maybe<Wordpress__Page_LinksCuriesFilterListInput>;
};

export type Wordpress__Page_LinksPredecessor_Version = {
   __typename?: 'wordpress__PAGE_linksPredecessor_version';
  wordpress_id?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksPredecessor_VersionFilterInput = {
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksPredecessor_VersionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksPredecessor_VersionFilterInput>;
};

export type Wordpress__Page_LinksReplies = {
   __typename?: 'wordpress__PAGE_linksReplies';
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksRepliesFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksRepliesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksRepliesFilterInput>;
};

export type Wordpress__Page_LinksSelf = {
   __typename?: 'wordpress__PAGE_linksSelf';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksSelfFilterInput>;
};

export type Wordpress__Page_LinksVersion_History = {
   __typename?: 'wordpress__PAGE_linksVersion_history';
  count?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksVersion_HistoryFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksVersion_HistoryFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksVersion_HistoryFilterInput>;
};

export type Wordpress__Page_LinksWp_Attachment = {
   __typename?: 'wordpress__PAGE_linksWp_attachment';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksWp_AttachmentFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksWp_AttachmentFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksWp_AttachmentFilterInput>;
};

export type Wordpress__PageConnection = {
   __typename?: 'wordpress__PAGEConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__PageEdge>;
  nodes: Array<Wordpress__Page>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__PageGroupConnection>;
};


export type Wordpress__PageConnectionDistinctArgs = {
  field: Wordpress__PageFieldsEnum;
};


export type Wordpress__PageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__PageFieldsEnum;
};

export type Wordpress__PageEdge = {
   __typename?: 'wordpress__PAGEEdge';
  next?: Maybe<Wordpress__Page>;
  node: Wordpress__Page;
  previous?: Maybe<Wordpress__Page>;
};

export enum Wordpress__PageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Date = 'date',
  Guid = 'guid',
  Modified = 'modified',
  Slug = 'slug',
  Status = 'status',
  Type = 'type',
  Link = 'link',
  Title = 'title',
  Content = 'content',
  Excerpt = 'excerpt',
  WordpressParent = 'wordpress_parent',
  MenuOrder = 'menu_order',
  CommentStatus = 'comment_status',
  PingStatus = 'ping_status',
  Template = 'template',
  AuthorId = 'author___id',
  AuthorParentId = 'author___parent___id',
  AuthorParentParentId = 'author___parent___parent___id',
  AuthorParentParentChildren = 'author___parent___parent___children',
  AuthorParentChildren = 'author___parent___children',
  AuthorParentChildrenId = 'author___parent___children___id',
  AuthorParentChildrenChildren = 'author___parent___children___children',
  AuthorParentInternalContent = 'author___parent___internal___content',
  AuthorParentInternalContentDigest = 'author___parent___internal___contentDigest',
  AuthorParentInternalDescription = 'author___parent___internal___description',
  AuthorParentInternalFieldOwners = 'author___parent___internal___fieldOwners',
  AuthorParentInternalIgnoreType = 'author___parent___internal___ignoreType',
  AuthorParentInternalMediaType = 'author___parent___internal___mediaType',
  AuthorParentInternalOwner = 'author___parent___internal___owner',
  AuthorParentInternalType = 'author___parent___internal___type',
  AuthorChildren = 'author___children',
  AuthorChildrenId = 'author___children___id',
  AuthorChildrenParentId = 'author___children___parent___id',
  AuthorChildrenParentChildren = 'author___children___parent___children',
  AuthorChildrenChildren = 'author___children___children',
  AuthorChildrenChildrenId = 'author___children___children___id',
  AuthorChildrenChildrenChildren = 'author___children___children___children',
  AuthorChildrenInternalContent = 'author___children___internal___content',
  AuthorChildrenInternalContentDigest = 'author___children___internal___contentDigest',
  AuthorChildrenInternalDescription = 'author___children___internal___description',
  AuthorChildrenInternalFieldOwners = 'author___children___internal___fieldOwners',
  AuthorChildrenInternalIgnoreType = 'author___children___internal___ignoreType',
  AuthorChildrenInternalMediaType = 'author___children___internal___mediaType',
  AuthorChildrenInternalOwner = 'author___children___internal___owner',
  AuthorChildrenInternalType = 'author___children___internal___type',
  AuthorInternalContent = 'author___internal___content',
  AuthorInternalContentDigest = 'author___internal___contentDigest',
  AuthorInternalDescription = 'author___internal___description',
  AuthorInternalFieldOwners = 'author___internal___fieldOwners',
  AuthorInternalIgnoreType = 'author___internal___ignoreType',
  AuthorInternalMediaType = 'author___internal___mediaType',
  AuthorInternalOwner = 'author___internal___owner',
  AuthorInternalType = 'author___internal___type',
  AuthorWordpressId = 'author___wordpress_id',
  AuthorName = 'author___name',
  AuthorUrl = 'author___url',
  AuthorDescription = 'author___description',
  AuthorLink = 'author___link',
  AuthorSlug = 'author___slug',
  AuthorAvatarUrlsWordpress_24 = 'author___avatar_urls___wordpress_24',
  AuthorAvatarUrlsWordpress_48 = 'author___avatar_urls___wordpress_48',
  AuthorAvatarUrlsWordpress_96 = 'author___avatar_urls___wordpress_96',
  AuthorAuthoredWordpressPost = 'author___authored_wordpress__POST',
  AuthorAuthoredWordpressPostId = 'author___authored_wordpress__POST___id',
  AuthorAuthoredWordpressPostParentId = 'author___authored_wordpress__POST___parent___id',
  AuthorAuthoredWordpressPostParentChildren = 'author___authored_wordpress__POST___parent___children',
  AuthorAuthoredWordpressPostChildren = 'author___authored_wordpress__POST___children',
  AuthorAuthoredWordpressPostChildrenId = 'author___authored_wordpress__POST___children___id',
  AuthorAuthoredWordpressPostChildrenChildren = 'author___authored_wordpress__POST___children___children',
  AuthorAuthoredWordpressPostInternalContent = 'author___authored_wordpress__POST___internal___content',
  AuthorAuthoredWordpressPostInternalContentDigest = 'author___authored_wordpress__POST___internal___contentDigest',
  AuthorAuthoredWordpressPostInternalDescription = 'author___authored_wordpress__POST___internal___description',
  AuthorAuthoredWordpressPostInternalFieldOwners = 'author___authored_wordpress__POST___internal___fieldOwners',
  AuthorAuthoredWordpressPostInternalIgnoreType = 'author___authored_wordpress__POST___internal___ignoreType',
  AuthorAuthoredWordpressPostInternalMediaType = 'author___authored_wordpress__POST___internal___mediaType',
  AuthorAuthoredWordpressPostInternalOwner = 'author___authored_wordpress__POST___internal___owner',
  AuthorAuthoredWordpressPostInternalType = 'author___authored_wordpress__POST___internal___type',
  AuthorAuthoredWordpressPostWordpressId = 'author___authored_wordpress__POST___wordpress_id',
  AuthorAuthoredWordpressPostDate = 'author___authored_wordpress__POST___date',
  AuthorAuthoredWordpressPostGuid = 'author___authored_wordpress__POST___guid',
  AuthorAuthoredWordpressPostModified = 'author___authored_wordpress__POST___modified',
  AuthorAuthoredWordpressPostSlug = 'author___authored_wordpress__POST___slug',
  AuthorAuthoredWordpressPostStatus = 'author___authored_wordpress__POST___status',
  AuthorAuthoredWordpressPostType = 'author___authored_wordpress__POST___type',
  AuthorAuthoredWordpressPostLink = 'author___authored_wordpress__POST___link',
  AuthorAuthoredWordpressPostTitle = 'author___authored_wordpress__POST___title',
  AuthorAuthoredWordpressPostContent = 'author___authored_wordpress__POST___content',
  AuthorAuthoredWordpressPostExcerpt = 'author___authored_wordpress__POST___excerpt',
  AuthorAuthoredWordpressPostCommentStatus = 'author___authored_wordpress__POST___comment_status',
  AuthorAuthoredWordpressPostPingStatus = 'author___authored_wordpress__POST___ping_status',
  AuthorAuthoredWordpressPostSticky = 'author___authored_wordpress__POST___sticky',
  AuthorAuthoredWordpressPostTemplate = 'author___authored_wordpress__POST___template',
  AuthorAuthoredWordpressPostFormat = 'author___authored_wordpress__POST___format',
  AuthorAuthoredWordpressPostAuthorId = 'author___authored_wordpress__POST___author___id',
  AuthorAuthoredWordpressPostAuthorChildren = 'author___authored_wordpress__POST___author___children',
  AuthorAuthoredWordpressPostAuthorWordpressId = 'author___authored_wordpress__POST___author___wordpress_id',
  AuthorAuthoredWordpressPostAuthorName = 'author___authored_wordpress__POST___author___name',
  AuthorAuthoredWordpressPostAuthorUrl = 'author___authored_wordpress__POST___author___url',
  AuthorAuthoredWordpressPostAuthorDescription = 'author___authored_wordpress__POST___author___description',
  AuthorAuthoredWordpressPostAuthorLink = 'author___authored_wordpress__POST___author___link',
  AuthorAuthoredWordpressPostAuthorSlug = 'author___authored_wordpress__POST___author___slug',
  AuthorAuthoredWordpressPostAuthorAuthoredWordpressPost = 'author___authored_wordpress__POST___author___authored_wordpress__POST',
  AuthorAuthoredWordpressPostAuthorAuthoredWordpressPage = 'author___authored_wordpress__POST___author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPostAuthorPath = 'author___authored_wordpress__POST___author___path',
  AuthorAuthoredWordpressPostTags = 'author___authored_wordpress__POST___tags',
  AuthorAuthoredWordpressPostTagsId = 'author___authored_wordpress__POST___tags___id',
  AuthorAuthoredWordpressPostTagsChildren = 'author___authored_wordpress__POST___tags___children',
  AuthorAuthoredWordpressPostTagsWordpressId = 'author___authored_wordpress__POST___tags___wordpress_id',
  AuthorAuthoredWordpressPostTagsCount = 'author___authored_wordpress__POST___tags___count',
  AuthorAuthoredWordpressPostTagsDescription = 'author___authored_wordpress__POST___tags___description',
  AuthorAuthoredWordpressPostTagsLink = 'author___authored_wordpress__POST___tags___link',
  AuthorAuthoredWordpressPostTagsName = 'author___authored_wordpress__POST___tags___name',
  AuthorAuthoredWordpressPostTagsSlug = 'author___authored_wordpress__POST___tags___slug',
  AuthorAuthoredWordpressPostTagsPath = 'author___authored_wordpress__POST___tags___path',
  AuthorAuthoredWordpressPostCategories = 'author___authored_wordpress__POST___categories',
  AuthorAuthoredWordpressPostCategoriesId = 'author___authored_wordpress__POST___categories___id',
  AuthorAuthoredWordpressPostCategoriesChildren = 'author___authored_wordpress__POST___categories___children',
  AuthorAuthoredWordpressPostCategoriesWordpressId = 'author___authored_wordpress__POST___categories___wordpress_id',
  AuthorAuthoredWordpressPostCategoriesCount = 'author___authored_wordpress__POST___categories___count',
  AuthorAuthoredWordpressPostCategoriesDescription = 'author___authored_wordpress__POST___categories___description',
  AuthorAuthoredWordpressPostCategoriesLink = 'author___authored_wordpress__POST___categories___link',
  AuthorAuthoredWordpressPostCategoriesName = 'author___authored_wordpress__POST___categories___name',
  AuthorAuthoredWordpressPostCategoriesSlug = 'author___authored_wordpress__POST___categories___slug',
  AuthorAuthoredWordpressPostCategoriesWordpressParent = 'author___authored_wordpress__POST___categories___wordpress_parent',
  AuthorAuthoredWordpressPostCategoriesPath = 'author___authored_wordpress__POST___categories___path',
  AuthorAuthoredWordpressPostLinksSelf = 'author___authored_wordpress__POST____links___self',
  AuthorAuthoredWordpressPostLinksCollection = 'author___authored_wordpress__POST____links___collection',
  AuthorAuthoredWordpressPostLinksAbout = 'author___authored_wordpress__POST____links___about',
  AuthorAuthoredWordpressPostLinksAuthor = 'author___authored_wordpress__POST____links___author',
  AuthorAuthoredWordpressPostLinksReplies = 'author___authored_wordpress__POST____links___replies',
  AuthorAuthoredWordpressPostLinksVersionHistory = 'author___authored_wordpress__POST____links___version_history',
  AuthorAuthoredWordpressPostLinksPredecessorVersion = 'author___authored_wordpress__POST____links___predecessor_version',
  AuthorAuthoredWordpressPostLinksWpAttachment = 'author___authored_wordpress__POST____links___wp_attachment',
  AuthorAuthoredWordpressPostLinksWpTerm = 'author___authored_wordpress__POST____links___wp_term',
  AuthorAuthoredWordpressPostLinksCuries = 'author___authored_wordpress__POST____links___curies',
  AuthorAuthoredWordpressPostLinksWpFeaturedmedia = 'author___authored_wordpress__POST____links___wp_featuredmedia',
  AuthorAuthoredWordpressPostPath = 'author___authored_wordpress__POST___path',
  AuthorAuthoredWordpressPostSource = 'author___authored_wordpress__POST___source',
  AuthorAuthoredWordpressPage = 'author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPageId = 'author___authored_wordpress__PAGE___id',
  AuthorAuthoredWordpressPageParentId = 'author___authored_wordpress__PAGE___parent___id',
  AuthorAuthoredWordpressPageParentChildren = 'author___authored_wordpress__PAGE___parent___children',
  AuthorAuthoredWordpressPageChildren = 'author___authored_wordpress__PAGE___children',
  AuthorAuthoredWordpressPageChildrenId = 'author___authored_wordpress__PAGE___children___id',
  AuthorAuthoredWordpressPageChildrenChildren = 'author___authored_wordpress__PAGE___children___children',
  AuthorAuthoredWordpressPageInternalContent = 'author___authored_wordpress__PAGE___internal___content',
  AuthorAuthoredWordpressPageInternalContentDigest = 'author___authored_wordpress__PAGE___internal___contentDigest',
  AuthorAuthoredWordpressPageInternalDescription = 'author___authored_wordpress__PAGE___internal___description',
  AuthorAuthoredWordpressPageInternalFieldOwners = 'author___authored_wordpress__PAGE___internal___fieldOwners',
  AuthorAuthoredWordpressPageInternalIgnoreType = 'author___authored_wordpress__PAGE___internal___ignoreType',
  AuthorAuthoredWordpressPageInternalMediaType = 'author___authored_wordpress__PAGE___internal___mediaType',
  AuthorAuthoredWordpressPageInternalOwner = 'author___authored_wordpress__PAGE___internal___owner',
  AuthorAuthoredWordpressPageInternalType = 'author___authored_wordpress__PAGE___internal___type',
  AuthorAuthoredWordpressPageWordpressId = 'author___authored_wordpress__PAGE___wordpress_id',
  AuthorAuthoredWordpressPageDate = 'author___authored_wordpress__PAGE___date',
  AuthorAuthoredWordpressPageGuid = 'author___authored_wordpress__PAGE___guid',
  AuthorAuthoredWordpressPageModified = 'author___authored_wordpress__PAGE___modified',
  AuthorAuthoredWordpressPageSlug = 'author___authored_wordpress__PAGE___slug',
  AuthorAuthoredWordpressPageStatus = 'author___authored_wordpress__PAGE___status',
  AuthorAuthoredWordpressPageType = 'author___authored_wordpress__PAGE___type',
  AuthorAuthoredWordpressPageLink = 'author___authored_wordpress__PAGE___link',
  AuthorAuthoredWordpressPageTitle = 'author___authored_wordpress__PAGE___title',
  AuthorAuthoredWordpressPageContent = 'author___authored_wordpress__PAGE___content',
  AuthorAuthoredWordpressPageExcerpt = 'author___authored_wordpress__PAGE___excerpt',
  AuthorAuthoredWordpressPageWordpressParent = 'author___authored_wordpress__PAGE___wordpress_parent',
  AuthorAuthoredWordpressPageMenuOrder = 'author___authored_wordpress__PAGE___menu_order',
  AuthorAuthoredWordpressPageCommentStatus = 'author___authored_wordpress__PAGE___comment_status',
  AuthorAuthoredWordpressPagePingStatus = 'author___authored_wordpress__PAGE___ping_status',
  AuthorAuthoredWordpressPageTemplate = 'author___authored_wordpress__PAGE___template',
  AuthorAuthoredWordpressPageAuthorId = 'author___authored_wordpress__PAGE___author___id',
  AuthorAuthoredWordpressPageAuthorChildren = 'author___authored_wordpress__PAGE___author___children',
  AuthorAuthoredWordpressPageAuthorWordpressId = 'author___authored_wordpress__PAGE___author___wordpress_id',
  AuthorAuthoredWordpressPageAuthorName = 'author___authored_wordpress__PAGE___author___name',
  AuthorAuthoredWordpressPageAuthorUrl = 'author___authored_wordpress__PAGE___author___url',
  AuthorAuthoredWordpressPageAuthorDescription = 'author___authored_wordpress__PAGE___author___description',
  AuthorAuthoredWordpressPageAuthorLink = 'author___authored_wordpress__PAGE___author___link',
  AuthorAuthoredWordpressPageAuthorSlug = 'author___authored_wordpress__PAGE___author___slug',
  AuthorAuthoredWordpressPageAuthorAuthoredWordpressPost = 'author___authored_wordpress__PAGE___author___authored_wordpress__POST',
  AuthorAuthoredWordpressPageAuthorAuthoredWordpressPage = 'author___authored_wordpress__PAGE___author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPageAuthorPath = 'author___authored_wordpress__PAGE___author___path',
  AuthorAuthoredWordpressPageLinksSelf = 'author___authored_wordpress__PAGE____links___self',
  AuthorAuthoredWordpressPageLinksCollection = 'author___authored_wordpress__PAGE____links___collection',
  AuthorAuthoredWordpressPageLinksAbout = 'author___authored_wordpress__PAGE____links___about',
  AuthorAuthoredWordpressPageLinksAuthor = 'author___authored_wordpress__PAGE____links___author',
  AuthorAuthoredWordpressPageLinksReplies = 'author___authored_wordpress__PAGE____links___replies',
  AuthorAuthoredWordpressPageLinksVersionHistory = 'author___authored_wordpress__PAGE____links___version_history',
  AuthorAuthoredWordpressPageLinksPredecessorVersion = 'author___authored_wordpress__PAGE____links___predecessor_version',
  AuthorAuthoredWordpressPageLinksWpAttachment = 'author___authored_wordpress__PAGE____links___wp_attachment',
  AuthorAuthoredWordpressPageLinksCuries = 'author___authored_wordpress__PAGE____links___curies',
  AuthorAuthoredWordpressPagePath = 'author___authored_wordpress__PAGE___path',
  AuthorLinksSelf = 'author____links___self',
  AuthorLinksSelfHref = 'author____links___self___href',
  AuthorLinksCollection = 'author____links___collection',
  AuthorLinksCollectionHref = 'author____links___collection___href',
  AuthorPath = 'author___path',
  LinksSelf = '_links___self',
  LinksSelfHref = '_links___self___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksAbout = '_links___about',
  LinksAboutHref = '_links___about___href',
  LinksAuthor = '_links___author',
  LinksAuthorEmbeddable = '_links___author___embeddable',
  LinksAuthorHref = '_links___author___href',
  LinksReplies = '_links___replies',
  LinksRepliesEmbeddable = '_links___replies___embeddable',
  LinksRepliesHref = '_links___replies___href',
  LinksVersionHistory = '_links___version_history',
  LinksVersionHistoryCount = '_links___version_history___count',
  LinksVersionHistoryHref = '_links___version_history___href',
  LinksPredecessorVersion = '_links___predecessor_version',
  LinksPredecessorVersionWordpressId = '_links___predecessor_version___wordpress_id',
  LinksPredecessorVersionHref = '_links___predecessor_version___href',
  LinksWpAttachment = '_links___wp_attachment',
  LinksWpAttachmentHref = '_links___wp_attachment___href',
  LinksCuries = '_links___curies',
  LinksCuriesName = '_links___curies___name',
  LinksCuriesHref = '_links___curies___href',
  LinksCuriesTemplated = '_links___curies___templated',
  Path = 'path'
}

export type Wordpress__PageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  menu_order?: Maybe<IntQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  _links?: Maybe<Wordpress__Page_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PageFilterListInput = {
  elemMatch?: Maybe<Wordpress__PageFilterInput>;
};

export type Wordpress__PageGroupConnection = {
   __typename?: 'wordpress__PAGEGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__PageEdge>;
  nodes: Array<Wordpress__Page>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__PageSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__PageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__PagEwordpress__PostUnion = Wordpress__Page | Wordpress__Post;

export type Wordpress__Post = Node & {
   __typename?: 'wordpress__POST';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  guid?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  comment_status?: Maybe<Scalars['String']>;
  ping_status?: Maybe<Scalars['String']>;
  sticky?: Maybe<Scalars['Boolean']>;
  template?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  author?: Maybe<Wordpress__Wp_Users>;
  tags?: Maybe<Array<Maybe<Wordpress__Tag>>>;
  categories?: Maybe<Array<Maybe<Wordpress__Category>>>;
  _links?: Maybe<Wordpress__Post_Links>;
  path?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};


export type Wordpress__PostDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Wordpress__PostModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_Links = {
   __typename?: 'wordpress__POST_links';
  self?: Maybe<Array<Maybe<Wordpress__Post_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Post_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Post_LinksAbout>>>;
  author?: Maybe<Array<Maybe<Wordpress__Post_LinksAuthor>>>;
  replies?: Maybe<Array<Maybe<Wordpress__Post_LinksReplies>>>;
  version_history?: Maybe<Array<Maybe<Wordpress__Post_LinksVersion_History>>>;
  predecessor_version?: Maybe<Array<Maybe<Wordpress__Post_LinksPredecessor_Version>>>;
  wp_attachment?: Maybe<Array<Maybe<Wordpress__Post_LinksWp_Attachment>>>;
  wp_term?: Maybe<Array<Maybe<Wordpress__Post_LinksWp_Term>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Post_LinksCuries>>>;
  wp_featuredmedia?: Maybe<Array<Maybe<Wordpress__Post_LinksWp_Featuredmedia>>>;
};

export type Wordpress__Post_LinksAbout = {
   __typename?: 'wordpress__POST_linksAbout';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksAboutFilterInput>;
};

export type Wordpress__Post_LinksAuthor = {
   __typename?: 'wordpress__POST_linksAuthor';
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksAuthorFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksAuthorFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksAuthorFilterInput>;
};

export type Wordpress__Post_LinksCollection = {
   __typename?: 'wordpress__POST_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksCollectionFilterInput>;
};

export type Wordpress__Post_LinksCuries = {
   __typename?: 'wordpress__POST_linksCuries';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Post_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Post_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksCuriesFilterInput>;
};

export type Wordpress__Post_LinksFilterInput = {
  self?: Maybe<Wordpress__Post_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Post_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Post_LinksAboutFilterListInput>;
  author?: Maybe<Wordpress__Post_LinksAuthorFilterListInput>;
  replies?: Maybe<Wordpress__Post_LinksRepliesFilterListInput>;
  version_history?: Maybe<Wordpress__Post_LinksVersion_HistoryFilterListInput>;
  predecessor_version?: Maybe<Wordpress__Post_LinksPredecessor_VersionFilterListInput>;
  wp_attachment?: Maybe<Wordpress__Post_LinksWp_AttachmentFilterListInput>;
  wp_term?: Maybe<Wordpress__Post_LinksWp_TermFilterListInput>;
  curies?: Maybe<Wordpress__Post_LinksCuriesFilterListInput>;
  wp_featuredmedia?: Maybe<Wordpress__Post_LinksWp_FeaturedmediaFilterListInput>;
};

export type Wordpress__Post_LinksPredecessor_Version = {
   __typename?: 'wordpress__POST_linksPredecessor_version';
  wordpress_id?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksPredecessor_VersionFilterInput = {
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksPredecessor_VersionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksPredecessor_VersionFilterInput>;
};

export type Wordpress__Post_LinksReplies = {
   __typename?: 'wordpress__POST_linksReplies';
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksRepliesFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksRepliesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksRepliesFilterInput>;
};

export type Wordpress__Post_LinksSelf = {
   __typename?: 'wordpress__POST_linksSelf';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksSelfFilterInput>;
};

export type Wordpress__Post_LinksVersion_History = {
   __typename?: 'wordpress__POST_linksVersion_history';
  count?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksVersion_HistoryFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksVersion_HistoryFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksVersion_HistoryFilterInput>;
};

export type Wordpress__Post_LinksWp_Attachment = {
   __typename?: 'wordpress__POST_linksWp_attachment';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksWp_AttachmentFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksWp_AttachmentFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksWp_AttachmentFilterInput>;
};

export type Wordpress__Post_LinksWp_Featuredmedia = {
   __typename?: 'wordpress__POST_linksWp_featuredmedia';
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksWp_FeaturedmediaFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksWp_FeaturedmediaFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksWp_FeaturedmediaFilterInput>;
};

export type Wordpress__Post_LinksWp_Term = {
   __typename?: 'wordpress__POST_linksWp_term';
  taxonomy?: Maybe<Scalars['String']>;
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksWp_TermFilterInput = {
  taxonomy?: Maybe<StringQueryOperatorInput>;
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksWp_TermFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksWp_TermFilterInput>;
};

export type Wordpress__PostConnection = {
   __typename?: 'wordpress__POSTConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__PostEdge>;
  nodes: Array<Wordpress__Post>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__PostGroupConnection>;
};


export type Wordpress__PostConnectionDistinctArgs = {
  field: Wordpress__PostFieldsEnum;
};


export type Wordpress__PostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__PostFieldsEnum;
};

export type Wordpress__PostEdge = {
   __typename?: 'wordpress__POSTEdge';
  next?: Maybe<Wordpress__Post>;
  node: Wordpress__Post;
  previous?: Maybe<Wordpress__Post>;
};

export enum Wordpress__PostFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Date = 'date',
  Guid = 'guid',
  Modified = 'modified',
  Slug = 'slug',
  Status = 'status',
  Type = 'type',
  Link = 'link',
  Title = 'title',
  Content = 'content',
  Excerpt = 'excerpt',
  CommentStatus = 'comment_status',
  PingStatus = 'ping_status',
  Sticky = 'sticky',
  Template = 'template',
  Format = 'format',
  AuthorId = 'author___id',
  AuthorParentId = 'author___parent___id',
  AuthorParentParentId = 'author___parent___parent___id',
  AuthorParentParentChildren = 'author___parent___parent___children',
  AuthorParentChildren = 'author___parent___children',
  AuthorParentChildrenId = 'author___parent___children___id',
  AuthorParentChildrenChildren = 'author___parent___children___children',
  AuthorParentInternalContent = 'author___parent___internal___content',
  AuthorParentInternalContentDigest = 'author___parent___internal___contentDigest',
  AuthorParentInternalDescription = 'author___parent___internal___description',
  AuthorParentInternalFieldOwners = 'author___parent___internal___fieldOwners',
  AuthorParentInternalIgnoreType = 'author___parent___internal___ignoreType',
  AuthorParentInternalMediaType = 'author___parent___internal___mediaType',
  AuthorParentInternalOwner = 'author___parent___internal___owner',
  AuthorParentInternalType = 'author___parent___internal___type',
  AuthorChildren = 'author___children',
  AuthorChildrenId = 'author___children___id',
  AuthorChildrenParentId = 'author___children___parent___id',
  AuthorChildrenParentChildren = 'author___children___parent___children',
  AuthorChildrenChildren = 'author___children___children',
  AuthorChildrenChildrenId = 'author___children___children___id',
  AuthorChildrenChildrenChildren = 'author___children___children___children',
  AuthorChildrenInternalContent = 'author___children___internal___content',
  AuthorChildrenInternalContentDigest = 'author___children___internal___contentDigest',
  AuthorChildrenInternalDescription = 'author___children___internal___description',
  AuthorChildrenInternalFieldOwners = 'author___children___internal___fieldOwners',
  AuthorChildrenInternalIgnoreType = 'author___children___internal___ignoreType',
  AuthorChildrenInternalMediaType = 'author___children___internal___mediaType',
  AuthorChildrenInternalOwner = 'author___children___internal___owner',
  AuthorChildrenInternalType = 'author___children___internal___type',
  AuthorInternalContent = 'author___internal___content',
  AuthorInternalContentDigest = 'author___internal___contentDigest',
  AuthorInternalDescription = 'author___internal___description',
  AuthorInternalFieldOwners = 'author___internal___fieldOwners',
  AuthorInternalIgnoreType = 'author___internal___ignoreType',
  AuthorInternalMediaType = 'author___internal___mediaType',
  AuthorInternalOwner = 'author___internal___owner',
  AuthorInternalType = 'author___internal___type',
  AuthorWordpressId = 'author___wordpress_id',
  AuthorName = 'author___name',
  AuthorUrl = 'author___url',
  AuthorDescription = 'author___description',
  AuthorLink = 'author___link',
  AuthorSlug = 'author___slug',
  AuthorAvatarUrlsWordpress_24 = 'author___avatar_urls___wordpress_24',
  AuthorAvatarUrlsWordpress_48 = 'author___avatar_urls___wordpress_48',
  AuthorAvatarUrlsWordpress_96 = 'author___avatar_urls___wordpress_96',
  AuthorAuthoredWordpressPost = 'author___authored_wordpress__POST',
  AuthorAuthoredWordpressPostId = 'author___authored_wordpress__POST___id',
  AuthorAuthoredWordpressPostParentId = 'author___authored_wordpress__POST___parent___id',
  AuthorAuthoredWordpressPostParentChildren = 'author___authored_wordpress__POST___parent___children',
  AuthorAuthoredWordpressPostChildren = 'author___authored_wordpress__POST___children',
  AuthorAuthoredWordpressPostChildrenId = 'author___authored_wordpress__POST___children___id',
  AuthorAuthoredWordpressPostChildrenChildren = 'author___authored_wordpress__POST___children___children',
  AuthorAuthoredWordpressPostInternalContent = 'author___authored_wordpress__POST___internal___content',
  AuthorAuthoredWordpressPostInternalContentDigest = 'author___authored_wordpress__POST___internal___contentDigest',
  AuthorAuthoredWordpressPostInternalDescription = 'author___authored_wordpress__POST___internal___description',
  AuthorAuthoredWordpressPostInternalFieldOwners = 'author___authored_wordpress__POST___internal___fieldOwners',
  AuthorAuthoredWordpressPostInternalIgnoreType = 'author___authored_wordpress__POST___internal___ignoreType',
  AuthorAuthoredWordpressPostInternalMediaType = 'author___authored_wordpress__POST___internal___mediaType',
  AuthorAuthoredWordpressPostInternalOwner = 'author___authored_wordpress__POST___internal___owner',
  AuthorAuthoredWordpressPostInternalType = 'author___authored_wordpress__POST___internal___type',
  AuthorAuthoredWordpressPostWordpressId = 'author___authored_wordpress__POST___wordpress_id',
  AuthorAuthoredWordpressPostDate = 'author___authored_wordpress__POST___date',
  AuthorAuthoredWordpressPostGuid = 'author___authored_wordpress__POST___guid',
  AuthorAuthoredWordpressPostModified = 'author___authored_wordpress__POST___modified',
  AuthorAuthoredWordpressPostSlug = 'author___authored_wordpress__POST___slug',
  AuthorAuthoredWordpressPostStatus = 'author___authored_wordpress__POST___status',
  AuthorAuthoredWordpressPostType = 'author___authored_wordpress__POST___type',
  AuthorAuthoredWordpressPostLink = 'author___authored_wordpress__POST___link',
  AuthorAuthoredWordpressPostTitle = 'author___authored_wordpress__POST___title',
  AuthorAuthoredWordpressPostContent = 'author___authored_wordpress__POST___content',
  AuthorAuthoredWordpressPostExcerpt = 'author___authored_wordpress__POST___excerpt',
  AuthorAuthoredWordpressPostCommentStatus = 'author___authored_wordpress__POST___comment_status',
  AuthorAuthoredWordpressPostPingStatus = 'author___authored_wordpress__POST___ping_status',
  AuthorAuthoredWordpressPostSticky = 'author___authored_wordpress__POST___sticky',
  AuthorAuthoredWordpressPostTemplate = 'author___authored_wordpress__POST___template',
  AuthorAuthoredWordpressPostFormat = 'author___authored_wordpress__POST___format',
  AuthorAuthoredWordpressPostAuthorId = 'author___authored_wordpress__POST___author___id',
  AuthorAuthoredWordpressPostAuthorChildren = 'author___authored_wordpress__POST___author___children',
  AuthorAuthoredWordpressPostAuthorWordpressId = 'author___authored_wordpress__POST___author___wordpress_id',
  AuthorAuthoredWordpressPostAuthorName = 'author___authored_wordpress__POST___author___name',
  AuthorAuthoredWordpressPostAuthorUrl = 'author___authored_wordpress__POST___author___url',
  AuthorAuthoredWordpressPostAuthorDescription = 'author___authored_wordpress__POST___author___description',
  AuthorAuthoredWordpressPostAuthorLink = 'author___authored_wordpress__POST___author___link',
  AuthorAuthoredWordpressPostAuthorSlug = 'author___authored_wordpress__POST___author___slug',
  AuthorAuthoredWordpressPostAuthorAuthoredWordpressPost = 'author___authored_wordpress__POST___author___authored_wordpress__POST',
  AuthorAuthoredWordpressPostAuthorAuthoredWordpressPage = 'author___authored_wordpress__POST___author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPostAuthorPath = 'author___authored_wordpress__POST___author___path',
  AuthorAuthoredWordpressPostTags = 'author___authored_wordpress__POST___tags',
  AuthorAuthoredWordpressPostTagsId = 'author___authored_wordpress__POST___tags___id',
  AuthorAuthoredWordpressPostTagsChildren = 'author___authored_wordpress__POST___tags___children',
  AuthorAuthoredWordpressPostTagsWordpressId = 'author___authored_wordpress__POST___tags___wordpress_id',
  AuthorAuthoredWordpressPostTagsCount = 'author___authored_wordpress__POST___tags___count',
  AuthorAuthoredWordpressPostTagsDescription = 'author___authored_wordpress__POST___tags___description',
  AuthorAuthoredWordpressPostTagsLink = 'author___authored_wordpress__POST___tags___link',
  AuthorAuthoredWordpressPostTagsName = 'author___authored_wordpress__POST___tags___name',
  AuthorAuthoredWordpressPostTagsSlug = 'author___authored_wordpress__POST___tags___slug',
  AuthorAuthoredWordpressPostTagsPath = 'author___authored_wordpress__POST___tags___path',
  AuthorAuthoredWordpressPostCategories = 'author___authored_wordpress__POST___categories',
  AuthorAuthoredWordpressPostCategoriesId = 'author___authored_wordpress__POST___categories___id',
  AuthorAuthoredWordpressPostCategoriesChildren = 'author___authored_wordpress__POST___categories___children',
  AuthorAuthoredWordpressPostCategoriesWordpressId = 'author___authored_wordpress__POST___categories___wordpress_id',
  AuthorAuthoredWordpressPostCategoriesCount = 'author___authored_wordpress__POST___categories___count',
  AuthorAuthoredWordpressPostCategoriesDescription = 'author___authored_wordpress__POST___categories___description',
  AuthorAuthoredWordpressPostCategoriesLink = 'author___authored_wordpress__POST___categories___link',
  AuthorAuthoredWordpressPostCategoriesName = 'author___authored_wordpress__POST___categories___name',
  AuthorAuthoredWordpressPostCategoriesSlug = 'author___authored_wordpress__POST___categories___slug',
  AuthorAuthoredWordpressPostCategoriesWordpressParent = 'author___authored_wordpress__POST___categories___wordpress_parent',
  AuthorAuthoredWordpressPostCategoriesPath = 'author___authored_wordpress__POST___categories___path',
  AuthorAuthoredWordpressPostLinksSelf = 'author___authored_wordpress__POST____links___self',
  AuthorAuthoredWordpressPostLinksCollection = 'author___authored_wordpress__POST____links___collection',
  AuthorAuthoredWordpressPostLinksAbout = 'author___authored_wordpress__POST____links___about',
  AuthorAuthoredWordpressPostLinksAuthor = 'author___authored_wordpress__POST____links___author',
  AuthorAuthoredWordpressPostLinksReplies = 'author___authored_wordpress__POST____links___replies',
  AuthorAuthoredWordpressPostLinksVersionHistory = 'author___authored_wordpress__POST____links___version_history',
  AuthorAuthoredWordpressPostLinksPredecessorVersion = 'author___authored_wordpress__POST____links___predecessor_version',
  AuthorAuthoredWordpressPostLinksWpAttachment = 'author___authored_wordpress__POST____links___wp_attachment',
  AuthorAuthoredWordpressPostLinksWpTerm = 'author___authored_wordpress__POST____links___wp_term',
  AuthorAuthoredWordpressPostLinksCuries = 'author___authored_wordpress__POST____links___curies',
  AuthorAuthoredWordpressPostLinksWpFeaturedmedia = 'author___authored_wordpress__POST____links___wp_featuredmedia',
  AuthorAuthoredWordpressPostPath = 'author___authored_wordpress__POST___path',
  AuthorAuthoredWordpressPostSource = 'author___authored_wordpress__POST___source',
  AuthorAuthoredWordpressPage = 'author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPageId = 'author___authored_wordpress__PAGE___id',
  AuthorAuthoredWordpressPageParentId = 'author___authored_wordpress__PAGE___parent___id',
  AuthorAuthoredWordpressPageParentChildren = 'author___authored_wordpress__PAGE___parent___children',
  AuthorAuthoredWordpressPageChildren = 'author___authored_wordpress__PAGE___children',
  AuthorAuthoredWordpressPageChildrenId = 'author___authored_wordpress__PAGE___children___id',
  AuthorAuthoredWordpressPageChildrenChildren = 'author___authored_wordpress__PAGE___children___children',
  AuthorAuthoredWordpressPageInternalContent = 'author___authored_wordpress__PAGE___internal___content',
  AuthorAuthoredWordpressPageInternalContentDigest = 'author___authored_wordpress__PAGE___internal___contentDigest',
  AuthorAuthoredWordpressPageInternalDescription = 'author___authored_wordpress__PAGE___internal___description',
  AuthorAuthoredWordpressPageInternalFieldOwners = 'author___authored_wordpress__PAGE___internal___fieldOwners',
  AuthorAuthoredWordpressPageInternalIgnoreType = 'author___authored_wordpress__PAGE___internal___ignoreType',
  AuthorAuthoredWordpressPageInternalMediaType = 'author___authored_wordpress__PAGE___internal___mediaType',
  AuthorAuthoredWordpressPageInternalOwner = 'author___authored_wordpress__PAGE___internal___owner',
  AuthorAuthoredWordpressPageInternalType = 'author___authored_wordpress__PAGE___internal___type',
  AuthorAuthoredWordpressPageWordpressId = 'author___authored_wordpress__PAGE___wordpress_id',
  AuthorAuthoredWordpressPageDate = 'author___authored_wordpress__PAGE___date',
  AuthorAuthoredWordpressPageGuid = 'author___authored_wordpress__PAGE___guid',
  AuthorAuthoredWordpressPageModified = 'author___authored_wordpress__PAGE___modified',
  AuthorAuthoredWordpressPageSlug = 'author___authored_wordpress__PAGE___slug',
  AuthorAuthoredWordpressPageStatus = 'author___authored_wordpress__PAGE___status',
  AuthorAuthoredWordpressPageType = 'author___authored_wordpress__PAGE___type',
  AuthorAuthoredWordpressPageLink = 'author___authored_wordpress__PAGE___link',
  AuthorAuthoredWordpressPageTitle = 'author___authored_wordpress__PAGE___title',
  AuthorAuthoredWordpressPageContent = 'author___authored_wordpress__PAGE___content',
  AuthorAuthoredWordpressPageExcerpt = 'author___authored_wordpress__PAGE___excerpt',
  AuthorAuthoredWordpressPageWordpressParent = 'author___authored_wordpress__PAGE___wordpress_parent',
  AuthorAuthoredWordpressPageMenuOrder = 'author___authored_wordpress__PAGE___menu_order',
  AuthorAuthoredWordpressPageCommentStatus = 'author___authored_wordpress__PAGE___comment_status',
  AuthorAuthoredWordpressPagePingStatus = 'author___authored_wordpress__PAGE___ping_status',
  AuthorAuthoredWordpressPageTemplate = 'author___authored_wordpress__PAGE___template',
  AuthorAuthoredWordpressPageAuthorId = 'author___authored_wordpress__PAGE___author___id',
  AuthorAuthoredWordpressPageAuthorChildren = 'author___authored_wordpress__PAGE___author___children',
  AuthorAuthoredWordpressPageAuthorWordpressId = 'author___authored_wordpress__PAGE___author___wordpress_id',
  AuthorAuthoredWordpressPageAuthorName = 'author___authored_wordpress__PAGE___author___name',
  AuthorAuthoredWordpressPageAuthorUrl = 'author___authored_wordpress__PAGE___author___url',
  AuthorAuthoredWordpressPageAuthorDescription = 'author___authored_wordpress__PAGE___author___description',
  AuthorAuthoredWordpressPageAuthorLink = 'author___authored_wordpress__PAGE___author___link',
  AuthorAuthoredWordpressPageAuthorSlug = 'author___authored_wordpress__PAGE___author___slug',
  AuthorAuthoredWordpressPageAuthorAuthoredWordpressPost = 'author___authored_wordpress__PAGE___author___authored_wordpress__POST',
  AuthorAuthoredWordpressPageAuthorAuthoredWordpressPage = 'author___authored_wordpress__PAGE___author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPageAuthorPath = 'author___authored_wordpress__PAGE___author___path',
  AuthorAuthoredWordpressPageLinksSelf = 'author___authored_wordpress__PAGE____links___self',
  AuthorAuthoredWordpressPageLinksCollection = 'author___authored_wordpress__PAGE____links___collection',
  AuthorAuthoredWordpressPageLinksAbout = 'author___authored_wordpress__PAGE____links___about',
  AuthorAuthoredWordpressPageLinksAuthor = 'author___authored_wordpress__PAGE____links___author',
  AuthorAuthoredWordpressPageLinksReplies = 'author___authored_wordpress__PAGE____links___replies',
  AuthorAuthoredWordpressPageLinksVersionHistory = 'author___authored_wordpress__PAGE____links___version_history',
  AuthorAuthoredWordpressPageLinksPredecessorVersion = 'author___authored_wordpress__PAGE____links___predecessor_version',
  AuthorAuthoredWordpressPageLinksWpAttachment = 'author___authored_wordpress__PAGE____links___wp_attachment',
  AuthorAuthoredWordpressPageLinksCuries = 'author___authored_wordpress__PAGE____links___curies',
  AuthorAuthoredWordpressPagePath = 'author___authored_wordpress__PAGE___path',
  AuthorLinksSelf = 'author____links___self',
  AuthorLinksSelfHref = 'author____links___self___href',
  AuthorLinksCollection = 'author____links___collection',
  AuthorLinksCollectionHref = 'author____links___collection___href',
  AuthorPath = 'author___path',
  Tags = 'tags',
  TagsId = 'tags___id',
  TagsParentId = 'tags___parent___id',
  TagsParentParentId = 'tags___parent___parent___id',
  TagsParentParentChildren = 'tags___parent___parent___children',
  TagsParentChildren = 'tags___parent___children',
  TagsParentChildrenId = 'tags___parent___children___id',
  TagsParentChildrenChildren = 'tags___parent___children___children',
  TagsParentInternalContent = 'tags___parent___internal___content',
  TagsParentInternalContentDigest = 'tags___parent___internal___contentDigest',
  TagsParentInternalDescription = 'tags___parent___internal___description',
  TagsParentInternalFieldOwners = 'tags___parent___internal___fieldOwners',
  TagsParentInternalIgnoreType = 'tags___parent___internal___ignoreType',
  TagsParentInternalMediaType = 'tags___parent___internal___mediaType',
  TagsParentInternalOwner = 'tags___parent___internal___owner',
  TagsParentInternalType = 'tags___parent___internal___type',
  TagsChildren = 'tags___children',
  TagsChildrenId = 'tags___children___id',
  TagsChildrenParentId = 'tags___children___parent___id',
  TagsChildrenParentChildren = 'tags___children___parent___children',
  TagsChildrenChildren = 'tags___children___children',
  TagsChildrenChildrenId = 'tags___children___children___id',
  TagsChildrenChildrenChildren = 'tags___children___children___children',
  TagsChildrenInternalContent = 'tags___children___internal___content',
  TagsChildrenInternalContentDigest = 'tags___children___internal___contentDigest',
  TagsChildrenInternalDescription = 'tags___children___internal___description',
  TagsChildrenInternalFieldOwners = 'tags___children___internal___fieldOwners',
  TagsChildrenInternalIgnoreType = 'tags___children___internal___ignoreType',
  TagsChildrenInternalMediaType = 'tags___children___internal___mediaType',
  TagsChildrenInternalOwner = 'tags___children___internal___owner',
  TagsChildrenInternalType = 'tags___children___internal___type',
  TagsInternalContent = 'tags___internal___content',
  TagsInternalContentDigest = 'tags___internal___contentDigest',
  TagsInternalDescription = 'tags___internal___description',
  TagsInternalFieldOwners = 'tags___internal___fieldOwners',
  TagsInternalIgnoreType = 'tags___internal___ignoreType',
  TagsInternalMediaType = 'tags___internal___mediaType',
  TagsInternalOwner = 'tags___internal___owner',
  TagsInternalType = 'tags___internal___type',
  TagsWordpressId = 'tags___wordpress_id',
  TagsCount = 'tags___count',
  TagsDescription = 'tags___description',
  TagsLink = 'tags___link',
  TagsName = 'tags___name',
  TagsSlug = 'tags___slug',
  TagsTaxonomyId = 'tags___taxonomy___id',
  TagsTaxonomyParentId = 'tags___taxonomy___parent___id',
  TagsTaxonomyParentChildren = 'tags___taxonomy___parent___children',
  TagsTaxonomyChildren = 'tags___taxonomy___children',
  TagsTaxonomyChildrenId = 'tags___taxonomy___children___id',
  TagsTaxonomyChildrenChildren = 'tags___taxonomy___children___children',
  TagsTaxonomyInternalContent = 'tags___taxonomy___internal___content',
  TagsTaxonomyInternalContentDigest = 'tags___taxonomy___internal___contentDigest',
  TagsTaxonomyInternalDescription = 'tags___taxonomy___internal___description',
  TagsTaxonomyInternalFieldOwners = 'tags___taxonomy___internal___fieldOwners',
  TagsTaxonomyInternalIgnoreType = 'tags___taxonomy___internal___ignoreType',
  TagsTaxonomyInternalMediaType = 'tags___taxonomy___internal___mediaType',
  TagsTaxonomyInternalOwner = 'tags___taxonomy___internal___owner',
  TagsTaxonomyInternalType = 'tags___taxonomy___internal___type',
  TagsTaxonomyWordpressId = 'tags___taxonomy___wordpress_id',
  TagsTaxonomyName = 'tags___taxonomy___name',
  TagsTaxonomySlug = 'tags___taxonomy___slug',
  TagsTaxonomyDescription = 'tags___taxonomy___description',
  TagsTaxonomyTypes = 'tags___taxonomy___types',
  TagsTaxonomyHierarchical = 'tags___taxonomy___hierarchical',
  TagsTaxonomyRestBase = 'tags___taxonomy___rest_base',
  TagsTaxonomyLinksCollection = 'tags___taxonomy____links___collection',
  TagsTaxonomyLinksWpItems = 'tags___taxonomy____links___wp_items',
  TagsTaxonomyLinksCuries = 'tags___taxonomy____links___curies',
  TagsLinksSelf = 'tags____links___self',
  TagsLinksSelfHref = 'tags____links___self___href',
  TagsLinksCollection = 'tags____links___collection',
  TagsLinksCollectionHref = 'tags____links___collection___href',
  TagsLinksAbout = 'tags____links___about',
  TagsLinksAboutHref = 'tags____links___about___href',
  TagsLinksWpPostType = 'tags____links___wp_post_type',
  TagsLinksWpPostTypeHref = 'tags____links___wp_post_type___href',
  TagsLinksCuries = 'tags____links___curies',
  TagsLinksCuriesName = 'tags____links___curies___name',
  TagsLinksCuriesHref = 'tags____links___curies___href',
  TagsLinksCuriesTemplated = 'tags____links___curies___templated',
  TagsPath = 'tags___path',
  Categories = 'categories',
  CategoriesId = 'categories___id',
  CategoriesParentId = 'categories___parent___id',
  CategoriesParentParentId = 'categories___parent___parent___id',
  CategoriesParentParentChildren = 'categories___parent___parent___children',
  CategoriesParentChildren = 'categories___parent___children',
  CategoriesParentChildrenId = 'categories___parent___children___id',
  CategoriesParentChildrenChildren = 'categories___parent___children___children',
  CategoriesParentInternalContent = 'categories___parent___internal___content',
  CategoriesParentInternalContentDigest = 'categories___parent___internal___contentDigest',
  CategoriesParentInternalDescription = 'categories___parent___internal___description',
  CategoriesParentInternalFieldOwners = 'categories___parent___internal___fieldOwners',
  CategoriesParentInternalIgnoreType = 'categories___parent___internal___ignoreType',
  CategoriesParentInternalMediaType = 'categories___parent___internal___mediaType',
  CategoriesParentInternalOwner = 'categories___parent___internal___owner',
  CategoriesParentInternalType = 'categories___parent___internal___type',
  CategoriesChildren = 'categories___children',
  CategoriesChildrenId = 'categories___children___id',
  CategoriesChildrenParentId = 'categories___children___parent___id',
  CategoriesChildrenParentChildren = 'categories___children___parent___children',
  CategoriesChildrenChildren = 'categories___children___children',
  CategoriesChildrenChildrenId = 'categories___children___children___id',
  CategoriesChildrenChildrenChildren = 'categories___children___children___children',
  CategoriesChildrenInternalContent = 'categories___children___internal___content',
  CategoriesChildrenInternalContentDigest = 'categories___children___internal___contentDigest',
  CategoriesChildrenInternalDescription = 'categories___children___internal___description',
  CategoriesChildrenInternalFieldOwners = 'categories___children___internal___fieldOwners',
  CategoriesChildrenInternalIgnoreType = 'categories___children___internal___ignoreType',
  CategoriesChildrenInternalMediaType = 'categories___children___internal___mediaType',
  CategoriesChildrenInternalOwner = 'categories___children___internal___owner',
  CategoriesChildrenInternalType = 'categories___children___internal___type',
  CategoriesInternalContent = 'categories___internal___content',
  CategoriesInternalContentDigest = 'categories___internal___contentDigest',
  CategoriesInternalDescription = 'categories___internal___description',
  CategoriesInternalFieldOwners = 'categories___internal___fieldOwners',
  CategoriesInternalIgnoreType = 'categories___internal___ignoreType',
  CategoriesInternalMediaType = 'categories___internal___mediaType',
  CategoriesInternalOwner = 'categories___internal___owner',
  CategoriesInternalType = 'categories___internal___type',
  CategoriesWordpressId = 'categories___wordpress_id',
  CategoriesCount = 'categories___count',
  CategoriesDescription = 'categories___description',
  CategoriesLink = 'categories___link',
  CategoriesName = 'categories___name',
  CategoriesSlug = 'categories___slug',
  CategoriesWordpressParent = 'categories___wordpress_parent',
  CategoriesTaxonomyId = 'categories___taxonomy___id',
  CategoriesTaxonomyParentId = 'categories___taxonomy___parent___id',
  CategoriesTaxonomyParentChildren = 'categories___taxonomy___parent___children',
  CategoriesTaxonomyChildren = 'categories___taxonomy___children',
  CategoriesTaxonomyChildrenId = 'categories___taxonomy___children___id',
  CategoriesTaxonomyChildrenChildren = 'categories___taxonomy___children___children',
  CategoriesTaxonomyInternalContent = 'categories___taxonomy___internal___content',
  CategoriesTaxonomyInternalContentDigest = 'categories___taxonomy___internal___contentDigest',
  CategoriesTaxonomyInternalDescription = 'categories___taxonomy___internal___description',
  CategoriesTaxonomyInternalFieldOwners = 'categories___taxonomy___internal___fieldOwners',
  CategoriesTaxonomyInternalIgnoreType = 'categories___taxonomy___internal___ignoreType',
  CategoriesTaxonomyInternalMediaType = 'categories___taxonomy___internal___mediaType',
  CategoriesTaxonomyInternalOwner = 'categories___taxonomy___internal___owner',
  CategoriesTaxonomyInternalType = 'categories___taxonomy___internal___type',
  CategoriesTaxonomyWordpressId = 'categories___taxonomy___wordpress_id',
  CategoriesTaxonomyName = 'categories___taxonomy___name',
  CategoriesTaxonomySlug = 'categories___taxonomy___slug',
  CategoriesTaxonomyDescription = 'categories___taxonomy___description',
  CategoriesTaxonomyTypes = 'categories___taxonomy___types',
  CategoriesTaxonomyHierarchical = 'categories___taxonomy___hierarchical',
  CategoriesTaxonomyRestBase = 'categories___taxonomy___rest_base',
  CategoriesTaxonomyLinksCollection = 'categories___taxonomy____links___collection',
  CategoriesTaxonomyLinksWpItems = 'categories___taxonomy____links___wp_items',
  CategoriesTaxonomyLinksCuries = 'categories___taxonomy____links___curies',
  CategoriesLinksSelf = 'categories____links___self',
  CategoriesLinksSelfHref = 'categories____links___self___href',
  CategoriesLinksCollection = 'categories____links___collection',
  CategoriesLinksCollectionHref = 'categories____links___collection___href',
  CategoriesLinksAbout = 'categories____links___about',
  CategoriesLinksAboutHref = 'categories____links___about___href',
  CategoriesLinksWpPostType = 'categories____links___wp_post_type',
  CategoriesLinksWpPostTypeHref = 'categories____links___wp_post_type___href',
  CategoriesLinksCuries = 'categories____links___curies',
  CategoriesLinksCuriesName = 'categories____links___curies___name',
  CategoriesLinksCuriesHref = 'categories____links___curies___href',
  CategoriesLinksCuriesTemplated = 'categories____links___curies___templated',
  CategoriesPath = 'categories___path',
  LinksSelf = '_links___self',
  LinksSelfHref = '_links___self___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksAbout = '_links___about',
  LinksAboutHref = '_links___about___href',
  LinksAuthor = '_links___author',
  LinksAuthorEmbeddable = '_links___author___embeddable',
  LinksAuthorHref = '_links___author___href',
  LinksReplies = '_links___replies',
  LinksRepliesEmbeddable = '_links___replies___embeddable',
  LinksRepliesHref = '_links___replies___href',
  LinksVersionHistory = '_links___version_history',
  LinksVersionHistoryCount = '_links___version_history___count',
  LinksVersionHistoryHref = '_links___version_history___href',
  LinksPredecessorVersion = '_links___predecessor_version',
  LinksPredecessorVersionWordpressId = '_links___predecessor_version___wordpress_id',
  LinksPredecessorVersionHref = '_links___predecessor_version___href',
  LinksWpAttachment = '_links___wp_attachment',
  LinksWpAttachmentHref = '_links___wp_attachment___href',
  LinksWpTerm = '_links___wp_term',
  LinksWpTermTaxonomy = '_links___wp_term___taxonomy',
  LinksWpTermEmbeddable = '_links___wp_term___embeddable',
  LinksWpTermHref = '_links___wp_term___href',
  LinksCuries = '_links___curies',
  LinksCuriesName = '_links___curies___name',
  LinksCuriesHref = '_links___curies___href',
  LinksCuriesTemplated = '_links___curies___templated',
  LinksWpFeaturedmedia = '_links___wp_featuredmedia',
  LinksWpFeaturedmediaEmbeddable = '_links___wp_featuredmedia___embeddable',
  LinksWpFeaturedmediaHref = '_links___wp_featuredmedia___href',
  Path = 'path',
  Source = 'source'
}

export type Wordpress__PostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  tags?: Maybe<Wordpress__TagFilterListInput>;
  categories?: Maybe<Wordpress__CategoryFilterListInput>;
  _links?: Maybe<Wordpress__Post_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PostFilterListInput = {
  elemMatch?: Maybe<Wordpress__PostFilterInput>;
};

export type Wordpress__PostGroupConnection = {
   __typename?: 'wordpress__POSTGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__PostEdge>;
  nodes: Array<Wordpress__Post>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__PostSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__PostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Site_Metadata = Node & {
   __typename?: 'wordpress__site_metadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
};

export type Wordpress__Site_MetadataConnection = {
   __typename?: 'wordpress__site_metadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Site_MetadataEdge>;
  nodes: Array<Wordpress__Site_Metadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Site_MetadataGroupConnection>;
};


export type Wordpress__Site_MetadataConnectionDistinctArgs = {
  field: Wordpress__Site_MetadataFieldsEnum;
};


export type Wordpress__Site_MetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Site_MetadataFieldsEnum;
};

export type Wordpress__Site_MetadataEdge = {
   __typename?: 'wordpress__site_metadataEdge';
  next?: Maybe<Wordpress__Site_Metadata>;
  node: Wordpress__Site_Metadata;
  previous?: Maybe<Wordpress__Site_Metadata>;
};

export enum Wordpress__Site_MetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Description = 'description',
  Url = 'url',
  Home = 'home'
}

export type Wordpress__Site_MetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  home?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Site_MetadataGroupConnection = {
   __typename?: 'wordpress__site_metadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Site_MetadataEdge>;
  nodes: Array<Wordpress__Site_Metadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Site_MetadataSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Site_MetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Tag = Node & {
   __typename?: 'wordpress__TAG';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<Wordpress__Wp_Taxonomies>;
  _links?: Maybe<Wordpress__Tag_Links>;
  path?: Maybe<Scalars['String']>;
};

export type Wordpress__Tag_Links = {
   __typename?: 'wordpress__TAG_links';
  self?: Maybe<Array<Maybe<Wordpress__Tag_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Tag_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Tag_LinksAbout>>>;
  wp_post_type?: Maybe<Array<Maybe<Wordpress__Tag_LinksWp_Post_Type>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Tag_LinksCuries>>>;
};

export type Wordpress__Tag_LinksAbout = {
   __typename?: 'wordpress__TAG_linksAbout';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Tag_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Tag_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Tag_LinksAboutFilterInput>;
};

export type Wordpress__Tag_LinksCollection = {
   __typename?: 'wordpress__TAG_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Tag_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Tag_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Tag_LinksCollectionFilterInput>;
};

export type Wordpress__Tag_LinksCuries = {
   __typename?: 'wordpress__TAG_linksCuries';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Tag_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Tag_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Tag_LinksCuriesFilterInput>;
};

export type Wordpress__Tag_LinksFilterInput = {
  self?: Maybe<Wordpress__Tag_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Tag_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Tag_LinksAboutFilterListInput>;
  wp_post_type?: Maybe<Wordpress__Tag_LinksWp_Post_TypeFilterListInput>;
  curies?: Maybe<Wordpress__Tag_LinksCuriesFilterListInput>;
};

export type Wordpress__Tag_LinksSelf = {
   __typename?: 'wordpress__TAG_linksSelf';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Tag_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Tag_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Tag_LinksSelfFilterInput>;
};

export type Wordpress__Tag_LinksWp_Post_Type = {
   __typename?: 'wordpress__TAG_linksWp_post_type';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Tag_LinksWp_Post_TypeFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Tag_LinksWp_Post_TypeFilterListInput = {
  elemMatch?: Maybe<Wordpress__Tag_LinksWp_Post_TypeFilterInput>;
};

export type Wordpress__TagConnection = {
   __typename?: 'wordpress__TAGConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__TagEdge>;
  nodes: Array<Wordpress__Tag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__TagGroupConnection>;
};


export type Wordpress__TagConnectionDistinctArgs = {
  field: Wordpress__TagFieldsEnum;
};


export type Wordpress__TagConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__TagFieldsEnum;
};

export type Wordpress__TagEdge = {
   __typename?: 'wordpress__TAGEdge';
  next?: Maybe<Wordpress__Tag>;
  node: Wordpress__Tag;
  previous?: Maybe<Wordpress__Tag>;
};

export enum Wordpress__TagFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Count = 'count',
  Description = 'description',
  Link = 'link',
  Name = 'name',
  Slug = 'slug',
  TaxonomyId = 'taxonomy___id',
  TaxonomyParentId = 'taxonomy___parent___id',
  TaxonomyParentParentId = 'taxonomy___parent___parent___id',
  TaxonomyParentParentChildren = 'taxonomy___parent___parent___children',
  TaxonomyParentChildren = 'taxonomy___parent___children',
  TaxonomyParentChildrenId = 'taxonomy___parent___children___id',
  TaxonomyParentChildrenChildren = 'taxonomy___parent___children___children',
  TaxonomyParentInternalContent = 'taxonomy___parent___internal___content',
  TaxonomyParentInternalContentDigest = 'taxonomy___parent___internal___contentDigest',
  TaxonomyParentInternalDescription = 'taxonomy___parent___internal___description',
  TaxonomyParentInternalFieldOwners = 'taxonomy___parent___internal___fieldOwners',
  TaxonomyParentInternalIgnoreType = 'taxonomy___parent___internal___ignoreType',
  TaxonomyParentInternalMediaType = 'taxonomy___parent___internal___mediaType',
  TaxonomyParentInternalOwner = 'taxonomy___parent___internal___owner',
  TaxonomyParentInternalType = 'taxonomy___parent___internal___type',
  TaxonomyChildren = 'taxonomy___children',
  TaxonomyChildrenId = 'taxonomy___children___id',
  TaxonomyChildrenParentId = 'taxonomy___children___parent___id',
  TaxonomyChildrenParentChildren = 'taxonomy___children___parent___children',
  TaxonomyChildrenChildren = 'taxonomy___children___children',
  TaxonomyChildrenChildrenId = 'taxonomy___children___children___id',
  TaxonomyChildrenChildrenChildren = 'taxonomy___children___children___children',
  TaxonomyChildrenInternalContent = 'taxonomy___children___internal___content',
  TaxonomyChildrenInternalContentDigest = 'taxonomy___children___internal___contentDigest',
  TaxonomyChildrenInternalDescription = 'taxonomy___children___internal___description',
  TaxonomyChildrenInternalFieldOwners = 'taxonomy___children___internal___fieldOwners',
  TaxonomyChildrenInternalIgnoreType = 'taxonomy___children___internal___ignoreType',
  TaxonomyChildrenInternalMediaType = 'taxonomy___children___internal___mediaType',
  TaxonomyChildrenInternalOwner = 'taxonomy___children___internal___owner',
  TaxonomyChildrenInternalType = 'taxonomy___children___internal___type',
  TaxonomyInternalContent = 'taxonomy___internal___content',
  TaxonomyInternalContentDigest = 'taxonomy___internal___contentDigest',
  TaxonomyInternalDescription = 'taxonomy___internal___description',
  TaxonomyInternalFieldOwners = 'taxonomy___internal___fieldOwners',
  TaxonomyInternalIgnoreType = 'taxonomy___internal___ignoreType',
  TaxonomyInternalMediaType = 'taxonomy___internal___mediaType',
  TaxonomyInternalOwner = 'taxonomy___internal___owner',
  TaxonomyInternalType = 'taxonomy___internal___type',
  TaxonomyWordpressId = 'taxonomy___wordpress_id',
  TaxonomyName = 'taxonomy___name',
  TaxonomySlug = 'taxonomy___slug',
  TaxonomyDescription = 'taxonomy___description',
  TaxonomyTypes = 'taxonomy___types',
  TaxonomyHierarchical = 'taxonomy___hierarchical',
  TaxonomyRestBase = 'taxonomy___rest_base',
  TaxonomyLinksCollection = 'taxonomy____links___collection',
  TaxonomyLinksCollectionHref = 'taxonomy____links___collection___href',
  TaxonomyLinksWpItems = 'taxonomy____links___wp_items',
  TaxonomyLinksWpItemsHref = 'taxonomy____links___wp_items___href',
  TaxonomyLinksCuries = 'taxonomy____links___curies',
  TaxonomyLinksCuriesName = 'taxonomy____links___curies___name',
  TaxonomyLinksCuriesHref = 'taxonomy____links___curies___href',
  TaxonomyLinksCuriesTemplated = 'taxonomy____links___curies___templated',
  LinksSelf = '_links___self',
  LinksSelfHref = '_links___self___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksAbout = '_links___about',
  LinksAboutHref = '_links___about___href',
  LinksWpPostType = '_links___wp_post_type',
  LinksWpPostTypeHref = '_links___wp_post_type___href',
  LinksCuries = '_links___curies',
  LinksCuriesName = '_links___curies___name',
  LinksCuriesHref = '_links___curies___href',
  LinksCuriesTemplated = '_links___curies___templated',
  Path = 'path'
}

export type Wordpress__TagFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  _links?: Maybe<Wordpress__Tag_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__TagFilterListInput = {
  elemMatch?: Maybe<Wordpress__TagFilterInput>;
};

export type Wordpress__TagGroupConnection = {
   __typename?: 'wordpress__TAGGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__TagEdge>;
  nodes: Array<Wordpress__Tag>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__TagSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__TagFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Taxonomies = Node & {
   __typename?: 'wordpress__wp_taxonomies';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  rest_base?: Maybe<Scalars['String']>;
  _links?: Maybe<Wordpress__Wp_Taxonomies_Links>;
};

export type Wordpress__Wp_Taxonomies_Links = {
   __typename?: 'wordpress__wp_taxonomies_links';
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Taxonomies_LinksCollection>>>;
  wp_items?: Maybe<Array<Maybe<Wordpress__Wp_Taxonomies_LinksWp_Items>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Wp_Taxonomies_LinksCuries>>>;
};

export type Wordpress__Wp_Taxonomies_LinksCollection = {
   __typename?: 'wordpress__wp_taxonomies_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Taxonomies_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Taxonomies_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Taxonomies_LinksCollectionFilterInput>;
};

export type Wordpress__Wp_Taxonomies_LinksCuries = {
   __typename?: 'wordpress__wp_taxonomies_linksCuries';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Wp_Taxonomies_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Wp_Taxonomies_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Taxonomies_LinksCuriesFilterInput>;
};

export type Wordpress__Wp_Taxonomies_LinksFilterInput = {
  collection?: Maybe<Wordpress__Wp_Taxonomies_LinksCollectionFilterListInput>;
  wp_items?: Maybe<Wordpress__Wp_Taxonomies_LinksWp_ItemsFilterListInput>;
  curies?: Maybe<Wordpress__Wp_Taxonomies_LinksCuriesFilterListInput>;
};

export type Wordpress__Wp_Taxonomies_LinksWp_Items = {
   __typename?: 'wordpress__wp_taxonomies_linksWp_items';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Taxonomies_LinksWp_ItemsFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Taxonomies_LinksWp_ItemsFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Taxonomies_LinksWp_ItemsFilterInput>;
};

export type Wordpress__Wp_TaxonomiesConnection = {
   __typename?: 'wordpress__wp_taxonomiesConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_TaxonomiesEdge>;
  nodes: Array<Wordpress__Wp_Taxonomies>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_TaxonomiesGroupConnection>;
};


export type Wordpress__Wp_TaxonomiesConnectionDistinctArgs = {
  field: Wordpress__Wp_TaxonomiesFieldsEnum;
};


export type Wordpress__Wp_TaxonomiesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_TaxonomiesFieldsEnum;
};

export type Wordpress__Wp_TaxonomiesEdge = {
   __typename?: 'wordpress__wp_taxonomiesEdge';
  next?: Maybe<Wordpress__Wp_Taxonomies>;
  node: Wordpress__Wp_Taxonomies;
  previous?: Maybe<Wordpress__Wp_Taxonomies>;
};

export enum Wordpress__Wp_TaxonomiesFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Name = 'name',
  Slug = 'slug',
  Description = 'description',
  Types = 'types',
  Hierarchical = 'hierarchical',
  RestBase = 'rest_base',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksWpItems = '_links___wp_items',
  LinksWpItemsHref = '_links___wp_items___href',
  LinksCuries = '_links___curies',
  LinksCuriesName = '_links___curies___name',
  LinksCuriesHref = '_links___curies___href',
  LinksCuriesTemplated = '_links___curies___templated'
}

export type Wordpress__Wp_TaxonomiesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  types?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  rest_base?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Taxonomies_LinksFilterInput>;
};

export type Wordpress__Wp_TaxonomiesGroupConnection = {
   __typename?: 'wordpress__wp_taxonomiesGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_TaxonomiesEdge>;
  nodes: Array<Wordpress__Wp_Taxonomies>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_TaxonomiesSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_TaxonomiesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Users = Node & {
   __typename?: 'wordpress__wp_users';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  avatar_urls?: Maybe<Wordpress__Wp_UsersAvatar_Urls>;
  all_authored_entities?: Maybe<Array<Maybe<Wordpress__PagEwordpress__PostUnion>>>;
  authored_wordpress__POST?: Maybe<Array<Maybe<Wordpress__Post>>>;
  authored_wordpress__PAGE?: Maybe<Array<Maybe<Wordpress__Page>>>;
  _links?: Maybe<Wordpress__Wp_Users_Links>;
  path?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Users_Links = {
   __typename?: 'wordpress__wp_users_links';
  self?: Maybe<Array<Maybe<Wordpress__Wp_Users_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Users_LinksCollection>>>;
};

export type Wordpress__Wp_Users_LinksCollection = {
   __typename?: 'wordpress__wp_users_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Users_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Users_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Users_LinksCollectionFilterInput>;
};

export type Wordpress__Wp_Users_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Users_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Wp_Users_LinksCollectionFilterListInput>;
};

export type Wordpress__Wp_Users_LinksSelf = {
   __typename?: 'wordpress__wp_users_linksSelf';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Users_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Users_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Users_LinksSelfFilterInput>;
};

export type Wordpress__Wp_UsersAvatar_Urls = {
   __typename?: 'wordpress__wp_usersAvatar_urls';
  wordpress_24?: Maybe<Scalars['String']>;
  wordpress_48?: Maybe<Scalars['String']>;
  wordpress_96?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_UsersAvatar_UrlsFilterInput = {
  wordpress_24?: Maybe<StringQueryOperatorInput>;
  wordpress_48?: Maybe<StringQueryOperatorInput>;
  wordpress_96?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_UsersConnection = {
   __typename?: 'wordpress__wp_usersConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_UsersEdge>;
  nodes: Array<Wordpress__Wp_Users>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_UsersGroupConnection>;
};


export type Wordpress__Wp_UsersConnectionDistinctArgs = {
  field: Wordpress__Wp_UsersFieldsEnum;
};


export type Wordpress__Wp_UsersConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_UsersFieldsEnum;
};

export type Wordpress__Wp_UsersEdge = {
   __typename?: 'wordpress__wp_usersEdge';
  next?: Maybe<Wordpress__Wp_Users>;
  node: Wordpress__Wp_Users;
  previous?: Maybe<Wordpress__Wp_Users>;
};

export enum Wordpress__Wp_UsersFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Name = 'name',
  Url = 'url',
  Description = 'description',
  Link = 'link',
  Slug = 'slug',
  AvatarUrlsWordpress_24 = 'avatar_urls___wordpress_24',
  AvatarUrlsWordpress_48 = 'avatar_urls___wordpress_48',
  AvatarUrlsWordpress_96 = 'avatar_urls___wordpress_96',
  AuthoredWordpressPost = 'authored_wordpress__POST',
  AuthoredWordpressPostId = 'authored_wordpress__POST___id',
  AuthoredWordpressPostParentId = 'authored_wordpress__POST___parent___id',
  AuthoredWordpressPostParentParentId = 'authored_wordpress__POST___parent___parent___id',
  AuthoredWordpressPostParentParentChildren = 'authored_wordpress__POST___parent___parent___children',
  AuthoredWordpressPostParentChildren = 'authored_wordpress__POST___parent___children',
  AuthoredWordpressPostParentChildrenId = 'authored_wordpress__POST___parent___children___id',
  AuthoredWordpressPostParentChildrenChildren = 'authored_wordpress__POST___parent___children___children',
  AuthoredWordpressPostParentInternalContent = 'authored_wordpress__POST___parent___internal___content',
  AuthoredWordpressPostParentInternalContentDigest = 'authored_wordpress__POST___parent___internal___contentDigest',
  AuthoredWordpressPostParentInternalDescription = 'authored_wordpress__POST___parent___internal___description',
  AuthoredWordpressPostParentInternalFieldOwners = 'authored_wordpress__POST___parent___internal___fieldOwners',
  AuthoredWordpressPostParentInternalIgnoreType = 'authored_wordpress__POST___parent___internal___ignoreType',
  AuthoredWordpressPostParentInternalMediaType = 'authored_wordpress__POST___parent___internal___mediaType',
  AuthoredWordpressPostParentInternalOwner = 'authored_wordpress__POST___parent___internal___owner',
  AuthoredWordpressPostParentInternalType = 'authored_wordpress__POST___parent___internal___type',
  AuthoredWordpressPostChildren = 'authored_wordpress__POST___children',
  AuthoredWordpressPostChildrenId = 'authored_wordpress__POST___children___id',
  AuthoredWordpressPostChildrenParentId = 'authored_wordpress__POST___children___parent___id',
  AuthoredWordpressPostChildrenParentChildren = 'authored_wordpress__POST___children___parent___children',
  AuthoredWordpressPostChildrenChildren = 'authored_wordpress__POST___children___children',
  AuthoredWordpressPostChildrenChildrenId = 'authored_wordpress__POST___children___children___id',
  AuthoredWordpressPostChildrenChildrenChildren = 'authored_wordpress__POST___children___children___children',
  AuthoredWordpressPostChildrenInternalContent = 'authored_wordpress__POST___children___internal___content',
  AuthoredWordpressPostChildrenInternalContentDigest = 'authored_wordpress__POST___children___internal___contentDigest',
  AuthoredWordpressPostChildrenInternalDescription = 'authored_wordpress__POST___children___internal___description',
  AuthoredWordpressPostChildrenInternalFieldOwners = 'authored_wordpress__POST___children___internal___fieldOwners',
  AuthoredWordpressPostChildrenInternalIgnoreType = 'authored_wordpress__POST___children___internal___ignoreType',
  AuthoredWordpressPostChildrenInternalMediaType = 'authored_wordpress__POST___children___internal___mediaType',
  AuthoredWordpressPostChildrenInternalOwner = 'authored_wordpress__POST___children___internal___owner',
  AuthoredWordpressPostChildrenInternalType = 'authored_wordpress__POST___children___internal___type',
  AuthoredWordpressPostInternalContent = 'authored_wordpress__POST___internal___content',
  AuthoredWordpressPostInternalContentDigest = 'authored_wordpress__POST___internal___contentDigest',
  AuthoredWordpressPostInternalDescription = 'authored_wordpress__POST___internal___description',
  AuthoredWordpressPostInternalFieldOwners = 'authored_wordpress__POST___internal___fieldOwners',
  AuthoredWordpressPostInternalIgnoreType = 'authored_wordpress__POST___internal___ignoreType',
  AuthoredWordpressPostInternalMediaType = 'authored_wordpress__POST___internal___mediaType',
  AuthoredWordpressPostInternalOwner = 'authored_wordpress__POST___internal___owner',
  AuthoredWordpressPostInternalType = 'authored_wordpress__POST___internal___type',
  AuthoredWordpressPostWordpressId = 'authored_wordpress__POST___wordpress_id',
  AuthoredWordpressPostDate = 'authored_wordpress__POST___date',
  AuthoredWordpressPostGuid = 'authored_wordpress__POST___guid',
  AuthoredWordpressPostModified = 'authored_wordpress__POST___modified',
  AuthoredWordpressPostSlug = 'authored_wordpress__POST___slug',
  AuthoredWordpressPostStatus = 'authored_wordpress__POST___status',
  AuthoredWordpressPostType = 'authored_wordpress__POST___type',
  AuthoredWordpressPostLink = 'authored_wordpress__POST___link',
  AuthoredWordpressPostTitle = 'authored_wordpress__POST___title',
  AuthoredWordpressPostContent = 'authored_wordpress__POST___content',
  AuthoredWordpressPostExcerpt = 'authored_wordpress__POST___excerpt',
  AuthoredWordpressPostCommentStatus = 'authored_wordpress__POST___comment_status',
  AuthoredWordpressPostPingStatus = 'authored_wordpress__POST___ping_status',
  AuthoredWordpressPostSticky = 'authored_wordpress__POST___sticky',
  AuthoredWordpressPostTemplate = 'authored_wordpress__POST___template',
  AuthoredWordpressPostFormat = 'authored_wordpress__POST___format',
  AuthoredWordpressPostAuthorId = 'authored_wordpress__POST___author___id',
  AuthoredWordpressPostAuthorParentId = 'authored_wordpress__POST___author___parent___id',
  AuthoredWordpressPostAuthorParentChildren = 'authored_wordpress__POST___author___parent___children',
  AuthoredWordpressPostAuthorChildren = 'authored_wordpress__POST___author___children',
  AuthoredWordpressPostAuthorChildrenId = 'authored_wordpress__POST___author___children___id',
  AuthoredWordpressPostAuthorChildrenChildren = 'authored_wordpress__POST___author___children___children',
  AuthoredWordpressPostAuthorInternalContent = 'authored_wordpress__POST___author___internal___content',
  AuthoredWordpressPostAuthorInternalContentDigest = 'authored_wordpress__POST___author___internal___contentDigest',
  AuthoredWordpressPostAuthorInternalDescription = 'authored_wordpress__POST___author___internal___description',
  AuthoredWordpressPostAuthorInternalFieldOwners = 'authored_wordpress__POST___author___internal___fieldOwners',
  AuthoredWordpressPostAuthorInternalIgnoreType = 'authored_wordpress__POST___author___internal___ignoreType',
  AuthoredWordpressPostAuthorInternalMediaType = 'authored_wordpress__POST___author___internal___mediaType',
  AuthoredWordpressPostAuthorInternalOwner = 'authored_wordpress__POST___author___internal___owner',
  AuthoredWordpressPostAuthorInternalType = 'authored_wordpress__POST___author___internal___type',
  AuthoredWordpressPostAuthorWordpressId = 'authored_wordpress__POST___author___wordpress_id',
  AuthoredWordpressPostAuthorName = 'authored_wordpress__POST___author___name',
  AuthoredWordpressPostAuthorUrl = 'authored_wordpress__POST___author___url',
  AuthoredWordpressPostAuthorDescription = 'authored_wordpress__POST___author___description',
  AuthoredWordpressPostAuthorLink = 'authored_wordpress__POST___author___link',
  AuthoredWordpressPostAuthorSlug = 'authored_wordpress__POST___author___slug',
  AuthoredWordpressPostAuthorAvatarUrlsWordpress_24 = 'authored_wordpress__POST___author___avatar_urls___wordpress_24',
  AuthoredWordpressPostAuthorAvatarUrlsWordpress_48 = 'authored_wordpress__POST___author___avatar_urls___wordpress_48',
  AuthoredWordpressPostAuthorAvatarUrlsWordpress_96 = 'authored_wordpress__POST___author___avatar_urls___wordpress_96',
  AuthoredWordpressPostAuthorAuthoredWordpressPost = 'authored_wordpress__POST___author___authored_wordpress__POST',
  AuthoredWordpressPostAuthorAuthoredWordpressPostId = 'authored_wordpress__POST___author___authored_wordpress__POST___id',
  AuthoredWordpressPostAuthorAuthoredWordpressPostChildren = 'authored_wordpress__POST___author___authored_wordpress__POST___children',
  AuthoredWordpressPostAuthorAuthoredWordpressPostWordpressId = 'authored_wordpress__POST___author___authored_wordpress__POST___wordpress_id',
  AuthoredWordpressPostAuthorAuthoredWordpressPostDate = 'authored_wordpress__POST___author___authored_wordpress__POST___date',
  AuthoredWordpressPostAuthorAuthoredWordpressPostGuid = 'authored_wordpress__POST___author___authored_wordpress__POST___guid',
  AuthoredWordpressPostAuthorAuthoredWordpressPostModified = 'authored_wordpress__POST___author___authored_wordpress__POST___modified',
  AuthoredWordpressPostAuthorAuthoredWordpressPostSlug = 'authored_wordpress__POST___author___authored_wordpress__POST___slug',
  AuthoredWordpressPostAuthorAuthoredWordpressPostStatus = 'authored_wordpress__POST___author___authored_wordpress__POST___status',
  AuthoredWordpressPostAuthorAuthoredWordpressPostType = 'authored_wordpress__POST___author___authored_wordpress__POST___type',
  AuthoredWordpressPostAuthorAuthoredWordpressPostLink = 'authored_wordpress__POST___author___authored_wordpress__POST___link',
  AuthoredWordpressPostAuthorAuthoredWordpressPostTitle = 'authored_wordpress__POST___author___authored_wordpress__POST___title',
  AuthoredWordpressPostAuthorAuthoredWordpressPostContent = 'authored_wordpress__POST___author___authored_wordpress__POST___content',
  AuthoredWordpressPostAuthorAuthoredWordpressPostExcerpt = 'authored_wordpress__POST___author___authored_wordpress__POST___excerpt',
  AuthoredWordpressPostAuthorAuthoredWordpressPostCommentStatus = 'authored_wordpress__POST___author___authored_wordpress__POST___comment_status',
  AuthoredWordpressPostAuthorAuthoredWordpressPostPingStatus = 'authored_wordpress__POST___author___authored_wordpress__POST___ping_status',
  AuthoredWordpressPostAuthorAuthoredWordpressPostSticky = 'authored_wordpress__POST___author___authored_wordpress__POST___sticky',
  AuthoredWordpressPostAuthorAuthoredWordpressPostTemplate = 'authored_wordpress__POST___author___authored_wordpress__POST___template',
  AuthoredWordpressPostAuthorAuthoredWordpressPostFormat = 'authored_wordpress__POST___author___authored_wordpress__POST___format',
  AuthoredWordpressPostAuthorAuthoredWordpressPostTags = 'authored_wordpress__POST___author___authored_wordpress__POST___tags',
  AuthoredWordpressPostAuthorAuthoredWordpressPostCategories = 'authored_wordpress__POST___author___authored_wordpress__POST___categories',
  AuthoredWordpressPostAuthorAuthoredWordpressPostPath = 'authored_wordpress__POST___author___authored_wordpress__POST___path',
  AuthoredWordpressPostAuthorAuthoredWordpressPostSource = 'authored_wordpress__POST___author___authored_wordpress__POST___source',
  AuthoredWordpressPostAuthorAuthoredWordpressPage = 'authored_wordpress__POST___author___authored_wordpress__PAGE',
  AuthoredWordpressPostAuthorAuthoredWordpressPageId = 'authored_wordpress__POST___author___authored_wordpress__PAGE___id',
  AuthoredWordpressPostAuthorAuthoredWordpressPageChildren = 'authored_wordpress__POST___author___authored_wordpress__PAGE___children',
  AuthoredWordpressPostAuthorAuthoredWordpressPageWordpressId = 'authored_wordpress__POST___author___authored_wordpress__PAGE___wordpress_id',
  AuthoredWordpressPostAuthorAuthoredWordpressPageDate = 'authored_wordpress__POST___author___authored_wordpress__PAGE___date',
  AuthoredWordpressPostAuthorAuthoredWordpressPageGuid = 'authored_wordpress__POST___author___authored_wordpress__PAGE___guid',
  AuthoredWordpressPostAuthorAuthoredWordpressPageModified = 'authored_wordpress__POST___author___authored_wordpress__PAGE___modified',
  AuthoredWordpressPostAuthorAuthoredWordpressPageSlug = 'authored_wordpress__POST___author___authored_wordpress__PAGE___slug',
  AuthoredWordpressPostAuthorAuthoredWordpressPageStatus = 'authored_wordpress__POST___author___authored_wordpress__PAGE___status',
  AuthoredWordpressPostAuthorAuthoredWordpressPageType = 'authored_wordpress__POST___author___authored_wordpress__PAGE___type',
  AuthoredWordpressPostAuthorAuthoredWordpressPageLink = 'authored_wordpress__POST___author___authored_wordpress__PAGE___link',
  AuthoredWordpressPostAuthorAuthoredWordpressPageTitle = 'authored_wordpress__POST___author___authored_wordpress__PAGE___title',
  AuthoredWordpressPostAuthorAuthoredWordpressPageContent = 'authored_wordpress__POST___author___authored_wordpress__PAGE___content',
  AuthoredWordpressPostAuthorAuthoredWordpressPageExcerpt = 'authored_wordpress__POST___author___authored_wordpress__PAGE___excerpt',
  AuthoredWordpressPostAuthorAuthoredWordpressPageWordpressParent = 'authored_wordpress__POST___author___authored_wordpress__PAGE___wordpress_parent',
  AuthoredWordpressPostAuthorAuthoredWordpressPageMenuOrder = 'authored_wordpress__POST___author___authored_wordpress__PAGE___menu_order',
  AuthoredWordpressPostAuthorAuthoredWordpressPageCommentStatus = 'authored_wordpress__POST___author___authored_wordpress__PAGE___comment_status',
  AuthoredWordpressPostAuthorAuthoredWordpressPagePingStatus = 'authored_wordpress__POST___author___authored_wordpress__PAGE___ping_status',
  AuthoredWordpressPostAuthorAuthoredWordpressPageTemplate = 'authored_wordpress__POST___author___authored_wordpress__PAGE___template',
  AuthoredWordpressPostAuthorAuthoredWordpressPagePath = 'authored_wordpress__POST___author___authored_wordpress__PAGE___path',
  AuthoredWordpressPostAuthorLinksSelf = 'authored_wordpress__POST___author____links___self',
  AuthoredWordpressPostAuthorLinksCollection = 'authored_wordpress__POST___author____links___collection',
  AuthoredWordpressPostAuthorPath = 'authored_wordpress__POST___author___path',
  AuthoredWordpressPostTags = 'authored_wordpress__POST___tags',
  AuthoredWordpressPostTagsId = 'authored_wordpress__POST___tags___id',
  AuthoredWordpressPostTagsParentId = 'authored_wordpress__POST___tags___parent___id',
  AuthoredWordpressPostTagsParentChildren = 'authored_wordpress__POST___tags___parent___children',
  AuthoredWordpressPostTagsChildren = 'authored_wordpress__POST___tags___children',
  AuthoredWordpressPostTagsChildrenId = 'authored_wordpress__POST___tags___children___id',
  AuthoredWordpressPostTagsChildrenChildren = 'authored_wordpress__POST___tags___children___children',
  AuthoredWordpressPostTagsInternalContent = 'authored_wordpress__POST___tags___internal___content',
  AuthoredWordpressPostTagsInternalContentDigest = 'authored_wordpress__POST___tags___internal___contentDigest',
  AuthoredWordpressPostTagsInternalDescription = 'authored_wordpress__POST___tags___internal___description',
  AuthoredWordpressPostTagsInternalFieldOwners = 'authored_wordpress__POST___tags___internal___fieldOwners',
  AuthoredWordpressPostTagsInternalIgnoreType = 'authored_wordpress__POST___tags___internal___ignoreType',
  AuthoredWordpressPostTagsInternalMediaType = 'authored_wordpress__POST___tags___internal___mediaType',
  AuthoredWordpressPostTagsInternalOwner = 'authored_wordpress__POST___tags___internal___owner',
  AuthoredWordpressPostTagsInternalType = 'authored_wordpress__POST___tags___internal___type',
  AuthoredWordpressPostTagsWordpressId = 'authored_wordpress__POST___tags___wordpress_id',
  AuthoredWordpressPostTagsCount = 'authored_wordpress__POST___tags___count',
  AuthoredWordpressPostTagsDescription = 'authored_wordpress__POST___tags___description',
  AuthoredWordpressPostTagsLink = 'authored_wordpress__POST___tags___link',
  AuthoredWordpressPostTagsName = 'authored_wordpress__POST___tags___name',
  AuthoredWordpressPostTagsSlug = 'authored_wordpress__POST___tags___slug',
  AuthoredWordpressPostTagsTaxonomyId = 'authored_wordpress__POST___tags___taxonomy___id',
  AuthoredWordpressPostTagsTaxonomyChildren = 'authored_wordpress__POST___tags___taxonomy___children',
  AuthoredWordpressPostTagsTaxonomyWordpressId = 'authored_wordpress__POST___tags___taxonomy___wordpress_id',
  AuthoredWordpressPostTagsTaxonomyName = 'authored_wordpress__POST___tags___taxonomy___name',
  AuthoredWordpressPostTagsTaxonomySlug = 'authored_wordpress__POST___tags___taxonomy___slug',
  AuthoredWordpressPostTagsTaxonomyDescription = 'authored_wordpress__POST___tags___taxonomy___description',
  AuthoredWordpressPostTagsTaxonomyTypes = 'authored_wordpress__POST___tags___taxonomy___types',
  AuthoredWordpressPostTagsTaxonomyHierarchical = 'authored_wordpress__POST___tags___taxonomy___hierarchical',
  AuthoredWordpressPostTagsTaxonomyRestBase = 'authored_wordpress__POST___tags___taxonomy___rest_base',
  AuthoredWordpressPostTagsLinksSelf = 'authored_wordpress__POST___tags____links___self',
  AuthoredWordpressPostTagsLinksCollection = 'authored_wordpress__POST___tags____links___collection',
  AuthoredWordpressPostTagsLinksAbout = 'authored_wordpress__POST___tags____links___about',
  AuthoredWordpressPostTagsLinksWpPostType = 'authored_wordpress__POST___tags____links___wp_post_type',
  AuthoredWordpressPostTagsLinksCuries = 'authored_wordpress__POST___tags____links___curies',
  AuthoredWordpressPostTagsPath = 'authored_wordpress__POST___tags___path',
  AuthoredWordpressPostCategories = 'authored_wordpress__POST___categories',
  AuthoredWordpressPostCategoriesId = 'authored_wordpress__POST___categories___id',
  AuthoredWordpressPostCategoriesParentId = 'authored_wordpress__POST___categories___parent___id',
  AuthoredWordpressPostCategoriesParentChildren = 'authored_wordpress__POST___categories___parent___children',
  AuthoredWordpressPostCategoriesChildren = 'authored_wordpress__POST___categories___children',
  AuthoredWordpressPostCategoriesChildrenId = 'authored_wordpress__POST___categories___children___id',
  AuthoredWordpressPostCategoriesChildrenChildren = 'authored_wordpress__POST___categories___children___children',
  AuthoredWordpressPostCategoriesInternalContent = 'authored_wordpress__POST___categories___internal___content',
  AuthoredWordpressPostCategoriesInternalContentDigest = 'authored_wordpress__POST___categories___internal___contentDigest',
  AuthoredWordpressPostCategoriesInternalDescription = 'authored_wordpress__POST___categories___internal___description',
  AuthoredWordpressPostCategoriesInternalFieldOwners = 'authored_wordpress__POST___categories___internal___fieldOwners',
  AuthoredWordpressPostCategoriesInternalIgnoreType = 'authored_wordpress__POST___categories___internal___ignoreType',
  AuthoredWordpressPostCategoriesInternalMediaType = 'authored_wordpress__POST___categories___internal___mediaType',
  AuthoredWordpressPostCategoriesInternalOwner = 'authored_wordpress__POST___categories___internal___owner',
  AuthoredWordpressPostCategoriesInternalType = 'authored_wordpress__POST___categories___internal___type',
  AuthoredWordpressPostCategoriesWordpressId = 'authored_wordpress__POST___categories___wordpress_id',
  AuthoredWordpressPostCategoriesCount = 'authored_wordpress__POST___categories___count',
  AuthoredWordpressPostCategoriesDescription = 'authored_wordpress__POST___categories___description',
  AuthoredWordpressPostCategoriesLink = 'authored_wordpress__POST___categories___link',
  AuthoredWordpressPostCategoriesName = 'authored_wordpress__POST___categories___name',
  AuthoredWordpressPostCategoriesSlug = 'authored_wordpress__POST___categories___slug',
  AuthoredWordpressPostCategoriesWordpressParent = 'authored_wordpress__POST___categories___wordpress_parent',
  AuthoredWordpressPostCategoriesTaxonomyId = 'authored_wordpress__POST___categories___taxonomy___id',
  AuthoredWordpressPostCategoriesTaxonomyChildren = 'authored_wordpress__POST___categories___taxonomy___children',
  AuthoredWordpressPostCategoriesTaxonomyWordpressId = 'authored_wordpress__POST___categories___taxonomy___wordpress_id',
  AuthoredWordpressPostCategoriesTaxonomyName = 'authored_wordpress__POST___categories___taxonomy___name',
  AuthoredWordpressPostCategoriesTaxonomySlug = 'authored_wordpress__POST___categories___taxonomy___slug',
  AuthoredWordpressPostCategoriesTaxonomyDescription = 'authored_wordpress__POST___categories___taxonomy___description',
  AuthoredWordpressPostCategoriesTaxonomyTypes = 'authored_wordpress__POST___categories___taxonomy___types',
  AuthoredWordpressPostCategoriesTaxonomyHierarchical = 'authored_wordpress__POST___categories___taxonomy___hierarchical',
  AuthoredWordpressPostCategoriesTaxonomyRestBase = 'authored_wordpress__POST___categories___taxonomy___rest_base',
  AuthoredWordpressPostCategoriesLinksSelf = 'authored_wordpress__POST___categories____links___self',
  AuthoredWordpressPostCategoriesLinksCollection = 'authored_wordpress__POST___categories____links___collection',
  AuthoredWordpressPostCategoriesLinksAbout = 'authored_wordpress__POST___categories____links___about',
  AuthoredWordpressPostCategoriesLinksWpPostType = 'authored_wordpress__POST___categories____links___wp_post_type',
  AuthoredWordpressPostCategoriesLinksCuries = 'authored_wordpress__POST___categories____links___curies',
  AuthoredWordpressPostCategoriesPath = 'authored_wordpress__POST___categories___path',
  AuthoredWordpressPostLinksSelf = 'authored_wordpress__POST____links___self',
  AuthoredWordpressPostLinksSelfHref = 'authored_wordpress__POST____links___self___href',
  AuthoredWordpressPostLinksCollection = 'authored_wordpress__POST____links___collection',
  AuthoredWordpressPostLinksCollectionHref = 'authored_wordpress__POST____links___collection___href',
  AuthoredWordpressPostLinksAbout = 'authored_wordpress__POST____links___about',
  AuthoredWordpressPostLinksAboutHref = 'authored_wordpress__POST____links___about___href',
  AuthoredWordpressPostLinksAuthor = 'authored_wordpress__POST____links___author',
  AuthoredWordpressPostLinksAuthorEmbeddable = 'authored_wordpress__POST____links___author___embeddable',
  AuthoredWordpressPostLinksAuthorHref = 'authored_wordpress__POST____links___author___href',
  AuthoredWordpressPostLinksReplies = 'authored_wordpress__POST____links___replies',
  AuthoredWordpressPostLinksRepliesEmbeddable = 'authored_wordpress__POST____links___replies___embeddable',
  AuthoredWordpressPostLinksRepliesHref = 'authored_wordpress__POST____links___replies___href',
  AuthoredWordpressPostLinksVersionHistory = 'authored_wordpress__POST____links___version_history',
  AuthoredWordpressPostLinksVersionHistoryCount = 'authored_wordpress__POST____links___version_history___count',
  AuthoredWordpressPostLinksVersionHistoryHref = 'authored_wordpress__POST____links___version_history___href',
  AuthoredWordpressPostLinksPredecessorVersion = 'authored_wordpress__POST____links___predecessor_version',
  AuthoredWordpressPostLinksPredecessorVersionWordpressId = 'authored_wordpress__POST____links___predecessor_version___wordpress_id',
  AuthoredWordpressPostLinksPredecessorVersionHref = 'authored_wordpress__POST____links___predecessor_version___href',
  AuthoredWordpressPostLinksWpAttachment = 'authored_wordpress__POST____links___wp_attachment',
  AuthoredWordpressPostLinksWpAttachmentHref = 'authored_wordpress__POST____links___wp_attachment___href',
  AuthoredWordpressPostLinksWpTerm = 'authored_wordpress__POST____links___wp_term',
  AuthoredWordpressPostLinksWpTermTaxonomy = 'authored_wordpress__POST____links___wp_term___taxonomy',
  AuthoredWordpressPostLinksWpTermEmbeddable = 'authored_wordpress__POST____links___wp_term___embeddable',
  AuthoredWordpressPostLinksWpTermHref = 'authored_wordpress__POST____links___wp_term___href',
  AuthoredWordpressPostLinksCuries = 'authored_wordpress__POST____links___curies',
  AuthoredWordpressPostLinksCuriesName = 'authored_wordpress__POST____links___curies___name',
  AuthoredWordpressPostLinksCuriesHref = 'authored_wordpress__POST____links___curies___href',
  AuthoredWordpressPostLinksCuriesTemplated = 'authored_wordpress__POST____links___curies___templated',
  AuthoredWordpressPostLinksWpFeaturedmedia = 'authored_wordpress__POST____links___wp_featuredmedia',
  AuthoredWordpressPostLinksWpFeaturedmediaEmbeddable = 'authored_wordpress__POST____links___wp_featuredmedia___embeddable',
  AuthoredWordpressPostLinksWpFeaturedmediaHref = 'authored_wordpress__POST____links___wp_featuredmedia___href',
  AuthoredWordpressPostPath = 'authored_wordpress__POST___path',
  AuthoredWordpressPostSource = 'authored_wordpress__POST___source',
  AuthoredWordpressPage = 'authored_wordpress__PAGE',
  AuthoredWordpressPageId = 'authored_wordpress__PAGE___id',
  AuthoredWordpressPageParentId = 'authored_wordpress__PAGE___parent___id',
  AuthoredWordpressPageParentParentId = 'authored_wordpress__PAGE___parent___parent___id',
  AuthoredWordpressPageParentParentChildren = 'authored_wordpress__PAGE___parent___parent___children',
  AuthoredWordpressPageParentChildren = 'authored_wordpress__PAGE___parent___children',
  AuthoredWordpressPageParentChildrenId = 'authored_wordpress__PAGE___parent___children___id',
  AuthoredWordpressPageParentChildrenChildren = 'authored_wordpress__PAGE___parent___children___children',
  AuthoredWordpressPageParentInternalContent = 'authored_wordpress__PAGE___parent___internal___content',
  AuthoredWordpressPageParentInternalContentDigest = 'authored_wordpress__PAGE___parent___internal___contentDigest',
  AuthoredWordpressPageParentInternalDescription = 'authored_wordpress__PAGE___parent___internal___description',
  AuthoredWordpressPageParentInternalFieldOwners = 'authored_wordpress__PAGE___parent___internal___fieldOwners',
  AuthoredWordpressPageParentInternalIgnoreType = 'authored_wordpress__PAGE___parent___internal___ignoreType',
  AuthoredWordpressPageParentInternalMediaType = 'authored_wordpress__PAGE___parent___internal___mediaType',
  AuthoredWordpressPageParentInternalOwner = 'authored_wordpress__PAGE___parent___internal___owner',
  AuthoredWordpressPageParentInternalType = 'authored_wordpress__PAGE___parent___internal___type',
  AuthoredWordpressPageChildren = 'authored_wordpress__PAGE___children',
  AuthoredWordpressPageChildrenId = 'authored_wordpress__PAGE___children___id',
  AuthoredWordpressPageChildrenParentId = 'authored_wordpress__PAGE___children___parent___id',
  AuthoredWordpressPageChildrenParentChildren = 'authored_wordpress__PAGE___children___parent___children',
  AuthoredWordpressPageChildrenChildren = 'authored_wordpress__PAGE___children___children',
  AuthoredWordpressPageChildrenChildrenId = 'authored_wordpress__PAGE___children___children___id',
  AuthoredWordpressPageChildrenChildrenChildren = 'authored_wordpress__PAGE___children___children___children',
  AuthoredWordpressPageChildrenInternalContent = 'authored_wordpress__PAGE___children___internal___content',
  AuthoredWordpressPageChildrenInternalContentDigest = 'authored_wordpress__PAGE___children___internal___contentDigest',
  AuthoredWordpressPageChildrenInternalDescription = 'authored_wordpress__PAGE___children___internal___description',
  AuthoredWordpressPageChildrenInternalFieldOwners = 'authored_wordpress__PAGE___children___internal___fieldOwners',
  AuthoredWordpressPageChildrenInternalIgnoreType = 'authored_wordpress__PAGE___children___internal___ignoreType',
  AuthoredWordpressPageChildrenInternalMediaType = 'authored_wordpress__PAGE___children___internal___mediaType',
  AuthoredWordpressPageChildrenInternalOwner = 'authored_wordpress__PAGE___children___internal___owner',
  AuthoredWordpressPageChildrenInternalType = 'authored_wordpress__PAGE___children___internal___type',
  AuthoredWordpressPageInternalContent = 'authored_wordpress__PAGE___internal___content',
  AuthoredWordpressPageInternalContentDigest = 'authored_wordpress__PAGE___internal___contentDigest',
  AuthoredWordpressPageInternalDescription = 'authored_wordpress__PAGE___internal___description',
  AuthoredWordpressPageInternalFieldOwners = 'authored_wordpress__PAGE___internal___fieldOwners',
  AuthoredWordpressPageInternalIgnoreType = 'authored_wordpress__PAGE___internal___ignoreType',
  AuthoredWordpressPageInternalMediaType = 'authored_wordpress__PAGE___internal___mediaType',
  AuthoredWordpressPageInternalOwner = 'authored_wordpress__PAGE___internal___owner',
  AuthoredWordpressPageInternalType = 'authored_wordpress__PAGE___internal___type',
  AuthoredWordpressPageWordpressId = 'authored_wordpress__PAGE___wordpress_id',
  AuthoredWordpressPageDate = 'authored_wordpress__PAGE___date',
  AuthoredWordpressPageGuid = 'authored_wordpress__PAGE___guid',
  AuthoredWordpressPageModified = 'authored_wordpress__PAGE___modified',
  AuthoredWordpressPageSlug = 'authored_wordpress__PAGE___slug',
  AuthoredWordpressPageStatus = 'authored_wordpress__PAGE___status',
  AuthoredWordpressPageType = 'authored_wordpress__PAGE___type',
  AuthoredWordpressPageLink = 'authored_wordpress__PAGE___link',
  AuthoredWordpressPageTitle = 'authored_wordpress__PAGE___title',
  AuthoredWordpressPageContent = 'authored_wordpress__PAGE___content',
  AuthoredWordpressPageExcerpt = 'authored_wordpress__PAGE___excerpt',
  AuthoredWordpressPageWordpressParent = 'authored_wordpress__PAGE___wordpress_parent',
  AuthoredWordpressPageMenuOrder = 'authored_wordpress__PAGE___menu_order',
  AuthoredWordpressPageCommentStatus = 'authored_wordpress__PAGE___comment_status',
  AuthoredWordpressPagePingStatus = 'authored_wordpress__PAGE___ping_status',
  AuthoredWordpressPageTemplate = 'authored_wordpress__PAGE___template',
  AuthoredWordpressPageAuthorId = 'authored_wordpress__PAGE___author___id',
  AuthoredWordpressPageAuthorParentId = 'authored_wordpress__PAGE___author___parent___id',
  AuthoredWordpressPageAuthorParentChildren = 'authored_wordpress__PAGE___author___parent___children',
  AuthoredWordpressPageAuthorChildren = 'authored_wordpress__PAGE___author___children',
  AuthoredWordpressPageAuthorChildrenId = 'authored_wordpress__PAGE___author___children___id',
  AuthoredWordpressPageAuthorChildrenChildren = 'authored_wordpress__PAGE___author___children___children',
  AuthoredWordpressPageAuthorInternalContent = 'authored_wordpress__PAGE___author___internal___content',
  AuthoredWordpressPageAuthorInternalContentDigest = 'authored_wordpress__PAGE___author___internal___contentDigest',
  AuthoredWordpressPageAuthorInternalDescription = 'authored_wordpress__PAGE___author___internal___description',
  AuthoredWordpressPageAuthorInternalFieldOwners = 'authored_wordpress__PAGE___author___internal___fieldOwners',
  AuthoredWordpressPageAuthorInternalIgnoreType = 'authored_wordpress__PAGE___author___internal___ignoreType',
  AuthoredWordpressPageAuthorInternalMediaType = 'authored_wordpress__PAGE___author___internal___mediaType',
  AuthoredWordpressPageAuthorInternalOwner = 'authored_wordpress__PAGE___author___internal___owner',
  AuthoredWordpressPageAuthorInternalType = 'authored_wordpress__PAGE___author___internal___type',
  AuthoredWordpressPageAuthorWordpressId = 'authored_wordpress__PAGE___author___wordpress_id',
  AuthoredWordpressPageAuthorName = 'authored_wordpress__PAGE___author___name',
  AuthoredWordpressPageAuthorUrl = 'authored_wordpress__PAGE___author___url',
  AuthoredWordpressPageAuthorDescription = 'authored_wordpress__PAGE___author___description',
  AuthoredWordpressPageAuthorLink = 'authored_wordpress__PAGE___author___link',
  AuthoredWordpressPageAuthorSlug = 'authored_wordpress__PAGE___author___slug',
  AuthoredWordpressPageAuthorAvatarUrlsWordpress_24 = 'authored_wordpress__PAGE___author___avatar_urls___wordpress_24',
  AuthoredWordpressPageAuthorAvatarUrlsWordpress_48 = 'authored_wordpress__PAGE___author___avatar_urls___wordpress_48',
  AuthoredWordpressPageAuthorAvatarUrlsWordpress_96 = 'authored_wordpress__PAGE___author___avatar_urls___wordpress_96',
  AuthoredWordpressPageAuthorAuthoredWordpressPost = 'authored_wordpress__PAGE___author___authored_wordpress__POST',
  AuthoredWordpressPageAuthorAuthoredWordpressPostId = 'authored_wordpress__PAGE___author___authored_wordpress__POST___id',
  AuthoredWordpressPageAuthorAuthoredWordpressPostChildren = 'authored_wordpress__PAGE___author___authored_wordpress__POST___children',
  AuthoredWordpressPageAuthorAuthoredWordpressPostWordpressId = 'authored_wordpress__PAGE___author___authored_wordpress__POST___wordpress_id',
  AuthoredWordpressPageAuthorAuthoredWordpressPostDate = 'authored_wordpress__PAGE___author___authored_wordpress__POST___date',
  AuthoredWordpressPageAuthorAuthoredWordpressPostGuid = 'authored_wordpress__PAGE___author___authored_wordpress__POST___guid',
  AuthoredWordpressPageAuthorAuthoredWordpressPostModified = 'authored_wordpress__PAGE___author___authored_wordpress__POST___modified',
  AuthoredWordpressPageAuthorAuthoredWordpressPostSlug = 'authored_wordpress__PAGE___author___authored_wordpress__POST___slug',
  AuthoredWordpressPageAuthorAuthoredWordpressPostStatus = 'authored_wordpress__PAGE___author___authored_wordpress__POST___status',
  AuthoredWordpressPageAuthorAuthoredWordpressPostType = 'authored_wordpress__PAGE___author___authored_wordpress__POST___type',
  AuthoredWordpressPageAuthorAuthoredWordpressPostLink = 'authored_wordpress__PAGE___author___authored_wordpress__POST___link',
  AuthoredWordpressPageAuthorAuthoredWordpressPostTitle = 'authored_wordpress__PAGE___author___authored_wordpress__POST___title',
  AuthoredWordpressPageAuthorAuthoredWordpressPostContent = 'authored_wordpress__PAGE___author___authored_wordpress__POST___content',
  AuthoredWordpressPageAuthorAuthoredWordpressPostExcerpt = 'authored_wordpress__PAGE___author___authored_wordpress__POST___excerpt',
  AuthoredWordpressPageAuthorAuthoredWordpressPostCommentStatus = 'authored_wordpress__PAGE___author___authored_wordpress__POST___comment_status',
  AuthoredWordpressPageAuthorAuthoredWordpressPostPingStatus = 'authored_wordpress__PAGE___author___authored_wordpress__POST___ping_status',
  AuthoredWordpressPageAuthorAuthoredWordpressPostSticky = 'authored_wordpress__PAGE___author___authored_wordpress__POST___sticky',
  AuthoredWordpressPageAuthorAuthoredWordpressPostTemplate = 'authored_wordpress__PAGE___author___authored_wordpress__POST___template',
  AuthoredWordpressPageAuthorAuthoredWordpressPostFormat = 'authored_wordpress__PAGE___author___authored_wordpress__POST___format',
  AuthoredWordpressPageAuthorAuthoredWordpressPostTags = 'authored_wordpress__PAGE___author___authored_wordpress__POST___tags',
  AuthoredWordpressPageAuthorAuthoredWordpressPostCategories = 'authored_wordpress__PAGE___author___authored_wordpress__POST___categories',
  AuthoredWordpressPageAuthorAuthoredWordpressPostPath = 'authored_wordpress__PAGE___author___authored_wordpress__POST___path',
  AuthoredWordpressPageAuthorAuthoredWordpressPostSource = 'authored_wordpress__PAGE___author___authored_wordpress__POST___source',
  AuthoredWordpressPageAuthorAuthoredWordpressPage = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE',
  AuthoredWordpressPageAuthorAuthoredWordpressPageId = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___id',
  AuthoredWordpressPageAuthorAuthoredWordpressPageChildren = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___children',
  AuthoredWordpressPageAuthorAuthoredWordpressPageWordpressId = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___wordpress_id',
  AuthoredWordpressPageAuthorAuthoredWordpressPageDate = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___date',
  AuthoredWordpressPageAuthorAuthoredWordpressPageGuid = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___guid',
  AuthoredWordpressPageAuthorAuthoredWordpressPageModified = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___modified',
  AuthoredWordpressPageAuthorAuthoredWordpressPageSlug = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___slug',
  AuthoredWordpressPageAuthorAuthoredWordpressPageStatus = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___status',
  AuthoredWordpressPageAuthorAuthoredWordpressPageType = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___type',
  AuthoredWordpressPageAuthorAuthoredWordpressPageLink = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___link',
  AuthoredWordpressPageAuthorAuthoredWordpressPageTitle = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___title',
  AuthoredWordpressPageAuthorAuthoredWordpressPageContent = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___content',
  AuthoredWordpressPageAuthorAuthoredWordpressPageExcerpt = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___excerpt',
  AuthoredWordpressPageAuthorAuthoredWordpressPageWordpressParent = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___wordpress_parent',
  AuthoredWordpressPageAuthorAuthoredWordpressPageMenuOrder = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___menu_order',
  AuthoredWordpressPageAuthorAuthoredWordpressPageCommentStatus = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___comment_status',
  AuthoredWordpressPageAuthorAuthoredWordpressPagePingStatus = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___ping_status',
  AuthoredWordpressPageAuthorAuthoredWordpressPageTemplate = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___template',
  AuthoredWordpressPageAuthorAuthoredWordpressPagePath = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___path',
  AuthoredWordpressPageAuthorLinksSelf = 'authored_wordpress__PAGE___author____links___self',
  AuthoredWordpressPageAuthorLinksCollection = 'authored_wordpress__PAGE___author____links___collection',
  AuthoredWordpressPageAuthorPath = 'authored_wordpress__PAGE___author___path',
  AuthoredWordpressPageLinksSelf = 'authored_wordpress__PAGE____links___self',
  AuthoredWordpressPageLinksSelfHref = 'authored_wordpress__PAGE____links___self___href',
  AuthoredWordpressPageLinksCollection = 'authored_wordpress__PAGE____links___collection',
  AuthoredWordpressPageLinksCollectionHref = 'authored_wordpress__PAGE____links___collection___href',
  AuthoredWordpressPageLinksAbout = 'authored_wordpress__PAGE____links___about',
  AuthoredWordpressPageLinksAboutHref = 'authored_wordpress__PAGE____links___about___href',
  AuthoredWordpressPageLinksAuthor = 'authored_wordpress__PAGE____links___author',
  AuthoredWordpressPageLinksAuthorEmbeddable = 'authored_wordpress__PAGE____links___author___embeddable',
  AuthoredWordpressPageLinksAuthorHref = 'authored_wordpress__PAGE____links___author___href',
  AuthoredWordpressPageLinksReplies = 'authored_wordpress__PAGE____links___replies',
  AuthoredWordpressPageLinksRepliesEmbeddable = 'authored_wordpress__PAGE____links___replies___embeddable',
  AuthoredWordpressPageLinksRepliesHref = 'authored_wordpress__PAGE____links___replies___href',
  AuthoredWordpressPageLinksVersionHistory = 'authored_wordpress__PAGE____links___version_history',
  AuthoredWordpressPageLinksVersionHistoryCount = 'authored_wordpress__PAGE____links___version_history___count',
  AuthoredWordpressPageLinksVersionHistoryHref = 'authored_wordpress__PAGE____links___version_history___href',
  AuthoredWordpressPageLinksPredecessorVersion = 'authored_wordpress__PAGE____links___predecessor_version',
  AuthoredWordpressPageLinksPredecessorVersionWordpressId = 'authored_wordpress__PAGE____links___predecessor_version___wordpress_id',
  AuthoredWordpressPageLinksPredecessorVersionHref = 'authored_wordpress__PAGE____links___predecessor_version___href',
  AuthoredWordpressPageLinksWpAttachment = 'authored_wordpress__PAGE____links___wp_attachment',
  AuthoredWordpressPageLinksWpAttachmentHref = 'authored_wordpress__PAGE____links___wp_attachment___href',
  AuthoredWordpressPageLinksCuries = 'authored_wordpress__PAGE____links___curies',
  AuthoredWordpressPageLinksCuriesName = 'authored_wordpress__PAGE____links___curies___name',
  AuthoredWordpressPageLinksCuriesHref = 'authored_wordpress__PAGE____links___curies___href',
  AuthoredWordpressPageLinksCuriesTemplated = 'authored_wordpress__PAGE____links___curies___templated',
  AuthoredWordpressPagePath = 'authored_wordpress__PAGE___path',
  LinksSelf = '_links___self',
  LinksSelfHref = '_links___self___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  Path = 'path'
}

export type Wordpress__Wp_UsersFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  avatar_urls?: Maybe<Wordpress__Wp_UsersAvatar_UrlsFilterInput>;
  authored_wordpress__POST?: Maybe<Wordpress__PostFilterListInput>;
  authored_wordpress__PAGE?: Maybe<Wordpress__PageFilterListInput>;
  _links?: Maybe<Wordpress__Wp_Users_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_UsersGroupConnection = {
   __typename?: 'wordpress__wp_usersGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_UsersEdge>;
  nodes: Array<Wordpress__Wp_Users>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_UsersSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_UsersFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PagesQueryQueryVariables = {};


export type PagesQueryQuery = (
  { __typename?: 'Query' }
  & { allSitePage: (
    { __typename?: 'SitePageConnection' }
    & { nodes: Array<(
      { __typename?: 'SitePage' }
      & Pick<SitePage, 'path'>
    )> }
  ) }
);

export type SiteTitleQueryQueryVariables = {};


export type SiteTitleQueryQuery = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata?: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title'>
      & { menuLinks?: Maybe<Array<Maybe<(
        { __typename?: 'SiteSiteMetadataMenuLinks' }
        & Pick<SiteSiteMetadataMenuLinks, 'name' | 'link'>
      )>>> }
    )> }
  )> }
);

export type PostFragment = (
  { __typename?: 'wordpress__POST' }
  & Pick<Wordpress__Post, 'link' | 'source' | 'title' | 'wordpress_id' | 'date'>
  & { tags?: Maybe<Array<Maybe<(
    { __typename?: 'wordpress__TAG' }
    & Pick<Wordpress__Tag, 'name' | 'slug'>
  )>>> }
);
