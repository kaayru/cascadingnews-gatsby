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
  wordpressTag?: Maybe<Wordpress__Tag>;
  allWordpressTag: Wordpress__TagConnection;
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
  author?: Maybe<IntQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<IntQueryOperatorInput>;
  yoast_title?: Maybe<StringQueryOperatorInput>;
  yoast_meta?: Maybe<Wordpress__PostYoast_MetaFilterListInput>;
  yoast_json_ld?: Maybe<Wordpress__PostYoast_Json_LdFilterListInput>;
  _links?: Maybe<Wordpress__Post_LinksFilterInput>;
  tags?: Maybe<Wordpress__TagFilterListInput>;
  path?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
  isVideo?: Maybe<BooleanQueryOperatorInput>;
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
  author?: Maybe<IntQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  menu_order?: Maybe<IntQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  yoast_title?: Maybe<StringQueryOperatorInput>;
  yoast_meta?: Maybe<Wordpress__PageYoast_MetaFilterListInput>;
  yoast_json_ld?: Maybe<Wordpress__PageYoast_Json_LdFilterListInput>;
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
  _links?: Maybe<Wordpress__Tag_LinksFilterInput>;
  taxonomy?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  yoast_title?: Maybe<StringQueryOperatorInput>;
  yoast_meta?: Maybe<Wordpress__TagYoast_MetaFilterListInput>;
};

