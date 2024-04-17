import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFirstFirst extends Schema.CollectionType {
  collectionName: 'firsts';
  info: {
    singularName: 'first';
    pluralName: 'firsts';
    displayName: 'first';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::first.first',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::first.first',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMAddOnImageTenMAddOnImage extends Schema.CollectionType {
  collectionName: 'ten_m_add_on_images';
  info: {
    singularName: 'ten-m-add-on-image';
    pluralName: 'ten-m-add-on-images';
    displayName: 'TenMAddOnImage';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    add_on_id: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    image_url: Attribute.String & Attribute.Required;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-add-on-image.ten-m-add-on-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-add-on-image.ten-m-add-on-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMAddOnInfTenMAddOnInf extends Schema.CollectionType {
  collectionName: 'ten_m_add_on_info';
  info: {
    singularName: 'ten-m-add-on-inf';
    pluralName: 'ten-m-add-on-info';
    displayName: 'TenMAddOnInfo';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    add_on_id: Attribute.Integer & Attribute.Required;
    add_on_name: Attribute.String & Attribute.Required;
    add_on_name_en: Attribute.String & Attribute.Required;
    add_on_type_cd: Attribute.Integer & Attribute.Required;
    sls_price: Attribute.String & Attribute.Required;
    detl_dscrpt: Attribute.Text;
    detl_dscrpt_en: Attribute.Text;
    use_date_flg: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'Y'>;
    sup_info_dscrpt: Attribute.String;
    sup_info_dscrpt_en: Attribute.String;
    sls_unit_id: Attribute.Integer & Attribute.Required;
    day_max_sls_num: Attribute.Integer;
    book_min_num: Attribute.Integer;
    book_max_num: Attribute.Integer;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-add-on-inf.ten-m-add-on-inf',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-add-on-inf.ten-m-add-on-inf',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMAddOnStocTenMAddOnStoc extends Schema.CollectionType {
  collectionName: 'ten_m_add_on_stock';
  info: {
    singularName: 'ten-m-add-on-stoc';
    pluralName: 'ten-m-add-on-stock';
    displayName: 'TenMAddOnStock';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    add_on_id: Attribute.Integer & Attribute.Required;
    sls_date: Attribute.DateTime & Attribute.Required;
    day_max_sls_num: Attribute.Integer & Attribute.Required;
    book_num: Attribute.Integer & Attribute.Required;
    stock_num: Attribute.Integer & Attribute.Required;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-add-on-stoc.ten-m-add-on-stoc',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-add-on-stoc.ten-m-add-on-stoc',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMCancelPolicy1TenMCancelPolicy1
  extends Schema.CollectionType {
  collectionName: 'ten_m_cancel_policy';
  info: {
    singularName: 'ten-m-cancel-policy-1';
    pluralName: 'ten-m-cancel-policy';
    displayName: 'TenMCancelPolicy';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    cancel_policy_id: Attribute.Integer;
    cancel_policy_name: Attribute.String;
    cancel_policy_dscrpt: Attribute.String;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-cancel-policy-1.ten-m-cancel-policy-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-cancel-policy-1.ten-m-cancel-policy-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMCancelPolicyRtio1TenMCancelPolicyRtio1
  extends Schema.CollectionType {
  collectionName: 'ten_m_cancel_policy_rtio';
  info: {
    singularName: 'ten-m-cancel-policy-rtio-1';
    pluralName: 'ten-m-cancel-policy-rtio';
    displayName: 'TenMCancelPolicyRtio';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    cancel_policy_id: Attribute.Integer;
    days_ago: Attribute.Integer;
    price_rtio: Attribute.String;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-cancel-policy-rtio-1.ten-m-cancel-policy-rtio-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-cancel-policy-rtio-1.ten-m-cancel-policy-rtio-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMChildPricTenMChildPric extends Schema.CollectionType {
  collectionName: 'ten_m_child_price';
  info: {
    singularName: 'ten-m-child-pric';
    pluralName: 'ten-m-child-price';
    displayName: 'TenMChildPrice';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    person_class_id: Attribute.Integer & Attribute.Required;
    price_rtio: Attribute.String & Attribute.Required;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-child-pric.ten-m-child-pric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-child-pric.ten-m-child-pric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMClient1TenMClient1 extends Schema.CollectionType {
  collectionName: 'ten_m_client';
  info: {
    singularName: 'ten-m-client-1';
    pluralName: 'ten-m-client';
    displayName: 'TenMClient';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    tenant_id: Attribute.String & Attribute.Required;
    tenant_name: Attribute.String & Attribute.Required;
    email: Attribute.String & Attribute.Required;
    password: Attribute.String & Attribute.Required;
    fclty_logo_url: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    del_flag: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-client-1.ten-m-client-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-client-1.ten-m-client-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMRepRoomImageTenMRepRoomImage
  extends Schema.CollectionType {
  collectionName: 'ten_m_rep_room_images';
  info: {
    singularName: 'ten-m-rep-room-image';
    pluralName: 'ten-m-rep-room-images';
    displayName: 'TenMRepRoomImage';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    rep_type_room_id: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    image_url: Attribute.String & Attribute.Required;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-rep-room-image.ten-m-rep-room-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-rep-room-image.ten-m-rep-room-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMRepRoomInfTenMRepRoomInf extends Schema.CollectionType {
  collectionName: 'ten_m_rep_room_info';
  info: {
    singularName: 'ten-m-rep-room-inf';
    pluralName: 'ten-m-rep-room-info';
    displayName: 'TenMRepRoomInfo';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    rep_type_room_id: Attribute.Integer & Attribute.Required;
    rep_room_type_name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    rep_room_type_name_en: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    max_occupancy: Attribute.Integer & Attribute.Required;
    min_occupancy: Attribute.Integer & Attribute.Required;
    square: Attribute.String & Attribute.Required;
    detl_dscrpt: Attribute.Text;
    detl_dscrpt_en: Attribute.Text;
    day_use_flg: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-rep-room-inf.ten-m-rep-room-inf',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-rep-room-inf.ten-m-rep-room-inf',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMRoomDsplyInfo1TenMRoomDsplyInfo1
  extends Schema.CollectionType {
  collectionName: 'ten_m_room_dsply_info';
  info: {
    singularName: 'ten-m-room-dsply-info-1';
    pluralName: 'ten-m-room-dsply-info';
    displayName: 'TenMRoomDsplyInfo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    rep_type_room_id: Attribute.Integer & Attribute.Required;
    dsply_info_name: Attribute.String & Attribute.Required;
    dsply_info_name_en: Attribute.String & Attribute.Required;
    dsply_info_logo_url: Attribute.String & Attribute.Required;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-room-dsply-info-1.ten-m-room-dsply-info-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-room-dsply-info-1.ten-m-room-dsply-info-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMRoomDsplyInfoLink1TenMRoomDsplyInfoLink1
  extends Schema.CollectionType {
  collectionName: 'ten_m_room_dsply_info_link';
  info: {
    singularName: 'ten-m-room-dsply-info-link-1';
    pluralName: 'ten-m-room-dsply-info-link';
    displayName: 'TenMRoomDsplyInfoLink';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    tenant_id: Attribute.Integer & Attribute.Required;
    test: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-room-dsply-info-link-1.ten-m-room-dsply-info-link-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-room-dsply-info-link-1.ten-m-room-dsply-info-link-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMRoomInfTenMRoomInf extends Schema.CollectionType {
  collectionName: 'ten_m_room_info';
  info: {
    singularName: 'ten-m-room-inf';
    pluralName: 'ten-m-room-info';
    displayName: 'TenMRoomInfo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    room_type_id: Attribute.Integer & Attribute.Required;
    rep_room_type_id: Attribute.Integer & Attribute.Required;
    room_type_name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    room_type_name_en: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-room-inf.ten-m-room-inf',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-room-inf.ten-m-room-inf',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMRoomOptionImageTenMRoomOptionImage
  extends Schema.CollectionType {
  collectionName: 'ten_m_room_option_images';
  info: {
    singularName: 'ten-m-room-option-image';
    pluralName: 'ten-m-room-option-images';
    displayName: 'TenMRoomOptionImage';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    room_type_id: Attribute.Integer & Attribute.Required;
    image_url: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-room-option-image.ten-m-room-option-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-room-option-image.ten-m-room-option-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMRoomOptionInfTenMRoomOptionInf
  extends Schema.CollectionType {
  collectionName: 'ten_m_room_option_info';
  info: {
    singularName: 'ten-m-room-option-inf';
    pluralName: 'ten-m-room-option-info';
    displayName: 'TenMRoomOptionInfo';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    room_type_id: Attribute.Integer & Attribute.Required;
    room_option_key: Attribute.String & Attribute.Required;
    room_option_key_en: Attribute.String & Attribute.Required;
    room_option_value: Attribute.Text & Attribute.Required;
    room_option_value_en: Attribute.Text & Attribute.Required;
    detl_dscrpt: Attribute.Text & Attribute.Required;
    detl_dscrpt_en: Attribute.Text & Attribute.Required;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-room-option-inf.ten-m-room-option-inf',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-room-option-inf.ten-m-room-option-inf',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMRoomStocTenMRoomStoc extends Schema.CollectionType {
  collectionName: 'ten_m_room_stock';
  info: {
    singularName: 'ten-m-room-stoc';
    pluralName: 'ten-m-room-stock';
    displayName: 'TenMRoomStock';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    room_type_id: Attribute.Integer & Attribute.Required;
    sls_date: Attribute.DateTime;
    sls_room_num: Attribute.Integer;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-room-stoc.ten-m-room-stoc',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-room-stoc.ten-m-room-stoc',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenMSlsPlanRoomLinTenMSlsPlanRoomLin
  extends Schema.CollectionType {
  collectionName: 'ten_m_sls_plan_room_link';
  info: {
    singularName: 'ten-m-sls-plan-room-lin';
    pluralName: 'ten-m-sls-plan-room-link';
    displayName: 'TenMSlsPlanRoomLink';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    plan_room_link_id: Attribute.Integer & Attribute.Required;
    sls_plan_id: Attribute.Integer & Attribute.Required;
    rep_type_room_id: Attribute.Integer & Attribute.Required;
    room_type_id: Attribute.Integer & Attribute.Required;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-m-sls-plan-room-lin.ten-m-sls-plan-room-lin',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-m-sls-plan-room-lin.ten-m-sls-plan-room-lin',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenTBookInfo1TenTBookInfo1 extends Schema.CollectionType {
  collectionName: 'ten_t_book_info';
  info: {
    singularName: 'ten-t-book-info-1';
    pluralName: 'ten-t-book-info';
    displayName: 'TenTBookInfo';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    book_id: Attribute.String & Attribute.Required;
    guest_id: Attribute.Integer & Attribute.Required;
    room_type_id: Attribute.Integer & Attribute.Required;
    check_in_date: Attribute.DateTime & Attribute.Required;
    check_out_date: Attribute.DateTime & Attribute.Required;
    total_price: Attribute.String & Attribute.Required;
    book_status: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    traffic: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    pay_status: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-t-book-info-1.ten-t-book-info-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-t-book-info-1.ten-t-book-info-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenTBookPersonNum1TenTBookPersonNum1
  extends Schema.CollectionType {
  collectionName: 'ten_t_book_person_num';
  info: {
    singularName: 'ten-t-book-person-num-1';
    pluralName: 'ten-t-book-person-num';
    displayName: 'TenTBookPersonNum';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    book_id: Attribute.String & Attribute.Required;
    person_class_cd: Attribute.String & Attribute.Required;
    book_person_num: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<1>;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-t-book-person-num-1.ten-t-book-person-num-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-t-book-person-num-1.ten-t-book-person-num-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenTBookingStatus1TenTBookingStatus1
  extends Schema.CollectionType {
  collectionName: 'ten_t_booking_status';
  info: {
    singularName: 'ten-t-booking-status-1';
    pluralName: 'ten-t-booking-status';
    displayName: 'TenTBookingStatus';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    status: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-t-booking-status-1.ten-t-booking-status-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-t-booking-status-1.ten-t-booking-status-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenTGuest1TenTGuest1 extends Schema.CollectionType {
  collectionName: 'ten_t_guest';
  info: {
    singularName: 'ten-t-guest-1';
    pluralName: 'ten-t-guest';
    displayName: 'TenTGuest';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    first_name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    last_name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    email: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    post_cd: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 15;
      }>;
    country: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    prefecture: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    address: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    adress_num: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    phone_num: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-t-guest-1.ten-t-guest-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-t-guest-1.ten-t-guest-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenTPayStatus1TenTPayStatus1 extends Schema.CollectionType {
  collectionName: 'ten_t_pay_status';
  info: {
    singularName: 'ten-t-pay-status-1';
    pluralName: 'ten-t-pay-status';
    displayName: 'TenTPayStatus';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    status: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-t-pay-status-1.ten-t-pay-status-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-t-pay-status-1.ten-t-pay-status-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenTSlsPlanPrice1TenTSlsPlanPrice1
  extends Schema.CollectionType {
  collectionName: 'ten_t_sls_plan_price';
  info: {
    singularName: 'ten-t-sls-plan-price-1';
    pluralName: 'ten-t-sls-plan-price';
    displayName: 'TenTSlsPlanPrice';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    plan_room_link_id: Attribute.Integer & Attribute.Required;
    sls_date: Attribute.DateTime;
    sls_price: Attribute.Integer & Attribute.Required;
    book_person_num: Attribute.Integer;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-t-sls-plan-price-1.ten-t-sls-plan-price-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-t-sls-plan-price-1.ten-t-sls-plan-price-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTenTTraffic1TenTTraffic1 extends Schema.CollectionType {
  collectionName: 'ten_t_traffic';
  info: {
    singularName: 'ten-t-traffic-1';
    pluralName: 'ten-t-traffic';
    displayName: 'TenTTraffic';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    traffic_type: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    traffic_type_en: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    del_flag: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1;
      }> &
      Attribute.DefaultTo<'N'>;
    tenant_id: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ten-t-traffic-1.ten-t-traffic-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ten-t-traffic-1.ten-t-traffic-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::first.first': ApiFirstFirst;
      'api::ten-m-add-on-image.ten-m-add-on-image': ApiTenMAddOnImageTenMAddOnImage;
      'api::ten-m-add-on-inf.ten-m-add-on-inf': ApiTenMAddOnInfTenMAddOnInf;
      'api::ten-m-add-on-stoc.ten-m-add-on-stoc': ApiTenMAddOnStocTenMAddOnStoc;
      'api::ten-m-cancel-policy-1.ten-m-cancel-policy-1': ApiTenMCancelPolicy1TenMCancelPolicy1;
      'api::ten-m-cancel-policy-rtio-1.ten-m-cancel-policy-rtio-1': ApiTenMCancelPolicyRtio1TenMCancelPolicyRtio1;
      'api::ten-m-child-pric.ten-m-child-pric': ApiTenMChildPricTenMChildPric;
      'api::ten-m-client-1.ten-m-client-1': ApiTenMClient1TenMClient1;
      'api::ten-m-rep-room-image.ten-m-rep-room-image': ApiTenMRepRoomImageTenMRepRoomImage;
      'api::ten-m-rep-room-inf.ten-m-rep-room-inf': ApiTenMRepRoomInfTenMRepRoomInf;
      'api::ten-m-room-dsply-info-1.ten-m-room-dsply-info-1': ApiTenMRoomDsplyInfo1TenMRoomDsplyInfo1;
      'api::ten-m-room-dsply-info-link-1.ten-m-room-dsply-info-link-1': ApiTenMRoomDsplyInfoLink1TenMRoomDsplyInfoLink1;
      'api::ten-m-room-inf.ten-m-room-inf': ApiTenMRoomInfTenMRoomInf;
      'api::ten-m-room-option-image.ten-m-room-option-image': ApiTenMRoomOptionImageTenMRoomOptionImage;
      'api::ten-m-room-option-inf.ten-m-room-option-inf': ApiTenMRoomOptionInfTenMRoomOptionInf;
      'api::ten-m-room-stoc.ten-m-room-stoc': ApiTenMRoomStocTenMRoomStoc;
      'api::ten-m-sls-plan-room-lin.ten-m-sls-plan-room-lin': ApiTenMSlsPlanRoomLinTenMSlsPlanRoomLin;
      'api::ten-t-book-info-1.ten-t-book-info-1': ApiTenTBookInfo1TenTBookInfo1;
      'api::ten-t-book-person-num-1.ten-t-book-person-num-1': ApiTenTBookPersonNum1TenTBookPersonNum1;
      'api::ten-t-booking-status-1.ten-t-booking-status-1': ApiTenTBookingStatus1TenTBookingStatus1;
      'api::ten-t-guest-1.ten-t-guest-1': ApiTenTGuest1TenTGuest1;
      'api::ten-t-pay-status-1.ten-t-pay-status-1': ApiTenTPayStatus1TenTPayStatus1;
      'api::ten-t-sls-plan-price-1.ten-t-sls-plan-price-1': ApiTenTSlsPlanPrice1TenTSlsPlanPrice1;
      'api::ten-t-traffic-1.ten-t-traffic-1': ApiTenTTraffic1TenTTraffic1;
    }
  }
}
