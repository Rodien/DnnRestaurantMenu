﻿/*
' Copyright (c) 2016 DotNetNuclear
'  All rights reserved.
' 
' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
' TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
' THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
' CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
' DEALINGS IN THE SOFTWARE.
' 
*/

using System;
using System.Web.Caching;
using DotNetNuke.Common.Utilities;
using DotNetNuke.ComponentModel.DataAnnotations;
using DotNetNuke.Entities.Content;

namespace DotNetNuclear.Modules.RestaurantMenuSPA.Components
{
    [TableName("DotNetNuclear_RestaurantMenuSPA_Item")]
    //setup the primary key for table
    [PrimaryKey("MenuItemId", AutoIncrement = true)]
    //configure caching using PetaPoco
    [Cacheable("RestaurantMenuSPA_Items", CacheItemPriority.Default, 20)]
    //scope the objects to the ModuleId of a module on a page (or copy of a module on a page)
    [Scope("ModuleId")]
    public class MenuItem
    {
        public int MenuItemId { get; set; }

        public int ModuleId { get; set; }

        public string Name { get; set; }

        public string Desc { get; set; }

        public string ImageUrl { get; set; }

        public bool IsDailySpecial { get; set; }

        public bool IsVegetarian { get; set; }

        public decimal Price { get; set; }

        public int DisplayOrder { get; set; }

        public int AddedByUserId { get; set; }

        public int ModifiedByUserId { get; set; }

        public DateTime DateAdded { get; set; }

        public DateTime DateModified { get; set; }
    }
}
