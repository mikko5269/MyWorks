using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyWorks.Controllers
{
    public class ShopMapCoreController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}