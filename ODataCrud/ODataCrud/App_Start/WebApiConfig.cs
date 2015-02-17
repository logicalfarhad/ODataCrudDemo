using System.Web.Http;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;
using ODataCrud.Models;

namespace ODataCrud
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            ODataModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<Product>("Products");
            config.MapODataServiceRoute("ODataRoute", "odata", builder.GetEdmModel());
        }
    }
}
