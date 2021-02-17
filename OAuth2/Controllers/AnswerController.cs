using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OAuth2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        // GET: api/<AnswerController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<AnswerController>/5
        [HttpGet("{id}")]
        public bool Get(string p_EmailAddress, bool p_HasAccepted)
        {
            bool l_bSuccessful = true;

            if (String.IsNullOrEmpty(p_EmailAddress) || String.IsNullOrWhiteSpace(p_EmailAddress))
            {
                l_bSuccessful = false;
            }

            return l_bSuccessful;
        }

        // POST api/<AnswerController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AnswerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AnswerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
