using System;
using System.Collections.Generic;

#nullable disable

namespace Family.DAL.Models
{
    public partial class Child
    {
        public Child()
        {
            Children = new HashSet<ChildToParent>();
        }

        public string Name { get; set; }
        public string Id { get; set; }
        public DateTime DateOfBorn { get; set; }

        public virtual ICollection<ChildToParent> Children { get; set; }
    }
}
