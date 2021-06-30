using AutoMapper;
using DTO;
using DTO.Models;
using Family.DAL;
using Family.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Family.BL
{
    public class ParentBL : IParentBL
    {
        IParentDAL parentDAL;
        IMapper mapper;
        public ParentBL(IParentDAL _parentDAL)
        {
            parentDAL=_parentDAL;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();

            });
            mapper = config.CreateMapper();

        }
        public void AddParent(ParentDTO parent)
        {
            var convertParent = mapper.Map<ParentDTO, Parent>(parent);
            parentDAL.AddParent(convertParent);
        }
    }
}
