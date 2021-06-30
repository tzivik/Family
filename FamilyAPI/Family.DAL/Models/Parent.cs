using System;
using System.Collections.Generic;

#nullable disable

namespace Family.DAL.Models
{
    public partial class Parent
    {
        public Parent()
        {
            Children = new HashSet<ChildToParent>();
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Id { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Kind { get; set; }
        public string Hmo { get; set; }

        public virtual ICollection<ChildToParent> Children { get; set; }
    }
}
