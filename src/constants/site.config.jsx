// src/constants/index.js
export const APP_CONSTANTS = {
	seo: false,
	php: true,
	waitplugin: true,
	iconplugin: false,
	spam: true,
	spamLicense: false,
	isAnimated: false,
	countDataBase: true,
	callbackSocialInputs: {
		telegram: true,
		skype: true,
		whatsup: false
	},
	googleFonts: "",
	documents: {
		user_agreement: 1,
		risk_disclosure_notice: 1,
		anti_money_laundering: 1,
		conflict_of_interest_policy_statement: 1,
		refund_cancellation_policy: 1
	},
	languages: {
		default: 'ru',
		list: {
			en: true,
			ru: true,
			es: true,
			de: true,
			fr: true,
			it: true,
			pl: true,
			zh: true,
			tr: true,
			hi: true
		}
	},

	companyData: {
		title: "Company Name",
		adres: "Company Address",
		phone: "+3804441122",
		email: "support@email.com",
		url: "https://url.com",
		domain: "https://domain.co",
		license: {
			lls1: "A111111",
			lls2: "111/22"
		},
		loginpage: "login.html",
		registratepage: "registration.html"
	},

	brandlinks: {
		logo: "assets/images/logo.svg",
		altlogo: "assets/images/logo-dark.svg",
		favicon: "assets/images/favicon.png"
	},

	javascript: {
		index_page: {
			accounts: {
				account_1: {
					price: "$ 1 000",
					leverage: "1:20"
				},
				account_2: {
					price: "$ 25 000",
					leverage: "1:50"
				},
				account_3: {
					price: "$ 50 000",
					leverage: "1:100"
				}
			}
		},
        lisences_page: {
			dfsa: "/firm-877926",
			cysec: "/firm-875197",
			fca: "/firm-721476",
			asic: "/911561454"
        },
		counterNumbers: {
			item1: {
				number: "4 958 022 449"
			},
			item2: {
				number: "778 252 620"
			},
			item3: {
				number: "122 047"
			},
			item4: {
				number: "4"
			},
			item5: {
				number: "8"
			}
		},
		collateralText: {
			bitcoin: {
				address: {
					address1: "bc1q3wl3hn...eqpszq7ems",
					address2: "bc1qdhxtt6x...gwgql3s38f",
					address3: "1PBCjfcqTp5...fCYDaMBsyM"
				},
				addressFull: {
					address1: "bc1q3wl3hnl7t4xt79capxm5xk5qq9eceqpszq7ems",
					address2: "bc1qdhxtt6xteel57utm9tm0yun8cq63cn48gsglj3x0lhfhpzgagwgql3s38f",
					address3: "1PBCjfcqTp5MysfsaGmdMmHLfCYDaMBsyM"
				},
				links: {
					links1: "https://www.blockchain.com/explorer/addresses/btc/bc1q3wl3hnl7t4xt79capxm5xk5qq9eceqpszq7ems",
					links2: "https://www.blockchain.com/explorer/addresses/btc/bc1qdhxtt6xteel57utm9tm0yun8cq63cn48gsglj3x0lhfhpzgagwgql3s38f",
					links3: "https://www.blockchain.com/explorer/addresses/btc/1PBCjfcqTp5MysfsaGmdMmHLfCYDaMBsyM"
				}
			},
			litecoin: {
				address: {
					address1: "ltc1qr07zu...2z6hh5pp4t",
					address2: "MQSs17ECe5...PvGuK5iCB6",
					address3: "ltc1qn9rs0...5m3tvlxlfl"
				},
				addressFull: {
					address1: "ltc1qr07zu594qf63xm7l7x6pu3a2v39m2z6hh5pp4t",
					address2: "MQSs17ECe51kqhkFPQY98wiyPvGuK5iCB6",
					address3: "ltc1qn9rs0j0d6dc6vtc7yw2h8qyzxy425m3tvlxlfl"
				},
				links: {
					links1: "https://blockchair.com/litecoin/address/ltc1qr07zu594qf63xm7l7x6pu3a2v39m2z6hh5pp4t",
					links2: "https://blockchair.com/litecoin/address/MQSs17ECe51kqhkFPQY98wiyPvGuK5iCB6",
					links3: "https://blockchair.com/litecoin/address/ltc1qn9rs0j0d6dc6vtc7yw2h8qyzxy425m3tvlxlfl"
				}
			},
			tether: {
				address: {
					address1: "0x3fe705e...5db3e794c76",
					address2: "0x83A32a5...d214e469eC3",
					address3: "0x8558fe8...dfd90657a32"
				},
				addressFull: {
					address1: "0x3fe705e2ffcaee8d7287de047def35db3e794c76",
					address2: "0x83A32a54D31Ee4f1f9dFFAd2A63A6d214e469eC3",
					address3: "0x8558fe88f8439ddcd7453ccad6671dfd90657a32"
				},
				links: {
					links1: "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7?a=0x3fe705e2ffcaee8d7287de047def35db3e794c76",
					links2: "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7?a=0x83a32a54d31ee4f1f9dffad2a63a6d214e469ec3",
					links3: "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7?a=0x8558fe88f8439ddcd7453ccad6671dfd90657a32"
				}
			},
			ethereum: {
				address: {
					address1: "0x998a7fd...81730b27137",
					address2: "0x0557608...5195935b0f5",
					address3: "0x2842eb6...15FC7Dc650D"
				},
				addressFull: {
					address1: "0x998a7fd73446cd6532bf3058a270581730b27137",
					address2: "0x05576087d1ad92873da0a3b76e7105195935b0f5",
					address3: "0x2842eb68fcD748e92ACb44d82a9E315FC7Dc650D"
				},
				links: {
					links1: "https://etherscan.io/address/0x998a7fd73446cd6532bf3058a270581730b27137",
					links2: "https://etherscan.io/address/0x05576087d1ad92873da0a3b76e7105195935b0f5",
					links3: "https://etherscan.io/address/0x2842eb68fcd748e92acb44d82a9e315fc7dc650d"
				}
			}
		},
		
		table: {
			reservserver: "https://trade.dtt-ma.com/history/quotesnapshot",
			table_freq_update: 10000,
			instrument_leverage: {
				stocks: "1:20",
				metals: "1:100",
				forex: "1:100",
				commodities: "1:100",
				indices: "1:500",
				crypto: "1:10",
				etf: "1:100"
			}
		},
		aos: {
			duration: 500
		},
		docs: {
			user_agreement: true,
			risk_disclosure_notice: true,
			anti_money_laundering: true,
			conflict_of_interest_policy_statement: true,
			refund_cancellation_policy: true,
			terms_of_use: false,
			order_execution_policy: false,
			privacy_policy: false		
		},
		news: {
			number: 9,
			imgblock: "assets/images/news.svg",
			linkrss: "investing.com/rss/news.rss"
		},
		tradeview: {
			instruments: {
				forex: "EURUSD",
				metals: "GOLD",
				stocks: "NASDAQ:AMZN",
				commodities: "OIL_BRENT",
				index: "CURRENCYCOM:US500",
				crypto: "BITSTAMP:BTCUSD"
			}
		},
		about: {
			duration: 1500
		},
		forms: {
			sha: "0000",
			methods: {
				createacc: "CreateUserAndAccounts",
				createtoken: "CreateToken",
				createtokenGuest: "CreateGuestToken",
				webAction: "WebAction",
				reset: "ResetPassword"
			}
		},
		ip_restrictions: {
			ip_restrictions_flag: true,
			ip_countries: ["us", "ua", "il"]
		}
	},

	build: {
		contentfile: "content",
		proxy: "localhost",
		port: "3000",
		links: {
			source: {
				core: "src",
				php: {
					windows: {
						phpini: "src/php/php.ini",
						phpbase: "src/php/php.exe"
					},
					other: {
						phpini: "php.ini",
						phpbase: "php"
					}
				},
				assets: {
					scss: "src/assets/scss",
					js: "src/assets/js",
					img: "src/assets/images",
					fonts: "src/assets/fonts",
					icons: "src/assets/icons",
					rss: "src/assets/js/blocks/env"
				},
				csv: "src/csv",
				pages: "src/pages",
				pug: "src/pug",
				icons: {
					template: "src/templates/fonts.template.scss",
					fontname: "iconfont",
					formats: ["ttf", "eot", "woff", "svg"]
				},
				sender: {
					title: "sender.php"
				},
				license: {
					title: "license.php"
				},
				wallets: {
					title: "wallets.php"
				},
				feedback: {
                  title: "feedback.php"
        		},
				rssrequest: {
					title: "rssrequest.php"
				},
				resources: "src/resources"
			},
			build: {
				core: "build",
				assets: {
					core: "build/assets/",
					css: "build/assets/css",
					js: "build/assets/js",
					img: "build/assets/images",
					fonts: "build/assets/fonts",
					json: "build/assets/json"
				},
				output: {
					js: {
						vendor: "vendor",
						main: "main"
					}
				},
				input: {
					js: {
						main: "construct"
					}
				}
			}
		}
	},

	imagerename: {
		numberletters: 30,
		possibles: "abcdefghijklmnopqrstuvwxyz0123456789",
		formats: ["jpg", "png", "jpeg", "svg", "gif", "webp"],
		nonerename: ["email/logo.png"]
	},
	htmlrename: {
		numberletters: 10,
		possibles: "abcdefghijklmnopqrstuvwxyz0123456789",
		formats: ["html"],
		nonerename: ["index.html", "en/index.html", "de/index.html", "es/index.html", "fr/index.html", "it/index.html", "ru/index.html", "zh/index.html", "pl/index.html", "tr/index.html", "hi/index.html", "404.html", "en/404.html", "de/404.html", "es/404.html", "fr/404.html", "it/404.html", "ru/404.html", "zh/404.html", "pl/404.html", "tr/404.html", "hi/404.html"]
	},
	robotsfile: {
		allow: {
			false: [],
			true: ["de/", "es/", "fr/", "it/", "ru/", "zh/", "pl/", "tr/", "hi/"]
		},
		disallow: {
			false: ["/", "*?*"],
			true: ["/*.json", "/*.php", "/*.htaccess", "/assets/"]
		}
	},

	sitemapfile: {
		rel: "sitemap",
		freq: "monthly",
		hidepage: ["404", "500", "503", "login", "recovery", "registration"],
		langs: ["en", "ru", "fr"]
	},

	seolocales: {
		siteLocale: {
			ru: "ru-RU",
			en: "en-US",
			es: "es-ES",
			it: "it-IT",
			de: "de-DE",
			fr: "fr-FR",
			zh: "zh-CN",
			pl: "pl-PL",
			tr: "tr-TR",
			hi: "hi-HI"
		},
		alternatives: ["ru", "en", "es", "it", "de", "zh", "fr", "pl", "tr", "hi"]
	}
}
  