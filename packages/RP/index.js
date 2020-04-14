!function (e) {
    var t = {};

    function n(s) {
        if (t[s]) return t[s].exports;
        var i = t[s] = {i: s, l: !1, exports: {}};
        return e[s].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, s) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: s})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (n.r(s), Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(s, i, function (t) {
            return e[t]
        }.bind(null, i));
        return s
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 20)
}([function (e, t, n) {
    const s = n(22), i = n(23);
    const a = new class {
        constructor() {
            s.configure({
                appenders: {file: {type: "file", filename: "serverLogs.log"}, console: {type: "console"}},
                categories: {default: {appenders: ["file", "console"], level: "debug"}}
            }), this.log = s.getLogger(), this.log.fatal("Server Started")
        }

        dbquery(e) {
            return new Promise((t, n) => i.query(e, null, (s, i) => {
                if (s) return this.log.error(e), n(s);
                t(i)
            }))
        }

        async query(e) {
            const t = (new Date).getTime(), n = await this.dbquery(e), s = (new Date).getTime() - t;
            return s >= 500 ? this.log.warn(`'${e}' ends with: ${s / 1e3}s`) : this.log.trace(`'${e}' ends with: ${s / 1e3}s`), n
        }

        roundNum(e, t = 0) {
            return parseFloat(e.toFixed(t))
        }

        isValueNumber(e) {
            return "number" == typeof e
        }

        isValueString(e) {
            return "string" == typeof e
        }

        getRandomInt(e = 0, t = 100) {
            return Math.floor(Math.random() * (t - e + 1)) + e
        }

        getPlayersInRange(e, t) {
            if (!this.isValueNumber(t)) return !1;
            const n = mp.players.toArray(), s = [];
            for (const i of n) i.dist(e) < t && s.push(i);
            return s
        }

        getNearestPlayerInRange(e, t) {
            const n = this.getPlayersInRange(e, t);
            if (!n) return !1;
            let s = 0;
            for (const t of n) t.dist(e) < n[s].dist(e) && (s = n.indexOf(t));
            return n[s]
        }

        getTime() {
            const e = new Date;
            let t = e.getHours(), n = e.getMinutes(), s = e.getSeconds();
            return t < 10 && (t = `0${t}`), n < 10 && (n = `0${n}`), s < 10 && (s = `0${s}`), `${t}:${n}:${s}`
        }

        getPlayerByGuid(e) {
            const t = mp.players.toArray();
            for (const n of t) if (n.guid === e) return n;
            return !1
        }

        getPlayerCoordJSON(e) {
            const t = {x: e.position.x, y: e.position.y, z: e.position.z, rot: e.heading, dim: e.dimension};
            return e.vehicle && (t.rot = e.vehicle.rotation.z), JSON.stringify(t)
        }
    };
    e.exports = a
}, function (e, t) {
    const n = {
        basic: {
            success: {
                eng: "Success",
                rus: "Успешно",
                ger: "Erfolgreich",
                br: "Sucesso",
                zhs: "成功",
                zht: "成功",
                cs: "Úspěch"
            },
            pressE: {
                eng: "Press ~b~E ~s~",
                rus: "Нажмите ~b~E ~s~",
                ger: "Drücken Sie ~b~ E ~s~",
                br: "Pressione ~b~E ~s~",
                zhs: "按 ~b~E ~s~",
                zht: "按 ~b~E ~s~",
                cs: "Stiskni ~b~E ~s~"
            },
            pressEToOpenMenu: {
                eng: "Press ~b~E ~s~to open Menu",
                rus: "Нажмите ~b~E ~s~для входа в меню",
                ger: "Drücken Sie ~b~ E ~s~, um das Menü zu öffnen",
                br: "Pressione ~b~E ~s~para abrir o menu",
                zhs: "按 ~b~E ~s~打开菜单",
                zht: "按 ~b~E ~s~開啟選單",
                cs: "Stiskni ~b~E ~s~pro otevření menu"
            },
            workingOnOtherJob: {
                eng: "You are already working on other job",
                rus: "Вы уже работаете на другой работе",
                ger: "Du arbeitest bereits an einem anderen Job",
                br: "Você já está trabalhando em alguma empresa",
                zhs: "你正在做这个工作了",
                zht: "妳正在做這個工作了",
                cs: "Již pracuješ v jiné práci"
            },
            earned1: {
                eng: "You earned",
                rus: "Вы заработали",
                ger: "Du hast verdient",
                br: "Você ganhou",
                zhs: "你已赚了",
                zht: "妳已賺了",
                cs: "Vydělal jsi"
            },
            earned2: {
                eng: "Keep it up",
                rus: "Продолжайте в том же духе",
                ger: "Mach weiter",
                br: "Continue assim, bom trabalho",
                zhs: "继续保持",
                zht: "繼續保持",
                cs: "Jen tak dál"
            },
            needMoreLoyality1: {
                eng: "You need at least",
                rus: "Вам необходимо минимум",
                ger: "Du brauchst wenigstens",
                br: "Você precisa de pelo menos",
                zhs: "你需要至少",
                zht: "你需要至少",
                cs: "Potřebuješ alespoň"
            },
            needMoreLoyality2: {
                eng: "loyality points",
                rus: "очков лояльности",
                ger: "treuepunkte",
                br: "pontos de fidelidade",
                zhs: "忠诚点数",
                zht: "忠誠點數",
                cs: "věrnostní body"
            },
            tooFarAway: {
                eng: "too far away from you",
                rus: "слишком далеко от вас",
                ger: "zu weit weg von dir",
                br: "muito longe de você",
                zhs: "这离你太远了",
                zht: "這離你太遠了",
                cs: "příliš daleko od tebe"
            },
            wait: {eng: "Wait", rus: "Подождите", ger: "Warte", br: "Aguarde", zhs: "等待", zht: "等待", cs: "Čekej"},
            seconds: {eng: "seconds", rus: "секунд", ger: "sekunden", br: "segundos", zhs: "秒", zht: "秒", cs: "sekund"},
            toEnter: {
                eng: "to enter",
                rus: "чтобы войти",
                ger: "betreten",
                br: "para entrar",
                zhs: "进入",
                zht: "進入",
                cs: "pro vstup"
            },
            toExit: {
                eng: "to exit",
                rus: "чтобы выйти",
                ger: "exit",
                br: "para sair",
                zhs: "离开",
                zht: "離開",
                cs: "pro odchod"
            },
            toEnterGarage: {
                eng: "to enter garage",
                rus: "чтобы попасть в гараж",
                ger: "in die Garage gehen",
                br: "para entrar na garagem",
                zhs: "进入车库",
                zht: "進入車庫",
                cs: "pro vstup do garáže"
            },
            toExitGarage: {
                eng: "to exit garage",
                rus: "чтобы покинуть гараж",
                ger: "garage verlassen",
                br: "para sair da garagem",
                zhs: "离开车库",
                zht: "離開車庫",
                cs: "pro odchod z garáže"
            },
            toCallLift: {
                eng: "to call lift",
                rus: "чтобы вызвать лифт",
                ger: "um Aufzug zu rufen",
                br: "chamar elevador",
                zhs: "使用电梯",
                zht: "使用電梯",
                cs: "pro zavolání výtahu"
            },
            someVehicleIsBlocking: {
                eng: "Some vehicle is blocking the area",
                rus: "Какое-то ТС блокирует зону",
                ger: "Ein Fahrzeug blockiert den Bereich",
                br: "Alguns veículos estão bloqueando a área",
                zhs: "一些载具阻挡了这个区域",
                zht: "一些載具阻擋了這個區域",
                cs: "Nějaké vozidlo blokuje oblast"
            },
            somePlayerIsBlocking: {
                eng: "Some player is blocking the area",
                rus: "Какой-то игрок блокирует зону",
                ger: "Ein Spieler blockiert das Gebiet",
                br: "Algum jogador está bloqueando a área",
                zhs: "一些玩家阻挡了这个区域",
                zht: "一些玩家阻擋了這個區域",
                cs: "Nějaký hráč blokuje oblast"
            },
            youRejectedOffer: {
                eng: "You rejected offer by player",
                rus: "Вы отклонили предложение игрока",
                ger: "Du hast das Angebot von Spieler abgelehnt",
                br: "Você rejeitou a oferta pelo jogador",
                zhs: "你拒绝了offer（来自玩家",
                zht: "你拒絕了offer（來自玩家",
                cs: "Odmítnul jsi nabídku od hráče"
            },
            rejectedYourOffer: {
                eng: "rejected your offer",
                rus: "отклонил(а) ваше предложение",
                ger: "hat Ihr Angebot abgelehnt",
                br: "rejeitou sua oferta",
                zhs: "拒绝了你的offer",
                zht: "拒絕了你的offer",
                cs: "odmítnul tvou nabídku"
            },
            confirmedYourOffer: {
                eng: "confirmed your offer",
                rus: "принял(а) ваше предложение",
                ger: "bestätigte Ihr Angebot",
                br: "confirmou sua oferta",
                zhs: "接受了你的offer",
                zht: "接受了你的offer",
                cs: "potvrdil tvou nabídkuu"
            },
            youConfirmedOffer: {
                eng: "You confirmed offer by player",
                rus: "Вы приняли предложение игрока",
                ger: "Du hast das Angebot von Spieler bestätigt",
                br: "Você confirmou a oferta pelo jogador",
                zhs: "你接受了offer（来自玩家",
                zht: "你接受了offer（來自玩家",
                cs: "Potvrdil jsi nabídku od hráče"
            }
        },
        sAuth: {
            checkEmail: {
                eng: "Please check your mail box.",
                rus: "",
                ger: "",
                br: "",
                zhs: "请注意查收邮件。",
                zht: "請注意查收郵件。",
                cs: "Prosím zkontroluj svůj e-mail"
            }
        },
        sLogin: {
            connected: {
                eng: "connected",
                rus: "присоединился",
                ger: "verbunden",
                br: "conectado",
                zhs: "已上线",
                zht: "已上線",
                cs: "připojeno"
            },
            disconnected: {
                eng: "disconnected",
                rus: "отключился",
                ger: "getrennt",
                br: "desconectou",
                zhs: "已下线",
                zht: "已離線",
                cs: "odpojeno"
            },
            annoucePlayerMenu: {
                eng: "Press M button to open menu",
                rus: "Открыть меню: кнопка М",
                ger: "",
                br: "",
                zhs: "M键开启菜单以获取更多帮助",
                zht: "M鍵開啟菜單以獲取更多幫助。",
                cs: "Stiskni tlačítko M pro otevření menu"
            },
            annouceSpawnVehicle: {
                eng: "Spawn a vehicle: /veh",
                rus: "Создать транспорт: /veh",
                ger: "",
                br: "Criar um veiculo: /veh",
                zhs: "请求一台载具：/veh",
                zht: "请求一辆载具：/veh",
                cs: "Spawnutí vozidla /veh"
            },
            annouceGlobalChat: {
                eng: "Global chat: /g [message]",
                rus: "Глобальный чат: /g [сообщение]",
                ger: "Globaler Chat: / g [Nachricht]",
                br: "Chat Global: /g [mensagem]",
                zhs: "全局聊天：/g [message]",
                zht: "全域聊天：/g [message]",
                cs: "Globální chat: /g [message]"
            },
            annouceOldUser: {
                eng: "If you have account in old server version and want restore data, write here in chat your old name. I will check it in logs",
                rus: "Если у вас есть аккаунт на старом сервере, напишите в чате старое имя. Я посмотрю это по логам",
                ger: "Wenn Sie einen Account haben und Daten wiederherstellen möchten, schreiben Sie hier im Chat Ihren alten Namen. Ich werde es in Logs überprüfen",
                br: "Se você tem conta na versão antiga do servidor e deseja restaurar os dados, escreva aqui no bate-papo seu nome antigo. Vou verificar nos logs",
                zhs: "如果你有旧版服务器账户且希望恢复它，在聊天栏留下你的用户名和需求。我会在日志中查阅。",
                zht: "如果你有舊版服務器帳戶且希望恢復它，在聊天欄留下你的用戶名和需求。我會在日誌中檢查。",
                cs: "Pokud máš účet ze staré verze serveru a chceš obnovit data, napiš do chatu své staré jméno. Zkontroluji si to v logu"
            },
            saveGame: {
                eng: "Account successfully saved!",
                rus: "Аккаунт сохранен!",
                ger: "Konto erfolgreich gespeichert!",
                br: "Conta salva com sucesso!",
                zhs: "帐号成功保存。",
                zht: "帳戶成功保存。",
                cs: "Účet úspěšně uložen"
            },
            accNotexist: {
                eng: "This account doesnt exist",
                rus: "",
                ger: "",
                br: "",
                zhs: "帐号不存在。",
                zht: "帳戶不存在。",
                cs: "Tento účet neexistuje"
            }
        },
        sMoney: {
            enterATM: {
                eng: "Press ~b~E ~s~to open ATM Menu",
                rus: "Нажмите ~b~E ~s~для входа в меню банкомата",
                ger: "Drücken Sie ~b~ E ~s~, um das ATM-Menü zu öffnen",
                br: "Pressione ~b~E ~s~para abrir o menu do Caixa Eletrônico",
                zhs: "按 ~b~E ~s~ 键打开ATM菜单",
                zht: "按 ~b~E ~s~ 鍵打開ATM菜單",
                cs: "Stiskni ~b~E ~s~pro otevření menu bankomatu"
            },
            notEnoughCash: {
                eng: "Not enough cash",
                rus: "Недостаточно наличных",
                ger: "Nicht genug Geld",
                br: "O dinheiro não é suficiente",
                zhs: "现金不足",
                zht: "現金不足",
                cs: "Nedostatek peněz"
            },
            addBankMoney: {
                eng: "New payment",
                rus: "Новый чек",
                ger: "Neue zahlung",
                br: "Novo pagamento",
                zhs: "新的支付",
                zht: "新的支付",
                cs: "Nová platba"
            },
            payTaxOffline: {
                eng: "New tax payment",
                rus: "Новый налоговый чек",
                ger: "Neue tax zahlung",
                br: "Novo pagamento de imposto",
                zhs: "新的税务支出",
                zht: "新的稅務支出",
                cs: "Nová platba daní"
            },
            newFine: {
                eng: "New fine",
                rus: "Новый штраф",
                ger: "Neue Strafe",
                br: "Nova multa",
                zhs: "新的惩罚",
                zht: "新的懲罰",
                cs: "Nová pokuta"
            }
        },
        sLoyality: {
            loyality: {
                eng: "Loyality",
                rus: "Лояльность",
                ger: "",
                br: "Fidelidade",
                zhs: "忠诚值",
                zht: "忠誠值",
                cs: "Věrnost"
            }
        },
        sChat: {
            someone: {
                eng: "Someone",
                rus: "Неизвестный",
                ger: "Jemand",
                br: "Alguém",
                zhs: "某人",
                zht: "某人",
                cs: "Někdo"
            }
        },
        sBusiness: {
            alreadyHave: {
                eng: "You cant own more than 1 business",
                rus: "Вы не можете иметь более 1 бизнеса",
                ger: "Sie können nicht mehr als 1 Geschäft besitzen",
                br: "Você não pode possuir mais de 1 negócio",
                zhs: "你不能建立多于1个商业产业。",
                zht: "妳不能建立多於1個商業產業。",
                cs: "Nemůžeš vlastnit více, než 1 společnost"
            },
            sale: {
                eng: "Business sale",
                rus: "Продажа бизнеса",
                ger: "Geschäftsverkauf",
                br: "Venda de negócios",
                zhs: "商业销售",
                zht: "商業銷售",
                cs: "Prodej společnosti"
            }
        },
        sVehicle: {
            locked: {
                eng: "locked",
                rus: "закрыт",
                ger: "gesperrt",
                br: "trancado",
                zhs: "锁住",
                zht: "鎖住",
                cs: "zamčeno"
            },
            unlocked: {
                eng: "unlocked",
                rus: "открыт",
                ger: "entsperrt",
                br: "destrancado",
                zhs: "已开锁",
                zht: "已開鎖",
                cs: "odemčeno"
            },
            helpUnlock: {
                eng: "Unlock: num +",
                rus: "Открыть: num +",
                ger: "Entsperren: num +",
                br: "Destravar: num +",
                zhs: "开锁: 数字小键盘 +",
                zht: "開鎖: 數字小鍵盤 +",
                cs: "Odemčít: num +"
            },
            helpEngine: {
                eng: "Toggle engine: num 0",
                rus: "Завести двигатель: num 0",
                ger: "Toggle-Engine: Nummer 0",
                br: "Ligar o motor: num 0",
                zhs: "切换发动机：数字小键盘 0",
                zht: "切換引擎: 數字小鍵盤 0",
                cs: "Nastartovat: num 0"
            },
            spawnedFaggio2: {
                eng: "Toggle engine: num 0",
                rus: "Завести двигатель: num 0",
                ger: "Toggle-Engine: Nummer 0",
                br: "Ligar o motor: num 0",
                zhs: "切换发动机：数字小键盘 0",
                zht: "切換引擎: 數字小鍵盤 0",
                cs: "Nastartovat: num 0"
            },
            sellVehicle: {
                eng: "Vehicle sell",
                rus: "Продажа ТС",
                ger: "",
                br: "",
                zhs: "销售载具",
                zht: "銷售載具",
                cs: "Prodej vozidla"
            },
            wantsSellVehicleToPlayer: {
                eng: "wants sell you a",
                rus: "хочет продать вам",
                ger: "",
                br: "",
                zhs: "希望能卖给你一个",
                zht: "希望能賣給你一個",
                cs: "ti chce prodat"
            }
        },
        sGasStation: {
            offEngine: {
                eng: "Please turn off the engine",
                rus: "Пожалуйста, заглушите двигатель",
                ger: "Bitte schalte den Motor ab",
                br: "Por favor desligue o motor",
                zhs: "请熄火",
                zht: "請熄火",
                cs: "Vypni motor prosím"
            },
            fuelPrice: {
                eng: "Price for litre",
                rus: "Цена за литр",
                ger: "Preis pro Liter",
                br: "Preço por litro",
                zhs: "每升油价",
                zht: "每升油價",
                cs: "Cena za litr"
            },
            goodJourney: {
                eng: "Have a good journey",
                rus: "Счастливого пути",
                ger: "Gute weiter Reise",
                br: "Tenha uma boa viagem",
                zhs: "祝你旅途愉快",
                zht: "祝妳旅途愉快",
                cs: "Šťastnou cestu"
            },
            passengersDropOff: {
                eng: "Please drop off passengers",
                rus: "Пожалуйста, высадите пассажиров",
                ger: "",
                br: "Por favor, deixe os passageiros",
                zhs: "请让乘客下车",
                zht: "請讓乘客下車",
                cs: "Vysaď pasažéry, prosím"
            }
        },
        sFaction: {
            changeClothes: {
                eng: "to change clothes",
                rus: "чтобы переодеться",
                ger: "um die Kleidung zu wechseln",
                br: "trocar de roupa",
                zhs: "更换衣服",
                zht: "更換衣服",
                cs: "pro změnu oblečení"
            },
            setNewRank: {
                eng: "You set new rank to player",
                rus: "Вы установили новый ранг игроку",
                ger: "Du hast dem Spieler einen neuen Rang zugewiesen",
                br: "Você definiu uma nova classificação para o jogador",
                zhs: "",
                zht: "",
                cs: "Nastavil jsi novou hodnost hráči"
            },
            changedYourRank: {
                eng: "changed your rank to",
                rus: "изменил(а) ваш ранг на",
                ger: "änderte deinen Rang in",
                br: "mudou sua classificação para",
                zhs: "",
                zht: "",
                cs: "Změnil tvou hodnost na"
            },
            invited: {
                eng: "invited you to",
                rus: "устроил(а) вас в",
                ger: "lud dich ein",
                br: "convidou você para",
                zhs: "邀请你",
                zht: "邀請你",
                cs: "tě pozval do"
            },
            leader: {
                eng: "Now you are leader in",
                rus: "Теперь вы лидер",
                ger: "Jetzt bist du Anführer",
                br: "Agora você é líder em",
                zhs: "",
                zht: "",
                cs: "Nyní jsi vedoucí v"
            },
            uninvited: {
                eng: "uninvited you from",
                rus: "уволил(а) вас из",
                ger: "ungebeten von dir",
                br: "sem ser convidado de",
                zhs: "把你踢出了",
                zht: "把你踢出了",
                cs: "zrušil tvé pozvání z"
            }
        },
        sHospital: {
            needHelp: {
                eng: "You need a medical help",
                rus: "Вам нужна медицинская помощь",
                ger: "Sie brauchen eine medizinische Hilfe",
                br: "Você precisa de ajuda médica",
                zhs: "你需要医疗救治",
                zht: "你需要醫療救治",
                cs: "Potřebuješ zzdravotní pomoc"
            },
            toStartHealing: {
                eng: "to start healing",
                rus: "чтобы начать лечение",
                ger: "um zu heilen",
                br: "para começar a curar",
                zhs: "开始救治",
                zht: "開始救治",
                cs: "pro uzdrabvení"
            },
            transferTo: {
                eng: "Transfer to Hospital",
                rus: "Перевоз к больнице",
                ger: "Transfer ins Krankenhaus",
                br: "Transferência para o hospital",
                zhs: "转送到医院",
                zht: "轉送到醫院",
                cs: "Převézt do nemocnice"
            },
            startedHealing: {
                eng: "You started healing process",
                rus: "Вы начали лечение",
                ger: "Du hast den Heilungsprozess begonnen",
                br: "Você começou o processo de tratamento",
                zhs: "你开始治疗了",
                zht: "你開始治療了",
                cs: "Započal jsi proces uzdravení"
            },
            finishedHealing: {
                eng: "You finished healing process",
                rus: "Вы завершили лечение",
                ger: "Du hast den Heilungsprozess beendet",
                br: "Você terminou o processo de cicatrização",
                zhs: "你结束了治疗过程",
                zht: "你結束了治療過程",
                cs: "Dokončil jsi proces uzdravení"
            },
            isntHealing: {
                eng: "isnt healing right now",
                rus: "не записан на лечение",
                ger: "ist nicht gerade in der Heilung",
                br: "não está curando agora",
                zhs: "不在治疗中",
                zht: "不在治療中",
                cs: "se nyní neuzdravuje"
            },
            youArentHealing: {
                eng: "Youre not healing right now",
                rus: "Вы не записаны на лечение",
                ger: "Du heilst gerade nicht",
                br: "Você não está curando agora",
                zhs: "你现在不在治疗中",
                zht: "你現在不在治療中",
                cs: "Nyní se neuzdravuješ"
            },
            wantsIncreaseHealing: {
                eng: "Wants increase healing speed",
                rus: "Предлагает увеличить скорость лечения",
                ger: "Will die Heilungsgeschwindigkeit erhöhen",
                br: "Quer aumentar a velocidade de cicatrização",
                zhs: "希望加快治疗",
                zht: "希望加快治療",
                cs: "Chce zvýšit rychlost uzdravení"
            },
            wantsHeal: {
                eng: "Wants heal you",
                rus: "Предлагает вылечить вас",
                ger: "Will dich heilen",
                br: "Quer curar você",
                zhs: "想治疗你",
                zht: "想治療你",
                cs: "Tě chce uzdravit"
            }
        },
        sJob: {
            start: {
                eng: "You started work as",
                rus: "Вы устроились работать как ",
                ger: "",
                br: "",
                zhs: "你开始担任",
                zht: "你開始擔任",
                cs: "Nyní pracuješ jako"
            },
            finish: {
                eng: "You finished work as",
                rus: "Вы уволились с работы",
                ger: "",
                br: "",
                zhs: "你不再担任",
                zht: "你不再擔任",
                cs: "Dokončil jsi práci v"
            }
        },
        sOrangeCollector: {
            collected1: {
                eng: "You have",
                rus: "У вас в корзине",
                ger: "Du hast",
                br: "Você tem",
                zhs: "你有",
                zht: "妳有",
                cs: "Máš"
            },
            collected2: {
                eng: "oranges in your bucket",
                rus: "апельсинов",
                ger: "orangen in deinem eimer",
                br: "laranjas no seu balde",
                zhs: "个橙子在篮子里",
                zht: "個橙子在籃子裏",
                cs: "pomerančů v tvém kyblíku"
            },
            full: {
                eng: "Your bucket is full! Take it to the trailer",
                rus: "Ваша корзина заполнена! Отнесите ее к трейлеру",
                ger: "Dein Eimer ist voll! Bring es zum Trailer",
                br: "Seu balde está cheio! Leve para o trailer",
                zhs: "你的篮子满了，把东西拉到车上吧",
                zht: "妳的籃子滿了，把東西拉到車上吧",
                cs: "Tvůj kyblík je plný! Vezmi ho k návěsu"
            },
            empty: {
                eng: "Your bucket is empty",
                rus: "Ваша корзина пуста",
                ger: "Dein Eimer ist leer",
                br: "Seu balde está vazio",
                zhs: "你的篮子是空的",
                zht: "妳的籃子是空的",
                cs: "Tvůj kyblík je prázdný"
            }
        },
        sMariaCollector: {
            collected1: {
                eng: "You have",
                rus: "У вас в корзине",
                ger: "Du hast",
                br: "Você tem",
                zhs: "你有",
                zht: "妳有",
                cs: "Máš"
            },
            collected2: {
                eng: "maria in your bucket",
                rus: "апельсинов",
                ger: "marien in deinem eimer",
                br: "laranjas no seu balde",
                zhs: "个橙子在篮子里",
                zht: "個橙子在籃子裏",
                cs: "pomerančů v tvém kyblíku"
            },
            full: {
                eng: "Your bucket is full! Take it to the trailer",
                rus: "Ваша корзина заполнена! Отнесите ее к трейлеру",
                ger: "Dein Eimer ist voll! Bring es zum Trailer",
                br: "Seu balde está cheio! Leve para o trailer",
                zhs: "你的篮子满了，把东西拉到车上吧",
                zht: "妳的籃子滿了，把東西拉到車上吧",
                cs: "Tvůj kyblík je plný! Vezmi ho k návěsu"
            },
            empty: {
                eng: "Your bucket is empty",
                rus: "Ваша корзина пуста",
                ger: "Dein Eimer ist leer",
                br: "Seu balde está vazio",
                zhs: "你的篮子是空的",
                zht: "妳的籃子是空的",
                cs: "Tvůj kyblík je prázdný"
            }
        },
        sCBDeliveryMen: {
            invite: {
                eng: "Press ~b~E ~s~to start work as a Delivery Men",
                rus: "Нажмите ~b~E~s~, чтобы устроиться курьером в Clickin Bell",
                ger: "Drücken Sie ~b~ E ~s~, um mit der Arbeit als Delivery Men zu beginnen",
                br: "Pressione ~b~E~s~, para começar a trabalhar como entregador",
                zhs: "按~b~E~s~键报名农场工人。",
                zht: "按~b~E~s~鍵報名農場工人。",
                cs: "Stiskni ~b~E ~s~pro začátek práce jako kurýr"
            },
            uninvite: {
                eng: "Press ~b~E ~s~to finish work as a Delivery Men",
                rus: "Нажмите ~b~E~s~, чтобы уволиться из Clickin Bell",
                ger: "Drücken Sie ~b~ E ~s~, um die Arbeit als Delivery Men abzuschließen",
                br: "Pressione ~b~E~s~, para encerrar o trabalho como entregador",
                zhs: "按~b~E~s~键辞工",
                zht: "按~b~E~s~鍵辭工",
                cs: "Stiskni ~b~E ~s~ pro dokončení práce jako kurýr"
            },
            cantGetNewOrder: {
                eng: "You cant get new order",
                rus: "Вы не можете взять другой заказ",
                ger: "Du kannst keine neue Bestellung bekommen",
                br: "Você não pode conseguir um novo pedido",
                zhs: "我们无法获取新订单",
                zht: "我們無法獲取新訂單",
                cs: "Nemůžeš si vzít jinou objednávku"
            },
            getNewOrder: {
                eng: "Press ~b~E ~s~to get a new order",
                rus: "Нажмите ~b~E~s~, чтобы взять новый заказ",
                ger: "Drücken Sie ~b~ E ~s~, um eine neue Reihenfolge zu erhalten",
                br: "Pressione ~b~E~s~, para pegar um novo pedido",
                zhs: "按 ~b~E ~s~ 获取新的指示",
                zht: "按 ~b~E ~s~ 獲取新的指示",
                cs: "Stiskni ~b~E ~s~pro získání nové objednávky"
            },
            haveUndeliveredOrder: {
                eng: "You have undelivered order! You will pay $500 finishing right now!",
                rus: "У вас есть недоставленный заказ! Вам выпишут штраф $500, если вы уволитесь прямо сейчас!",
                ger: "Sie haben die Bestellung nicht zugestellt! Sie werden jetzt $500 bezahlen!",
                br: "Você tem ordem não entregue! Você vai pagar $500 terminando agora!",
                zhs: "你有未派送的订单！ 你需要支付 $500 来马上完成!",
                zht: "妳有未派送的訂單！ 妳需要支付 $500 來馬上完成!",
                cs: "Máš nedoručenou objednávku! Zaplatíš $500 za dokončení"
            },
            started: {
                eng: "You started Cluckin Bell delivery job! You can get new order in the left side",
                rus: "Вы устроились курьером в Cluckin Bell! Взять заказ вы можете у двери слева",
                ger: "Sie haben mit der Lieferung von Cluckin Bell begonnen! Sie können neue Reihenfolge auf der linken Seite bekommen",
                br: "Você começou o trabalho de entrega da Cluckin Bell! Você pode obter um novo pedido no lado esquerdo",
                zhs: "你已经开始了Cluckin Bell派送任务！你可以在左边获取新订单",
                zht: "妳已經開始了Cluckin Bell派送任務！妳可以在左邊獲取新訂單",
                cs: "Začal jsi doruučování v Cluckin Bell! Můžeš si převzít objednávku na levé straně"
            },
            finished: {
                eng: "You finished Cluckin Bell delivery job",
                rus: "Вы уволились из Cluckin Bell!",
                ger: "Du hast Gluck Bell abgeschlossen",
                br: "Você encerrou o trabalho de entrega da Cluckin Bell",
                zhs: "你完成了 Cluckin Bell派所任务",
                zht: "妳完成了 Cluckin Bell派所任務",
                cs: "Dokončil jsi doručovací práci v Cluckin Bell"
            },
            deliver: {
                eng: "Deliver your order",
                rus: "Доставьте ваш заказ",
                ger: "Liefern Sie Ihre Bestellung",
                br: "Entregue seu pedido",
                zhs: "派送你的订单",
                zht: "派送妳的訂單",
                cs: "Doruč svou objednávku"
            },
            undelivered: {
                eng: "Undelivered order",
                rus: "Недоставленный заказ",
                ger: "Nicht zugestellte Bestellung",
                br: "Ordem não entregue",
                zhs: "取消派送订单",
                zht: "取消派送訂單",
                cs: "Nedoručená objednávka"
            }
        },
        sMenu: {
            wrongOldPass: {
                eng: "You entered wrong old password",
                rus: "Вы ввели неправильный старый пароль",
                ger: "",
                br: "",
                zhs: "错误的旧密码",
                zht: "錯誤的舊密碼",
                cs: "Zadal jsi staré heslo"
            }
        }
    };
    e.exports.get = function (e, t, s) {
        const i = n[e][t];
        return i[s] ? i[s] : i.eng
    }
}, , function (e, t, n) {
    const s = n(0), i = n(1), a = n(7), r = [];

    function o(e) {
        for (let t = 0; t < r.length; t++) if (r[t].id === e) return r[t]
    }

    function l(e) {
        return !!e.canOpen.business && o(e.canOpen.business)
    }

    e.exports = class {
        constructor(e) {
            this.id = e.id, this.title = e.title, this.coord = JSON.parse(e.coord), this.price = e.price, this.ownerId = e.ownerId, this.margin = e.margin, this.balance = e.balance, this.buyerMenuCoord = JSON.parse(e.buyerMenuCoord), this.updateOwner(), r.push(this), this.createMainEntities(), this.createBuyerEntities(), this.setLocalSettings()
        }

        createMainEntities() {
            this.colshape = mp.colshapes.newSphere(this.coord.x, this.coord.y, this.coord.z, .5), this.colshape.businessId = this.id, this.marker = mp.markers.new(1, new mp.Vector3(this.coord.x, this.coord.y, this.coord.z - 1), .75), this.updateMarker()
        }

        updateMarker() {
            if (!this.ownerId) return this.marker.setColor(50, 250, 50, 25);
            this.marker.setColor(250, 250, 50, 25)
        }

        createBuyerEntities() {
            const e = this.buyerMenuCoord;
            mp.markers.new(1, new mp.Vector3(e.x, e.y, e.z - 1), .75, {color: [93, 182, 229, 25]}), this.buyerColshape = mp.colshapes.newSphere(e.x, e.y, e.z, .9), this.buyerColshape.businessBuyerId = this.id, this.blip = mp.blips.new(106, new mp.Vector3(e.x, e.y, e.z), {
                shortRange: !0,
                scale: .7
            })
        }

        async updateOwner() {
            if (this.ownerId) {
                await s.query(`UPDATE business SET ownerId = '${this.ownerId}' WHERE id = ${this.id} LIMIT 1`);
                const e = await s.query(`SELECT firstName, lastName from users WHERE id = '${this.ownerId}' LIMIT 1`);
                this.owner = `${e[0].firstName} ${e[0].lastName}`
            } else await s.query(`UPDATE business SET ownerId = '0' WHERE id = ${this.id} LIMIT 1`), this.ownerId = 0, this.owner = ""
        }

        isPlayerHasBusiness(e) {
            for (let t = 0; t < r.length; t++) if (r[t].ownerId === e) return !0;
            return !1
        }

        async buyBusiness(e) {
            if (this.ownerId) return;
            if (this.isPlayerHasBusiness(e.guid)) return e.notify(`~r~${i.get("sBusiness", "alreadyHave", e.lang)}!`);
            await e.changeMoney(-this.price) && (this.ownerId = e.guid, s.log.debug(`${e.name} bought a businnes №${this.id}`), this.updateMarker(), await this.updateOwner(), e.notify(`~g~${i.get("basic", "success", e.lang)}!`))
        }

        async sellBusiness(e) {
            if (this.ownerId !== e) return;
            this.ownerId = 0;
            const t = await s.query(`SELECT lang from users WHERE id = '${e}' LIMIT 1`), n = s.getPlayerByGuid(e);
            n ? await n.addBankMoney(.5 * this.price, `${i.get("sBusiness", "sale", `${t[0].lang}`)}`) : await a.addBankMoneyOffline(e, .5 * this.price), s.log.debug(`${e} sold a businnes №${this.id}`), this.updateMarker(), await this.updateOwner()
        }

        async takeBalanceMoney(e) {
            this.ownerId === e.guid && 0 !== this.balance && (await s.query(`UPDATE business SET balance = 0 WHERE id = ${this.id} LIMIT 1`), await e.changeMoney(+this.balance), this.balance = 0, s.log.debug(`${e.name} takes a business №${this.id} balance: $${this.balance}`))
        }

        addMoneyToBalance(e) {
            if ("number" != typeof e) return s.log.error(`addMoneyToBalance | value is not a number: ${e}, id: ${this.id}`);
            s.query(`UPDATE business SET balance = balance + ${e} WHERE id = ${this.id}`), this.balance += e
        }

        async setMargin(e, t) {
            if (this.ownerId === e && t !== this.margin) return s.isValueNumber(t) ? void (t < 0 || t > 200 || (await s.query(`UPDATE business SET margin = ${t} WHERE id = ${this.id} LIMIT 1`), this.margin = t, s.log.debug(`${this.owner} sets a business №${this.id} margin: ${this.margin}`))) : s.log.error(`setMargin | newMargin is not a number: ${t}, id: ${this.id}`)
        }

        async payTaxes() {
            if (!this.ownerId) return;
            const e = s.getPlayerByGuid(this.ownerId);
            let t;
            t = e ? await e.payTax(this.price / 1e4, `${this.title}`) : await a.payTaxOffline(this.ownerId, this.price / 1e4), t || this.sellBusiness(this.ownerId)
        }

        openBusinessMenu(e) {
            let t = `app.id = ${this.id};`;
            t += `app.title = '${this.title}';`, t += `app.price = ${this.price};`, t += `app.owner = '${this.owner}';`, t += "setTimeout(load, 300);", this.ownerId === e.guid ? (t += `app.balance = ${this.balance};`, t += `app.margin = ${this.margin};`, t += "app.loadForOwner();") : this.ownerId || (t += "app.loadForSale();"), e.call("cBusinnes-ShowMenu", [e.lang, t]), s.log.debug(`${e.name} enters Business Menu`)
        }
    }, e.exports.getBusiness = o, mp.events.add({
        playerEnterColshape: (e, t) => {
            e.loggedIn && (t.businessId || t.businessBuyerId) && (t.businessId && !e.vehicle ? e.canOpen.business = t.businessId : t.businessBuyerId && (e.canOpen.businessBuyerMenu = t.businessBuyerId), e.notify(`${i.get("basic", "pressEToOpenMenu", e.lang)}`))
        }, playerExitColshape: (e, t) => {
            e.loggedIn && (t.businessId || t.businessBuyerId) && (t.businessId ? e.canOpen.business = !1 : t.businessBuyerId && (e.canOpen.businessBuyerMenu = !1))
        }, "sKeys-E": e => {
            if (e.loggedIn) if (e.canOpen.business && !e.vehicle) {
                o(e.canOpen.business).openBusinessMenu(e)
            } else if (e.canOpen.businessBuyerMenu) {
                o(e.canOpen.businessBuyerMenu).openBuyerMenu(e)
            }
        }, "sBusiness-BuyBusiness": e => {
            const t = l(e);
            t && t.buyBusiness(e)
        }, "sBusiness-SellBusiness": e => {
            const t = l(e);
            t && t.sellBusiness(e.guid)
        }, "sBusiness-TakeBalanceMoney": e => {
            const t = l(e);
            t && t.takeBalanceMoney(e)
        }, "sBusiness-ChangeMargin": (e, t) => {
            const n = l(e);
            n && n.setMargin(e.guid, t)
        }
    }), e.exports.payTaxes = function () {
        for (let e = 0; e < r.length; e++) r[e].payTaxes()
    }, e.exports.getCountOfBusinesses = function () {
        return r.length
    }, mp.events.addCommand({
        setbusbuyermenu: async (e, t) => {
            if (e.adminlvl < 1) return;
            const n = s.getPlayerCoordJSON(e);
            await s.query(`UPDATE business SET buyerMenuCoord = '${n}' WHERE id = ${t}`), e.notify(`~g~${i.get("basic", "success", e.lang)}!`)
        }
    }), e.exports.getNearestBusiness = function (e, t) {
        let n;
        for (const t of r) if (t.title === e) {
            n = t;
            break
        }
        for (const s of r) s.title === e && s.blip.dist(t) < n.blip.dist(t) && (n = s);
        return n.blip.position
    }, e.exports.getBusinessPositionById = function (e) {
        const t = o(e);
        return !!t && t.blip.position
    }
}, function (e, t, n) {
    const s = n(0);
    const i = new class {
        constructor() {
            this.manHats = [{id: 8, name: "Without Hat", color: 0, colors: [0], price: 0}, {
                id: 2,
                name: "Cap",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7],
                price: 500
            }, {id: 3, name: "Panama", color: 0, colors: [1, 2], price: 600}, {
                id: 4,
                name: "LS Cap",
                color: 0,
                colors: [0, 1],
                price: 1e3
            }, {id: 5, name: "Cap", color: 0, colors: [0, 1], price: 500}, {
                id: 6,
                name: "Army Cap",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7],
                price: 700
            }], this.manGlasses = [{id: 0, name: "Without Glasses", color: 0, colors: [0], price: 0}, {
                id: 1,
                name: "Glasses №1",
                color: 0,
                colors: [1],
                price: 500
            }, {
                id: 2,
                name: "Glasses №2",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                price: 450
            }], this.manTops = [{
                id: 0,
                name: "Simple T-Shirt",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 7, 8, 11],
                price: 650,
                torso: 0,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }, {
                id: 1,
                name: "Simple T-Shirt",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14],
                price: 550,
                torso: 0,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }, {
                id: 5,
                name: "Undershirt",
                color: 0,
                colors: [0, 1, 2, 7],
                price: 350,
                torso: 5,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }, {
                id: 8,
                name: "Shirt",
                color: 0,
                colors: [0, 10, 13, 14],
                price: 700,
                torso: 8,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }, {
                id: 13,
                name: "Shirt",
                color: 0,
                colors: [0, 1, 2, 3, 5, 13],
                price: 800,
                torso: 11,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }, {
                id: 14,
                name: "Shirt",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 950,
                torso: 12,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }, {
                id: 16,
                name: "T-Shirt",
                color: 0,
                colors: [0, 1, 2],
                price: 600,
                torso: 0,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }, {
                id: 17,
                name: "Undershirt",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5],
                price: 700,
                torso: 5,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }, {
                id: 18,
                name: "Colored Shirt",
                color: 0,
                colors: [0, 1, 2, 3],
                price: 900,
                torso: 0,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }], this.manLegs = [{
                id: 0,
                name: "Fit Jeans",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 750
            }, {
                id: 1,
                name: "Wide Jeans",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 1e3
            }, {
                id: 3,
                name: "Jogging",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 1e3
            }, {id: 4, name: "Fit Jeans", color: 0, colors: [0, 1, 2, 3, 4], price: 1e3}], this.manFeet = [{
                id: 1,
                name: "Sneakers",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 600
            }, {
                id: 3,
                name: "Sneakers",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 550
            }, {
                id: 4,
                name: "High Sneakers",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 500
            }, {
                id: 5,
                name: "Bedroom Slippers",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 400
            }], this.womanHats = [{
                id: 57,
                name: "Without Hat",
                color: 0,
                colors: [0],
                price: 0
            }], this.womanGlasses = [{id: 13, name: "Without Glasses", color: 0, colors: [0], price: 0}, {
                id: 0,
                name: "Glasses №1",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                price: 500
            }, {
                id: 21,
                name: "Glasses №2",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                price: 450
            }], this.womanTops = [{
                id: 0,
                name: "Simple T-Shirt",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 500,
                torso: 0,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }, {
                id: 2,
                name: "Simple T-Shirt",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 650,
                torso: 2,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }, {
                id: 3,
                name: " Jersey",
                color: 0,
                colors: [0, 1, 2, 3, 4, 10, 11, 12, 13, 14],
                price: 750,
                torso: 3,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }, {
                id: 4,
                name: " Sport Undershirt",
                color: 0,
                colors: [13, 14],
                price: 450,
                torso: 4,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }, {
                id: 5,
                name: " Sport Undershirt",
                color: 0,
                colors: [0, 1, 7, 9],
                price: 450,
                torso: 4,
                undershirt: 15,
                underColor: 0,
                underColors: [0]
            }], this.womanLegs = [{
                id: 0,
                name: "Fit Jeans",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 750
            }, {
                id: 1,
                name: "Wide Jeans",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 1e3
            }], this.womanFeet = [{
                id: 1,
                name: "Shoes",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 800
            }, {
                id: 2,
                name: "Sneakers",
                color: 0,
                colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                price: 550
            }]
        }

        getPrice(e, t, n) {
            return "Hats" === t ? 1885233650 === e.model ? this.manHats[n].price : this.womanHats[n].price : "Glasses" === t ? 1885233650 === e.model ? this.manGlasses[n].price : this.womanGlasses[n].price : "Tops" === t ? 1885233650 === e.model ? this.manTops[n].price : this.womanTops[n].price : "Legs" === t ? 1885233650 === e.model ? this.manLegs[n].price : this.womanLegs[n].price : "Feet" === t ? 1885233650 === e.model ? this.manFeet[n].price : this.womanFeet[n].price : void 0
        }

        setClothes(e, t) {
            e.loggedIn && (1885233650 === e.model ? this.setManClothes(e, t.title, t) : this.setWomanClothes(e, t.title, t))
        }

        setManClothes(e, t, n) {
            "Hats" === t ? e.setProp(0, this.manHats[n.number].id, n.color) : "Glasses" === t ? e.setProp(1, this.manGlasses[n.number].id, n.color) : "Tops" === t ? (e.setClothes(11, this.manTops[n.number].id, n.color, 0), e.setClothes(3, this.manTops[n.number].torso, 0, 0), e.setClothes(8, this.manTops[n.number].undershirt, n.underColor, 0)) : "Legs" === t ? e.setClothes(4, this.manLegs[n.number].id, n.color, 0) : "Feet" === t && e.setClothes(6, this.manFeet[n.number].id, n.color, 0)
        }

        setWomanClothes(e, t, n) {
            "Hats" === t ? e.setProp(0, this.womanHats[n.number].id, n.color) : "Glasses" === t ? e.setProp(1, this.womanGlasses[n.number].id, n.color) : "Tops" === t ? (e.setClothes(11, this.womanTops[n.number].id, n.color, 0), e.setClothes(3, this.womanTops[n.number].torso, 0, 0), e.setClothes(8, this.womanTops[n.number].undershirt, n.underColor, 0)) : "Legs" === t ? e.setClothes(4, this.womanLegs[n.number].id, n.color, 0) : "Feet" === t && e.setClothes(6, this.womanFeet[n.number].id, n.color, 0)
        }

        async saveClothes(e, t) {
            const n = {number: t.number, color: t.color};
            "Hats" === t.title ? await s.query(`UPDATE usersClothes SET hats = '${JSON.stringify(n)}' WHERE id = ${e.guid}`) : "Glasses" === t.title ? await s.query(`UPDATE usersClothes SET glasses = '${JSON.stringify(n)}' WHERE id = ${e.guid}`) : "Tops" === t.title ? (n.underColor = t.underColor, await s.query(`UPDATE usersClothes SET tops = '${JSON.stringify(n)}' WHERE id = ${e.guid}`)) : "Legs" === t.title ? await s.query(`UPDATE usersClothes SET legs = '${JSON.stringify(n)}' WHERE id = ${e.guid}`) : "Feet" === t.title && await s.query(`UPDATE usersClothes SET feet = '${JSON.stringify(n)}' WHERE id = ${e.guid}`)
        }

        async createNewUser(e) {
            let t = {number: 0, color: 0};
            t = JSON.stringify(t);
            let n = {number: 0, color: 0, underColor: 0};
            n = JSON.stringify(n), await s.query(`INSERT INTO usersClothes (id, hats, glasses, tops, legs, feet) VALUES ('${e}', '${t}', '${t}', '${n}', '${t}', '${t}');`)
        }

        async loadPlayerClothes(e) {
            const t = await s.query(`SELECT hats, glasses, tops, legs, feet FROM usersClothes WHERE id = '${e.guid}'`);
            if (t[0].hats) {
                const n = JSON.parse(t[0].hats);
                n.title = "Hats", this.setClothes(e, n)
            }
            if (t[0].glasses) {
                const n = JSON.parse(t[0].glasses);
                n.title = "Glasses", this.setClothes(e, n)
            }
            if (t[0].tops) {
                const n = JSON.parse(t[0].tops);
                n.title = "Tops", this.setClothes(e, n)
            }
            if (t[0].legs) {
                const n = JSON.parse(t[0].legs);
                n.title = "Legs", this.setClothes(e, n)
            }
            if (t[0].feet) {
                const n = JSON.parse(t[0].feet);
                n.title = "Feet", this.setClothes(e, n)
            }
        }
    };
    e.exports = i, mp.events.add({
        "sClothes-SetCloth": (e, t) => {
            const n = JSON.parse(t);
            i.setClothes(e, n)
        }
    })
}, function (e, t, n) {
    const s = n(0), i = [];
    let a = 1;

    function r(e) {
        for (let t = 0; t < i.length; t++) if (i[t].id === e) return i[t]
    }

    e.exports = class {
        constructor() {
            this.id = i.length + 1, i.push(this)
        }

        createBlip(e, t, n, i, a, r) {
            if (s.isValueNumber(e) && s.isValueNumber(n) && s.isValueString(i) && s.isValueNumber(a) && s.isValueNumber(r)) return mp.blips.new(e, new mp.Vector3(t.x, t.y, t.z), {
                shortRange: !0,
                color: n,
                name: i,
                scale: a,
                dimension: r
            })
        }

        createMarker(e, t, n, i, a, r) {
            if (s.isValueNumber(e) && s.isValueNumber(n) && s.isValueNumber(i) && s.isValueNumber(r)) return mp.markers.new(e, new mp.Vector3(t.x, t.y, t.z + n), i, {
                color: a,
                dimension: r
            })
        }

        createDoubleEntrance(e) {
            e.outBlipId && this.createBlip(e.outBlipId, e.outPos, e.outBlipCol, e.outBlipName, e.outBlipScale, e.outPos.dim), e.inBlipId && this.createBlip(e.inBlipId, e.inPos, e.inBlipCol, e.inBlipName, e.inBlipScale, e.inPos.dim);
            const t = mp.colshapes.newSphere(e.outPos.x, e.outPos.y, e.outPos.z, e.outShapeR);
            t.dimension = e.outPos.dim, this.setShapeData(t);
            const n = mp.colshapes.newSphere(e.inPos.x, e.inPos.y, e.inPos.z, e.inShapeR);
            return n.dimension = e.inPos.dim, this.setShapeData(n), e.outMarkerId && this.createMarker(e.outMarkerId, e.outPos, e.outMarkerHeightAdjust, e.outMarkerR, e.outMarkerCol, e.outPos.dim), e.inMarkerId && this.createMarker(e.inMarkerId, e.inPos, e.inMarkerHeightAdjust, e.inMarkerR, e.inMarkerCol, e.outPos.dim), {
                out: t,
                in: n
            }
        }

        createSingleEntrance(e) {
            e.outBlipId && this.createBlip(e.outBlipId, e.outPos, e.outBlipCol, e.outBlipName, e.outBlipScale, e.outPos.dim), e.outMarkerId && this.createMarker(e.outMarkerId, e.outPos, e.outMarkerHeightAdjust, e.outMarkerR, e.outMarkerCol);
            const t = mp.colshapes.newSphere(e.outPos.x, e.outPos.y, e.outPos.z, e.outShapeR);
            return t.dimension = e.outPos.dim, this.setShapeData(t), {out: t}
        }

        setShapeData(e) {
            e.buildingId = this.id, e.entranceId = a, a++
        }
    }, e.exports.getBuilding = r, mp.events.add({
        playerEnterColshape: (e, t) => {
            if (!e.loggedIn || !t.buildingId) return;
            e.canEnter.building = {
                id: t.buildingId,
                entranceId: t.entranceId
            }, r(t.buildingId).enteredBuildingShape(e, t.entranceId)
        }, "sKeys-E": e => {
            if (!e.loggedIn || !e.canEnter.building) return;
            r(e.canEnter.building.id).tryToEnter(e, e.canEnter.building.entranceId)
        }, playerExitColshape: (e, t) => {
            e.loggedIn && t.buildingId && (e.canEnter.building = !1)
        }
    })
}, function (e, t, n) {
    const s = n(25);
    const i = new class {
        constructor() {
        }

        createTransport() {
            this.transporter = s.createTransport({
                service: "gmail",
                auth: {user: "mail@gmail.com", pass: "pass"},
                tls: {rejectUnauthorized: !1}
            }), this.transporter.verify((e, t) => {
                e ? console.log(e) : console.log("EMAIL SERVER READY!")
            })
        }

        getMailAdress() {
            return "Open Source RP server <mail@gmail.com>"
        }

        isEmailValid(e) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
        }

        sendMail(e) {
            this.transporter.sendMail(e, (e, t) => {
                if (e) return console.log(`Error occurred. ${e.message}`), process.exit(1)
            })
        }
    };
    e.exports = i
}, function (e, t, n) {
    const s = n(0), i = n(1);
    const a = new class {
        async createNewUser(e) {
            await s.query(`INSERT INTO usersMoney (id, cash, fines) VALUES ('${e}', '1500', '[]');`)
        }

        async loadUser(e) {
            const t = await s.query(`SELECT * FROM usersMoney WHERE id = '${e.guid}' LIMIT 1`);
            e.money = {
                cash: t[0].cash,
                bank: t[0].bank,
                tax: t[0].tax,
                fines: JSON.parse(t[0].fines)
            }, e.updateCash = function () {
                this.call("cMoney-Update", [this.money.cash])
            }, e.updateCash(), e.changeMoney = async function (e) {
                return !!s.isValueNumber(e) && (this.money.cash + e < 0 ? (this.notify(`~r~${i.get("sMoney", "notEnoughCash", this.lang)}!`), !1) : (await s.query(`UPDATE usersMoney SET cash = cash + ${e} WHERE id = '${this.guid}'`), this.money.cash += e, this.updateCash(), !0))
            }, e.addBankMoney = async function (e, t) {
                !s.isValueNumber(e) || e < 0 || (await s.query(`UPDATE usersMoney SET bank = bank + ${e} WHERE id = '${this.guid}' LIMIT 1`), this.money.bank += e, this.call("cMoney-SendNotification", [`${i.get("sMoney", "addBankMoney", this.lang)}: ~g~$${e}. ~w~${t}`]))
            }, e.payTax = async function (e, t) {
                if (s.isValueNumber(e) && !(e < 0)) return !(e > this.money.tax) && (await s.query(`UPDATE usersMoney SET tax = tax - ${e} WHERE id = '${this.guid}'`), this.money.tax -= e, this.call("cMoney-SendNotification", [`${i.get("sMoney", "payTaxOffline", this.lang)}: ~g~$${e}. ~w~${t}`]), !0)
            }, e.newFine = function (t, n) {
                if (!s.isValueNumber(t) || t < 0) return;
                const a = {date: (new Date).toLocaleString(), val: t, txt: n};
                s.query(`UPDATE usersMoney SET fines = '${JSON.stringify(this.money.fines)}' WHERE id = '${this.guid}'`), this.money.fines.push(a), this.call("cMoney-SendNotification", [`${i.get("sMoney", "newFine", this.lang)}: ~r~$${t}. ~w~${n}`]), s.log.debug(`New fine: ${e.name}, $${t}, ${n}`)
            }
        }

        async addBankMoneyOffline(e, t) {
            await s.query(`UPDATE usersMoney SET bank = bank + ${t} WHERE id = '${e}' LIMIT 1`)
        }

        async payTaxOffline(e, t) {
            const n = await s.query(`SELECT tax FROM usersMoney WHERE id = '${e}' LIMIT 1`);
            return !(!n[0] || t > n[0].tax) && (await s.query(`UPDATE usersMoney SET tax = tax - ${t} WHERE id = '${e}' LIMIT 1`), !0)
        }

        getNearestATM(e) {
            const t = mp.blips.toArray();
            let n = t[0];
            for (const s of t) "ATM" === s.name && s.dist(e) < n.dist(e) && (n = s);
            return n.position
        }
    };
    e.exports = a, mp.events.addCommand({
        givecash: (e, t, n, i) => {
            if (e.adminlvl < 1) return;
            const a = mp.players.at(+n);
            if (!a) return e.outputChatBox("!{200, 0, 0}Player does not exist!");
            a.changeMoney(+i), e.outputChatBox(`!{0, 200, 0}You gave $${+i} to ${a.name}!`), a.outputChatBox(`!{0, 200, 0}${e.name} gave you $${+i}!`), s.log.info(`${e.name} give ${a.name} $${+i}`)
        }
    })
}, function (e, t, n) {
    const s = n(0);
    const i = new class {
        async saveHeadOverlay(e, t) {
            if (t.hairStyle) await s.query(`UPDATE usersHeadOverlay SET hair = '${t.hairStyle}' WHERE id = ${e.guid}`); else if (t.hairCol1 && t.hairCol2) {
                const n = {c1: t.hairCol1, c2: t.hairCol2};
                await s.query(`UPDATE usersHeadOverlay SET hairColor = '${JSON.stringify(n)}' WHERE id = ${e.guid}`)
            } else if (t.browStyle && t.browOp) {
                const n = {s: t.browStyle, o: t.browOp};
                await s.query(`UPDATE usersHeadOverlay SET brow = '${JSON.stringify(n)}' WHERE id = ${e.guid}`)
            } else if (t.beardStyle && t.beardOp) {
                const n = {s: t.beardStyle, o: t.beardOp};
                await s.query(`UPDATE usersHeadOverlay SET beard = '${JSON.stringify(n)}' WHERE id = ${e.guid}`)
            }
        }

        loadUser(e) {
            e.updateHeadOverlay = async function () {
                const e = await s.query(`SELECT * FROM usersHeadOverlay WHERE id = '${this.guid}'`);
                if (e[0].hair && this.setClothes(2, e[0].hair, 0, 0), e[0].hairColor) {
                    const t = JSON.parse(e[0].hairColor);
                    this.setHairColor(t.c1, t.c2)
                }
                if (e[0].brow) {
                    const t = JSON.parse(e[0].brow);
                    this.setHeadOverlay(2, [t.s, t.o, 1, 1])
                }
                if (e[0].beard) {
                    const t = JSON.parse(e[0].beard);
                    this.setHeadOverlay(1, [t.s, t.o, 1, 1])
                }
            }, e.updateHeadOverlay()
        }

        async createNewUser(e) {
            const t = {c1: s.getRandomInt(0, 63), c2: s.getRandomInt(0, 63)}, n = {s: s.getRandomInt(0, 33), o: 0},
                i = {s: s.getRandomInt(0, 28), o: 0};
            await s.query(`INSERT INTO usersHeadOverlay (id, hair, hairColor, brow, beard) VALUES ('${e}', '15', '${JSON.stringify(t)}', '${JSON.stringify(n)}', '${JSON.stringify(i)}');`)
        }
    };
    e.exports = i
}, function (e, t, n) {
    const s = n(0), i = n(1), a = n(15), r = n(26);
    const o = new class {
        constructor() {
            mp.events.add({
                playerStartExitVehicle: e => {
                    e.vehicle.engine && (e.vehicle.engine = !0)
                }, playerEnterVehicle: (e, t, n) => {
                    -1 === n && e.call("cVehicle-setFuel", [t.fuel, t.fuelRate])
                }, playerExitVehicle: (e, t, n) => {
                    e.call("cVehicle-setFuel", [null, 0]), e.call("cVehicle-setLights", [t, 0])
                }, "sVehicle-SetFuel": (e, t, n) => {
                    t.fuel = s.roundNum(n, 3), n <= .1 && (t.engine = !1)
                }, "sKeys-Num0": e => {
                    !e.loggedIn || !e.isDriver() || e.vehicle.fuel <= .1 || (e.vehicle.engine = !e.vehicle.engine)
                }, "sKeys-Num+": e => {
                    if (!e.loggedIn) return;
                    const t = this.getNearestPlayerVehicleInRange(e, 50);
                    t && t.toggleDoorsLock(e)
                }, "sKeys-Num7": e => {
                    e.loggedIn && e.vehicle && e.vehicle.toggleWindow(e, 0)
                }, "sKeys-Num9": e => {
                    e.loggedIn && e.vehicle && e.vehicle.toggleWindow(e, 1)
                }, "sKeys-Num1": e => {
                    e.loggedIn && e.vehicle && e.vehicle.toggleWindow(e, 2)
                }, "sKeys-Num3": e => {
                    e.loggedIn && e.vehicle && e.vehicle.toggleWindow(e, 3)
                }, "sVehicle-SellToGovernment": (e, t) => {
                    mp.vehicles.at(t).sellToGovernment(e)
                }, "sVehicle-SellToPlayer": (e, t) => {
                    this.sellVehicleToPlayer(e, t)
                }, "sVehicle-ConfirmSellVehicleToPlayer": (e, t, n) => {
                    this.confirmSellVehicleToPlayer(e, t, n)
                }, "sVehicle-RejectSellVehicleToPlayer": (e, t) => {
                    this.rejectSellVehicleToPlayer(e, t)
                }
            }), mp.events.addCommand({
                v: (e, t, n) => {
                    if (e.adminlvl < 1) return;
                    if (!n) return e.notify("Model required");
                    const i = {
                        model: n,
                        coord: s.getPlayerCoordJSON(e),
                        id: 0,
                        title: n,
                        fuel: 50,
                        fuelTank: 60,
                        fuelRate: 10,
                        price: 1,
                        ownerId: 0,
                        whoCanOpen: JSON.stringify([e.guid]),
                        factionName: "",
                        numberPlate: this.generateRandomNumberPlate(),
                        primaryColor: JSON.stringify([s.getRandomInt(0, 159), s.getRandomInt(0, 159), s.getRandomInt(0, 159)]),
                        secondaryColor: JSON.stringify([s.getRandomInt(0, 159), s.getRandomInt(0, 159), s.getRandomInt(0, 159)])
                    }, a = new r(i);
                    e.putIntoVehicle(a, -1), s.log.debug(`${e.name} spawned ${n}`)
                }, veh: e => {
                    if (e.health < 5) return;
                    const t = {
                        model: "faggio2",
                        coord: s.getPlayerCoordJSON(e),
                        id: 0,
                        title: "Pegassi Faggio",
                        fuel: 1,
                        fuelTank: 5,
                        fuelRate: 2,
                        price: 1,
                        ownerId: 0,
                        whoCanOpen: JSON.stringify([e.guid]),
                        factionName: "",
                        numberPlate: this.generateRandomNumberPlate(),
                        primaryColor: JSON.stringify([s.getRandomInt(0, 159), s.getRandomInt(0, 159), s.getRandomInt(0, 159)]),
                        secondaryColor: JSON.stringify([s.getRandomInt(0, 159), s.getRandomInt(0, 159), s.getRandomInt(0, 159)])
                    };
                    new r(t), s.log.debug(`${e.name} spawned faggio2`), e.notify(`${i.get("sVehicle", "helpUnlock", e.lang)}`), e.notify(`${i.get("sVehicle", "helpEngine", e.lang)}`)
                }, tp: (e, t, n, s, i) => {
                    e.adminlvl < 1 || (e.position = new mp.Vector3(+n, +s, +i))
                }
            })
        }

        generateRandomNumberPlate() {
            const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let t = "";
            for (let n = 0; n < 8; n++) t += e.charAt(s.getRandomInt(0, e.length));
            return t
        }

        getNearestPlayerVehicleInRange(e, t) {
            const n = [], s = mp.vehicles.toArray();
            for (const i of s) i.dist(e.position) > t || i.canOpen(e) && n.push(i);
            let i = n[0];
            for (const t of n) t.dist(e.position) < i.dist(e.position) && (i = t);
            return i
        }

        async sellVehicleToPlayer(e, t) {
            if (!e.vehicle) return;
            const n = JSON.parse(t), s = mp.players.at(n.passengerId);
            if (!s) return;
            let a = `app.whoName = '${e.name}';`;
            a += `app.whoId = ${e.id};`, a += `app.wantText = '${i.get("sVehicle", "wantsSellVehicleToPlayer", s.lang)} ${e.vehicle.title} | ${e.vehicle.numberPlate}';`, a += `app.price = ${n.price};`, s.call("cMisc-CreateChooseWindow", [s.lang, a, "sVehicle-ConfirmSellVehicleToPlayer", "sVehicle-RejectSellVehicleToPlayer"])
        }

        rejectSellVehicleToPlayer(e, t) {
            const n = mp.players.at(t);
            n && (e.notify(`${i.get("basic", "youRejectedOffer", e.lang)} ${n.name}!`), n.notify(`${e.name} ${i.get("basic", "rejectedYourOffer", n.lang)}!`))
        }

        async confirmSellVehicleToPlayer(e, t, n) {
            const a = mp.players.at(t);
            a && e.vehicle && e.vehicle === a.vehicle && await e.changeMoney(-n) && (await a.changeMoney(n), e.vehicle.ownerId = e.guid, e.vehicle.whoCanOpen = [e.guid], await s.query(`UPDATE vehicles SET ownerId = '${e.guid}', whoCanOpen = '${JSON.stringify([e.guid])}' WHERE id = '${e.vehicle.guid}' LIMIT 1`), a.notify(`~g~${e.name} ${i.get("basic", "confirmedYourOffer", a.lang)}!`), e.notify(`~g~${i.get("basic", "youConfirmedOffer", e.lang)} ${a.name}!`), s.log.debug(`${a.name} sold ${a.vehicle.title}(${a.vehicle.guid}) for $${n} to ${e.name}`))
        }

        getVehiclesForPlayerMenu(e) {
            const t = [], n = mp.vehicles.toArray();
            for (const s of n) {
                if (s.ownerId !== e) continue;
                const n = {
                    id: s.id,
                    title: s.title,
                    number: s.numberPlate,
                    price: s.price,
                    fTank: s.fuelTank,
                    fRate: s.fuelRate
                };
                t.push(n)
            }
            return JSON.stringify(t)
        }

        getPassengersForPlayerMenu(e) {
            if (!e.vehicle) return !1;
            const t = e.vehicle.getOccupants();
            if (t < 2) return !1;
            const n = [];
            for (const s of t) {
                if (s.name === e.name) continue;
                const t = {id: s.id, name: s.name};
                n.push(t)
            }
            return JSON.stringify(n)
        }

        async saveNewCar(e, t, n, i = !1) {
            const o = a.getData(t);
            i || (i = [s.getRandomInt(0, 255), s.getRandomInt(0, 255), s.getRandomInt(0, 255)]);
            const l = t, c = o.title, h = o.fuelTank, u = o.fuelTank, d = o.fuelRate, g = o.price, p = e.guid,
                m = JSON.stringify([e.guid]), y = JSON.stringify(i), f = JSON.stringify(i),
                b = this.generateRandomNumberPlate();
            await s.query(`INSERT INTO vehicles \n\t\t\t(model, title, fuel, fuelTank, fuelRate, price, ownerId, whoCanOpen, primaryColor, secondaryColor, numberPlate, coord) VALUES\n\t\t\t('${l}', '${c}', '${h}', '${u}', '${d}', '${g}', '${p}', '${m}', '${y}', '${f}', '${b}', '${n}')`);
            const C = await s.query(`SELECT * FROM vehicles WHERE ownerId = '${e.guid}' ORDER BY id DESC LIMIT 1`);
            new r(C[0])
        }

        savePlayerVehicles(e) {
            const t = mp.vehicles.toArray();
            for (const n of t) {
                if (n.ownerId !== e) continue;
                const t = {
                    x: s.roundNum(n.position.x, 1),
                    y: s.roundNum(n.position.y, 1),
                    z: s.roundNum(n.position.z, 1),
                    rot: s.roundNum(n.rotation.z, 1),
                    dim: n.dimension
                }, i = n.fuel, a = n.guid;
                s.query(`UPDATE vehicles SET coord = '${JSON.stringify(t)}', fuel = '${i}' WHERE id = '${a}'`)
            }
        }

        async loadPlayerVehicles(e) {
            const t = await s.query(`SELECT * FROM vehicles WHERE ownerId = '${e}'`);
            for (const e of t) new r(e)
        }

        async loadFactionVehicles(e) {
            const t = await s.query(`SELECT * FROM vehicles WHERE factionName = '${e}'`);
            for (const e of t) new r(e)
        }
    };
    e.exports = o
}, function (e, t, n) {
    const s = n(0), i = n(4), a = n(1), r = n(9), o = [];
    e.exports = class {
        constructor(e) {
            this.name = e, this.maxRank = 10, r.loadFactionVehicles(this.name), o.push(this)
        }

        createEvents() {
            mp.events.addCommand({
                invite: async (e, t) => {
                    this.invite(e, +t)
                }, setrank: async (e, t, n, s) => {
                    this.setRank(e, +n, +s)
                }, uninvite: async (e, t) => {
                    this.uninvite(e, +t)
                }
            }), mp.events.add({
                playerEnterColshape: (e, t) => {
                    e.loggedIn && this.isInThisFaction(e) && t === this.clothingShape && (e.faction.canChangeClothes = !0, e.notify(`${a.get("basic", "pressE", e.lang)} ${a.get("sFaction", "changeClothes", e.lang)}`))
                }, playerExitColshape: (e, t) => {
                    e.loggedIn && this.isInThisFaction(e) && t === this.clothingShape && (e.faction.canChangeClothes = !1)
                }, "sKeys-E": e => {
                    e.loggedIn && this.isInThisFaction(e) && e.faction.canChangeClothes && this.changeClothes(e)
                }
            })
        }

        createClothingShape(e) {
            this.clothingShape = mp.colshapes.newSphere(e.x, e.y, e.z, 1), this.clothingMarker = mp.markers.new(1, new mp.Vector3(e.x, e.y, e.z - 1), .75, {
                color: [255, 255, 0, 15],
                visible: !1
            })
        }

        savePlayerData(e) {
            e && s.query(`UPDATE usersFaction SET name = '${e.faction.name}', rank = '${e.faction.rank}', info = '${JSON.stringify(e.faction.info)}' WHERE id = '${e.guid}'`)
        }

        updateClothingMarker(e) {
            this.isInThisFaction(e) ? this.clothingMarker.showFor(e) : this.clothingMarker.hideFor(e)
        }

        changeClothes(e) {
            if (this.isWorking(e)) return this.setWorking(e, !1), i.loadPlayerClothes(e);
            this.setWorking(e, !0), 1885233650 === e.model ? this.changeClothesMan(e) : this.changeClothesWoman(e)
        }

        isInThisFaction(e) {
            return !(!e.faction || e.faction.name !== this.name)
        }

        isInOtherFaction(e) {
            return !(!e.faction.name || e.faction.name === this.name)
        }

        isDistanceRight(e, t, n = !1) {
            const s = e.dist(t.position);
            return !!(s && s < 2) || (e.notify(`~r~${t.name} ${a.get("basic", "tooFarAway", e.lang)}!`), n && t.notify(`~r~${e.name} ${a.get("basic", "tooFarAway", t.lang)}!`), !1)
        }

        isWorking(e) {
            return !!e.faction.working
        }

        setWorking(e, t) {
            e.faction.working = t
        }

        getRank(e) {
            if (this.isInThisFaction(e)) return e.faction.rank
        }

        setRank(e, t, n) {
            if (!s.isValueNumber(t) || !s.isValueNumber(n) || !this.isInThisFaction(e) || this.getRank(e) < 9) return;
            const i = mp.players.at(t);
            i && this.isInThisFaction(i) && this.isDistanceRight(e, i) && (i.faction.rank = n, this.savePlayerData(i), e.outputChatBox(`!{0, 225, 0}${a.get("sFaction", "setNewRank", e.lang)} ${i.name}: ${n}`), i.outputChatBox(`!{0, 225, 0}${e.name} ${a.get("sFaction", "changedYourRank", i.lang)} ${n}`), s.log.debug(`${e.name} sets ${i.name} rank to ${n}`))
        }

        invite(e, t) {
            if (!s.isValueNumber(t) || !this.isInThisFaction(e) || this.getRank(e) < 9) return;
            const n = mp.players.at(t);
            n && this.isDistanceRight(e, n) && !this.isInOtherFaction(n) && (n.faction = {
                name: this.name,
                rank: 1,
                info: !1
            }, this.savePlayerData(n), n.outputChatBox(`!{0, 225, 0}${e.name} ${a.get("sFaction", "invited", n.lang)} ${this.name}`), e.notify(`~g~${a.get("basic", "success", e.lang)}!`), this.updateClothingMarker(n), s.log.debug(`${e.name} invited ${n.name} to ${this.name}`))
        }

        setAsLeader(e, t) {
            if (e.adminlvl < 1) return;
            const n = mp.players.at(t);
            n && (n.faction = {
                name: this.name,
                rank: 10,
                info: !1
            }, this.savePlayerData(n), n.outputChatBox(`!{0, 225, 0}${a.get("sFaction", "leader", n.lang)} ${this.name}`), this.updateClothingMarker(n), e.notify(`~g~${a.get("basic", "success", e.lang)}!`), s.log.debug(`${e.name} sets ${n.name} as a ${this.name} leader`))
        }

        uninvite(e, t) {
            if (!s.isValueNumber(t) || !this.isInThisFaction(e) || this.getRank(e) < 9) return;
            const n = mp.players.at(t);
            n && this.isInThisFaction(n) && (n.faction = {name: !1}, this.savePlayerData(n), s.query(`UPDATE faction SET name = NULL WHERE id = '${n.basic.id}'`), n.outputChatBox(`!{225, 0, 0}${e.name} ${a.get("sFaction", "uninvited", n.lang)} ${this.name}`), e.notify(`~g~${a.get("basic", "success", e.lang)}!`), this.updateClothingMarker(n), i.loadPlayerClothes(n), s.log.debug(`${e.name} uninvited ${n.name} from ${this.name}`))
        }

        updateLastOfferTime(e) {
            e.faction.lastOfferTime = (new Date).getTime()
        }

        getLastOfferTime(e) {
            return e.faction.lastOfferTime
        }

        setCurrentClient(e, t) {
            if (!this.isInThisFaction(e) || !this.isWorking(e)) return !1;
            const n = (new Date).getTime(), s = this.getLastOfferTime(e), i = ((n - s) / 1e3).toFixed();
            return s && i < 60 ? (e.notify(`${a.get("basic", "wait", e.lang)} ${60 - i} ${a.get("basic", "seconds", e.lang)}`), !1) : (this.updateLastOfferTime(e), e.faction.currentClient = t.id, t.faction.currentSeller = e.id, !0)
        }

        getCurrentClient(e) {
            return e.faction.currentClient
        }

        getCurrentSeller(e) {
            return e.faction.currentSeller
        }

        resetCurrentClient(e) {
            e.faction.currentClient = !1
        }

        resetCurrentSeller(e) {
            e.faction.currentSeller = !1
        }

        isSellerClientRight(e, t) {
            const n = this.getCurrentSeller(t), s = this.getCurrentClient(e);
            return e.id === n && t.id === s
        }
    }, e.exports.createNewUser = async function (e) {
        await s.query(`INSERT INTO usersFaction (id, info) VALUES ('${e}', '[]')`)
    }, e.exports.loadUser = async function (e) {
        const t = await s.query(`SELECT * FROM usersFaction WHERE id = '${e.guid}' LIMIT 1`);
        e.faction = {name: t[0].name, rank: t[0].rank, info: JSON.parse(t[0].info), working: !1};
        for (const t of o) if (t.isInThisFaction(e)) return t.updateClothingMarker(e)
    }
}, function (e, t, n) {
    const s = n(1), i = n(5), a = n(0);
    e.exports = class extends i {
        constructor(e, t) {
            super(), this.garage = e, this.lift = t, this.createGarage()
        }

        createGarage() {
            this.mainEnter = super.createSingleEntrance(this.garage.basic), this.createCheckShape(this.garage.topExit, this.garage.topExit.dim);
            let e = this.createEntranceShape(this.lift.topEntrance, this.lift.topEntrance.dim);
            this.lift.shapesList.push(e);
            for (let t = this.garage.basic.startDim; t < this.garage.basic.startDim + this.garage.basic.floors; t++) {
                const n = this.createEntranceShape(this.garage.undergroundExit, t);
                this.garage.shapesList.push(n), this.createCheckShape(this.garage.undergroundCheckCoord, t), e = this.createEntranceShape(this.lift.undergroundEntrance, t), this.lift.shapesList.push(e)
            }
        }

        createEntranceShape(e, t) {
            const n = {outPos: {x: e.x, y: e.y, z: e.z, rot: e.rot, dim: t}, outShapeR: e.r};
            return super.createSingleEntrance(n).out
        }

        createCheckShape(e, t) {
            const n = mp.colshapes.newSphere(e.x, e.y, e.z, e.r);
            return n.dimension = t, this.garage.checkShapesList.push(n), n
        }

        enteredBuildingShape(e, t) {
            if (t === this.mainEnter.out.entranceId) {
                if (!e.isDriver()) return;
                e.notify(`${s.get("basic", "pressE", e.lang)} ${s.get("basic", "toEnterGarage", e.lang)}`)
            } else if (this.isExitShapeValid(this.garage.shapesList, t)) {
                if (!e.isDriver()) return;
                e.notify(`${s.get("basic", "pressE", e.lang)} ${s.get("basic", "toExitGarage", e.lang)}`)
            } else this.isExitShapeValid(this.lift.shapesList, t) && e.notify(`${s.get("basic", "pressE", e.lang)} ${s.get("basic", "toCallLift", e.lang)}`)
        }

        isExitShapeValid(e, t) {
            for (let n = 0; n < e.length; n++) if (e[n].entranceId === t) return !0;
            return !1
        }

        isCheckShapeClear(e, t) {
            const n = mp.vehicles.toArray();
            for (const i of n) if (t.isPointWithin(i.position) && t.dimension === i.dimension) return e.notify(`~r~${s.get("basic", "someVehicleIsBlocking", e.lang)}!`), !1;
            const i = mp.players.toArray();
            for (const n of i) if (t.isPointWithin(n.position) && t.dimension === n.dimension) return e.notify(`~r~${s.get("basic", "somePlayerIsBlocking", e.lang)}!`), !1;
            return !0
        }

        getGarageEnterPos(e) {
            if (!a.isValueNumber(e)) return !1;
            const t = this.garage.undergroundCheckCoord;
            return t.dim = this.garage.basic.startDim + Math.abs(e) - 1, t.checkShape = this.garage.checkShapesList[Math.abs(e)], t
        }

        getLiftEnterPos(e) {
            if (!a.isValueNumber(e)) return;
            let t;
            return 0 === e ? (t = this.lift.topEntrance, t.dim = 0) : (t = this.lift.undergroundEntrance, t.dim = this.garage.basic.startDim + Math.abs(e) - 1), t
        }

        tryToEnter(e, t) {
            if (t === this.mainEnter.out.entranceId) return this.showGarageMenu(e);
            if (this.isExitShapeValid(this.garage.shapesList, t)) {
                if (!this.isCheckShapeClear(e, this.garage.checkShapesList[0])) return;
                e.tpWithVehicle(this.garage.topExit)
            } else if (this.isExitShapeValid(this.lift.shapesList, t)) return this.showLiftMenu(e)
        }

        enterGarage(e, t) {
            const n = this.getGarageEnterPos(t);
            this.isCheckShapeClear(e, n.checkShape) && e.tpWithVehicle(n)
        }

        enterLift(e, t) {
            const n = this.getLiftEnterPos(t);
            e.tp(n)
        }

        showGarageMenu(e) {
            if (!e.isDriver()) return;
            let t = `app.id = ${this.id};`;
            t += `app.title = '${this.garage.basic.outBlipName}';`, t += `app.css = '${this.garage.basic.outBlipName.replace(/\s+/g, "")}.css';`, e.call("cGarage-ShowVisitorsGarageMenu", [e.lang, t, JSON.stringify(this.garage.basic.camData)])
        }

        showLiftMenu(e) {
            if (e.isDriver()) return;
            let t = `app.id = ${this.id};`;
            t += `app.title = '${this.garage.basic.outBlipName}';`, t += `app.css = '../Garage/${this.garage.basic.outBlipName.replace(/\s+/g, "")}.css';`, e.call("cGarage-ShowVisitorsLiftMenu", [e.lang, t])
        }
    }, mp.events.add({
        "sGarage-EnterVisitorsGarage": (e, t, n) => {
            i.getBuilding(t).enterGarage(e, n)
        }, "sGarage-EnterFloorByVisitorsLift": (e, t, n) => {
            i.getBuilding(t).enterLift(e, n)
        }
    })
}, function (e, t, n) {
    const s = n(0), i = n(4), a = n(1), r = [];

    function o(e) {
        for (const t of r) if (t.name === e) return t
    }

    e.exports.getJobByName = o, mp.events.add({
        playerEnterColshape: (e, t) => {
            if (!e.loggedIn || e.vehicle) return;
            if (!t.job) return;
            e.canOpen.job = t.job, o(e.canOpen.job).enteredMainShape(e)
        }, playerExitColshape: (e, t) => {
            t.job && (e.canOpen.job = !1)
        }, "sKeys-E": e => {
            if (!e.loggedIn || !e.canOpen.job) return;
            if (e.job.name && e.job.name !== e.canOpen.job) return e.notify(`~r~${a.get("basic", "workingOnOtherJob", e.lang)}!`);
            o(e.canOpen.job).pressedKeyOnMainShape(e)
        }
    });
    e.exports = class {
        constructor(e) {
            this.name = e.name, this.mainMenu = {
                x: e.x,
                y: e.y,
                z: e.z,
                rot: e.rot,
                dim: e.dim
            }, this.createMainEntities(), this.setLocalSettings(), r.push(this)
        }

        createMainEntities() {
            this.marker = mp.markers.new(1, new mp.Vector3(this.mainMenu.x, this.mainMenu.y, this.mainMenu.z - 1), .75, {
                color: [0, 255, 0, 100],
                visible: !0
            }), this.mainShape = mp.colshapes.newSphere(this.mainMenu.x, this.mainMenu.y, this.mainMenu.z, 1), this.mainShape.job = this.name, this.blip = mp.blips.new(514, new mp.Vector3(this.mainMenu.x, this.mainMenu.y, this.mainMenu.z), {
                name: this.name,
                shortRange: !0,
                scale: .7,
                color: 17
            })
        }

        enteredMainShape(e) {
            e.notify(`${a.get("basic", "pressEToOpenMenu", e.lang)}`)
        }

        startWork(e) {
            e.outputChatBox(`!{0, 200, 0}${a.get("sJob", "start", e.lang)} ${this.name}`), 1885233650 === e.model ? this.setWorkingClothesForMan(e) : this.setWorkingClothesForWoman(e), s.log.debug(`${e.name} started works as ${this.name}`)
        }

        setWorkingClothesForMan(e) {
        }

        setWorkingClothesForWoman(e) {
        }

        finishWork(e) {
            e.job = {}, e.outputChatBox(`!{200, 0, 0}${a.get("sJob", "finish", e.lang)} ${this.name}`), s.log.debug(`${e.name} finished works as ${this.name}`), i.loadPlayerClothes(e)
        }

        isPlayerWorksHere(e) {
            return !(!e.job.name || e.job.name !== this.name)
        }

        isPlayerWorksOnOtherJob(e) {
            return !(!e.job.name || e.job.name === this.name)
        }
    }
}, function (e, t, n) {
    const s = n(0), i = n(1), a = n(7), r = n(14), o = n(4), l = n(8), c = n(9), h = n(10), u = n(27), d = n(16);
    const g = new class {
        async createNewUser(e, t, n, i, a) {
            await s.query(`INSERT INTO users \n        (email, firstName, lastName, password, ip, regdate, position, socialclub) VALUES \n        ('${t}', '${n}', '${i}', '${a}', '${e.ip}', '${(new Date).toLocaleString()}', '${JSON.stringify({
                x: -164,
                y: 6426,
                z: 32,
                rot: 48,
                dim: 0
            })}', '${e.socialClub}')`), s.log.debug(`New Account: ${t} | ${n} ${i}`)
        }

        async loadAccount(e, t) {
            const n = await s.query(`SELECT * FROM users WHERE id = '${t}' LIMIT 1`);
            e.loggedIn = !0, e.guid = n[0].id, e.email = n[0].email, e.firstName = n[0].firstName, e.lastName = n[0].lastName, e.adminlvl = n[0].adminlvl, e.lang = n[0].lang, e.loyality = n[0].loyality, e.updateName(), e.tp(JSON.parse(n[0].position)), e.health = n[0].health, e.call("cCloseCefAndDestroyCam");
            const i = a.loadUser(e), g = r.loadPlayerBody(e), p = o.loadPlayerClothes(e), m = l.loadUser(e),
                y = c.loadPlayerVehicles(e.guid), f = h.loadUser(e), b = u.loadUser(e), C = d.loadUser(e);
            await Promise.all([i, g, p, m, y, f, b, C]), s.log.debug(`${e.name} logged in`)
        }

        saveAccount(e) {
            e.saveBasicData(), c.savePlayerVehicles(e.guid), d.savePlayerAccount(e)
        }

        loadPlayerTemplate(e) {
            e.loggedIn = !1, e.lang = "eng", e.guid = !1, e.email = !1, e.firstName = !1, e.lastName = !1, e.loyality = 0, e.adminlvl = 0, e.faction = {}, e.canOpen = {}, e.canEnter = {}, e.job = {}, e.updateName = function () {
                this.name = `${this.firstName} ${this.lastName}`
            }, e.tp = function (e) {
                this.position = new mp.Vector3(e.x, e.y, e.z), this.heading = e.rot, this.dimension = 0, e.dim && (this.dimension = e.dim)
            }, e.tpWithVehicle = function (e) {
                this.isDriver() && this.vehicle && (this.vehicle.position = new mp.Vector3(e), this.heading = e.rot, this.vehicle.dimension = e.dim)
            }, e.getCurrentPos = function (e = 0) {
                return {
                    x: s.roundNum(this.position.x, 1),
                    y: s.roundNum(this.position.y, 1),
                    z: s.roundNum(this.position.z + e, 1),
                    rot: s.roundNum(this.heading, 1),
                    dim: this.dimension
                }
            }, e.addLoyality = function (e) {
                0 !== (e = s.roundNum(e)) && (this.loyality += e, this.showLoyalityNotification(e))
            }, e.removeLoyality = function (e) {
                e = s.roundNum(e), this.loyality -= e, this.loyality < 0 && (this.loyality = 0), this.showLoyalityNotification(-e)
            }, e.showLoyalityNotification = function (e) {
                let t = "";
                e > 0 && (t = "+"), this.notify(`${i.get("sLoyality", "loyality", this.lang)} ~b~${t}${e}`)
            }, e.saveBasicData = function () {
                const e = this.getCurrentPos(.1);
                s.query(`UPDATE users SET ip = '${this.ip}', logdate = '${(new Date).toLocaleString()}', position = '${JSON.stringify(e)}', health = '${this.health}', loyality = '${this.loyality}' WHERE id = '${this.guid}'`)
            }, e.isDriver = function () {
                return !(!this.vehicle || -1 !== this.seat)
            }
        }
    };
    e.exports = g, mp.events.addCommand({
        save: e => {
            e.loggedIn && (g.saveAccount(e), e.outputChatBox(`${i.get("sLogin", "saveGame", e.lang)}`))
        }, pos: e => {
            if (e.adminlvl < 1) return;
            const t = e.position;
            let n;
            n = e.vehicle ? e.vehicle.rotation.z : e.heading;
            const i = `x: ${s.roundNum(t.x, 3)}, y: ${s.roundNum(t.y, 3)}, z: ${s.roundNum(t.z, 3)}, rot: ${s.roundNum(n, 2)}`;
            e.outputChatBox(i), s.log.debug(i)
        }
    }), mp.events.add("playerStartEnterVehicle", (function (e) {
        e.loggedIn && (g.saveAccount(e), e.notifyWithPicture("System", "Account Saving", "~g~Your Account was saved.", "CHAR_BLOCKED"))
    })), mp.events.add("playerExitVehicle", (function (e) {
        e.loggedIn && (g.saveAccount(e), e.notifyWithPicture("System", "Account Saving", "~g~Your Account was saved.", "CHAR_BLOCKED"))
    }))
}, function (e, t, n) {
    const s = n(0), i = n(4), a = n(8);
    const r = new class {
        constructor() {
            this.dimension = 2, mp.events.add({
                "sCharCreator-ChangeGender": async (e, t) => {
                    e.model = 0 === t ? 1885233650 : -1667301416;
                    const n = i.loadPlayerClothes(e), s = a.loadUser(e);
                    await Promise.all([n, s])
                }, "sCharCreator-SaveSkinOptions": (e, t) => {
                    s.query(`UPDATE usersBody SET skindata = '${t}' WHERE id = '${e.guid}'`)
                }, "sCharCreator-SaveFaceOptions": async (e, t) => {
                    let n = "w";
                    1885233650 === e.model && (n = "m"), await s.query(`UPDATE usersBody SET gender = '${n}', facedata = '${t}' WHERE id = '${e.guid}'`);
                    const r = this.loadPlayerBody(e), o = i.loadPlayerClothes(e), l = a.loadUser(e);
                    await Promise.all([r, o, l]);
                    e.tp({x: -164, y: 6426, z: 32, rot: 48, dim: 0})
                }
            })
        }

        changeDimenstion() {
            this.dimension++, 500 === this.dimension && (this.dimension = 2)
        }

        openMenu(e) {
            e.model = 1885233650, e.position = new mp.Vector3(402.55, -996.37, -99.01), e.heading = 180, e.dimension = this.dimension, this.changeDimenstion(), e.call("cCharCreator-OpenMenu")
        }

        async createNewUser(e) {
            await s.query(`INSERT INTO usersBody (id, gender) VALUES ('${e}', NULL);`)
        }

        async loadPlayerBody(e) {
            const t = await s.query(`SELECT * FROM usersBody WHERE id = '${e.guid}'`);
            if (!t[0].gender) return this.openMenu(e);
            "m" === t[0].gender ? e.model = 1885233650 : "w" === t[0].gender && (e.model = 2147483647), this.setBody(e, t[0].skindata), this.setFace(e, t[0].facedata)
        }

        setBody(e, t) {
            if (!s.isValueString(t)) return s.log.error(`sCharacterCreator-setBody | str is not a string: ${t}`);
            const n = JSON.parse(t);
            e.setHeadBlend(n[0], n[1], 0, n[2], 0, 0, n[3], 0, 0)
        }

        setFace(e, t) {
            if (!s.isValueString(t)) return s.log.error(`sCharacterCreator-setFace | str is not a string: ${t}`);
            const n = JSON.parse(t);
            for (let t = 0; t < 20; t++) e.setFaceFeature(t, n[t])
        }
    };
    e.exports = r
}, function (e, t) {
    const n = new class {
        constructor() {
            this.vehicles = [{
                model: "peyote",
                title: "Vapid Peyote",
                fuelTank: 45,
                fuelRate: 11,
                price: 2e4
            }, {model: "emperor2", title: "Albany Emperor", fuelTank: 60, fuelRate: 16, price: 2e4}, {
                model: "dloader",
                title: "Bravado Duneloader",
                fuelTank: 80,
                fuelRate: 25,
                price: 2e4
            }, {
                model: "dilettante",
                title: "Karin Dilettante",
                fuelTank: 40,
                fuelRate: 2,
                price: 25e3
            }, {model: "tornado3", title: "Declasse Tornado", fuelTank: 50, fuelRate: 11, price: 25e3}, {
                model: "panto",
                title: "Benefactor Panto",
                fuelTank: 40,
                fuelRate: 4,
                price: 3e4
            }, {
                model: "tornado4",
                title: "Declasse Tornado",
                fuelTank: 50,
                fuelRate: 11,
                price: 3e4
            }, {model: "bfinjection", title: "BF Injection", fuelTank: 45, fuelRate: 8, price: 3e4}, {
                model: "issi2",
                title: "Weeny Issi",
                fuelTank: 50,
                fuelRate: 7,
                price: 4e4
            }, {model: "moonbeam", title: "Declasse Moonbeam", fuelTank: 70, fuelRate: 25, price: 4e4}, {
                model: "rebel",
                title: "Karin Rebel",
                fuelTank: 65,
                fuelRate: 18,
                price: 4e4
            }, {model: "blista", title: "Dinka Blista", fuelTank: 45, fuelRate: 6, price: 45e3}, {
                model: "brioso",
                title: "Grotti Brioso R/A",
                fuelTank: 40,
                fuelRate: 5,
                price: 5e4
            }, {model: "voodoo2", title: "Declasse Voodoo", fuelTank: 55, fuelRate: 16, price: 5e4}, {
                model: "prairie",
                title: "Bollokan Prairie",
                fuelTank: 55,
                fuelRate: 9,
                price: 5e4
            }, {
                model: "rhapsody",
                title: "DeClasse Rhapsody",
                fuelTank: 50,
                fuelRate: 7,
                price: 55e3
            }, {model: "rebel2", title: "Karin Rebel", fuelTank: 65, fuelRate: 17, price: 55e3}, {
                model: "regina",
                title: "Dundreary Regina",
                fuelTank: 45,
                fuelRate: 7,
                price: 6e4
            }, {model: "bifta", title: "BF Bifta", fuelTank: 40, fuelRate: 6, price: 65e3}, {
                model: "emperor",
                title: "Albany Emperor",
                fuelTank: 60,
                fuelRate: 15,
                price: 65e3
            }, {model: "ingot", title: "Vulcar Ingot", fuelTank: 60, fuelRate: 9, price: 7e4}, {
                model: "pigalle",
                title: "Lampadati Pigalle",
                fuelTank: 55,
                fuelRate: 12,
                price: 7e4
            }, {model: "tornado", title: "Declasse Tornado", fuelTank: 50, fuelRate: 10, price: 7e4}, {
                model: "slamvan",
                title: "Vapid Slamvan",
                fuelTank: 60,
                fuelRate: 20,
                price: 8e4
            }, {model: "blade", title: "Vapid Blade", fuelTank: 65, fuelRate: 20, price: 8e4}, {
                model: "tornado2",
                title: "Declasse Tornado",
                fuelTank: 50,
                fuelRate: 10,
                price: 8e4
            }, {
                model: "tornado5",
                title: "Declasse Tornado Custom",
                fuelTank: 55,
                fuelRate: 10,
                price: 9e4
            }, {
                model: "buccaneer",
                title: "Albany Buccaneer",
                fuelTank: 75,
                fuelRate: 35,
                price: 13e4
            }, {model: "surge", title: "Cheval Surge", fuelTank: 20, fuelRate: 3, price: 13e4}, {
                model: "serrano",
                title: "Benefactor Serrano",
                fuelTank: 50,
                fuelRate: 12,
                price: 135e3
            }, {
                model: "glendale",
                title: "Benefactor Glendale",
                fuelTank: 60,
                fuelRate: 10,
                price: 135e3
            }, {model: "faction", title: "Willard Faction", fuelTank: 70, fuelRate: 25, price: 14e4}, {
                model: "asea",
                title: "DeClasse Asea",
                fuelTank: 45,
                fuelRate: 8.5,
                price: 14e4
            }, {model: "radi", title: "Vapid Radius", fuelTank: 50, fuelRate: 13, price: 145e3}, {
                model: "chino",
                title: "Vapid Chino",
                fuelTank: 75,
                fuelRate: 35,
                price: 15e4
            }, {
                model: "voodoo",
                title: "Declasse Voodoo Custom",
                fuelTank: 55,
                fuelRate: 15,
                price: 15e4
            }, {model: "asterope", title: "Karin Asterope", fuelTank: 45, fuelRate: 9, price: 15e4}, {
                model: "primo",
                title: "Albany Primo",
                fuelTank: 50,
                fuelRate: 9,
                price: 15e4
            }, {model: "manana", title: "Albany Manana", fuelTank: 60, fuelRate: 14, price: 15e4}, {
                model: "mule",
                title: "Maibatsu Mule",
                fuelTank: 160,
                fuelRate: 20,
                price: 25e3
            }, {model: "mule2", title: "Maibatsu Mule 2", fuelTank: 200, fuelRate: 25, price: 5e4}, {
                model: "mule3",
                title: "Maibatsu Mule 3",
                fuelTank: 200,
                fuelRate: 28,
                price: 75e3
            }, {model: "mule4", title: "Maibatsu Mule Custom", fuelTank: 250, fuelRate: 30, price: 15e4}]
        }

        getPrice(e) {
            for (let t = 0; t < this.vehicles.length; t++) if (e === this.vehicles[t].model) return this.vehicles[t].price;
            return !1
        }

        getData(e) {
            for (let t = 0; t < this.vehicles.length; t++) if (e === this.vehicles[t].model) return this.vehicles[t];
            return !1
        }
    };
    e.exports = n
}, function (e, t, n) {
    const s = n(0), i = n(4), a = n(30);
    const r = new class {
        constructor() {
            mp.events.add({
                playerDeath: (e, t, n) => {
                    n && e !== n && n.addViolation(5, "You killed a civilian")
                }
            })
        }

        async createNewUser(e) {
            await s.query(`INSERT INTO usersJail (id, violations) VALUES ('${e}', '${JSON.stringify([])}')`)
        }

        async loadUser(e) {
            const t = await s.query(`SELECT * FROM usersJail WHERE id = '${e.guid}' LIMIT 1`);
            e.jail = {
                inside: t[0].inside,
                time: t[0].time,
                violations: JSON.parse(t[0].violations)
            }, e.isWanted = function () {
                return this.jail.violations.length > 0
            }, e.updateWantedLevel = function () {
                this.isWanted() ? this.call("cPrison-SetWantedLevel", [5]) : this.call("cPrison-SetWantedLevel", [0])
            }, e.updateWantedLevel(), e.addViolation = function (e, t) {
                if (!this.loggedIn) return;
                const n = {time: e, comment: t};
                this.jail.violations.push(n), this.call("cPrison-SendNotification", [`${t} | ${e} min`]), this.updateWantedLevel(), s.log.debug(`${this.name} get new violation: ${t} | ${e}`)
            }, e.startJail = function () {
                if (0 === this.jail.violations.length) return this.notify("You have no violations!");
                e.tp(a.secondEntranceData.inPos);
                let t = 0;
                for (const e of this.jail.violations) this.outputChatBox(`${e.text} | ${e.time} minutes`), t += e.time;
                this.outputChatBox(`Total time: !{225, 0, 0}${t} minutes`), this.jail.inside = 1, this.jail.time = t, this.jail.violations = [], 1885233650 === this.model ? r.setManClothes(e) : r.setWomanClothes(e), s.log.debug(`${this.name} start jail. Time ${t} m`)
            }, e.jailEvent = function () {
                if (!this.jail.inside) return;
                return this.dist(new mp.Vector3(1689, 2529, 45.5)) > 280 ? r.escapeEvent(e) : (this.jail.time -= 1, 0 === this.jail.time ? this.endJail() : (this.notify(`Remaining time: ~r~${this.jail.time} minutes`), void s.log.debug(`${this.name} jail remaining time: ${this.jail.time} m`)))
            }, e.endJail = function () {
                this.position = new mp.Vector3(1792.563, 2593.779, 45.796), this.heading = 263.45, this.jail.inside = 0, this.outputChatBox("!{0, 225, 0}Now you are free!"), this.updateWantedLevel(), i.loadPlayerClothes(this), s.log.debug(`${this.name} ended jail`)
            }
        }

        escapeEvent(e) {
            e.addViolation(3 * e.jail.time, "Escape"), e.jail.inside = 0, e.jail.time = 0
        }

        setManClothes(e) {
            e.setClothes(11, 5, 0, 0), e.setClothes(3, 5, 0, 0), e.setClothes(8, 5, 0, 0), e.setClothes(4, 3, 7, 0), e.setClothes(6, 5, 0, 0)
        }

        setWomanClothes(e) {
            e.setClothes(11, 5, 0, 0), e.setClothes(3, 4, 0, 0), e.setClothes(8, 5, 0, 0), e.setClothes(4, 3, 15, 0), e.setClothes(6, 5, 0, 0)
        }

        savePlayerAccount(e) {
            s.query(`UPDATE usersJail SET inside = '${e.jail.inside}', time = '${e.jail.time}', violations = '${JSON.stringify(e.jail.violations)}' WHERE id = '${e.guid}'`)
        }
    };
    e.exports = r
}, function (e, t, n) {
    const s = n(18), i = n(0), a = n(6);
    e.exports = class {
        showError(e, t) {
            e.call("cInjectCef", [`app.showError('${t}');`])
        }

        sendCode(e, t) {
            const n = i.getRandomInt(100, 999);
            e.verificationCode = n, e.verificationDate = (new Date).getTime(), e.verificationCodeTries = 0;
            const s = {
                from: `${a.getMailAdress()}`,
                to: `${t}`,
                subject: `Verification code: ${n}`,
                text: `Hello! Your verification code is: ${n}`,
                html: `<b>Hello!</b><br>Your verification code is: ${n}`
            };
            a.sendMail(s), e.call("cInjectCef", ["app.showInfo('Please check your mailbox!');"])
        }

        hashPassword(e) {
            const t = s.createCipher("aes192", "a pass");
            let n = t.update(e, "utf8", "hex");
            return n += t.final("hex"), n
        }

        canCheckCode(e) {
            return e.verificationCodeTries < 5 || (this.showError(e, "Too many wrong codes"), e.loggedIn = !1, i.log.warn(`${e.socialClub} too many wrong codes`), e.kick("You tried wrong codes for too many times."), !1)
        }

        checkCode(e, t) {
            return !!this.canCheckCode(e) && (e.verificationCode === t || (e.verificationCodeTries++, this.showError(e, "Wrong code!"), !1))
        }
    }
}, function (e, t) {
    e.exports = require("crypto")
}, function (e, t, n) {
    const s = n(3), i = n(0), a = n(9), r = n(15), o = n(1);
    e.exports = class extends s {
        constructor(e) {
            super(e), this.newCarCoord = e.newCarCoord
        }

        async buyNewCar(e, t) {
            const n = r.getPrice(t);
            if (!n) return;
            const s = i.roundNum(n * this.margin / 400), l = n + s;
            await e.changeMoney(-l) && (await this.addMoneyToBalance(s), await a.saveNewCar(e, t, this.newCarCoord), e.notify(`~g~${o.get("basic", "success", e.lang)}`), i.log.debug(`${e.name} bought a car ${t} for $${l}`))
        }
    }, mp.events.add({
        "sCarDealership-BuyCar": (e, t) => {
            const n = JSON.parse(t);
            s.getBusiness(n.id).buyNewCar(e, n.model)
        }
    })
}, function (e, t, n) {
    n(21), n(31), n(32), n(34), n(35), n(36), n(37), n(38), n(39), n(40), n(41), n(42), n(43), n(46), n(47), n(48)
}, function (e, t, n) {
    const s = n(0), i = n(6), a = n(1), r = n(13), o = n(17);
    const l = new class extends o {
        async tryLoginWithoutCode(e, t) {
            const n = JSON.parse(t), i = this.hashPassword(n.pass),
                a = await s.query(`SELECT id, email, password, socialclub FROM users WHERE email = '${n.email}' LIMIT 1`);
            return a[0] ? (a[0].socialclub, e.socialClub, a[0].password !== i ? this.showError(e, "Wrong password!") : this.isAlreadyPlaying(a[0].email) ? (this.showError(e, "You cant log in from two devices!"), e.loggedIn = !1, e.kick("Dublicate")) : void this.loadAccount(e, a[0].id)) : this.showError(e, "This account does NOT exist")
        }

        isAlreadyPlaying(e) {
            const t = mp.players.toArray();
            for (const n of t) if (n.loggedIn && n.email === e) return !0;
            return !1
        }

        async loadAccount(e, t) {
            delete e.verificationCode, delete e.verificationDate, delete e.verificationCodeTries, await r.loadAccount(e, t), e.outputChatBox(`${a.get("sLogin", "annouceSpawnVehicle", e.lang)}`), e.outputChatBox(`${a.get("sLogin", "annouceGlobalChat", e.lang)}`), e.outputChatBox(`${a.get("sLogin", "annouceOldUser", e.lang)}`), e.outputChatBox(`${a.get("sLogin", "annoucePlayerMenu", e.lang)}`);
            const n = mp.players.toArray();
            if (n.length < 30) for (const t of n) t.outputChatBox(`[${s.getTime()}] ${e.name} ${a.get("sLogin", "connected", t.lang)}`)
        }

        tryGetCodeToLogin(e, t) {
            if (!i.isEmailValid(t)) return this.showError(e, "Email Invalid");
            this.trySendCode(e, t)
        }

        async tryValidateCodeAndLogIn(e, t) {
            const n = JSON.parse(t), i = this.hashPassword(n.pass);
            if (!this.checkCode(e, n.code)) return;
            const a = await s.query(`SELECT id, email, password FROM users WHERE email = '${n.email}' LIMIT 1`);
            return a[0] ? a[0].password !== i ? (e.call("cInjectCef", ['app.showCode = false; app.enteredCode = "";']), this.showError(e, "Wrong password!")) : this.isAlreadyPlaying(a[0].email) ? (this.showError(e, "You cant log in from two devices!"), e.kick("Dublicate")) : void this.loadAccount(e, a[0].id) : this.showError(e, "This account does NOT exist")
        }
    };
    mp.events.add({
        "sLogin-TryLoginWithoutCode": async (e, t) => {
            l.tryLoginWithoutCode(e, t)
        }, "sLogin-TryGetCodeToLogin": async (e, t) => {
            l.tryGetCodeToLogin(e, t)
        }, "sLogin-TryValidateCodeAndLogIn": async (e, t) => {
            l.tryValidateCodeAndLogIn(e, t)
        }, playerQuit: e => {
            if (!e.loggedIn) return;
            r.saveAccount(e);
            const t = mp.players.toArray();
            if (t.length < 30) for (const n of t) n.outputChatBox(`[${s.getTime()}] ${e.name} ${a.get("sLogin", "disconnected", n.lang)}`)
        }
    })
}, function (e, t) {
    e.exports = require("log4js")
}, function (e, t, n) {
    const s = n(24).createPool({host: "localhost", user: "srvroot", password: "SuzikPuzik1459166**", database: "srv"});
    s.getConnection((function (e) {
        if (e) throw console.log("DATABASE IS NOT WORKING"), e;
        console.log("DATABASE IS WORKING")
    })), e.exports = s
}, function (e, t) {
    e.exports = require("mysql")
}, function (e, t) {
    e.exports = require("nodemailer")
}, function (e, t, n) {
    const s = n(0), i = n(1);
    e.exports = class {
        constructor(e) {
            const t = JSON.parse(e.coord), n = mp.vehicles.new(e.model, new mp.Vector3(t.x, t.y, t.z), {
                heading: t.rot,
                dimension: t.dim,
                locked: !0,
                engine: !1
            });
            n.guid = e.id, n.title = e.title, n.fuel = e.fuel, n.fuelTank = e.fuelTank, n.fuelRate = e.fuelRate, n.price = e.price, n.ownerId = e.ownerId, n.whoCanOpen = JSON.parse(e.whoCanOpen), n.factionName = e.factionName, n.windowsOpened = [!1, !1, !1, !1], n.numberPlate = e.numberPlate;
            const a = JSON.parse(e.primaryColor), r = JSON.parse(e.secondaryColor);
            return n.setColorRGB(a[0], a[1], a[2], r[0], r[1], r[2]), n.canOpen = function (e) {
                if (e.dimension !== this.dimension) return !1;
                if (e.faction.name && e.faction.name === this.factionName) return !0;
                for (const t of this.whoCanOpen) if (t === e.guid) return !0;
                return !1
            }, n.toggleDoorsLock = function (e) {
                n.locked ? (this.unlock(), e.notifyWithPicture("Info", "", `${this.title} ~g~${i.get("sVehicle", "unlocked", e.lang)}.`, "CHAR_PROPERTY_ARMS_TRAFFICKING")) : (this.lock(), e.notifyWithPicture("Info", "", `${this.title} ~r~${i.get("sVehicle", "locked", e.lang)}`, "CHAR_PROPERTY_ARMS_TRAFFICKING")), n.locked = !n.locked
            }, n.lock = function () {
                0 === this.getOccupants().length && this.blinkLights()
            }, n.unlock = function () {
                0 === this.getOccupants().length && (this.blinkLights(), setTimeout(() => {
                    this.blinkLights()
                }, 600))
            }, n.blinkLights = function () {
                const e = this.engine;
                e || (this.engine = !0);
                const t = mp.players.toArray();
                for (const e of t) e.call("cVehicle-setLights", [this, 2]), setTimeout(() => {
                    e.call("cVehicle-setLights", [this, 0])
                }, 300);
                e || setTimeout(() => {
                    this.engine = e
                }, 300)
            }, n.canRollWindow = function (e, t) {
                return !(!e.isDriver() && e.seat + 1 !== t)
            }, n.toggleWindow = function (e, t) {
                if (!this.canRollWindow(e, t)) return;
                const s = this.windowsOpened[t];
                let i;
                i = s ? "cVehicle-rollUpWindow" : "cVehicle-rollDownWindow", mp.players.forEach((e, n) => {
                    e.call(i, [this, t])
                }), n.windowsOpened[t] = !s
            }, n.fillUp = async function (e) {
                n.fuel += e, n.fuel > n.fuelTank && (n.fuel = n.fuelTank)
            }, n.sellToGovernment = async function (e) {
                n.ownerId === e.guid && (e.addBankMoney(this.price / 2, `${i.get("sVehicle", "sellVehicle", e.lang)}`), await s.query(`DELETE FROM vehicles WHERE id = ${n.guid} AND ownerId = '${e.guid}' LIMIT 1`), this.destroy())
            }, n
        }
    }
}, function (e, t, n) {
    const s = n(0), i = n(10), a = (n(28), n(29), n(1));
    const r = new class extends i {
        constructor() {
            super("Hospital"), mp.events.add({
                playerDeath: (e, t, n) => {
                    let i;
                    e.call("cMisc-CallServerEvenWithTimeout", ["sHospital-SpawnAfterDeath", 1e4]), n && (i = n.name), s.log.debug(`${e.name} death! Reason: ${t}, killer: ${i}`)
                }, "sHospital-SpawnAfterDeath": e => {
                    this.spawnAfterDeath(e)
                }, "sKeys-F4": e => {
                    e.loggedIn && this.openInteractionMenu(e)
                }, "sHospital-IncreaseHealingSpeed": (e, t) => {
                    e.loggedIn && this.tryIncreaseHealingSpeed(e, t)
                }, "sHospital-ConfirmIncreaseHealingEvent": (e, t) => {
                    e.loggedIn && this.confirmIncreaseHealingSpeed(e, t)
                }, "sHospital-Heal": (e, t) => {
                    e.loggedIn && this.tryHeal(e, t)
                }, "sHospital-RejectDoctorOffer": (e, t) => {
                    e.loggedIn && this.rejectDoctorOffer(e, t)
                }, "sHospital-ConfirmHealEvent": (e, t) => {
                    e.loggedIn && this.confirmHeal(e, t)
                }
            });
            this.createClothingShape({x: 268.457, y: -1365.145, z: 24.538, rot: 144.58}), this.createEvents()
        }

        spawnAfterDeath(e) {
            if (!e.loggedIn) return;
            e.spawn(new mp.Vector3(e.position)), e.health = 1, e.call("cHospital-DisableHealthRegeneration"), e.healingSpeed = 0;
            const t = e.dist({x: -498.184, y: -335.741, z: 34.502}), n = s.roundNum(t / 20);
            e.newFine(n, `${a.get("sHospital", "transferTo", e.lang)}`);
            e.tp({
                x: 275.446,
                y: -1361.11,
                z: 24.5378,
                rot: 46.77,
                dim: 0
            }), s.log.debug(`${e.name} transfered to Hospital. Fine: $${n}`)
        }

        changeClothesMan(e) {
            e.setClothes(11, 12, 0, 0), e.setClothes(3, 12, 0, 0), e.setClothes(8, 12, 0, 0), e.setClothes(4, 20, 0, 0)
        }

        changeClothesWoman(e) {
            e.setClothes(11, 27, 0, 0), e.setClothes(3, 0, 0, 0), e.setClothes(8, 2, 0, 0), e.setClothes(4, 23, 0, 0)
        }

        openInteractionMenu(e) {
            if (!this.isInThisFaction(e) || !this.isWorking(e)) return;
            const t = s.getNearestPlayerInRange(e.position, 1);
            if (!t) return;
            let n = `app.patientId = ${t.id};`;
            n += `app.patientName = '${t.name}';`, e.call("cHospital-ShowDoctorMenu", [e.lang, n])
        }

        rejectDoctorOffer(e, t) {
            const n = mp.players.at(t);
            n && this.isSellerClientRight(n, e) && (e.notify(`${a.get("basic", "youRejectedOffer", e.lang)} ${n.name}!`), n.notify(`${e.name} ${a.get("basic", "rejectedYourOffer", n.lang)}!`), this.resetCurrentSeller(e), this.resetCurrentClient(n))
        }

        confirmIncreaseHealingSpeed(e, t) {
            const n = mp.players.at(t);
            n && this.isSellerClientRight(n, e) && e.healingSpeed && this.isDistanceRight(n, e, !0) && this.successConfirmEvent(n, e, 500, 5)
        }

        tryIncreaseHealingSpeed(e, t) {
            const n = mp.players.at(t);
            if (!(this.isInThisFaction(e) && this.isWorking(e) && n && this.isDistanceRight(e, n))) return;
            if (!n.healingSpeed) return e.notify(`~r~${n.name} ${a.get("sHospital", "isntHealing", e.lang)}!`), void n.notify(`~r~${a.get("sHospital", "youArentHealing", n.lang)}!`);
            if (!this.setCurrentClient(e, n)) return;
            let s = `app.whoName = '${e.name}';`;
            s += `app.whoId = ${e.id};`, s += `app.wantText = '${a.get("sHospital", "wantsIncreaseHealing", n.lang)}';`, s += "app.price = 500;", n.call("cMisc-CreateChooseWindow", [n.lang, s, "sHospital-ConfirmIncreaseHealingEvent", "sHospital-RejectDoctorOffer"])
        }

        async successConfirmEvent(e, t, n, i) {
            await t.changeMoney(-n) && (t.healingSpeed = i, e.changeMoney(n), this.resetCurrentSeller(t), this.resetCurrentClient(e), e.notify(`~g~${t.name} ${a.get("basic", "confirmedYourOffer", e.lang)}!`), t.notify(`~g~${a.get("basic", "youConfirmedOffer", t.lang)} ${e.name}!`), s.log.debug(`${t.name} healed by ${e.name}. Price: ${n}`))
        }

        tryHeal(e, t) {
            const n = mp.players.at(t);
            if (!(this.isInThisFaction(e) && this.isWorking(e) && n && this.isDistanceRight(e, n))) return;
            if (!n.healingSpeed) return e.notify(`~r~${n.name} ${a.get("sHospital", "isntHealing", e.lang)}!`), void n.notify(`~r~${a.get("sHospital", "youArentHealing", n.lang)}!`);
            if (!this.setCurrentClient(e, n)) return;
            let s = `app.whoName = '${e.name}';`;
            s += `app.whoId = ${e.id};`, s += `app.wantText = '${a.get("sHospital", "wantsHeal", n.lang)}';`, s += "app.price = 5000;", n.call("cMisc-CreateChooseWindow", [n.lang, s, "sHospital-ConfirmHealEvent", "sHospital-RejectDoctorOffer"])
        }

        confirmHeal(e, t) {
            const n = mp.players.at(t);
            n && this.isSellerClientRight(n, e) && e.healingSpeed && this.isDistanceRight(n, e, !0) && this.successConfirmEvent(n, e, 5e3, 100)
        }
    };
    e.exports.loadUser = function (e) {
        e.call("cHospital-DisableHealthRegeneration"), e.healingSpeed = 0, e.canStartHeal = !1, e.stopHealing = function () {
            0 !== this.healingSpeed && (this.healingSpeed = 0, this.outputChatBox(`!{0, 200, 0}${a.get("sHospital", "finishedHealing", this.lang)}!`), s.log.debug(`${this.name} finished healing. HP: ${this.health}`))
        }, e.startHealing = function () {
            this.healingSpeed > 0 || (this.healingSpeed = 25, e.outputChatBox(`!{0, 200, 0}${a.get("sHospital", "startedHealing", this.lang)}!`), s.log.debug(`${this.name} start healing. HP: ${this.health}`))
        }, e.addHP = function () {
            0 !== this.healingSpeed && (this.health += this.healingSpeed, this.notify(`~g~+ ${this.healingSpeed}hp`), s.log.debug(`${this.name} got ${this.healingSpeed}hp. Total: ${this.health}`), this.health <= 100 || (this.health = 100, this.stopHealing()))
        }
    }, mp.events.addCommand({
        sethospitalleader: async (e, t) => {
            e.adminlvl < 1 || r.setAsLeader(e, +t)
        }
    })
}, function (e, t, n) {
    const s = n(5), i = n(1);
    const a = new class extends s {
        constructor() {
            super(), this.mainEntranceData = {
                outPos: {x: -498.184, y: -335.741, z: 34.502, rot: 263.72, dim: 0},
                inPos: {x: 275.446, y: -1361.11, z: 24.5378, rot: 46.77, dim: 0},
                outBlipId: 153,
                outBlipCol: 1,
                outBlipName: "Hospital",
                outBlipScale: 1,
                outShapeR: 1,
                outMarkerId: 1,
                outMarkerHeightAdjust: -1,
                outMarkerR: .75,
                outMarkerCol: [255, 0, 0, 15],
                inShapeR: 1,
                inMarkerId: 1,
                inMarkerHeightAdjust: -1,
                inMarkerR: .75,
                inMarkerCol: [255, 0, 0, 15]
            }, this.createMainEntrance(), this.createHealingShape()
        }

        createMainEntrance() {
            this.mainEntrance = super.createDoubleEntrance(this.mainEntranceData)
        }

        enteredBuildingShape(e, t) {
            t === this.mainEntrance.out.entranceId ? e.notify(`${i.get("basic", "pressE", e.lang)} ${i.get("basic", "toEnter", e.lang)}`) : t === this.mainEntrance.in.entranceId && e.notify(`${i.get("basic", "pressE", e.lang)} ${i.get("basic", "toExit", e.lang)}`)
        }

        tryToEnter(e, t) {
            if (t === this.mainEntrance.out.entranceId) {
                if (e.vehicle) return;
                e.tp(this.mainEntranceData.inPos)
            } else if (t === this.mainEntrance.in.entranceId) {
                if (e.vehicle) return;
                if (e.health < 75) return e.notify(`~r~${i.get("sHospital", "needHelp", e.lang)}`);
                e.stopHealing(), e.tp(this.mainEntranceData.outPos)
            }
        }

        createHealingShape() {
            const e = 266.775, t = -1356.136, n = 24.538, s = mp.colshapes.newSphere(e, t, n, 1);
            mp.markers.new(1, new mp.Vector3(e, t, n - 1), .75, {color: [255, 0, 0, 15]}), mp.events.add({
                playerEnterColshape: (e, t) => {
                    e.loggedIn && t === s && (e.canStartHeal = !0, e.notify(`${i.get("basic", "pressE", e.lang)} ${i.get("sHospital", "toStartHealing", e.lang)}`))
                }, playerExitColshape: (e, t) => {
                    e.loggedIn && t === s && (e.canStartHeal = !1)
                }, "sKeys-E": e => {
                    e.loggedIn && e.canStartHeal && e.startHealing()
                }
            })
        }
    };
    e.exports = a
}, function (e, t, n) {
    const s = n(11), i = n(1), a = new s({
        basic: {
            outPos: {x: -515.651, y: -295.108, z: 34.795, rot: 201.06, dim: 0},
            outBlipId: 50,
            outBlipCol: 1,
            outBlipName: "LS Hospital Garage",
            outBlipScale: .7,
            outShapeR: 3,
            startDim: 1,
            floors: 5,
            camData: {x: -514.154, y: -285.073, z: 35.8, rx: 0, ry: 0, rz: 177.02, viewangle: 30}
        },
        topExit: {x: -460.698, y: -272.399, z: 35.347, rot: 23.34, r: 3, dim: 0},
        undergroundExit: {x: 224.327, y: -1002.948, z: -98.984, rot: 180.96, r: 3},
        undergroundCheckCoord: {x: 231.896, y: -1003.318, z: -98.985, rot: 358, r: 3},
        shapesList: [],
        checkShapesList: []
    }, {
        topEntrance: {x: 246.519, y: -1372.557, z: 24.5, rot: 316, r: 1, dim: 0},
        undergroundEntrance: {x: 241.378, y: -1004.781, z: -99, rot: 88.36, r: 1},
        shapesList: []
    });
    a.enterLift = function (e, t) {
        if (e.health < 75) return e.notify(`~r~${i.get("sHospital", "needHelp", e.lang)}`);
        const n = a.getLiftEnterPos(t);
        e.tp(n)
    }
}, function (e, t, n) {
    const s = n(5), i = n(1);
    const a = new class extends s {
        constructor() {
            super(), this.mainEntranceData = {
                outPos: {x: 1846.283, y: 2585.906, z: 45.672, rot: 268.06, dim: 0},
                inPos: {x: 1818.348, y: 2594.317, z: 45.72, rot: 97.25, dim: 0},
                outShapeR: 1,
                outMarkerId: 1,
                outMarkerHeightAdjust: -1,
                outMarkerR: .75,
                outMarkerCol: [30, 144, 255, 15],
                inShapeR: 1,
                inMarkerId: 1,
                inMarkerHeightAdjust: -1,
                inMarkerR: .75,
                inMarkerCol: [30, 144, 255, 15]
            }, this.secondEntranceData = {
                outPos: {x: 1690.713, y: 2591.354, z: 45.914, rot: 0, dim: 0},
                inPos: {x: 1689.259, y: 2529.241, z: 45.565, rot: 183.25, dim: 0},
                outBlipId: 188,
                outBlipCol: 3,
                outBlipName: "Prison",
                outBlipScale: 1,
                outShapeR: 1
            }, this.createMainEntrance(), this.createSecondEntrance()
        }

        createMainEntrance() {
            this.mainEntrance = super.createDoubleEntrance(this.mainEntranceData)
        }

        createSecondEntrance() {
            this.secondEntrance = super.createSingleEntrance(this.secondEntranceData)
        }

        enteredBuildingShape(e, t) {
            t === this.mainEntrance.out.entranceId ? e.notify(`${i.get("basic", "pressE", e.lang)} ${i.get("basic", "toEnter", e.lang)}`) : t === this.secondEntrance.out.entranceId ? e.notify(`${i.get("basic", "pressE", e.lang)} to surrender`) : t === this.mainEntrance.in.entranceId && e.notify(`${i.get("basic", "pressE", e.lang)} ${i.get("basic", "toExit", e.lang)}`)
        }

        tryToEnter(e, t) {
            t === this.mainEntrance.out.entranceId ? this.enterMainEntrance(e) : t === this.secondEntrance.out.entranceId ? this.enterSecondEntrance(e) : t === this.mainEntrance.in.entranceId && this.exitMainEntrance(e)
        }

        enterMainEntrance(e) {
            e.vehicle || e.tp(this.mainEntranceData.inPos)
        }

        exitMainEntrance(e) {
            e.vehicle || e.tp(this.mainEntranceData.outPos)
        }

        enterSecondEntrance(e) {
            e.vehicle || e.startJail()
        }
    };
    e.exports = a
}, function (e, t, n) {
    const s = n(0), i = n(6), a = n(13), r = n(17), o = n(7), l = n(14), c = n(4), h = n(8), u = n(10), d = n(16);
    const g = new class extends r {
        async tryGetCodeToRegister(e, t) {
            if (!i.isEmailValid(t)) return this.showError(e, "Email Invalid");
            if ((await s.query(`SELECT email FROM users WHERE email = '${t}' LIMIT 1`))[0]) return this.showError(e, "This email already exists");
            e.call("cInjectCef", ["app.setMailChecked();"])
        }

        trySendCode(e, t) {
            if (e.email = t, !e.verificationDate) return this.sendCode(e, t);
            const n = (((new Date).getTime() - e.verificationDate) / 1e3).toFixed();
            if (n < 60) return this.showError(e, `Wait ${60 - n} seconds`);
            this.sendCode(e, t)
        }

        tryValidateCode(e, t) {
            this.checkCode(e, t) && e.call("cInjectCef", ["app.setMailChecked();"])
        }

        async checkUsername(e, t) {
            const n = JSON.parse(t);
            return n.firstName && n.lastName ? (await s.query(`SELECT firstName, lastName FROM users WHERE firstName = '${n.firstName}' AND lastName = '${n.lastName}' LIMIT 1`))[0] ? this.showError(e, "This nickname already exists") : void e.call("cInjectCef", ["app.setNameAvailable();"]) : this.showError(e, "You cant own empty username")
        }

        async tryCreateAccount(e, t) {
            const n = JSON.parse(t);
            return i.isEmailValid(n.email) ? (await s.query(`SELECT email FROM users WHERE email = '${n.email}' LIMIT 1`))[0] ? this.showError(e, "Something wrong. Try again") : void this.createAccount(e, n) : this.showError(e, "Email Invalid")
        }

        async createAccount(e, t) {
            const n = this.hashPassword(t.pass);
            await a.createNewUser(e, t.email, t.firstName, t.lastName, n);
            const r = await s.query("SELECT id FROM users ORDER BY id DESC LIMIT 1"), g = o.createNewUser(r[0].id),
                p = l.createNewUser(r[0].id), m = c.createNewUser(r[0].id), y = h.createNewUser(r[0].id),
                f = u.createNewUser(r[0].id), b = d.createNewUser(r[0].id);
            await Promise.all([g, p, m, y, f, b]);
            i.getMailAdress(), t.email, t.firstName, t.lastName, t.pass, t.firstName, t.lastName, t.pass;
            e.call("cInjectCef", ["app.showInfo('Success! Now you can log in.');"])
        }
    };
    mp.events.add({
        playerReady: async e => {
            e.spawn(new mp.Vector3(3222, 5376, 20)), e.dimension = 1001, a.loadPlayerTemplate(e), e.call("cLogin-ShowLoginWindow")
        }, "sRegister-TryGetCodeToRegister": async (e, t) => {
            g.tryGetCodeToRegister(e, t)
        }, "sRegister-TryValidateEmailWithCode": async (e, t) => {
            g.tryValidateCode(e, t)
        }, "sRegister-CheckUsername": async (e, t) => {
            g.checkUsername(e, t)
        }, "sRegister-CreateAccount": async (e, t) => {
            g.tryCreateAccount(e, t)
        }
    })
}, function (e, t, n) {
    const s = n(1), i = n(0), a = n(33);
    const r = new class {
        constructor() {
            mp.events.add("playerChat", (e, t) => {
                if (!t) return e.notify("Please enter message");
                this.sayRP(e, t), i.log.debug(`${e.name}[${e.id}]: ${t}`)
            }), mp.events.addCommand({
                me: (e, t) => {
                    if (!t) return e.notify("Please enter message");
                    this.sayME(e, t)
                }, do: (e, t) => {
                    if (!t) return e.notify("Please enter message");
                    this.sayDO(e, t)
                }, g: (e, t) => {
                    if (!t) return e.notify("Please enter message");
                    mp.players.broadcast(`[${a.getTime()}] [Global] ${e.name}: ${t}`), i.log.debug(`${e.name} ${t}`)
                }
            })
        }

        getColorInRange(e, t) {
            return "white" === e ? this.getWhiteColor(t) : "purple" === e ? this.getPurpleColor(t) : void 0
        }

        getWhiteColor(e) {
            return e >= 0 && e < 2 ? "#ffffff" : e >= 2 && e < 4 ? "#cecece" : e >= 4 && e < 6 ? "#afafaf" : e >= 6 && e < 8 ? "#919191" : e >= 8 && e < 10 ? "#727272" : void 0
        }

        getPurpleColor(e) {
            return e >= 0 && e < 2 ? "#c2a2da" : e >= 2 && e < 4 ? "#a58bba" : e >= 4 && e < 6 ? "#8a749b" : e >= 6 && e < 8 ? "#6e5d7c" : e >= 8 && e < 10 ? "#53465e" : void 0
        }

        sayRP(e, t, n = !1) {
            mp.players.forEachInRange(e.position, 10, a => {
                const r = a.dist(e.position), o = this.getColorInRange("white", r), l = i.getTime();
                n ? a.outputChatBox(`!{${o}}[${l}] ${s.get("sChat", "someone", e.lang)}: ${t}`) : a.outputChatBox(`!{${o}}[${l}] ${e.name}[${e.id}]: ${t}`)
            })
        }

        sayME(e, t, n = !1) {
            mp.players.forEachInRange(e.position, 10, a => {
                const r = a.dist(e.position), o = this.getColorInRange("purple", r), l = i.getTime();
                n ? a.outputChatBox(`!{${o}}[${l}] ${s.get("sChat", "someone", e.lang)}: ${t}`) : a.outputChatBox(`!{${o}}[${l}] ${e.name} ${t}`), i.log.debug(`${e.name} ${t}.`)
            })
        }

        sayDO(e, t, n = !1) {
            mp.players.forEachInRange(e.position, 10, s => {
                const a = s.dist(e.position), r = this.getColorInRange("purple", a), o = i.getTime();
                n ? s.outputChatBox(`!{${r}}[${o}] ${t}`) : s.outputChatBox(`!{${r}}[${o}] ${t} | ${e.name}`), i.log.debug(`${t} | ${e.name}.`)
            })
        }
    };
    e.exports = r
}, function (e, t, n) {
    const s = n(3);
    const i = new class {
        constructor() {
            this.timer = 0
        }

        everyMinuteEvent() {
            const e = mp.players.toArray();
            for (const t of e) {
                if (!t.loggedIn) return;
                t.addHP(), t.jailEvent()
            }
        }

        every5MinutesEvent() {
        }

        everyHourEvent() {
            s.payTaxes()
        }

        runTimer(e) {
            const t = new Date, n = 1e3 * (60 - t.getSeconds()) + (1e3 - t.getMilliseconds());
            this.changeTime(t, !!e), clearTimeout(this.timer), this.timer = setTimeout(() => {
                this.runTimer()
            }, n)
        }

        changeTime(e, t) {
            if (mp.world.time.hour = e.getHours(), mp.world.time.minute = e.getMinutes(), t) return !1;
            this.everyMinuteEvent(), 0 === e.getMinutes() && this.everyHourEvent(), e.getMinutes() % 5 == 0 && this.every5MinutesEvent()
        }

        getTime() {
            const e = new Date;
            let t = e.getHours(), n = e.getMinutes(), s = e.getSeconds();
            return t < 10 && (t = `0${t}`), n < 10 && (n = `0${n}`), s < 10 && (s = `0${s}`), `${t}:${n}:${s}`
        }
    };
    i.runTimer(!0), e.exports = i
}, function (e, t, n) {
    const s = n(0), i = n(1);
    (new class {
        constructor() {
            mp.events.add({
                playerEnterColshape: (e, t) => {
                    e.loggedIn && !e.vehicle && t.atm && (e.canOpen.ATM = !0, e.notify(i.get("sMoney", "enterATM", e.lang)))
                }, "sKeys-E": e => {
                    e.loggedIn && e.canOpen.ATM && this.openMenu(e)
                }, playerExitColshape: (e, t) => {
                    e.loggedIn && t.atm && (e.canOpen.ATM = !1)
                }, "sMoney-GetCash": (e, t) => {
                    this.getCash(e, t)
                }, "sMoney-PutCash": (e, t) => {
                    this.putCash(e, t)
                }, "sMoney-GetTaxMoney": (e, t) => {
                    this.getTaxMoney(e, t)
                }, "sMoney-PutTaxMoney": (e, t) => {
                    this.putTaxMoney(e, t)
                }, "sMoney-PayFine": (e, t) => {
                    this.payFine(e, t)
                }
            })
        }

        createATM(e, t, n) {
            mp.colshapes.newSphere(e, t, n, .5).atm = !0, mp.blips.new(500, new mp.Vector3(e, t, n), {
                name: "ATM",
                color: 2,
                shortRange: !0,
                scale: .75
            })
        }

        getPlayerMoneyInfo(e) {
            const t = `app.cash = ${e.money.cash};`, n = `app.bank = ${e.money.bank};`, s = `app.tax = ${e.money.tax};`,
                i = `app.loadFines('${JSON.stringify(e.money.fines)}');`;
            let a = 0;
            if (Array.isArray(e.money.fines)) for (const t of e.money.fines) a += t.val;
            return t + n + s + i + `app.fine = ${a};`
        }

        openMenu(e) {
            const t = this.getPlayerMoneyInfo(e) + "setTimeout(load, 300);";
            e.call("cMoney-ShowATM", [e.lang, t]), s.log.debug(`${e.name} enters ATM`)
        }

        loadATMs() {
            this.createATM(-95.54, 6457.14, 31.46), this.createATM(-97.26, 6455.38, 31.46), this.createATM(155.828, 6642.827, 31.602), this.createATM(174.161, 6637.827, 31.573), this.createATM(1701.28, 6426.46, 32.76), this.createATM(112.483, -818.976, 31.342), this.createATM(111.323, -775.486, 31.437), this.createATM(114.181, -776.757, 31.418), this.createATM(296.444, -893.988, 29.231), this.createATM(295.694, -896.069, 29.214), this.createATM(147.726, -1035.783, 29.343), this.createATM(145.947, -1035.146, 29.345), this.createATM(289.01, -1256.83, 29.441), this.createATM(1703, 4933.5, 42.06), this.createATM(1968.13, 3743.56, 32.34), this.createATM(2683, 3286.5, 55.21), this.createATM(-611.92, -704.75, 31.26), this.createATM(-614.6, -704.75, 31.26)
        }

        updateATMInfo(e) {
            const t = this.getPlayerMoneyInfo(e);
            e.call("cInjectCef", [t])
        }

        logATMOperation(e, t) {
            e.updateCash();
            const n = `$${e.money.cash} $${e.money.bank} $${e.money.tax}`;
            s.log.debug(`ATM | ${e.name} | ${t} >>> ${n}`)
        }

        async getCash(e, t) {
            if (!e.loggedIn || !s.isValueNumber(t) || e.money.bank < t) return;
            const n = `$${e.money.cash} $${e.money.bank} $${e.money.tax}`;
            await s.query(`UPDATE usersMoney SET cash = cash + ${t}, bank = bank - ${t} WHERE id = '${e.guid}'`), e.money.cash += t, e.money.bank -= t, this.logATMOperation(e, n), this.updateATMInfo(e)
        }

        async putCash(e, t) {
            if (!e.loggedIn || !s.isValueNumber(t) || e.money.cash < t) return;
            const n = `$${e.money.cash} $${e.money.bank} $${e.money.tax}`;
            await s.query(`UPDATE usersMoney SET cash = cash - ${t}, bank = bank + ${t} WHERE id = '${e.guid}'`), e.money.cash -= t, e.money.bank += t, this.logATMOperation(e, n), this.updateATMInfo(e)
        }

        async getTaxMoney(e, t) {
            if (!e.loggedIn || !s.isValueNumber(t) || e.money.tax < t) return;
            const n = `$${e.money.cash} $${e.money.bank} $${e.money.tax}`;
            await s.query(`UPDATE usersMoney SET cash = cash + ${t}, tax = tax - ${t} WHERE id = '${e.guid}'`), e.money.cash += t, e.money.tax -= t, this.logATMOperation(e, n), this.updateATMInfo(e)
        }

        async putTaxMoney(e, t) {
            if (!e.loggedIn || !s.isValueNumber(t) || e.money.cash < t) return;
            const n = `$${e.money.cash} $${e.money.bank} $${e.money.tax}`;
            await s.query(`UPDATE usersMoney SET cash = cash - ${t}, tax = tax + ${t} WHERE id = '${e.guid}'`), e.money.cash -= t, e.money.tax += t, this.logATMOperation(e, n), this.updateATMInfo(e)
        }

        async payFine(e, t) {
            if (!e.loggedIn || !s.isValueNumber(t) || !e.money.fines[t] || e.money.cash < e.money.fines[t].val) return;
            const n = `$${e.money.cash} $${e.money.bank} $${e.money.tax}`, i = e.money.fines[t].val;
            e.money.cash -= i, e.money.fines.splice(t, 1), await s.query(`UPDATE usersMoney SET cash = cash - ${i}, fines = '${JSON.stringify(e.money.fines)}' WHERE id = '${e.guid}'`), this.logATMOperation(e, n), s.log.debug(`-$${i} fine`), this.updateATMInfo(e)
        }
    }).loadATMs(), e.exports.getNearestATM = function (e) {
        const t = mp.blips.toArray();
        let n = t[0];
        for (const s of t) "ATM" === s.name && s.dist(e) < n.dist(e) && (n = s);
        return n.position
    }
}, function (e, t, n) {
    const s = n(3), i = n(0), a = n(8), r = n(1);

    class o extends s {
        constructor(e) {
            super(e), this.camData = JSON.parse(e.camData)
        }

        setLocalSettings() {
            this.blip.model = 71, this.blip.name = "Barber shop"
        }

        openBuyerMenu(e) {
            if (e.vehicle) return;
            const t = this.buyerMenuCoord;
            let n;
            t.dim = 0, e.tp(t), n = 1885233650 === e.model ? "app.loadMans();" : "app.loadWomans();", n += `app.id = ${this.id};`, n += `app.margin = ${this.margin};`, n += `app.camRotation = ${e.heading};`, e.call("cBarberShop-ShowBuyerMenu", [e.lang, n, this.camData]), i.log.debug(`${e.name} enter a barber shop menu`)
        }

        async updateCamData(e) {
            const t = e.position, n = {
                x: i.roundNum(t.x, 2),
                y: i.roundNum(t.y, 2),
                z: i.roundNum(t.z + .7, 2),
                rz: i.roundNum(e.heading, 2),
                viewangle: 20
            }, s = JSON.stringify(n);
            await i.query(`UPDATE barbershop SET camData = '${s}' WHERE id = ${this.id}`), this.camData = n, e.notify(`~g~${r.get("basic", "success", e.lang)}!`)
        }

        async buyThing(e, t) {
            const n = this.getPrice(t), s = i.roundNum(n * this.margin / 100), o = n + s;
            await e.changeMoney(-o) && (await this.addMoneyToBalance(s), await a.saveHeadOverlay(e, t), e.notify(`~g~${r.get("basic", "success", e.lang)}!`), i.log.debug(`${e.name} bought something in barbershop for $${o}`))
        }

        getPrice(e) {
            let t;
            return i.isValueNumber(e.hairStyle) ? t = 2500 : i.isValueNumber(e.hairCol1) && i.isValueNumber(e.hairCol2) ? t = 1500 : i.isValueNumber(e.browStyle) && i.isValueNumber(e.browOp) ? t = 1e3 : i.isValueNumber(e.beardStyle) && i.isValueNumber(e.beardOp) && (t = 500), t
        }
    }

    !async function () {
        const e = await i.query("SELECT * FROM business INNER JOIN barbershop ON business.id = barbershop.id");
        for (let t = 0; t < e.length; t++) new o(e[t])
    }(), mp.events.add({
        "sBarberShop-SetHairStyle": (e, t) => {
            e.setClothes(2, t, 0, 0)
        }, "sBarberShop-SetHeadOverlay": (e, t) => {
            const n = JSON.parse(t);
            e.setHeadOverlay(n.id, [n.index, n.opacity, 1, 1])
        }, "sBarberShop-BuyThing": async (e, t) => {
            const n = JSON.parse(t), i = s.getBusiness(n.id);
            await i.buyThing(e, n), e.updateHeadOverlay()
        }, "sBarberShop-ReloadHeadOverlay": e => {
            e.updateHeadOverlay()
        }
    }), mp.events.addCommand({
        createbarbershop: async (e, t) => {
            if (e.adminlvl < 1) return;
            const n = s.getCountOfBusinesses() + 1, a = i.getPlayerCoordJSON(e), r = Number(t.replace(/\D+/g, "")),
                o = i.query(`INSERT INTO business (id, title, coord, price) VALUES ('${n}', 'Barber Shop', '${a}', '${r}');`),
                l = i.query(`INSERT INTO barbershop (id) VALUES ('${n}');`);
            await Promise.all([o, l]), e.outputChatBox("!{#4caf50} Barber shop successfully created!")
        }, setbscamdata: async (e, t) => {
            if (e.adminlvl < 1) return;
            s.getBusiness(+t).updateCamData(e)
        }
    })
}, function (e, t, n) {
    const s = n(3), i = n(0), a = n(4), r = n(1);

    class o extends s {
        constructor(e) {
            super(e), this.camData = JSON.parse(e.camData), this.buyerStandCoord = e.buyerStandCoord
        }

        setLocalSettings() {
            this.buyerColshape.clothingShopId = this.id, this.blip.model = 73, this.blip.name = "Clothing shop"
        }

        async buyCloth(e, t) {
            const n = a.getPrice(e, t.title, t.number), s = i.roundNum(n * this.margin / 100), o = n + s;
            await e.changeMoney(-o) && (await this.addMoneyToBalance(s), await a.saveClothes(e, t), e.notify(`~g~${r.get("basic", "success", e.lang)}!`), i.log.debug(`${e.name} bought a cloth for $${o}`))
        }

        async updateCamData(e) {
            const t = e.position, n = {
                x: i.roundNum(t.x, 2),
                y: i.roundNum(t.y, 2),
                z: i.roundNum(t.z, 2),
                rz: i.roundNum(e.heading, 2),
                viewangle: 35
            }, s = JSON.stringify(n);
            await i.query(`UPDATE clothingshop SET camData = '${s}' WHERE id = ${this.id}`), this.camData = n, e.notify(`~g~${r.get("basic", "success", e.lang)}!`)
        }

        openBuyerMenu(e) {
            if (e.vehicle) return;
            let t;
            e.tp(JSON.parse(this.buyerStandCoord)), t = 1885233650 === e.model ? "loadMans();" : "loadWomans();", t += `app.id = ${this.id};`, t += `app.margin = ${this.margin};`, t += `app.camRotation = ${this.camData.rz - 180};`, e.call("cClothingShop-ShowBuyerMenu", [e.lang, t, this.camData]), i.log.debug(`${e.name} enter a clothing shop menu`)
        }
    }

    !async function () {
        const e = await i.query("SELECT * FROM business INNER JOIN clothingshop ON business.id = clothingshop.id");
        for (let t = 0; t < e.length; t++) new o(e[t])
    }(), mp.events.add({
        "sClothingShop-BuyCloth": (e, t) => {
            const n = JSON.parse(t);
            s.getBusiness(n.id).buyCloth(e, n)
        }, "sClothingShop-ReloadClothes": e => {
            a.loadPlayerClothes(e)
        }
    }), mp.events.addCommand({
        createclothingshop: async (e, t) => {
            if (e.adminlvl < 1) return;
            const n = s.getCountOfBusinesses() + 1, a = i.getPlayerCoordJSON(e), r = Number(t.replace(/\D+/g, "")),
                o = i.query(`INSERT INTO business (id, title, coord, price) VALUES ('${n}', 'Clothing Shop', '${a}', '${r}');`),
                l = i.query(`INSERT INTO clothingshop (id) VALUES ('${n}');`);
            await Promise.all([o, l]), e.outputChatBox("!{#4caf50} Clothing shop successfully created!")
        }, setchbuyerstandcoord: async (e, t) => {
            if (e.adminlvl < 1) return;
            const n = i.getPlayerCoordJSON(e);
            await i.query(`UPDATE clothingshop SET buyerStandCoord = '${n}' WHERE id = ${t}`), e.notify(`~g~${r.get("basic", "success", e.lang)}!`)
        }, setchcamdata: async (e, t) => {
            if (e.adminlvl < 1) return;
            s.getBusiness(+t).updateCamData(e)
        }
    })
}, function (e, t, n) {
    const s = n(3), i = n(0), a = n(1), r = n(19);

    class o extends r {
        setLocalSettings() {
            this.blip.model = 225, this.blip.name = "Cheap Car Dealership", this.blip.color = 31
        }

        openBuyerMenu(e) {
            if (e.vehicle) return;
            let t = `app.id = ${this.id};`;
            t += `app.margin = ${this.margin};`, e.call("cCheapCarDealership-OpenBuyerMenu", [e.lang, t]), i.log.debug(`${e.name} enter a cheap car dealership menu`)
        }
    }

    !async function () {
        const e = await i.query("SELECT * FROM business INNER JOIN cheapcardealership ON business.id = cheapcardealership.id");
        for (let t = 0; t < e.length; t++) new o(e[t])
    }(), mp.events.addCommand({
        createcheapcardealership: async (e, t) => {
            if (e.adminlvl < 1) return;
            const n = s.getCountOfBusinesses() + 1, a = i.getPlayerCoordJSON(e), r = Number(t.replace(/\D+/g, "")),
                o = i.query(`INSERT INTO business (title, coord, price) VALUES ('Cheap Car Dealership', '${a}', '${r}');`),
                l = i.query(`INSERT INTO cheapcardealership (id) VALUES ('${n}');`);
            await Promise.all([o, l]), e.outputChatBox("!{#4caf50} Cheap Car Dealership successfully created!"), e.outputChatBox("!{#4caf50} Now do /setbusbuyermenu [id] and other commands!")
        }, setccardealernewcarcoord: async (e, t) => {
            if (e.adminlvl < 1) return;
            if (!e.vehicle) return e.notify("~r~You're not in vehicle!");
            const n = i.getPlayerCoordJSON(e);
            await i.query(`UPDATE cheapcardealership SET newCarCoord = '${n}' WHERE id = ${t}`), e.notify(`~g~${a.get("basic", "success", e.lang)}`)
        }
    })
}, function (e, t, n) {
    const s = n(3), i = n(0), a = n(1), r = n(19);

    class o extends r {
        setLocalSettings() {
            this.blip.model = 634, this.blip.name = "Commercial Car Dealership", this.blip.color = 38
        }

        openBuyerMenu(e) {
            if (e.vehicle) return;
            let t = `app.id = ${this.id};`;
            t += `app.margin = ${this.margin};`, e.call("cCommercialCarDealership-OpenBuyerMenu", [e.lang, t]), i.log.debug(`${e.name} enter a commercial car dealership menu`)
        }
    }

    !async function () {
        const e = await i.query("SELECT * FROM business INNER JOIN commercialcardealership ON business.id = commercialcardealership.id");
        for (let t = 0; t < e.length; t++) new o(e[t])
    }(), mp.events.addCommand({
        createcommercialcardealership: async (e, t) => {
            if (e.adminlvl < 1) return;
            const n = s.getCountOfBusinesses() + 1, a = i.getPlayerCoordJSON(e), r = Number(t.replace(/\D+/g, "")),
                o = i.query(`INSERT INTO business (title, coord, price) VALUES ('Commercial Car Dealership', '${a}', '${r}');`),
                l = i.query(`INSERT INTO commercialcardealership (id) VALUES ('${n}');`);
            await Promise.all([o, l]), e.outputChatBox("!{#4caf50} Cheap Car Dealership successfully created!"), e.outputChatBox("!{#4caf50} Now do /setbusbuyermenu [id] and other commands!")
        }, setcommercialcardealernewcarcoord: async (e, t) => {
            if (e.adminlvl < 1) return;
            if (!e.vehicle) return e.nofity("~r~You're not in vehicle!");
            const n = i.getPlayerCoordJSON(e);
            await i.query(`UPDATE commercialcardealership SET newCarCoord = '${n}' WHERE id = ${t}`), e.notify(`~g~${a.get("basic", "success", e.lang)}`)
        }
    })
}, function (e, t, n) {
    const s = n(3), i = n(0), a = n(1);

    class r extends s {
        constructor(e) {
            super(e), this.fuelprice = 1 + .02 * this.margin, this.fillingCoord = JSON.parse(e.fillingCoord), this.camData = e.camData, this.tempGain = 0
        }

        setLocalSettings() {
            this.buyerColshape.gasStationId = this.id, this.blip.model = 361, this.blip.name = "Gas Station"
        }

        createFillingColshape() {
            if (!this.fillingCoord) return;
            const e = mp.colshapes.newSphere(this.fillingCoord.x, this.fillingCoord.y, this.fillingCoord.z, this.fillingCoord.r);
            e.gasStationFillingId = this.id, this.fillingShape = e
        }

        updateFuelPrice() {
            this.fuelprice = 1 + .02 * this.margin
        }

        async setMargin(e, t) {
            await super.setMargin(e, t), this.updateFuelPrice()
        }

        getCarsCanFillUp() {
            const e = [];
            return mp.vehicles.forEachInRange(this.fillingCoord, this.fillingCoord.r, t => {
                const n = {id: t.id, title: t.title, fuel: t.fuel, fuelTank: t.fuelTank, numberPlate: t.numberPlate};
                e.push(n)
            }), e
        }

        async fillUpCar(e, t) {
            const n = JSON.parse(t);
            let s;
            if (mp.vehicles.forEachInRange(this.fillingCoord, this.fillingCoord.r, e => {
                e.id === n.id && (s = e)
            }), !s) return;
            if (s.engine) return void e.notify(`~r~${a.get("sGasStation", "offEngine", e.lang)}!`);
            if (s.getOccupants().length > 0) return void e.notify(`~r~${a.get("sGasStation", "passengersDropOff", e.lang)}!`);
            const r = Math.ceil(n.litres * this.fuelprice);
            if (!await e.changeMoney(-r)) return;
            const o = i.roundNum(r - n.litres, 2);
            this.updateTempGain(o), s.fillUp(n.litres), e.notify(`~g~${a.get("basic", "success", e.lang)}!`), i.log.debug(`${e.name} fill up car for $${r}`)
        }

        async updateFillingData(e, t) {
            const n = e.position,
                s = {x: i.roundNum(n.x, 2), y: i.roundNum(n.y, 2), z: i.roundNum(n.z, 2), r: i.roundNum(+t, 2)},
                r = JSON.stringify(s);
            await i.query(`UPDATE gasstation SET fillingCoord = '${r}' WHERE id = ${this.id}`), e.notify(`~g~${a.get("basic", "success", e.lang)}!`)
        }

        async updateCamData(e, t) {
            const n = e.position, s = {
                x: i.roundNum(n.x, 2),
                y: i.roundNum(n.y, 2),
                z: i.roundNum(n.z + 2, 2),
                rz: i.roundNum(e.heading, 2),
                viewangle: +t
            }, r = JSON.stringify(s);
            await i.query(`UPDATE gasstation SET camData = '${r}' WHERE id = ${this.id}`), this.camData = r, e.notify(`~g~${a.get("basic", "success", e.lang)}!`)
        }

        updateTempGain(e) {
            if (this.tempGain += e, this.tempGain < 1) return;
            const t = Math.ceil(this.tempGain);
            this.tempGain -= t, this.addMoneyToBalance(t)
        }

        openBuyerMenu(e) {
            if (e.vehicle) return;
            const t = JSON.stringify(this.getCarsCanFillUp());
            let n = `app.id = ${this.id};`;
            n += `app.margin = ${this.margin};`, n += "app.updatePriceForLitre();", n += `app.updateCars('${t}');`, e.call("cGasStation-OpenBuyerMenu", [e.lang, n, this.camData]), i.log.debug(`${e.name} enter a gas station menu`)
        }
    }

    mp.events.add({
        playerEnterColshape: (e, t) => {
            if (e.loggedIn && e.vehicle && t.gasStationFillingId) {
                const n = s.getBusiness(t.gasStationFillingId);
                e.notify(`${a.get("sGasStation", "fuelPrice", e.lang)}: ~g~$${n.fuelprice}`)
            }
        }, playerExitColshape: (e, t) => {
            e.loggedIn && e.vehicle && t.gasStationFillingId && e.notify(`~g~${a.get("sGasStation", "goodJourney", e.lang)}`)
        }, "sGasStation-FillUp": (e, t) => {
            const n = e.canOpen.businessBuyerMenu;
            n && s.getBusiness(n).fillUpCar(e, t)
        }
    }), async function () {
        const e = await i.query("SELECT * FROM business INNER JOIN gasstation ON business.id = gasstation.id");
        for (let t = 0; t < e.length; t++) {
            new r(e[t]).createFillingColshape()
        }
    }(), mp.events.addCommand({
        creategasstation: async (e, t) => {
            if (e.adminlvl < 1) return;
            const n = s.getCountOfBusinesses() + 1, a = i.getPlayerCoordJSON(e), r = Number(t.replace(/\D+/g, "")),
                o = i.query(`INSERT INTO business (title, coord, price) VALUES ('Gas Station', '${a}', '${r}');`),
                l = i.query(`INSERT INTO gasstation (id) VALUES ('${n}');`);
            await Promise.all([o, l]), e.outputChatBox("!{#4caf50} Gas Station successfully created!")
        }, setgasstationfillingpos: async (e, t, n, i) => {
            if (e.adminlvl < 1) return;
            s.getBusiness(+n).updateFillingData(e, i)
        }, setgasstationcamdata: async (e, t, n, i) => {
            if (e.adminlvl < 1) return;
            s.getBusiness(+n).updateCamData(e, i)
        }
    })
}, function (e, t, n) {
    const s = n(0), i = n(1), a = n(12);
    new class extends a {
        constructor() {
            const e = {name: "Orange Collector", x: 405.676, y: 6526.119, z: 27.709, rot: 0, dim: 0};
            s.log.debug("Orange Collector : " + e), super(e), this.posToDrop = {
                x: 331.74,
                y: 6541.576,
                z: 28.417
            }, this.checkPoints = [{x: 378.583, y: 6517.85, z: 27.7}, {x: 378.304, y: 6506.14, z: 27.7}, {
                x: 370.188,
                y: 6506.349,
                z: 27.7
            }, {x: 370.455, y: 6517.792, z: 27.7}, {x: 368.892, y: 6531.863, z: 27.7}, {
                x: 362.015,
                y: 6531.501,
                z: 27.7
            }, {x: 363.063, y: 6517.922, z: 27.7}, {x: 363.256, y: 6506.289, z: 27.7}, {
                x: 354.857,
                y: 6504.864,
                z: 27.7
            }, {x: 355.179, y: 6516.821, z: 27.7}, {x: 354.111, y: 6530.424, z: 27.7}, {
                x: 345.973,
                y: 6530.799,
                z: 27.7
            }, {x: 347.625, y: 6517.124, z: 27.7}, {x: 348.232, y: 6505.646, z: 27.7}, {
                x: 340.024,
                y: 6505.893,
                z: 27.7
            }, {x: 338.755, y: 6517.642, z: 27.7}, {x: 338.543, y: 6530.713, z: 27.7}, {
                x: 329.836,
                y: 6531.433,
                z: 27.7
            }, {x: 329.83, y: 6517.543, z: 27.7}, {x: 330.54, y: 6506.052, z: 27.7}, {
                x: 321.837,
                y: 6504.873,
                z: 27.7
            }, {x: 321.42, y: 6517.296, z: 27.7}, {
                x: 321.355,
                y: 6530.995,
                z: 27.7
            }], this.treeMarkersList = [], mp.events.add({
                playerEnterColshape: (e, t) => {
                    e.loggedIn && !e.vehicle && this.isPlayerWorksHere(e) && (t.orangeCollectorTree === e.job.activeTree ? (e.playAnimation("anim@mp_snowball", "pickup_snowball", 1, 47), e.call("cMisc-CallServerEvenWithTimeout", ["sOrangeCollector-EnteredTreeShape", 2400])) : t === this.dropShape && (e.playAnimation("anim@mp_snowball", "pickup_snowball", 1, 47), e.call("cMisc-CallServerEvenWithTimeout", ["sOrangeCollector-EnteredDropShape", 2400])))
                }, "sOrangeCollector-EnteredTreeShape": e => {
                    this.enteredTreeShape(e)
                }, "sOrangeCollector-EnteredDropShape": e => {
                    this.enteredDropShape(e)
                }, "sOrangeCollector-StartWork": e => {
                    this.startWork(e)
                }, "sOrangeCollector-FinishWork": e => {
                    this.finishWork(e)
                }
            }), this.createMenuToDrop(), this.createCheckpoints()
        }

        setLocalSettings() {
            this.blip.model = 514, this.blip.color = 17
        }

        createMenuToDrop() {
            this.dropMarker = mp.markers.new(1, new mp.Vector3(this.posToDrop.x, this.posToDrop.y, this.posToDrop.z - 1), .75, {
                color: [255, 165, 0, 100],
                visible: !1
            }), this.dropShape = mp.colshapes.newSphere(this.posToDrop.x, this.posToDrop.y, this.posToDrop.z, 1)
        }

        createCheckpoints() {
            for (let e = 0; e < this.checkPoints.length; e++) {
                const t = mp.markers.new(1, new mp.Vector3(this.checkPoints[e].x, this.checkPoints[e].y, this.checkPoints[e].z - 1), 3, {
                    color: [255, 165, 0, 50],
                    visible: !1
                });
                t.orangeCollectorTree = e, this.treeMarkersList.push(t), mp.colshapes.newSphere(this.checkPoints[e].x, this.checkPoints[e].y, this.checkPoints[e].z, 3).orangeCollectorTree = e
            }
        }

        pressedKeyOnMainShape(e) {
            let t = "";
            e.job.name === this.name && (t = "app.loadFinish();"), e.call("cOrangeCollector-OpenMainMenu", [e.lang, t])
        }

        startWork(e) {
            super.startWork(e), e.job = {
                name: this.name,
                collected: 0,
                activeTree: !1
            }, this.createRandomCheckPoint(e), this.dropMarker.showFor(e)
        }

        setWorkingClothesForMan(e) {
            e.setProp(0, 14, 0), e.setClothes(11, 78, s.getRandomInt(0, 15), 0), e.setClothes(3, 14, 0, 0), e.setClothes(252, 0, 0, 0), e.setClothes(4, 0, s.getRandomInt(0, 15), 0)
        }

        setWorkingClothesForWoman(e) {
            e.setProp(0, 14, 0), e.setClothes(11, 78, s.getRandomInt(0, 7), 0), e.setClothes(3, 9, 0, 0), e.setClothes(82, 0, 0, 0), e.setClothes(4, 1, s.getRandomInt(0, 15), 0)
        }

        createRandomCheckPoint(e) {
            const t = s.getRandomInt(0, this.checkPoints.length - 1);
            return t === e.job.activeTree ? this.createRandomCheckPoint(e) : (this.hideActiveCheckPoint(e), this.treeMarkersList[t].showFor(e), e.job.activeTree = t, t)
        }

        hideActiveCheckPoint(e) {
            const t = e.job.activeTree;
            "number" == typeof t && (this.treeMarkersList[t].hideFor(e), e.job.activeTree = !1)
        }

        enteredTreeShape(e) {
            if (e.stopAnimation(), e.job.collected += s.getRandomInt(1, 2), e.notify(`${i.get("sOrangeCollector", "collected1", e.lang)} ~g~${e.job.collected} ~w~${i.get("sOrangeCollector", "collected2", e.lang)}!`), e.job.collected < 20) return this.createRandomCheckPoint(e);
            this.hideActiveCheckPoint(e), e.notify(`~g~${i.get("sOrangeCollector", "full", e.lang)}!`)
        }

        enteredDropShape(e) {
            if (e.stopAnimation(), 0 === e.job.collected) return e.notify(`${i.get("sOrangeCollector", "empty", e.lang)}!`);
            const t = 160 * e.job.collected;
            e.changeMoney(t), e.notify(`${i.get("basic", "earned1", e.lang)} ~g~$${t}! ~w~${i.get("basic", "earned2", e.lang)}!`), e.loyality < 50 && e.addLoyality(e.job.collected / 10), s.log.debug(`${e.name} earned $${t} at orange collector job!`), e.job.collected = 0, e.job.activeTree || this.createRandomCheckPoint(e)
        }

        finishWork(e) {
            this.hideActiveCheckPoint(e), this.dropMarker.hideFor(e), super.finishWork(e)
        }
    }
}, function (e, t, n) {
    const s = n(0), i = n(1), a = n(12);
    new class extends a {
        constructor() {
            const e = {name: "Maria Collector", x: 2212.994, y: 5577.482, z: 53.786, rot: 0, dim: 0};
            s.log.debug("Maria Collector : " + e), super(e), this.posToDrop = {
                x: 2196.048,
                y: 5588.626,
                z: 53.537
            }, this.checkPoints = [{
                x: 2234.38,
                y: 5577.286,
                z: 53.932
            }], this.treeMarkersList = [], mp.events.add({
                playerEnterColshape: (e, t) => {
                    e.loggedIn && !e.vehicle && this.isPlayerWorksHere(e) && (t.mariaCollectorTree === e.job.activeTree ? (e.playAnimation("anim@mp_snowball", "pickup_snowball", 1, 47), e.call("cMisc-CallServerEvenWithTimeout", ["sMariaCollector-EnteredTreeShape", 2400])) : t === this.dropShape && (e.playAnimation("anim@mp_snowball", "pickup_snowball", 1, 47), e.call("cMisc-CallServerEvenWithTimeout", ["sMariaCollector-EnteredDropShape", 2400])))
                }, "sMariaCollector-EnteredTreeShape": e => {
                    this.enteredTreeShape(e)
                }, "sMariaCollector-EnteredDropShape": e => {
                    this.enteredDropShape(e)
                }, "sMariaCollector-StartWork": e => {
                    this.startWork(e)
                }, "sMariaCollector-FinishWork": e => {
                    this.finishWork(e)
                }
            }), this.createMenuToDrop(), this.createCheckpoints()
        }

        setLocalSettings() {
            this.blip.model = 514, this.blip.color = 17
        }

        createMenuToDrop() {
            this.dropMarker = mp.markers.new(1, new mp.Vector3(this.posToDrop.x, this.posToDrop.y, this.posToDrop.z - 1), .75, {
                color: [255, 165, 0, 100],
                visible: !1
            }), this.dropShape = mp.colshapes.newSphere(this.posToDrop.x, this.posToDrop.y, this.posToDrop.z, 1)
        }

        createCheckpoints() {
            for (let e = 0; e < this.checkPoints.length; e++) {
                const t = mp.markers.new(1, new mp.Vector3(this.checkPoints[e].x, this.checkPoints[e].y, this.checkPoints[e].z - 1), 3, {
                    color: [255, 165, 0, 50],
                    visible: !1
                });
                t.mariaCollectorTree = e, this.treeMarkersList.push(t), mp.colshapes.newSphere(this.checkPoints[e].x, this.checkPoints[e].y, this.checkPoints[e].z, 3).mariaCollectorTree = e
            }
        }

        pressedKeyOnMainShape(e) {
            let t = "";
            e.job.name === this.name && (t = "app.loadFinish();"), e.call("cMariaCollector-OpenMainMenu", [e.lang, t])
        }

        startWork(e) {
            super.startWork(e), e.job = {
                name: this.name,
                collected: 0,
                activeTree: !1
            }, this.createRandomCheckPoint(e), this.dropMarker.showFor(e)
        }

        setWorkingClothesForMan(e) {
            e.setProp(0, 14, 0), e.setClothes(11, 78, s.getRandomInt(0, 15), 0), e.setClothes(3, 14, 0, 0), e.setClothes(252, 0, 0, 0), e.setClothes(4, 0, s.getRandomInt(0, 15), 0)
        }

        setWorkingClothesForWoman(e) {
            e.setProp(0, 14, 0), e.setClothes(11, 78, s.getRandomInt(0, 7), 0), e.setClothes(3, 9, 0, 0), e.setClothes(82, 0, 0, 0), e.setClothes(4, 1, s.getRandomInt(0, 15), 0)
        }

        createRandomCheckPoint(e) {
            const t = s.getRandomInt(0, this.checkPoints.length - 1);
            return t === e.job.activeTree ? this.createRandomCheckPoint(e) : (this.hideActiveCheckPoint(e), this.treeMarkersList[t].showFor(e), e.job.activeTree = t, t)
        }

        hideActiveCheckPoint(e) {
            const t = e.job.activeTree;
            "number" == typeof t && (this.treeMarkersList[t].hideFor(e), e.job.activeTree = !1)
        }

        enteredTreeShape(e) {
            if (e.stopAnimation(), e.job.collected += s.getRandomInt(1, 2), e.notify(`${i.get("sMariaCollector", "collected1", e.lang)} ~g~${e.job.collected} ~w~${i.get("sMariaCollector", "collected2", e.lang)}!`), e.job.collected < 20) return this.createRandomCheckPoint(e);
            this.hideActiveCheckPoint(e), e.notify(`~g~${i.get("sMariaCollector", "full", e.lang)}!`)
        }

        enteredDropShape(e) {
            if (e.stopAnimation(), 0 === e.job.collected) return e.notify(`${i.get("sMariaCollector", "empty", e.lang)}!`);
            const t = 160 * e.job.collected;
            e.changeMoney(t), e.notify(`${i.get("basic", "earned1", e.lang)} ~g~$${t}! ~w~${i.get("basic", "earned2", e.lang)}!`), e.loyality < 50 && e.addLoyality(e.job.collected / 10), s.log.debug(`${e.name} earned $${t} at maria collector job!`), e.job.collected = 0, e.job.activeTree || this.createRandomCheckPoint(e)
        }

        finishWork(e) {
            this.hideActiveCheckPoint(e), this.dropMarker.hideFor(e), super.finishWork(e)
        }
    }
}, function (e, t, n) {
    const s = n(0), i = n(1), a = n(12);
    new class extends a {
        constructor() {
            super({
                name: "Cluckin Bell Courier",
                x: -145.918,
                y: 6303.983,
                z: 31.559,
                rot: 131.94,
                dim: 0
            }), this.getOrderCoord = {
                x: -139.975,
                y: 6301.485,
                z: 31.488,
                rot: 134.19
            }, this.deliveryPoints = [{x: -198.063, y: 6234.902, z: 31.5}, {
                x: -298.398,
                y: 6191.967,
                z: 31.489
            }, {x: -342.872, y: 6098.942, z: 31.332}, {x: -381.071, y: 6061.897, z: 31.5}, {
                x: -395.839,
                y: 6077.874,
                z: 31.5
            }, {x: -366.815, y: 6101.681, z: 35.44}, {x: -414.46, y: 6173.699, z: 31.478}, {
                x: -373.985,
                y: 6187.07,
                z: 31.536
            }, {x: -365.139, y: 6206.338, z: 31.573}, {x: -346.794, y: 6224.036, z: 31.511}, {
                x: -309.96,
                y: 6273.621,
                z: 31.492
            }, {x: -260.763, y: 6291.354, z: 31.484}, {x: -213.063, y: 6358.329, z: 31.492}, {
                x: -216.438,
                y: 6375.306,
                z: 31.518
            }, {x: -236.293, y: 6421.802, z: 31.204}, {x: -218.095, y: 6454.488, z: 31.199}, {
                x: -110.337,
                y: 6457.95,
                z: 31.466
            }, {x: -33.145, y: 6455.303, z: 31.476}, {x: -127.034, y: 6551.019, z: 29.503}, {
                x: -106.835,
                y: 6530.79,
                z: 29.858
            }, {x: -35.13, y: 6581.948, z: 31.459}, {x: -29.519, y: 6599.831, z: 31.471}, {
                x: -39.694,
                y: 6637.645,
                z: 31.088
            }, {x: -2.638, y: 6614.571, z: 31.471}, {x: -8.345, y: 6652.296, z: 31.114}, {
                x: 40.488,
                y: 6660.142,
                z: 31.7
            }, {x: 120.522, y: 6643.05, z: 31.834}, {x: 26.697, y: 6605.031, z: 32.47}, {
                x: 15.695,
                y: 6575.519,
                z: 32.716
            }, {x: -25.021, y: 6554.832, z: 31.92}, {x: 2.473, y: 6499.43, z: 31.449}, {
                x: -59.498,
                y: 6392.666,
                z: 31.49
            }, {x: -91.387, y: 6355.255, z: 35.501}, {x: 52.409, y: 6487.162, z: 31.427}, {
                x: -450.65,
                y: 6268.777,
                z: 33.33
            }, {x: -400.974, y: 6321.669, z: 28.946}, {x: -358.623, y: 6333.534, z: 29.839}, {
                x: -319.229,
                y: 6301.614,
                z: 36.584
            }, {x: -290.511, y: 6320.165, z: 32.513}, {x: -269.89, y: 6353.946, z: 32.49}, {
                x: -269.945,
                y: 6400.332,
                z: 31.342
            }], this.deliveryPointsList = [], mp.events.add({
                playerEnterColshape: (e, t) => {
                    !e.vehicle && e.loggedIn && this.isPlayerWorksHere(e) && (t === this.getOrderColshape ? this.playerEntersGetOrderShape(e) : "number" == typeof e.job.currentOrder && t === this.deliveryPointsList[e.job.currentOrder].colshape && this.successDeliver(e))
                }, playerExitColshape: (e, t) => {
                    e.loggedIn && t === this.getOrderColshape && this.playerExitsGetOrderShape(e)
                }, "sKeys-E": e => {
                    e.loggedIn && e.job.canGetNewOrder && this.playerPressedKeyOnNewOrderShape(e)
                }, playerQuit: (e, t, n) => {
                    e.loggedIn && this.isPlayerWorksHere(e) && this.finishWork(e)
                }
            }), this.createEntities()
        }

        setLocalSettings() {
            this.blip.model = 514, this.blip.color = 60
        }

        createEntities() {
            this.getOrderColshape = mp.colshapes.newSphere(this.getOrderCoord.x, this.getOrderCoord.y, this.getOrderCoord.z, .5), this.getOrderMarker = mp.markers.new(1, new mp.Vector3(this.getOrderCoord.x, this.getOrderCoord.y, this.getOrderCoord.z - 1), .75, {
                color: [255, 165, 0, 255],
                visible: !1
            });
            for (const e of this.deliveryPoints) {
                const t = mp.markers.new(1, new mp.Vector3(e.x, e.y, e.z - 1), .75, {
                    color: [0, 255, 255, 100],
                    visible: !1
                }), n = mp.colshapes.newSphere(e.x, e.y, e.z, 1), s = {
                    blip: mp.blips.new(1, new mp.Vector3(e.x, e.y, e.z), {shortRange: !0, scale: 0, color: 60}),
                    marker: t,
                    colshape: n
                };
                this.deliveryPointsList.push(s)
            }
        }

        enteredMainShape(e) {
            this.isPlayerWorksHere(e) ? (e.notify(`${i.get("sCBDeliveryMen", "uninvite", e.lang)}!`), "number" == typeof e.job.currentOrder && e.outputChatBox(`!{225, 0, 0}${i.get("sCBDeliveryMen", "haveUndeliveredOrder", e.lang)}!`)) : e.notify(`${i.get("sCBDeliveryMen", "invite", e.lang)}!`)
        }

        pressedKeyOnMainShape(e) {
            this.isPlayerWorksHere(e) ? this.finishWork(e) : this.isPlayerWorksOnOtherJob(e) ? e.notify(`~r~${i.get("basic", "workingOnOtherJob", e.lang)}!`) : this.startWork(e)
        }

        finishWork(e) {
            "number" == typeof e.job.currentOrder && (e.newFine(500, `Cluckin Bell - ${i.get("sCBDeliveryMen", "undelivered", e.lang)}`), e.removeLoyality(10)), this.cancelCurrentOrder(e), super.finishWork(e)
        }

        startWork(e) {
            if (e.loyality < 5) return e.notify(`~r~${i.get("basic", "needMoreLoyality1", e.lang)} 5 ${i.get("basic", "needMoreLoyality2", e.lang)}!`);
            super.startWork(e), e.job = {
                name: this.name,
                currentOrder: !1,
                canGetNewOrder: !1
            }, this.getOrderMarker.showFor(e)
        }

        playerEntersGetOrderShape(e) {
            if (this.isPlayerWorksHere(e)) {
                if ("number" == typeof e.job.currentOrder) return e.notify(`~r~${i.get("sCBDeliveryMen", "cantGetNewOrder", e.lang)}!`);
                e.job.canGetNewOrder = !0, e.notify(`${i.get("sCBDeliveryMen", "getNewOrder", e.lang)}!`)
            }
        }

        playerPressedKeyOnNewOrderShape(e) {
            e.notify(`~g~${i.get("sCBDeliveryMen", "deliver", e.lang)}!`), this.generateNewOrder(e)
        }

        generateNewOrder(e) {
            const t = s.getRandomInt(0, this.deliveryPointsList.length - 1);
            return t === e.job.currentOrder ? this.generateNewOrder(e) : (this.cancelCurrentOrder(e), this.deliveryPointsList[t].marker.showFor(e), this.deliveryPointsList[t].blip.routeFor(e, 60, .7), e.job.currentOrder = t, t)
        }

        cancelCurrentOrder(e) {
            if ("number" != typeof e.job.currentOrder) return;
            const t = e.job.currentOrder;
            this.deliveryPointsList[t].marker.hideFor(e), this.deliveryPointsList[t].blip.unrouteFor(e), e.job.currentOrder = !1
        }

        playerExitsGetOrderShape(e) {
            e.job.canGetNewOrder = !1
        }

        successDeliver(e) {
            const t = 837 + s.getRandomInt(500, 1e3);
            e.changeMoney(t), e.notify(`${i.get("basic", "earned1", e.lang)} ~g~$${t}! ~w~${i.get("basic", "earned2", e.lang)}!`), e.loyality < 150 && e.addLoyality(1), this.cancelCurrentOrder(e), s.log.debug(`${e.name} earned $${t}`)
        }
    }
}, function (e, t, n) {
    n(44), n(45), n(10), n(5), n(11), n(0), n(1)
}, function (e, t, n) {
    const s = n(5), i = n(1);
    const a = new class extends s {
        constructor() {
            super(), this.mainEntranceData = {
                outPos: {x: -1107.097, y: -846.088, z: 19.317, rot: 129.39, dim: 0},
                inPos: {x: 437.286, y: -978.417, z: 30.69, rot: 178.7, dim: 0},
                outBlipId: 461,
                outBlipCol: 3,
                outBlipName: "LS Police Department",
                outBlipScale: 1,
                outShapeR: 1,
                outMarkerId: 1,
                outMarkerHeightAdjust: -1,
                outMarkerR: .75,
                outMarkerCol: [30, 144, 255, 15],
                inShapeR: 1,
                inMarkerId: 1,
                inMarkerHeightAdjust: -1,
                inMarkerR: .75,
                inMarkerCol: [30, 144, 255, 15]
            }, this.createMainEntrance()
        }

        createMainEntrance() {
            this.mainEntrance = super.createDoubleEntrance(this.mainEntranceData)
        }

        enteredBuildingShape(e, t) {
            t === this.mainEntrance.out.entranceId ? e.notify(`${i.get("basic", "pressE", e.lang)} ${i.get("basic", "toEnter", e.lang)}`) : t === this.mainEntrance.in.entranceId && e.notify(`${i.get("basic", "pressE", e.lang)} ${i.get("basic", "toExit", e.lang)}`)
        }

        tryToEnter(e, t) {
            if (t === this.mainEntrance.out.entranceId) {
                if (e.vehicle) return;
                return e.tp(this.mainEntranceData.inPos)
            }
            if (t === this.mainEntrance.in.entranceId) {
                if (e.vehicle) return;
                e.tp(this.mainEntranceData.outPos)
            }
        }
    };
    e.exports = a
}, function (e, t, n) {
    new (n(11))({
        basic: {
            outPos: {x: -1121.295, y: -843.354, z: 12.966, rot: 310.88, dim: 0},
            outBlipId: 50,
            outBlipCol: 3,
            outBlipName: "LS Police Department Garage",
            outBlipScale: .7,
            outShapeR: 3,
            startDim: 11,
            floors: 5,
            camData: {x: -1130.153, y: -846.02, z: 13.577, rx: 0, ry: 0, rz: 299.78, viewangle: 30}
        },
        topExit: {x: -1124.514, y: -839.376, z: 12.981, rot: 129.81, r: 3, dim: 0},
        undergroundExit: {x: 224.327, y: -1002.948, z: -98.984, rot: 180.96, r: 3},
        undergroundCheckCoord: {x: 231.896, y: -1003.318, z: -98.985, rot: 358, r: 3},
        shapesList: [],
        checkShapesList: []
    }, {
        topEntrance: {x: 445.839, y: -996.392, z: 30.69, rot: 10, r: 1, dim: 0},
        undergroundEntrance: {x: 241.378, y: -1004.781, z: -99, rot: 88.36, r: 1},
        shapesList: []
    })
}, function (e, t, n) {
    const s = n(18), i = n(0), a = n(9), r = n(1), o = n(6);
    new class {
        constructor() {
            mp.events.add({
                "sKeys-M": e => {
                    if (!e.loggedIn) return;
                    let t = `app.d.cash = ${e.money.cash};`;
                    t += `app.pName = '${e.name}';`, t += `app.d.loyality = ${e.loyality};`, e.vehicle && (t += `app.d.currentVehicleId = ${e.vehicle.id};`), t += `app.loadVehicles('${a.getVehiclesForPlayerMenu(e.guid)}');`, t += `app.loadPassengers('${a.getPassengersForPlayerMenu(e)}');`, t += `app.loadViolations('${JSON.stringify(e.jail.violations)}');`, e.call("cMenu-Open", [e.lang, t]), i.log.debug(`${e.name} opens menu`)
                }, "sMenu-SetLang": (e, t) => {
                    const n = ["eng", "rus", "ger", "br", "zhs", "zht", "cs"][t];
                    n && (e.notify(`~g~${r.get("basic", "success", e.lang)}!`), i.query(`UPDATE users SET lang = '${n}' WHERE id = '${e.guid}'`), e.lang = n)
                }, "sMenu-ChangePass": async (e, t) => {
                    const n = JSON.parse(t),
                        s = await i.query(`SELECT password FROM users WHERE id = '${e.guid}' LIMIT 1`);
                    if (this.hashPassword(n.oldPass) !== s[0].password) return e.notify(`~r~${r.get("sMenu", "wrongOldPass", e.lang)}!`);
                    const a = this.hashPassword(n.newPass);
                    await i.query(`UPDATE users SET password = '${a}' WHERE id = '${e.guid}' LIMIT 1`);
                    const l = {
                        from: `${o.getMailAdress()}`,
                        to: `${e.email}`,
                        subject: "Password has been changed",
                        text: `Hello! Your new password is: ${n.newPass}`,
                        html: `<b>Hello!</b><br>Your new password is: ${n.newPass}`
                    };
                    o.sendMail(l), e.notify(`~g~${r.get("basic", "success", e.lang)}!`)
                }, "sMenu-RestoreVehicle": async (e, t) => {
                    const n = mp.vehicles.at(t);
                    n && n.ownerId === e.guid && (n.position = new mp.Vector3(417.153, -1627.647, 28.857), n.rotation.z = 240, n.repair(), n.locked = !0, n.engine = !1, e.newFine(n.info.price / 5, `911 call for ${n.title}`))
                }
            })
        }

        hashPassword(e) {
            const t = s.createCipher("aes192", "a pass");
            let n = t.update(e, "utf8", "hex");
            return n += t.final("hex"), n
        }
    }
}, function (e, t, n) {
    const s = n(7), i = n(3);
    new class {
        constructor() {
            mp.events.add("sGPS-CreateRoute", (e, t) => {
                const n = JSON.parse(t);
                let a, r;
                if ("Hospital" === n.name && (a = -498.184, r = -335.741), "Prison" === n.name && (a = 1846.283, r = 2585.906), "Orange Collector" === n.name && (a = 405.676, r = 6526.119), "Maria Collector" === n.name && (a = 2212.994, r = 5577.482), "Clickin Bell Delivery Courier" === n.name && (a = -136.757, r = 6198.713), "ATM" === n.name) {
                    const t = s.getNearestATM(e.position);
                    a = t.x, r = t.y
                }
                if ("Gas Station" === n.name || "Clothing Shop" === n.name || "Barber Shop" === n.name) {
                    const t = i.getNearestBusiness(n.name, e.position);
                    a = t.x, r = t.y
                }
                if ("Business" === n.name) {
                    const e = i.getBusinessPositionById(n.id);
                    if (!e) return;
                    a = e.x, r = e.y
                }
                if ("Find Vehicle" === n.name) {
                    const e = mp.vehicles.at(n.id).position;
                    if (!e) return;
                    a = e.x, r = e.y
                }
                this.createRoute(e, a, r)
            })
        }

        createRoute(e, t, n) {
            e.call("cGPS-CreateRoute", [t, n])
        }
    }
}, function (e, t) {
    mp.events.add("playerReady", e => {
        e.notify = function (e, t = !1, n = -1, s = -1, i = [77, 77, 77, 200]) {
            this.call("BN_Show", [e, t, n, s, i])
        }, e.notifyWithPicture = function (e, t, n, s, i = 0, a = !1, r = -1, o = -1, l = [77, 77, 77, 200]) {
            this.call("BN_ShowWithPicture", [e, t, n, s, i, a, r, o, l])
        }
    })
}]);