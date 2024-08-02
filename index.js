/**
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 * Updated to React by Pranav Joseph
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author Anders Evenrud <andersevenrud@gmail.com>
 * @license Simplified BSD License
 * @preserve Copyright (c) Anders Evenrud <andersevenrud@gmail.com>
 */

import React from "react";
import "./index.scss";

// Core components and services
import Core from "./src/core";
import Window from "./src/window";
import Desktop from "./src/desktop";
import Application from "./src/application";
import Notification from "./src/notification";
import Notifications from "./src/notifications";
import WindowBehavior from "./src/window-behavior";
import Auth from "./src/auth";
import Login from "./src/login";
import Websocket from "./src/websocket";

// Service providers
import CoreServiceProvider from "./src/providers/core";
import DesktopServiceProvider from "./src/providers/desktop";
import NotificationServiceProvider from "./src/providers/notifications";
import VFSServiceProvider from "./src/providers/vfs";
import AuthServiceProvider from "./src/providers/auth";
import SettingsServiceProvider from "./src/providers/settings";

// Utilities and helpers
import logger from "./src/logger";
import Splash from "./src/splash";
import Settings from "./src/settings";
import Tray from "./src/tray";
import Search from "./src/search";
import Packages from "./src/packages";
import Filesystem from "./src/filesystem";
import Clipboard from "./src/clipboard";
import Middleware from "./src/middleware";
import { BasicApplication } from "./src/basic-application";
import { defaultConfiguration as configuration } from "./src/config";
import icon from "./src/styles/logo-blue-32x32.png";

// React components (assuming these modules have been converted to React components)
const WindowComponent = React.memo(Window);
const DesktopComponent = React.memo(Desktop);
const NotificationComponent = React.memo(Notification);
const LoginComponent = React.memo(Login);
const SplashComponent = React.memo(Splash);
const TrayComponent = React.memo(Tray);
const SearchComponent = React.memo(Search);

// Custom hooks (assuming these have been converted to React hooks)
const useAuth = () => React.useContext(AuthContext);
const useSettings = () => React.useContext(SettingsContext);
const useFilesystem = () => React.useContext(FilesystemContext);
const useClipboard = () => React.useContext(ClipboardContext);

export {
  Core,
  WindowComponent as Window,
  DesktopComponent as Desktop,
  Application,
  NotificationComponent as Notification,
  Notifications,
  WindowBehavior,
  useAuth,
  LoginComponent as Login,
  Websocket,
  CoreServiceProvider,
  DesktopServiceProvider,
  NotificationServiceProvider,
  VFSServiceProvider,
  AuthServiceProvider,
  SettingsServiceProvider,
  logger,
  SplashComponent as Splash,
  useSettings,
  TrayComponent as Tray,
  SearchComponent as Search,
  Packages,
  useFilesystem,
  useClipboard,
  Middleware,
  BasicApplication,
  configuration,
  icon,
};
