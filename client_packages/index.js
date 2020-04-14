!function (e) {
    var t = {};

    function a(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }

    a.m = e, a.c = t, a.d = function (e, t, i) {
        a.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (a.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) a.d(i, n, function (t) {
            return e[t]
        }.bind(null, n));
        return i
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 49)
}([, , function (e, t) {
    let a = null, i = null;
    const n = mp.players.local;
    t.prettify = function (e) {
        return e.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1 ")
    };

    function r(e = null) {
        mp.gui.cursor.visible = !0, mp.game.ui.displayRadar(!1), mp.gui.chat.show(!1), e && mp.game.graphics.transitionToBlurred(e)
    }

    function s(e) {
        a && a.execute(e)
    }

    function o(e, t = "eng") {
        a && a.destroy(), a = mp.browsers.new(e), "rus" === t ? s("loadRusLang();") : "ger" === t ? s("loadGerLang();") : "br" === t ? s("loadBrLang();") : "zhs" === t ? s("loadZhsLang();") : "zht" === t ? s("loadZhtLang();") : "cs" === t && s("loadCsLang();")
    }

    function c() {
        a && (a.destroy(), a = null), mp.gui.cursor.visible = !1, mp.game.ui.displayRadar(!0), mp.gui.chat.show(!0), mp.game.graphics.transitionFromBlurred(1)
    }

    function p() {
        i && (i.setActive(!1), mp.game.cam.renderScriptCams(!1, !0, 0, !0, !0), i.destroy(), i = null)
    }

    t.roundNum = (e, t = 0) => parseFloat(e.toFixed(t)), t.prepareToCef = r, t.injectCef = s, t.openCef = o, t.closeCef = c, t.createCam = function (e, t, a, n, r, s, o) {
        i = mp.cameras.new("Cam", {x: e, y: t, z: a}, {
            x: n,
            y: r,
            z: s
        }, o), i.setActive(!0), mp.game.cam.renderScriptCams(!0, !0, 2e25, !1, !1)
    }, t.destroyCam = p, mp.events.add({
        cInjectCef: e => s(e),
        cCloseCef: () => c(),
        cDestroyCam: () => p(),
        cCloseCefAndDestroyCam: () => {
            c(), p()
        },
        cChangeHeading: e => n.setHeading(e),
        "cMisc-CreateChooseWindow": (e, t, a, i) => {
            r(500), o("package://RP/Browsers/Misc/chooseWindow.html", e), s(t + `app.confirmEvent = '${a}';` + `app.rejectEvent = '${i}';`)
        },
        "cMisc-CallServerEvent": (e, t, a) => mp.events.callRemote(e, t, a),
        "cMisc-CallServerEvenWithTimeout": (e, t) => {
            setTimeout(() => {
                mp.events.callRemote(e)
            }, t)
        }
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, a) {
    a(50), a(51), a(52), a(53), a(54), a(55), a(56), a(57), a(58), a(59), a(60), a(61), a(62), a(63), a(64), a(65), a(66), a(67), a(68)
}, function (e, t, a) {
    "use strict";
    const i = 69, n = 77, r = 96, s = 97, o = 98, c = 99, p = 100, l = 101, m = 102, u = 103, g = 104, h = 105, d = 107,
        f = 115, C = mp.keys;
    C.bind(i, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-E")
    })), C.bind(r, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-Num0")
    })), C.bind(s, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-Num1")
    })), C.bind(o, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-Num2")
    })), C.bind(c, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-Num3")
    })), C.bind(p, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-Num4")
    })), C.bind(l, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-Num5")
    })), C.bind(m, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-Num6")
    })), C.bind(u, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-Num7")
    })), C.bind(g, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-Num8")
    })), C.bind(h, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-Num9")
    })), C.bind(f, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-F4")
    })), C.bind(d, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-Num+")
    })), C.bind(n, !1, (function () {
        mp.gui.cursor.visible || mp.events.callRemote("sKeys-M")
    }))
}, function (e, t, a) {
    "use strict";
    mp.players.local;
    const i = a(2);
    new class {
        constructor() {
            mp.events.add({
                "cLogin-ShowLoginWindow": () => {
                    i.prepareToCef(1), i.createCam(3223, 5349, 14, 0, 0, 218, 20), i.openCef("package://RP/Browsers/Login/login.html")
                }, "cLogin-ShowRegWindow": () => {
                    i.prepareToCef(1), i.createCam(3223, 5349, 14, 0, 0, 218, 20), i.openCef("package://RP/Browsers/Login/register.html")
                }
            })
        }
    }
}, function (e, t, a) {
    const i = a(2);
    let n;
    mp.events.add({
        "cMoney-Update": e => n = e, render: () => {
            n >= 0 && !1 === mp.gui.cursor.visible && mp.game.graphics.drawText(`$${i.prettify(n)}              `, [.94, .05], {
                font: 7,
                color: [115, 186, 131, 255],
                scale: [.7, .7]
            })
        }, "cMoney-ShowATM": (e, t) => {
            i.prepareToCef(1), i.openCef("package://RP/Browsers/ATM/atm.html", e), i.injectCef(t)
        }, "cMoney-SendNotification": e => {
            mp.game.ui.setNotificationTextEntry("CELL_EMAIL_BCON");
            for (let t = 0, a = e.length; t < a; t += 99) mp.game.ui.addTextComponentSubstringPlayerName(e.substr(t, Math.min(99, e.length - t)));
            mp.game.ui.setNotificationMessage("CHAR_BANK_FLEECA", "CHAR_BANK_FLEECA", !1, 2, "FLEECA BANK", "New message"), mp.game.ui.drawNotification(!1, !0)
        }
    })
}, function (e, t, a) {
    const i = a(2), n = mp.players.local;
    mp.events.add({
        "cCharCreator-OpenMenu": () => {
            i.prepareToCef(), i.createCam(402.6, -998.75, -98.32, 0, 0, 358, 15), i.openCef("package://RP/Browsers/Character/first.html")
        },
        "cCharCreator-UpdateSkinOptions": e => {
            const t = JSON.parse(e);
            n.setHeadBlendData(t[0], t[1], 0, t[2], 0, 0, t[3], 0, 0, !1)
        },
        "cCharCreator-LoadWindowTwo": () => i.openCef("package://RP/Browsers/Character/second.html"),
        "cCharCreator-UpdateFaceOptions": e => {
            const t = JSON.parse(e);
            for (let e = 0; e < t.length; e++) n.setFaceFeature(e, t[e])
        }
    })
}, function (e, t, a) {
    "use strict";
    const i = a(2);
    mp.events.add({
        "cBusinnes-ShowMenu": (e, t) => {
            i.prepareToCef(500), i.openCef("package://RP/Browsers/Business/business.html", e), i.injectCef(t)
        }
    })
}, function (e, t, a) {
    const i = a(2);
    mp.events.add({
        "cCheapCarDealership-OpenBuyerMenu": (e, t) => {
            i.prepareToCef(500), i.openCef("package://RP/Browsers/Business/CheapCarDealership/ccd.html", e), i.injectCef(t)
        }, "cCommercialCarDealership-OpenBuyerMenu": (e, t) => {
            i.prepareToCef(500), i.openCef("package://RP/Browsers/Business/CommercialCarDealership/ccd.html", e), i.injectCef(t)
        }
    })
}, function (e, t, a) {
    "use strict";
    const i = a(2);
    let n;
    mp.events.add({
        "cClothingShop-ShowBuyerMenu": (e, t, a) => {
            i.prepareToCef(), i.openCef("package://RP/Browsers/Business/ClothingShop/ch.html", e), i.injectCef(t), n = a, i.createCam(n.x, n.y, n.z, n.rx, n.ry, n.rz, n.viewangle)
        }, "cClothingShop-SetCamera": e => {
            switch (e) {
                case"Hats":
                    i.createCam(n.x, n.y, n.z + .7, n.rx, n.ry, n.rz, n.viewangle - 20);
                    break;
                case"Glasses":
                    i.createCam(n.x, n.y, n.z + .7, n.rx, n.ry, n.rz, n.viewangle - 25);
                    break;
                case"Tops":
                    i.createCam(n.x, n.y, n.z + .4, n.rx, n.ry, n.rz, n.viewangle - 10);
                    break;
                case"Legs":
                    i.createCam(n.x, n.y, n.z - .4, n.rx, n.ry, n.rz, n.viewangle - 10);
                    break;
                case"Feet":
                    i.createCam(n.x, n.y, n.z - .7, n.rx, n.ry, n.rz, n.viewangle - 20);
                    break;
                default:
                    i.createCam(n.x, n.y, n.z, n.rx, n.ry, n.rz, n.viewangle)
            }
        }
    })
}, function (e, t, a) {
    "use strict";
    const i = a(2), n = mp.players.local;
    mp.events.add({
        "cBarberShop-ShowBuyerMenu": (e, t, a) => {
            i.prepareToCef(), i.openCef("package://RP/Browsers/Business/BarberShop/bs.html", e), i.injectCef(t), i.createCam(a.x, a.y, a.z, a.rx, a.ry, a.rz, a.viewangle)
        }, "cBarberShop-SetHairColor": (e, t) => n.setHairColor(e, t)
    })
}, function (e, t, a) {
    "use strict";
    const i = a(2);
    mp.events.add({
        "cGasStation-OpenBuyerMenu": (e, t, a) => {
            const n = JSON.parse(a);
            i.createCam(n.x, n.y, n.z, 0, 0, n.rz, n.viewangle), i.prepareToCef(), i.openCef("package://RP/Browsers/Business/GasStation/gs.html", e), i.injectCef(t)
        }
    })
}, function (e, t, a) {
    "use strict";
    const i = a(2), n = mp.players.local;
    const r = new class {
        constructor() {
            this.fuel = null, this.fuelRate = 0, this.speed = 0, mp.events.add({
                "cVehicle-setFuel": (e, t) => this.setFuel(e, t),
                playerLeaveVehicle: () => {
                    null !== this.fuel && mp.events.callRemote("sVehicle-SetFuel", n.vehicle, this.fuel)
                },
                "cVehicle-setLights": (e, t) => {
                    e.setLights(t)
                },
                "cVehicle-rollUpWindow": (e, t) => e.rollUpWindow(t),
                "cVehicle-rollDownWindow": (e, t) => e.rollDownWindow(t),
                render: () => {
                    this.setLightMultiplier(), this.showSpeed(), this.showFuel(), this.showBrakeLights()
                }
            })
        }

        setFuel(e, t, a) {
            if ("number" != typeof e) return this.fuel = null;
            this.fuel = e, this.fuelRate = t
        }

        setLightMultiplier() {
            n.vehicle && n.vehicle.setLightMultiplier(4)
        }

        showSpeed() {
            const e = n.vehicle;
            e && !mp.gui.cursor.visible && (this.speed = i.roundNum(4 * e.getSpeed()), mp.game.graphics.drawText("     Speed: " + this.speed + " km/h", [.92, .835], {
                font: 1,
                color: [255, 255, 255, 255],
                scale: [.6, .6]
            }))
        }

        showFuel() {
            const e = n.vehicle;
            if (mp.gui.cursor.visible || !e || null === this.fuel || !e.getIsEngineRunning()) return;
            mp.game.graphics.drawText("         Fuel: " + this.fuel.toFixed(1) + " L", [.927, .8], {
                font: 1,
                color: [255, 255, 255, 255],
                scale: [.6, .6]
            });
            const t = i.roundNum(5e3 * e.rpm);
            let a = e.gear;
            0 === a && (a = 1), this.fuel -= (t + 400 * this.speed) / a * this.fuelRate * Math.pow(5, -13), this.fuel < .1 && mp.events.callRemote("sVehicle-SetFuel", e, this.fuel)
        }

        showBrakeLights() {
            n.vehicle && 0 === this.speed && n.vehicle.setBrakeLights(!0)
        }

        getIntoVehicleAsPassenger() {
            if (mp.gui.cursor.visible || n.vehicle) return;
            const e = n.position, t = mp.game.vehicle.getClosestVehicle(e.x, e.y, e.z, 5, 0, 70),
                a = mp.vehicles.atHandle(t);
            if (a && a.isAnySeatEmpty() && !(a.getSpeed() > 5)) for (let e = 0; e < a.getMaxNumberOfPassengers(); e++) if (a.isSeatFree(e)) {
                n.taskEnterVehicle(a.handle, 5e3, e, 1, 1, 0);
                break
            }
        }
    };
    mp.keys.bind(71, !1, (function () {
        r.getIntoVehicleAsPassenger()
    }))
}, function (e, t, a) {
    "use strict";
    const i = a(2);
    mp.events.add({
        "cOrangeCollector-OpenMainMenu": (e, t) => {
            i.prepareToCef(), i.openCef("package://RP/Browsers/Jobs/OrangeCollector/collector.html", e), i.injectCef(t)
        }
    })
}, function (e, t, a) {
    "use strict";
    const i = a(2);
    mp.events.add({
        "cMariaCollector-OpenMainMenu": (e, t) => {
            i.prepareToCef(), i.openCef("package://RP/Browsers/Jobs/MariaCollector/mariacollector.html", e), i.injectCef(t)
        }
    })
}, function (e, t, a) {
    const i = a(2);
    mp.events.add({
        "cGarage-ShowVisitorsGarageMenu": (e, t, a) => {
            i.prepareToCef(1), i.openCef("package://RP/Browsers/Factions/VisitorsGarage/Garage/garage.html", e), i.injectCef(t);
            const n = JSON.parse(a);
            i.createCam(n.x, n.y, n.z, n.rx, n.ry, n.rz, n.viewangle)
        }, "cGarage-ShowVisitorsLiftMenu": (e, t) => {
            i.prepareToCef(1), i.openCef("package://RP/Browsers/Factions/VisitorsGarage/Lift/lift.html", e), i.injectCef(t)
        }
    })
}, function (e, t, a) {
    const i = a(2);
    mp.events.add({
        render: () => (mp.game.graphics.drawLightWithRange(273.552, -1359.888, 26.538, 255, 255, 255, 10, 3), mp.game.graphics.drawLightWithRange(267.438, -1354.475, 26.538, 255, 255, 255, 10, 3), mp.game.graphics.drawLightWithRange(264.446, -1360.933, 26.538, 255, 255, 255, 10, 3), mp.game.graphics.drawLightWithRange(260.973, -1355.263, 26.538, 255, 255, 255, 10, 3), mp.game.graphics.drawLightWithRange(258.704, -1358.373, 26.538, 255, 255, 255, 10, 3), mp.game.graphics.drawLightWithRange(253.371, -1364.243, 26.538, 255, 255, 255, 10, 3), mp.game.graphics.drawLightWithRange(266.289, -1349.066, 26.538, 255, 255, 255, 10, 2), mp.game.graphics.drawLightWithRange(269.465, -1345.382, 26.538, 255, 255, 255, 10, 2), mp.game.graphics.drawLightWithRange(272.605, -1341.442, 26.538, 255, 255, 255, 10, 2), mp.game.graphics.drawLightWithRange(277.381, -1344.953, 26.538, 255, 255, 255, 10, 2), mp.game.graphics.drawLightWithRange(281.043, -1347.922, 26.538, 255, 255, 255, 10, 2), mp.game.graphics.drawLightWithRange(287.233, -1340.63, 26.538, 255, 255, 255, 10, 2), mp.game.graphics.drawLightWithRange(263.554, -1344.159, 26.538, 255, 255, 255, 10, 2), mp.game.graphics.drawLightWithRange(258.473, -1339.332, 26.538, 255, 255, 255, 10, 2), mp.game.graphics.drawLightWithRange(257.234, -1346.424, 26.538, 255, 255, 255, 10, 2), mp.game.graphics.drawLightWithRange(255.189, -1349.291, 26.538, 255, 255, 255, 10, 2), mp.game.graphics.drawLightWithRange(247.997, -1351.431, 26.538, 255, 255, 255, 10, 2), mp.game.graphics.drawLightWithRange(245.483, -1354.224, 26.538, 255, 255, 255, 10, 2), void mp.game.graphics.drawLightWithRange(253.495, -1356.144, 26.538, 255, 255, 255, 10, 2)),
        "cHospital-DisableHealthRegeneration": () => mp.game.player.setHealthRechargeMultiplier(0),
        "cHospital-ShowDoctorMenu": (e, t) => {
            i.prepareToCef(500), i.openCef("package://RP/Browsers/Factions/Hospital/interactiveMenu.html", e), i.injectCef(t)
        }
    })
}, function (e, t, a) {
    a(2);
    mp.events.add({})
}, function (e, t) {
    mp.events.add({
        "cPrison-SetWantedLevel": e => mp.game.gameplay.setFakeWantedLevel(e),
        "cPrison-SendNotification": e => {
            mp.game.ui.setNotificationTextEntry("CELL_EMAIL_BCON");
            for (let t = 0, a = e.length; t < a; t += 99) mp.game.ui.addTextComponentSubstringPlayerName(e.substr(t, Math.min(99, e.length - t)));
            mp.game.ui.setNotificationMessage("CHAR_CALL911", "CHAR_CALL911", !1, 0, "LS POLICE", "New violation"), mp.game.ui.drawNotification(!1, !0)
        }
    })
}, function (e, t, a) {
    const i = a(2);
    mp.events.add({
        "cMenu-Open": (e, t) => {
            i.prepareToCef(1), i.openCef("package://RP/Browsers/Menu/Menu.html", e), i.injectCef(t)
        }
    })
}, function (e, t) {
    mp.events.add({
        "cGPS-CreateRoute": (e, t) => {
            mp.game.ui.setNewWaypoint(e, t)
        }
    })
}, function (e, t) {
    mp.events.add("BN_Show", (e, t = !1, a = -1, i = -1, n = [77, 77, 77, 200]) => {
        a > -1 && mp.game.invoke("0x39BBF623FC803EAC", a), i > -1 && mp.game.invoke("0x92F0DA1E27DB96DC", i), t && mp.game.ui.setNotificationFlashColor(n[0], n[1], n[2], n[3]), mp.game.ui.setNotificationTextEntry("CELL_EMAIL_BCON");
        for (let t = 0, a = e.length; t < a; t += 99) mp.game.ui.addTextComponentSubstringPlayerName(e.substr(t, Math.min(99, e.length - t)));
        mp.game.ui.drawNotification(t, !0)
    }), mp.events.add("BN_ShowWithPicture", (e, t, a, i, n = 0, r = !1, s = -1, o = -1, c = [77, 77, 77, 200]) => {
        s > -1 && mp.game.invoke("0x39BBF623FC803EAC", s), o > -1 && mp.game.invoke("0x92F0DA1E27DB96DC", o), r && mp.game.ui.setNotificationFlashColor(c[0], c[1], c[2], c[3]), mp.game.ui.setNotificationTextEntry("CELL_EMAIL_BCON");
        for (let e = 0, t = a.length; e < t; e += 99) mp.game.ui.addTextComponentSubstringPlayerName(a.substr(e, Math.min(99, a.length - e)));
        mp.game.ui.setNotificationMessage(i, i, r, n, e, t), mp.game.ui.drawNotification(!1, !0)
    }), mp.game.ui.notifications = {
        show: (e, t = !1, a = -1, i = -1, n = [77, 77, 77, 200]) => mp.events.call("BN_Show", e, t, a, i, n),
        showWithPicture: (e, t, a, i, n = 0, r = !1, s = -1, o = -1, c = [77, 77, 77, 200]) => mp.events.call("BN_ShowWithPicture", e, t, a, i, n, r, s, o, c)
    }
}]);