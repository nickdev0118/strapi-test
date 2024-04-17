module.exports = (config, { strapi })=> {
  return async(ctx, next) => {
    try {
      const user = ctx.state.user;
      const tenant_id = ctx.query.filters.tenant.tenant_id.$eq;
      const fullUserData = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        user.id,
        { populate: "*" }
      );

      if(tenant_id === fullUserData.tenant.tenant_id) {
        return next();
      } else {
        return ctx.unauthorized("This User is unauthorized.");
      }
    } catch(error) {
      return ctx.notFound("An error is occured in users middleware.");
    }
  };
};