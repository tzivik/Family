using Family.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Family.DAL
{
    public class ParentDAL : IParentDAL
    {
        FamilyContext familyContext;
        public ParentDAL(FamilyContext _familyContext)
        {
            familyContext = _familyContext;
        }
        public void AddParent(Parent parent)
        {
            familyContext.Parents.Add(parent);
        }
    }
}
