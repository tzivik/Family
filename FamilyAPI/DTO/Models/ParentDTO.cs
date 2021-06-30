using Family.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DTO.Models
{
    public class ParentDTO
    {
        public  string  FirstName { get; set; }
        public string LastName { get; set; }
        public string Id { get; set; }
        public DateTime  DateOfBirth { get; set; }
        public string Kind { get; set; }
        public string  Hmo { get; set; }
        public ICollection<ChildDTO> Children { get; set; }
    }
}
