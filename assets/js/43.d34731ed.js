(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{284:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=a(6),o=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"auth-providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auth-providers","aria-hidden":"true"}},[t._v("#")]),t._v(" Auth Providers")]),t._v(" "),a("blockquote",[a("p",[t._v("Directus offers built-in authentication using securely hashed passwords. Alternatively, you can enable any of our Single Sing-On (SSO) services or create your own adapter for custom authentication. Directus also supports SCIM for external user management.")])]),t._v(" "),a("p",[t._v("The auth providers supports OAuth 1.0 and 2.0. The Directus Auth provider is class that creates an OAuth client based on the phpleague "),a("a",{attrs:{href:"https://github.com/thephpleague/oauth1-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth 1.0"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/thephpleague/oauth2-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth 2.0"),a("OutboundLink")],1),t._v(" Client libraries.")]),t._v(" "),a("h2",{attrs:{id:"files-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files-structure","aria-hidden":"true"}},[t._v("#")]),t._v(" Files & Structure")]),t._v(" "),a("h3",{attrs:{id:"provider-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-php","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("Provider.php")])]),t._v(" "),a("p",[t._v("For OAuth 1.0 the provider class must extends from "),a("code",[t._v("Directus\\Authentication\\Sso\\OneSocialProvider")]),t._v(" and must implement a "),a("code",[t._v("createProvider")]),t._v(" method that returns a "),a("code",[t._v("League\\OAuth1\\Client\\Server")]),t._v(" object. For OAuth 2.0 the provider class must extends from "),a("code",[t._v("Directus\\Authentication\\Sso\\TwoSocialProvider")]),t._v(" and implement a "),a("code",[t._v("createProvider")]),t._v(" method that returns a "),a("code",[t._v("League\\OAuth2\\Client\\Provider\\AbstractProvider")]),t._v(" object.")]),t._v(" "),a("h4",{attrs:{id:"oauth-1-0-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oauth-1-0-example","aria-hidden":"true"}},[t._v("#")]),t._v(" OAuth 1.0 Example")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Directus"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Authentication"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Sso"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Provider"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("twitter")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Directus"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Authentication"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Sso"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("OneSocialProvider")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("League"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("OAuth1"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Client"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Server"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Twitter")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Provider")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("OneSocialProvider")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * @var Twitter\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$provider")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * Creates the Twitter provider oAuth client\n     *\n     * @return Twitter\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createProvider")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("provider")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Twitter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'identifier'")]),t._v("    "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("config")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'identifier'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'secret'")]),t._v("        "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("config")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'secret'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'callback_uri'")]),t._v("  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("getRedirectUrl")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("provider")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * @inheritdoc\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getScopes")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("h4",{attrs:{id:"oauth-2-0-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oauth-2-0-example","aria-hidden":"true"}},[t._v("#")]),t._v(" OAuth 2.0 Example")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Directus"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Authentication"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Sso"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Provider"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("google")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Directus"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Authentication"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Sso"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TwoSocialProvider")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("League"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("OAuth2"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Client"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Provider"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Google")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Provider")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("TwoSocialProvider")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * @var Google\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$provider")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * @inheritdoc\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getScopes")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'email'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * Creates the Google provider oAuth client\n     *\n     * @return Google\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createProvider")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("provider")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Google")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'clientId'")]),t._v("          "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("config")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'client_id'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'clientSecret'")]),t._v("      "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("config")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'client_secret'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'redirectUri'")]),t._v("       "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("getRedirectUrl")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'hostedDomain'")]),t._v("      "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("config")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'hosted_domain'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'useOidcMode'")]),t._v("       "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("config")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'use_oidc_mode'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token property"}},[t._v("provider")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])]),a("h3",{attrs:{id:"auth-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auth-php","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("auth.php")])]),t._v(" "),a("p",[t._v("This file must specify what is the provider class using the "),a("code",[t._v("provider")]),t._v(" key using a class resolution or whichever value that result positive when using "),a("code",[t._v("class_exists")]),t._v(" function.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'provider'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\"),a("span",{attrs:{class:"token package"}},[t._v("Directus"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Authentication"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Sso"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Provider"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("twitter"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Provider")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),a("h3",{attrs:{id:"icon-svg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icon-svg","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("icon.svg")])]),t._v(" "),a("p",[t._v("Lastly, you must include an SVG file of the service provider's logo.")]),t._v(" "),a("h2",{attrs:{id:"sso-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sso-flow","aria-hidden":"true"}},[t._v("#")]),t._v(" SSO Flow")]),t._v(" "),a("p",[t._v("These are the steps taken when the Directus App attempts to log a user in using Single Sign-On:")]),t._v(" "),a("ol",[a("li",[t._v("The application will redirect to the API at "),a("code",[t._v("/auth/sso/<provider>")])]),t._v(" "),a("li",[t._v("The API redirects to the provider (e.g. GitHub/Facebook)")]),t._v(" "),a("li",[t._v("The user logs in on the providers website")]),t._v(" "),a("li",[t._v("Provider redirects back to the API")]),t._v(" "),a("li",[t._v("The API checks the authentication")]),t._v(" "),a("li",[t._v("The API redirects back to the application using the referral domain from the initial step 1 request. The API adds the data to the query string. If it's an error, it's going to be in the "),a("code",[t._v("?error")]),t._v(" parameter, if it's successful it will add the Request Token in the "),a("code",[t._v("token")]),t._v(" parameter.")]),t._v(" "),a("li",[t._v("The client will need to use the Request Token from Step 6 to make a "),a("code",[t._v("POST")]),t._v(" request to the API to "),a("code",[t._v("/auth/access_token")]),t._v(" with a "),a("code",[t._v("request_token")]),t._v(" as a required param to fetch the Access Token.")])])])},[],!1,null,null,null);o.options.__file="auth-providers.md";s.default=o.exports}}]);