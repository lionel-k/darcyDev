import"./libs/jquery.js";import reveal from"./modules/reveal.js";import Time from"./modules/Time.js";import sticky from"./modules/Sticky.js";import scrollSpy from"./modules/ScrollSpy.js";import Tab from"./modules/Tab.js";import Copied from"./modules/Copied.js";import Typed from"./modules/Typed.js";$(function(){const e=new Time;$(".webdate").text(e.carrierYear),$(".age").text(e.age),$(".copyright").text(e.currentYear),$(window).scroll(function(){sticky(),scrollSpy()}),reveal(),Tab(),Copied()});