export type QueryAllWordpressTagArgs = {
  filter?: Maybe<Wordpress__TagFilterInput>;
  sort?: Maybe<Wordpress__TagSortInput>;
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
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataSocialTwitter = 'siteMetadata___social___twitter',
  SiteMetadataSocialGithub = 'siteMetadata___social___github',
  SiteMetadataMenuLinks = 'siteMetadata___menuLinks',
  SiteMetadataMenuLinksName = 'siteMetadata___menuLinks___name',
  SiteMetadataMenuLinksLink = 'siteMetadata___menuLinks___link',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime',
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
  PluginCreatorPluginOptionsConcurrentRequests = 'pluginCreator___pluginOptions___concurrentRequests',
  PluginCreatorPluginOptionsIncludedRoutes = 'pluginCreator___pluginOptions___includedRoutes',
  PluginCreatorPluginOptionsTrackingId = 'pluginCreator___pluginOptions___trackingId',
  PluginCreatorPluginOptionsRespectDnt = 'pluginCreator___pluginOptions___respectDNT',
  PluginCreatorPluginOptionsPathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  PluginCreatorPluginOptionsSrc = 'pluginCreator___pluginOptions___src',
  PluginCreatorPluginOptionsFixtures = 'pluginCreator___pluginOptions___fixtures',
  PluginCreatorPluginOptionsMocks = 'pluginCreator___pluginOptions___mocks',
  PluginCreatorPluginOptionsUtils = 'pluginCreator___pluginOptions___utils',
  PluginCreatorPluginOptionsExclude = 'pluginCreator___pluginOptions___exclude',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcons = 'pluginCreator___pluginOptions___icons',
  PluginCreatorPluginOptionsIconsSrc = 'pluginCreator___pluginOptions___icons___src',
  PluginCreatorPluginOptionsIconsSizes = 'pluginCreator___pluginOptions___icons___sizes',
  PluginCreatorPluginOptionsIconsType = 'pluginCreator___pluginOptions___icons___type',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsEndpoint = 'pluginCreator___pluginOptions___endpoint',
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
  ComponentPath = 'componentPath',
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
  PluginOptionsConcurrentRequests = 'pluginOptions___concurrentRequests',
  PluginOptionsIncludedRoutes = 'pluginOptions___includedRoutes',
  PluginOptionsTrackingId = 'pluginOptions___trackingId',
  PluginOptionsRespectDnt = 'pluginOptions___respectDNT',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsSrc = 'pluginOptions___src',
  PluginOptionsFixtures = 'pluginOptions___fixtures',
  PluginOptionsMocks = 'pluginOptions___mocks',
  PluginOptionsUtils = 'pluginOptions___utils',
  PluginOptionsExclude = 'pluginOptions___exclude',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcons = 'pluginOptions___icons',
  PluginOptionsIconsSrc = 'pluginOptions___icons___src',
  PluginOptionsIconsSizes = 'pluginOptions___icons___sizes',
  PluginOptionsIconsType = 'pluginOptions___icons___type',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsEndpoint = 'pluginOptions___endpoint',
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
  PackageJsonKeywords = 'packageJson___keywords',
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
  concurrentRequests?: Maybe<Scalars['Int']>;
  includedRoutes?: Maybe<Array<Maybe<Scalars['String']>>>;
  trackingId?: Maybe<Scalars['String']>;
  respectDNT?: Maybe<Scalars['Boolean']>;
  pathToConfigModule?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  fixtures?: Maybe<Scalars['String']>;
  mocks?: Maybe<Scalars['String']>;
  utils?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icons?: Maybe<Array<Maybe<SitePluginPluginOptionsIcons>>>;
  crossOrigin?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
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
  concurrentRequests?: Maybe<IntQueryOperatorInput>;
  includedRoutes?: Maybe<StringQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  respectDNT?: Maybe<BooleanQueryOperatorInput>;
  pathToConfigModule?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  fixtures?: Maybe<StringQueryOperatorInput>;
  mocks?: Maybe<StringQueryOperatorInput>;
  utils?: Maybe<StringQueryOperatorInput>;
  exclude?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  endpoint?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons';
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  social?: Maybe<SiteSiteMetadataSocial>;
  menuLinks?: Maybe<Array<Maybe<SiteSiteMetadataMenuLinks>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
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
  github?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataSocialFilterInput = {
  twitter?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
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
  WordpressId = 'wordpress_id',
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
  author?: Maybe<Scalars['Int']>;
  wordpress_parent?: Maybe<Scalars['Int']>;
  menu_order?: Maybe<Scalars['Int']>;
  comment_status?: Maybe<Scalars['String']>;
  ping_status?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  yoast_title?: Maybe<Scalars['String']>;
  yoast_meta?: Maybe<Array<Maybe<Wordpress__PageYoast_Meta>>>;
  yoast_json_ld?: Maybe<Array<Maybe<Wordpress__PageYoast_Json_Ld>>>;
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
  Author = 'author',
  WordpressParent = 'wordpress_parent',
  MenuOrder = 'menu_order',
  CommentStatus = 'comment_status',
  PingStatus = 'ping_status',
  Template = 'template',
  YoastTitle = 'yoast_title',
  YoastMeta = 'yoast_meta',
  YoastMetaName = 'yoast_meta___name',
  YoastMetaContent = 'yoast_meta___content',
  YoastMetaProperty = 'yoast_meta___property',
  YoastJsonLd = 'yoast_json_ld',
  YoastJsonLdWordpressContext = 'yoast_json_ld___wordpress__context',
  YoastJsonLdWordpressGraph = 'yoast_json_ld___wordpress__graph',
  YoastJsonLdWordpressGraphWordpressType = 'yoast_json_ld___wordpress__graph___wordpress__type',
  YoastJsonLdWordpressGraphWordpressId = 'yoast_json_ld___wordpress__graph___wordpress__id',
  YoastJsonLdWordpressGraphName = 'yoast_json_ld___wordpress__graph___name',
  YoastJsonLdWordpressGraphUrl = 'yoast_json_ld___wordpress__graph___url',
  YoastJsonLdWordpressGraphSameAs = 'yoast_json_ld___wordpress__graph___sameAs',
  YoastJsonLdWordpressGraphLogoWordpressType = 'yoast_json_ld___wordpress__graph___logo___wordpress__type',
  YoastJsonLdWordpressGraphLogoWordpressId = 'yoast_json_ld___wordpress__graph___logo___wordpress__id',
  YoastJsonLdWordpressGraphLogoInLanguage = 'yoast_json_ld___wordpress__graph___logo___inLanguage',
  YoastJsonLdWordpressGraphLogoUrl = 'yoast_json_ld___wordpress__graph___logo___url',
  YoastJsonLdWordpressGraphLogoWidth = 'yoast_json_ld___wordpress__graph___logo___width',
  YoastJsonLdWordpressGraphLogoHeight = 'yoast_json_ld___wordpress__graph___logo___height',
  YoastJsonLdWordpressGraphLogoCaption = 'yoast_json_ld___wordpress__graph___logo___caption',
  YoastJsonLdWordpressGraphImageWordpressId = 'yoast_json_ld___wordpress__graph___image___wordpress__id',
  YoastJsonLdWordpressGraphInLanguage = 'yoast_json_ld___wordpress__graph___inLanguage',
  YoastJsonLdWordpressGraphDescription = 'yoast_json_ld___wordpress__graph___description',
  YoastJsonLdWordpressGraphPublisherWordpressId = 'yoast_json_ld___wordpress__graph___publisher___wordpress__id',
  YoastJsonLdWordpressGraphPotentialAction = 'yoast_json_ld___wordpress__graph___potentialAction',
  YoastJsonLdWordpressGraphPotentialActionWordpressType = 'yoast_json_ld___wordpress__graph___potentialAction___wordpress__type',
  YoastJsonLdWordpressGraphPotentialActionQueryInput = 'yoast_json_ld___wordpress__graph___potentialAction___query_input',
  YoastJsonLdWordpressGraphIsPartOfWordpressId = 'yoast_json_ld___wordpress__graph___isPartOf___wordpress__id',
  YoastJsonLdWordpressGraphDatePublished = 'yoast_json_ld___wordpress__graph___datePublished',
  YoastJsonLdWordpressGraphDateModified = 'yoast_json_ld___wordpress__graph___dateModified',
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
  Path = 'path',
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
  author?: Maybe<IntQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  menu_order?: Maybe<IntQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  yoast_title?: Maybe<StringQueryOperatorInput>;
  yoast_meta?: Maybe<Wordpress__PageYoast_MetaFilterListInput>;
  yoast_json_ld?: Maybe<Wordpress__PageYoast_Json_LdFilterListInput>;
  _links?: Maybe<Wordpress__Page_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
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

export type Wordpress__PageYoast_Json_Ld = {
  __typename?: 'wordpress__PAGEYoast_json_ld';
  wordpress__context?: Maybe<Scalars['String']>;
  wordpress__graph?: Maybe<Array<Maybe<Wordpress__PageYoast_Json_LdWordpress__Graph>>>;
};

export type Wordpress__PageYoast_Json_LdFilterInput = {
  wordpress__context?: Maybe<StringQueryOperatorInput>;
  wordpress__graph?: Maybe<Wordpress__PageYoast_Json_LdWordpress__GraphFilterListInput>;
};

export type Wordpress__PageYoast_Json_LdFilterListInput = {
  elemMatch?: Maybe<Wordpress__PageYoast_Json_LdFilterInput>;
};

export type Wordpress__PageYoast_Json_LdWordpress__Graph = {
  __typename?: 'wordpress__PAGEYoast_json_ldWordpress__graph';
  wordpress__type?: Maybe<Scalars['String']>;
  wordpress__id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  sameAs?: Maybe<Array<Maybe<Scalars['String']>>>;
  logo?: Maybe<Wordpress__PageYoast_Json_LdWordpress__GraphLogo>;
  image?: Maybe<Wordpress__PageYoast_Json_LdWordpress__GraphImage>;
  inLanguage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  publisher?: Maybe<Wordpress__PageYoast_Json_LdWordpress__GraphPublisher>;
  potentialAction?: Maybe<
    Array<Maybe<Wordpress__PageYoast_Json_LdWordpress__GraphPotentialAction>>
  >;
  isPartOf?: Maybe<Wordpress__PageYoast_Json_LdWordpress__GraphIsPartOf>;
  datePublished?: Maybe<Scalars['Date']>;
  dateModified?: Maybe<Scalars['Date']>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphDatePublishedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphDateModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphFilterInput = {
  wordpress__type?: Maybe<StringQueryOperatorInput>;
  wordpress__id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  sameAs?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<Wordpress__PageYoast_Json_LdWordpress__GraphLogoFilterInput>;
  image?: Maybe<Wordpress__PageYoast_Json_LdWordpress__GraphImageFilterInput>;
  inLanguage?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  publisher?: Maybe<Wordpress__PageYoast_Json_LdWordpress__GraphPublisherFilterInput>;
  potentialAction?: Maybe<
    Wordpress__PageYoast_Json_LdWordpress__GraphPotentialActionFilterListInput
  >;
  isPartOf?: Maybe<Wordpress__PageYoast_Json_LdWordpress__GraphIsPartOfFilterInput>;
  datePublished?: Maybe<DateQueryOperatorInput>;
  dateModified?: Maybe<DateQueryOperatorInput>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphFilterListInput = {
  elemMatch?: Maybe<Wordpress__PageYoast_Json_LdWordpress__GraphFilterInput>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphImage = {
  __typename?: 'wordpress__PAGEYoast_json_ldWordpress__graphImage';
  wordpress__id?: Maybe<Scalars['String']>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphImageFilterInput = {
  wordpress__id?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphIsPartOf = {
  __typename?: 'wordpress__PAGEYoast_json_ldWordpress__graphIsPartOf';
  wordpress__id?: Maybe<Scalars['String']>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphIsPartOfFilterInput = {
  wordpress__id?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphLogo = {
  __typename?: 'wordpress__PAGEYoast_json_ldWordpress__graphLogo';
  wordpress__type?: Maybe<Scalars['String']>;
  wordpress__id?: Maybe<Scalars['String']>;
  inLanguage?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphLogoFilterInput = {
  wordpress__type?: Maybe<StringQueryOperatorInput>;
  wordpress__id?: Maybe<StringQueryOperatorInput>;
  inLanguage?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphPotentialAction = {
  __typename?: 'wordpress__PAGEYoast_json_ldWordpress__graphPotentialAction';
  wordpress__type?: Maybe<Scalars['String']>;
  query_input?: Maybe<Scalars['String']>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphPotentialActionFilterInput = {
  wordpress__type?: Maybe<StringQueryOperatorInput>;
  query_input?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphPotentialActionFilterListInput = {
  elemMatch?: Maybe<Wordpress__PageYoast_Json_LdWordpress__GraphPotentialActionFilterInput>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphPublisher = {
  __typename?: 'wordpress__PAGEYoast_json_ldWordpress__graphPublisher';
  wordpress__id?: Maybe<Scalars['String']>;
};

export type Wordpress__PageYoast_Json_LdWordpress__GraphPublisherFilterInput = {
  wordpress__id?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PageYoast_Meta = {
  __typename?: 'wordpress__PAGEYoast_meta';
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
};

export type Wordpress__PageYoast_MetaFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  property?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PageYoast_MetaFilterListInput = {
  elemMatch?: Maybe<Wordpress__PageYoast_MetaFilterInput>;
};

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
  author?: Maybe<Scalars['Int']>;
  comment_status?: Maybe<Scalars['String']>;
  ping_status?: Maybe<Scalars['String']>;
  sticky?: Maybe<Scalars['Boolean']>;
  template?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['Int']>>>;
  yoast_title?: Maybe<Scalars['String']>;
  yoast_meta?: Maybe<Array<Maybe<Wordpress__PostYoast_Meta>>>;
  yoast_json_ld?: Maybe<Array<Maybe<Wordpress__PostYoast_Json_Ld>>>;
  _links?: Maybe<Wordpress__Post_Links>;
  tags?: Maybe<Array<Maybe<Wordpress__Tag>>>;
  path?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  isVideo?: Maybe<Scalars['Boolean']>;
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
  Author = 'author',
  CommentStatus = 'comment_status',
  PingStatus = 'ping_status',
  Sticky = 'sticky',
  Template = 'template',
  Format = 'format',
  Categories = 'categories',
  YoastTitle = 'yoast_title',
  YoastMeta = 'yoast_meta',
  YoastMetaName = 'yoast_meta___name',
  YoastMetaContent = 'yoast_meta___content',
  YoastMetaProperty = 'yoast_meta___property',
  YoastJsonLd = 'yoast_json_ld',
  YoastJsonLdWordpressContext = 'yoast_json_ld___wordpress__context',
  YoastJsonLdWordpressGraph = 'yoast_json_ld___wordpress__graph',
  YoastJsonLdWordpressGraphWordpressId = 'yoast_json_ld___wordpress__graph___wordpress__id',
  YoastJsonLdWordpressGraphName = 'yoast_json_ld___wordpress__graph___name',
  YoastJsonLdWordpressGraphUrl = 'yoast_json_ld___wordpress__graph___url',
  YoastJsonLdWordpressGraphSameAs = 'yoast_json_ld___wordpress__graph___sameAs',
  YoastJsonLdWordpressGraphLogoWordpressType = 'yoast_json_ld___wordpress__graph___logo___wordpress__type',
  YoastJsonLdWordpressGraphLogoWordpressId = 'yoast_json_ld___wordpress__graph___logo___wordpress__id',
  YoastJsonLdWordpressGraphLogoInLanguage = 'yoast_json_ld___wordpress__graph___logo___inLanguage',
  YoastJsonLdWordpressGraphLogoUrl = 'yoast_json_ld___wordpress__graph___logo___url',
  YoastJsonLdWordpressGraphLogoWidth = 'yoast_json_ld___wordpress__graph___logo___width',
  YoastJsonLdWordpressGraphLogoHeight = 'yoast_json_ld___wordpress__graph___logo___height',
  YoastJsonLdWordpressGraphLogoCaption = 'yoast_json_ld___wordpress__graph___logo___caption',
  YoastJsonLdWordpressGraphImageWordpressId = 'yoast_json_ld___wordpress__graph___image___wordpress__id',
  YoastJsonLdWordpressGraphImageWordpressType = 'yoast_json_ld___wordpress__graph___image___wordpress__type',
  YoastJsonLdWordpressGraphImageInLanguage = 'yoast_json_ld___wordpress__graph___image___inLanguage',
  YoastJsonLdWordpressGraphImageUrl = 'yoast_json_ld___wordpress__graph___image___url',
  YoastJsonLdWordpressGraphImageCaption = 'yoast_json_ld___wordpress__graph___image___caption',
  YoastJsonLdWordpressGraphInLanguage = 'yoast_json_ld___wordpress__graph___inLanguage',
  YoastJsonLdWordpressGraphDescription = 'yoast_json_ld___wordpress__graph___description',
  YoastJsonLdWordpressGraphPublisherWordpressId = 'yoast_json_ld___wordpress__graph___publisher___wordpress__id',
  YoastJsonLdWordpressGraphPotentialAction = 'yoast_json_ld___wordpress__graph___potentialAction',
  YoastJsonLdWordpressGraphPotentialActionWordpressType = 'yoast_json_ld___wordpress__graph___potentialAction___wordpress__type',
  YoastJsonLdWordpressGraphPotentialActionQueryInput = 'yoast_json_ld___wordpress__graph___potentialAction___query_input',
  YoastJsonLdWordpressGraphIsPartOfWordpressId = 'yoast_json_ld___wordpress__graph___isPartOf___wordpress__id',
  YoastJsonLdWordpressGraphDatePublished = 'yoast_json_ld___wordpress__graph___datePublished',
  YoastJsonLdWordpressGraphDateModified = 'yoast_json_ld___wordpress__graph___dateModified',
  YoastJsonLdWordpressGraphAuthorWordpressId = 'yoast_json_ld___wordpress__graph___author___wordpress__id',
  YoastJsonLdWordpressGraphHeadline = 'yoast_json_ld___wordpress__graph___headline',
  YoastJsonLdWordpressGraphCommentCount = 'yoast_json_ld___wordpress__graph___commentCount',
  YoastJsonLdWordpressGraphMainEntityOfPageWordpressId = 'yoast_json_ld___wordpress__graph___mainEntityOfPage___wordpress__id',
  YoastJsonLdWordpressGraphKeywords = 'yoast_json_ld___wordpress__graph___keywords',
  YoastJsonLdWordpressGraphPrimaryImageOfPageWordpressId = 'yoast_json_ld___wordpress__graph___primaryImageOfPage___wordpress__id',
  YoastJsonLdWordpressGraphArticleSection = 'yoast_json_ld___wordpress__graph___articleSection',
  YoastJsonLdWordpressGraphWidth = 'yoast_json_ld___wordpress__graph___width',
  YoastJsonLdWordpressGraphHeight = 'yoast_json_ld___wordpress__graph___height',
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
  TagsPath = 'tags___path',
  TagsYoastTitle = 'tags___yoast_title',
  TagsYoastMeta = 'tags___yoast_meta',
  TagsYoastMetaName = 'tags___yoast_meta___name',
  TagsYoastMetaContent = 'tags___yoast_meta___content',
  TagsYoastMetaProperty = 'tags___yoast_meta___property',
  Path = 'path',
  Source = 'source',
  IsVideo = 'isVideo',
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
  author?: Maybe<IntQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<IntQueryOperatorInput>;
  yoast_title?: Maybe<StringQueryOperatorInput>;
  yoast_meta?: Maybe<Wordpress__PostYoast_MetaFilterListInput>;
  yoast_json_ld?: Maybe<Wordpress__PostYoast_Json_LdFilterListInput>;
  _links?: Maybe<Wordpress__Post_LinksFilterInput>;
  tags?: Maybe<Wordpress__TagFilterListInput>;
  path?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
  isVideo?: Maybe<BooleanQueryOperatorInput>;
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

export type Wordpress__PostYoast_Json_Ld = {
  __typename?: 'wordpress__POSTYoast_json_ld';
  wordpress__context?: Maybe<Scalars['String']>;
  wordpress__graph?: Maybe<Array<Maybe<Wordpress__PostYoast_Json_LdWordpress__Graph>>>;
};

export type Wordpress__PostYoast_Json_LdFilterInput = {
  wordpress__context?: Maybe<StringQueryOperatorInput>;
  wordpress__graph?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphFilterListInput>;
};

export type Wordpress__PostYoast_Json_LdFilterListInput = {
  elemMatch?: Maybe<Wordpress__PostYoast_Json_LdFilterInput>;
};

export type Wordpress__PostYoast_Json_LdWordpress__Graph = {
  __typename?: 'wordpress__POSTYoast_json_ldWordpress__graph';
  wordpress__id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  sameAs?: Maybe<Array<Maybe<Scalars['String']>>>;
  logo?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphLogo>;
  image?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphImage>;
  inLanguage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  publisher?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphPublisher>;
  potentialAction?: Maybe<
    Array<Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphPotentialAction>>
  >;
  isPartOf?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphIsPartOf>;
  datePublished?: Maybe<Scalars['Date']>;
  dateModified?: Maybe<Scalars['Date']>;
  author?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphAuthor>;
  headline?: Maybe<Scalars['String']>;
  commentCount?: Maybe<Scalars['Int']>;
  mainEntityOfPage?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphMainEntityOfPage>;
  keywords?: Maybe<Scalars['String']>;
  primaryImageOfPage?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphPrimaryImageOfPage>;
  articleSection?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphDatePublishedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphDateModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphAuthor = {
  __typename?: 'wordpress__POSTYoast_json_ldWordpress__graphAuthor';
  wordpress__id?: Maybe<Scalars['String']>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphAuthorFilterInput = {
  wordpress__id?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphFilterInput = {
  wordpress__id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  sameAs?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphLogoFilterInput>;
  image?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphImageFilterInput>;
  inLanguage?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  publisher?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphPublisherFilterInput>;
  potentialAction?: Maybe<
    Wordpress__PostYoast_Json_LdWordpress__GraphPotentialActionFilterListInput
  >;
  isPartOf?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphIsPartOfFilterInput>;
  datePublished?: Maybe<DateQueryOperatorInput>;
  dateModified?: Maybe<DateQueryOperatorInput>;
  author?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphAuthorFilterInput>;
  headline?: Maybe<StringQueryOperatorInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  mainEntityOfPage?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphMainEntityOfPageFilterInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  primaryImageOfPage?: Maybe<
    Wordpress__PostYoast_Json_LdWordpress__GraphPrimaryImageOfPageFilterInput
  >;
  articleSection?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphFilterListInput = {
  elemMatch?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphFilterInput>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphImage = {
  __typename?: 'wordpress__POSTYoast_json_ldWordpress__graphImage';
  wordpress__id?: Maybe<Scalars['String']>;
  wordpress__type?: Maybe<Scalars['String']>;
  inLanguage?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphImageFilterInput = {
  wordpress__id?: Maybe<StringQueryOperatorInput>;
  wordpress__type?: Maybe<StringQueryOperatorInput>;
  inLanguage?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphIsPartOf = {
  __typename?: 'wordpress__POSTYoast_json_ldWordpress__graphIsPartOf';
  wordpress__id?: Maybe<Scalars['String']>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphIsPartOfFilterInput = {
  wordpress__id?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphLogo = {
  __typename?: 'wordpress__POSTYoast_json_ldWordpress__graphLogo';
  wordpress__type?: Maybe<Scalars['String']>;
  wordpress__id?: Maybe<Scalars['String']>;
  inLanguage?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphLogoFilterInput = {
  wordpress__type?: Maybe<StringQueryOperatorInput>;
  wordpress__id?: Maybe<StringQueryOperatorInput>;
  inLanguage?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphMainEntityOfPage = {
  __typename?: 'wordpress__POSTYoast_json_ldWordpress__graphMainEntityOfPage';
  wordpress__id?: Maybe<Scalars['String']>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphMainEntityOfPageFilterInput = {
  wordpress__id?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphPotentialAction = {
  __typename?: 'wordpress__POSTYoast_json_ldWordpress__graphPotentialAction';
  wordpress__type?: Maybe<Scalars['String']>;
  query_input?: Maybe<Scalars['String']>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphPotentialActionFilterInput = {
  wordpress__type?: Maybe<StringQueryOperatorInput>;
  query_input?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphPotentialActionFilterListInput = {
  elemMatch?: Maybe<Wordpress__PostYoast_Json_LdWordpress__GraphPotentialActionFilterInput>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphPrimaryImageOfPage = {
  __typename?: 'wordpress__POSTYoast_json_ldWordpress__graphPrimaryImageOfPage';
  wordpress__id?: Maybe<Scalars['String']>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphPrimaryImageOfPageFilterInput = {
  wordpress__id?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphPublisher = {
  __typename?: 'wordpress__POSTYoast_json_ldWordpress__graphPublisher';
  wordpress__id?: Maybe<Scalars['String']>;
};

export type Wordpress__PostYoast_Json_LdWordpress__GraphPublisherFilterInput = {
  wordpress__id?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PostYoast_Meta = {
  __typename?: 'wordpress__POSTYoast_meta';
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
};

export type Wordpress__PostYoast_MetaFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  property?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PostYoast_MetaFilterListInput = {
  elemMatch?: Maybe<Wordpress__PostYoast_MetaFilterInput>;
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
  Home = 'home',
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
  _links?: Maybe<Wordpress__Tag_Links>;
  taxonomy?: Maybe<Wordpress__Wp_Taxonomies>;
  path?: Maybe<Scalars['String']>;
  yoast_title?: Maybe<Scalars['String']>;
  yoast_meta?: Maybe<Array<Maybe<Wordpress__TagYoast_Meta>>>;
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
  Path = 'path',
  YoastTitle = 'yoast_title',
  YoastMeta = 'yoast_meta',
  YoastMetaName = 'yoast_meta___name',
  YoastMetaContent = 'yoast_meta___content',
  YoastMetaProperty = 'yoast_meta___property',
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
  _links?: Maybe<Wordpress__Tag_LinksFilterInput>;
  taxonomy?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  yoast_title?: Maybe<StringQueryOperatorInput>;
  yoast_meta?: Maybe<Wordpress__TagYoast_MetaFilterListInput>;
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

export type Wordpress__TagYoast_Meta = {
  __typename?: 'wordpress__TAGYoast_meta';
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
};

export type Wordpress__TagYoast_MetaFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  property?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__TagYoast_MetaFilterListInput = {
  elemMatch?: Maybe<Wordpress__TagYoast_MetaFilterInput>;
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
  LinksCuriesTemplated = '_links___curies___templated',
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

export type PagesQueryQueryVariables = {};

export type PagesQueryQuery = { __typename?: 'Query' } & {
  allSitePage: { __typename?: 'SitePageConnection' } & {
    nodes: Array<{ __typename?: 'SitePage' } & Pick<SitePage, 'path'>>;
  };
};

export type SiteLayoutQueryVariables = {};

export type SiteLayoutQuery = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & {
          menuLinks?: Maybe<
            Array<
              Maybe<
                { __typename?: 'SiteSiteMetadataMenuLinks' } & Pick<
                  SiteSiteMetadataMenuLinks,
                  'name' | 'link'
                >
              >
            >
          >;
          social?: Maybe<
            { __typename?: 'SiteSiteMetadataSocial' } & Pick<
              SiteSiteMetadataSocial,
              'twitter' | 'github'
            >
          >;
        }
      >;
    }
  >;
  wordpressSiteMetadata?: Maybe<
    { __typename?: 'wordpress__site_metadata' } & Pick<Wordpress__Site_Metadata, 'name'>
  >;
};

export type PostFragment = { __typename?: 'wordpress__POST' } & Pick<
  Wordpress__Post,
  'isVideo' | 'link' | 'source' | 'title' | 'wordpress_id' | 'date'
> & {
    tags?: Maybe<
      Array<Maybe<{ __typename?: 'wordpress__TAG' } & Pick<Wordpress__Tag, 'id' | 'name' | 'slug'>>>
    >;
  };

export type SeoComponentQueryVariables = {};

export type SeoComponentQuery = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'siteUrl'>>;
    }
  >;
};

export type IndexPageQueryVariables = {};

export type IndexPageQuery = { __typename?: 'Query' } & {
  allWordpressPost: { __typename?: 'wordpress__POSTConnection' } & {
    nodes: Array<{ __typename?: 'wordpress__POST' } & PostFragment>;
    pageInfo: { __typename?: 'PageInfo' } & Pick<PageInfo, 'hasNextPage'>;
  };
  wordpressPage?: Maybe<
    { __typename?: 'wordpress__PAGE' } & Pick<Wordpress__Page, 'yoast_title'> & {
        yoast_meta?: Maybe<
          Array<
            Maybe<
              { __typename?: 'wordpress__PAGEYoast_meta' } & Pick<
                Wordpress__PageYoast_Meta,
                'content' | 'name' | 'property'
              >
            >
          >
        >;
      }
  >;
  wordpressSiteMetadata?: Maybe<
    { __typename?: 'wordpress__site_metadata' } & Pick<Wordpress__Site_Metadata, 'description'>
  >;
};

export type MailingListPageQueryVariables = {};

export type MailingListPageQuery = { __typename?: 'Query' } & {
  wordpressPage?: Maybe<
    { __typename?: 'wordpress__PAGE' } & Pick<
      Wordpress__Page,
      'title' | 'content' | 'yoast_title'
    > & {
        yoast_meta?: Maybe<
          Array<
            Maybe<
              { __typename?: 'wordpress__PAGEYoast_meta' } & Pick<
                Wordpress__PageYoast_Meta,
                'content' | 'name' | 'property'
              >
            >
          >
        >;
      }
  >;
  wordpressSiteMetadata?: Maybe<
    { __typename?: 'wordpress__site_metadata' } & Pick<Wordpress__Site_Metadata, 'description'>
  >;
};

export type PageQueryVariables = {
  id: Scalars['Int'];
};

export type PageQuery = { __typename?: 'Query' } & {
  wordpressPage?: Maybe<
    { __typename?: 'wordpress__PAGE' } & Pick<
      Wordpress__Page,
      'title' | 'content' | 'yoast_title'
    > & {
        yoast_meta?: Maybe<
          Array<
            Maybe<
              { __typename?: 'wordpress__PAGEYoast_meta' } & Pick<
                Wordpress__PageYoast_Meta,
                'content' | 'name' | 'property'
              >
            >
          >
        >;
      }
  >;
};

export type TagPageQueryVariables = {
  id: Scalars['Int'];
};

export type TagPageQuery = { __typename?: 'Query' } & {
  wordpressTag?: Maybe<
    { __typename?: 'wordpress__TAG' } & Pick<
      Wordpress__Tag,
      'count' | 'name' | 'slug' | 'yoast_title'
    > & {
        yoast_meta?: Maybe<
          Array<
            Maybe<
              { __typename?: 'wordpress__TAGYoast_meta' } & Pick<
                Wordpress__TagYoast_Meta,
                'content' | 'name' | 'property'
              >
            >
          >
        >;
      }
  >;
  allWordpressPost: { __typename?: 'wordpress__POSTConnection' } & {
    nodes: Array<{ __typename?: 'wordpress__POST' } & PostFragment>;
    pageInfo: { __typename?: 'PageInfo' } & Pick<PageInfo, 'hasNextPage'>;
  };
};
