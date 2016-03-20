using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace MyAPP.Controllers
{
    public class StudentController : ApiController
    {
        public IHttpActionResult Post(object obj)
        {
            string msg = " m from api";
            return Ok(msg);
        }
    }
}
