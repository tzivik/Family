
using DTO.Models;
using Family.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class AutoMapperProfile: AutoMapper.Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<ParentDTO, Parent>();
            CreateMap<Parent, ParentDTO>();
            CreateMap<Parent, ParentDTO>();
            CreateMap<ChildDTO,ChildToParent >()
            .ForMember(s => s.ChildId, c => c.MapFrom(m => m.Id));
            CreateMap<ChildToParent, ChildDTO>();
        }
    }
}
