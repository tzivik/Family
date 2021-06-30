using System;
using System.Collections.Generic;

#nullable disable

namespace Family.DAL.Models
{
    public partial class ChildToParent
    {
        public string ChildId { get; set; }
        public string ParentId { get; set; }

        public virtual Child Child { get; set; }
        public virtual Parent Parent { get; set; }
    }
}
