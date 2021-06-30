using DTO.Models;
using Family.BL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Family.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParentsController : ControllerBase
    {
        IParentBL parentBL;
        public ParentsController(IParentBL _parentBL)
        {
            parentBL=_parentBL;
        }

        [HttpPost]
        public void AddParent([FromBody] ParentDTO parent)
        {
            parentBL.AddParent(parent);
        }
    }
}
