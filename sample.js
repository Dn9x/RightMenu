// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// A generic onclick callback function.
//百度搜索
function baiduSearch(info, tab) {
  var posturl = "http://www.baidu.com/s?wd=" + info.selectionText;

  chrome.tabs.create({"url":posturl});
}
//谷歌搜索
function golSearch(info, tab) {
  var posturl = "http://www.google.com.hk/#newwindow=1&safe=strict&site=&source=hp&q=" + info.selectionText;

  chrome.tabs.create({"url":posturl});
}//必应搜索
function biyiSearch(info, tab) {
  var posturl = "http://cn.bing.com/search?q=" + info.selectionText;

  chrome.tabs.create({"url":posturl});
}//360搜索
function qihSearch(info, tab) {
  var posturl = "http://www.so.com/s?ie=utf-8&src=360sou_home&q=" + info.selectionText;

  chrome.tabs.create({"url":posturl});
}//搜狗搜索
function sogSearch(info, tab) {
  var posturl = "http://www.sogou.com/web?query=" + info.selectionText;

  chrome.tabs.create({"url":posturl});
}//搜搜搜索
function sosSearch(info, tab) {
  var posturl = "http://www.soso.com/q?pid=s.idx&cid=s.idx.se&w=" + info.selectionText;

  chrome.tabs.create({"url":posturl});
}//全部搜索
function alSearch(info, tab) {
  var postur1 = "http://www.baidu.com/s?wd=" + info.selectionText;
  var postur2 = "http://www.google.com.hk/#newwindow=1&safe=strict&site=&source=hp&q=" + info.selectionText;
  var postur3 = "http://cn.bing.com/search?q=" + info.selectionText;
  var postur4 = "http://www.so.com/s?ie=utf-8&src=360sou_home&q=" + info.selectionText;
  var postur5 = "http://www.sogou.com/web?query=" + info.selectionText;
  var postur6 = "http://www.soso.com/q?pid=s.idx&cid=s.idx.se&w=" + info.selectionText;


  chrome.tabs.create({"url":postur1});
  chrome.tabs.create({"url":postur2});
  chrome.tabs.create({"url":postur3});
  chrome.tabs.create({"url":postur4});
  chrome.tabs.create({"url":postur5});
  chrome.tabs.create({"url":postur6});
}

// Create a parent item and two children.
var parent = chrome.contextMenus.create({"title": "Dn9x快捷搜索", "type":"normal", "contexts":["selection"]});
var baidu = chrome.contextMenus.create(
  {"title": "使用 百度 搜索 '%s'", "parentId": parent, "contexts":["selection"], "onclick": baiduSearch});
var google = chrome.contextMenus.create(
  {"title": "使用 谷歌 搜索 '%s'", "parentId": parent, "contexts":["selection"], "onclick": golSearch});
var biyin = chrome.contextMenus.create(
  {"title": "使用 必应 搜索 '%s'", "parentId": parent, "contexts":["selection"], "onclick": biyiSearch});
var qihu = chrome.contextMenus.create(
  {"title": "使用 360 搜索 '%s'", "parentId": parent, "contexts":["selection"], "onclick": qihSearch});
var sogou = chrome.contextMenus.create(
  {"title": "使用 搜狗 搜索 '%s'", "parentId": parent, "contexts":["selection"], "onclick": sogSearch});
var soso = chrome.contextMenus.create(
  {"title": "使用 搜搜 搜索 '%s'", "parentId": parent, "contexts":["selection"], "onclick": sosSearch});
var zohe = chrome.contextMenus.create(
  {"title": "使用 全部 搜索 '%s'", "parentId": parent, "contexts":["selection"], "onclick": alSearch});

