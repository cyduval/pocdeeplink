/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },

  // Bind Event Listeners
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  // deviceready Event Handler
  onDeviceReady: function() {
    console.log('Device is ready for work');
    $('#logs').append('<p>Device is ready for work</p>') ;
    universalLinks.subscribe('openNewsListPage', app.onNewsListPageRequested);
    universalLinks.subscribe('openNewsDetailedPage', app.onNewsDetailedPageRequested);
  },

  // openNewsListPage Event Handler
  onNewsListPageRequested: function(eventData) {
    console.log('Showing list of awesome news.');
    $('#logs').append('<p>zzzzzzz</p>') ;

    // do some work to show list of news
  },

  // openNewsDetailedPage Event Handler
  onNewsDetailedPageRequested: function(eventData) {
    console.log('Showing to user details page: ' + eventData.path);
    $('#logs').append('<p>aaaaaaaaaa</p>') ;
    // do some work to show detailed page
  }
};



$(document).ready(function() {

  document.addEventListener("offline", onOffline, false);
  document.addEventListener("online", onOnline, false);


});


function onOffline() {  
    $('#logs').append('<p>offline</p>') ;
}

function onOnline() {  
    $('#logs').append('<p>online</p>') ;
}



