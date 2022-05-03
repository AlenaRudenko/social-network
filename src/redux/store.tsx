import { dialoguesReducer } from "./dialoguesReducer";
import { profileReducer } from "./profileReducer";
import { sideBarReducer } from "./sideBarReducer";

export interface IProfile {
  postsData: IPostdataItem[];
  newPostText: string;
}
export interface IPostdataItem {
  id: string;
  message: string;
  likesCount: string;
}
export interface IDialogue {
  messages: IDialogueMess[];
  dialoguesData: IDialogueItem[];
  newMessageBody: string;
}
export interface IDialogueItem {
  id: string;
  name: string;
}
export interface IDialogueMess {
  id: string;
  message: string;
}
export interface ISidebarItem {
  id: string;
  name: string;
  avatar: string;
}
export interface IState {
  profilePage: IProfile;
  dialoguesPage: IDialogue;
  sideBar: ISidebarItem[];
}
export interface IAction {
  type: string;
  payload?: any;
}

export const store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: "1",
          message: "Hi!",
          likesCount: "1"
        },
        {
          id: "2",
          message: "My first post",
          likesCount: "23"
        },
        {
          id: "3",
          message: "Hohohoh!",
          likesCount: "1"
        },
        {
          id: "4",
          message: "Hehehe!",
          likesCount: "1"
        }
      ],
      newPostText: ""
    },
    dialoguesPage: {
      messages: [
        {
          id: "1",
          message: "yo"
        },
        {
          id: "2",
          message: "вставай жить жизнь"
        },
        {
          id: "3",
          message: "hello"
        },
        {
          id: "4",
          message: "hohoho"
        },
        {
          id: "5",
          message: "yoooo"
        },
        {
          id: "6",
          message: "hihihihi"
        }
      ],
      dialoguesData: [
        {
          id: "1",
          name: "Artur"
        },
        {
          id: "2",
          name: "Alf"
        },
        {
          id: "3",
          name: "Anya"
        },
        {
          id: "4",
          name: "Misha"
        },
        {
          id: "5",
          name: "Maksim"
        }
      ],
      newMessageBody: ""
    },
    sideBar: [
      {
        id: "1",
        name: "Artur",
        avatar:
          "data:image/jpeg;base64,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"
      },
      {
        id: "2",
        name: "Alf",
        avatar:
          "https://sun9-49.userapi.com/impf/mMOvSqxRAe4jBf-nstD1KEBzOQOYlBTPqvvLbQ/rQHSplOPxag.jpg?size=1000x1333&quality=96&sign=102d1620e45178c9de474d3b2d431133&type=album"
      },
      {
        id: "4",
        name: "Misha",
        avatar:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGBgYGhgaHBgYGhoaHhoaGhoaGhoYGBocIS4lHCErIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0NDQ0NDQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xABCEAACAQIDBQQIAwYFAwUAAAABAgADEQQhMQUSQVFhBiJxgRMykaGxwdHwQlLhBxQVYnKSIzOCwvFTotIWJHSDk//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAAICAgMAAgIDAQAAAAAAAAABAhEDEiExQRNRMmEiI3EE/9oADAMBAAIRAxEAPwDzudnIRGh2EIRiCEIQA7CcnYwCEIQAIQhGATt5wSTQwpOZibAjTu5Lijstm4SfT2FfWQ5JFKLfhmRTnfRzVpsADO5jdTYdgbHO4tbxtFvErSRlis5aaHFbDYC4z4yobDMCctPv5ylJMlxa7IwMC0lNg2sGtkYl8KeWZ06+EpMl0Rw0ckzD7HZrFiADyzMaxmG3H3eFgQTy/wCby9ZJWyNot0hgRQWJElUVvlEgk6K8wEcrU7MRELEVfAQnbQgO0JhCEkAhCEACdnBOx0AQnZwx0AQnAJ20QBCcMn7Nwu+wHCJsB/Z2zie8R4S/w2CAzMdp4fMC0s0o3mEpM6IwXbG6NHLSTadCO0qeklokzLInoIk4eWe7ElIBZXthgcrSvqbJUnTX7+E0K0oGiIWOygGzlAIt185Fq7HBFrZcOk0rU+kUlCUpNMzlFMx1PDlVN9QSLSo2/SyR+XdPnmPgfbNl2kwe4gqLpcK3S+St7bDzEyuLG/TYcTcjxGk9GD2gefJazM5JGGfOR4pGzmS4ZrJWiZtPD5Bx5ysE01BPSUiOUzdWmVYg6g2jkvTPDK04vw7Yc4REJNmxyEkDCnn7jH8NhBfvWPThBRYOSRAnZdps6m3C3gTFfwJCbB2HiA30j0ZKnFlFCXbdmKv4HRulyp+BHvlViMKyOUcWZdRcG3mMoqaKtDIEWFigJwwGcgYQMAEoLmavYWFsoa0zOHXObXY1PuCZzdRKhzInpTk+kkZRM5PQCcx1WCCOhZ1VjyLAViRFKI76OAowAFE7aDJaJ3THQCN2OIIkIY/RSBLF4nCCpSdDo6keB4HyNj5TyeqCt1IsQSCOo1nsaCeVdqU3MTVX+a/9wDfAidn/ACy5aOPPH0ytZbMR1iRHsTrfyjMqSpgui62FX726eMZ7Q4TdcMBkcj4/fwkHCVd1gZqcfSFahca2uPEZy1/KNHLL+vKpeMxcIQmdHZsi0XzjtMdZGVpJpma2YtE6g/MjzEn4cDKwU9OPjK+hr+ktcIuhF/C0GwiuR3F1RRpu/dyGQvqx9Ue2YYkklibkm5J5nWaDtZi95kpj8I3m8ToD4D4ygtMmaiYkxZiTEM5OGdhAY7gxnNxsNSUB56eAmO2VT3mA5kCehYemFUACwAtMMr8NcS5bO1Klo6mLULe4tzOUg10ZmsBkMzJNLBMwF7e8WmVI2Hv4kii7NA9oKA1cfH4RjE7Bdst+wPLI+ZzlPW7FuNHuORlLX1kScvDVYbblFvVe8taOIDaTzyjsV6RzbLw980+y6hAFzc9YpV4VFOuTRMIncFo3Rzi6gsDJHR0kTiuoOsze1sS4vuAkzLttHEU3uVe335S4xsiTo9XosDPMu3yhcSbfiVSfEC1/ZaX2w9uFwCciOZGvhKP9oNImolX8Lpu+DKTf3EeybYXrKmc+RWjHPneMR5jGmm8yEAM0ew8UCChOukzRjmHxBQ3EmLonLj2jRrf4OOQ9kJUfx5ucJeyOT4chSUqhU9OUmpjlHBvd9ZXzkzUmj0HFMuU2sg/C3tEsML2ipqc1fhwU/wC6ZadTWPZsWqRY42uXd3P4iTnwHD3Rm33+nKdWd+/0JjZFjZiTFtEmIpCYGE0/Z7Y1OpTBcEs5YKRooU29t7yJSUVbLjFydIhdnKV3U9D/AMzeUadxKHZ+yvQV2S5YKikE8QSfflNZhxYCc+R27NoJxRHFILmZHxO26NI2ZxfkMz+ksq6bwtK3EbDpubsm90kJq+S/CtxHbhB6lN3txyA+cewfaCtW3t2mVCgEsln3Q17XBseHAGSq2w6bW7mgtyy5ZHSO0cKKYIQFd7M2JztzM1Wldcmes9uGqGMNVNQHvK9tbC3tEk0qYW0ap0wrFwp3zcFrnO8VTUk5zNmxe4Norab7qXEj4Z5MxNHfpkjUaGKhMy378u9mp+HxljhcRRcfh87ey+kzu0tib7ajIEG5bMn8Vzex8Y1s7s62+S7FbJZWpkXZrmxsO6QP5hnNVBON2ZynJSquDWnY1IneCAHplMr+0QhFopncl214AAfOXmxGxCOqVEyOW8PVI4EC53TzEy/7SXP7yi8FpKR/qZ7/AAjxL+RGToyJMbaKcxN51MyQ285FvESGMIQhEATk7CIZydTWEBBBRLp6fXT9Y4w+z8LfOIofdvqdI6fu2ftPKaGL7GW+76+FuEQYt/v/AJ4xBiZSEzd9kqo/d0HJ3XzuG+DTCTU9icT3npnS6VB4g7re0EeyZZFcTfC6kal2BrNmCQqg26EkD3ywom8o6dQelc9SPZLrCic7OiUadFhSp5RwpEUTHrRNDUUNlIk0hykkJApANUVmIQDxkV8hlLDGIF7xMq03nNwMrwQ6JuEl3hDlaV+CpDpLbD07WMa7Ik1RCxOAVjcaxmlgwDpn7Ja1yLkcYjcvBkp8CsOgtYzzL9qdG2JRvzUlHmrvf4ienopBmA/avTBag3Gzj3pNsP5UYZEeasIiOOIgidDIQkxEWYgyWMIQhEATsIQAIQhGBKw3L5A/GSHHn7/hkJFotoZLq/d/1y90tdGMuyO/398I2YtzJez9k1KxIQW7pYFgQCAbWBtb/iSylwivmk7EoTVe35Bb+4H5SxwHZ6nSUmpuu+X9K24Dn5zv8cFKoGCAjRgMsr6DnYaTOTtNIuE1GSL3G4FVO+tgSbsOZPGSsA2UhvtzDVEutRQfyt3T4WMewRO9a2Vsj1vOd36dl36XFKS0EioMpLp6RMaY8ogVgrQZsohlHthjcX0vIm0doNRp3Sk1Qn8uVupMuMZTDCxF7yvo0irbo05XvGhuqIGz9rVbqalIpvaWO8B0bIWmi/iNlLWJtnYZ3PIRDbPV1z1kylQXc3bQZD1GxiS6o9t053B5G2Rk6m1xEIgtaKppbKITaapD8wnbkK9ZEOe5T06sx/8AETcLKja2w0xHfVtx7a6hgMgGHDxGc3wySlbMMjpUeZVdj7w7qi/TjIdTZBUd64l7jEr0HZHVVIGmWnAg3zBlYcS7DvG3mPlO5KznbopauFF8r9ZFxFLdI6y/rrZSxPDh0merVy+tvASJqKQ4tsZtOzsJiaBCEIAEITojABJ2ApVKrBEXeY9bZDW5Ml7B2C+JNxkikbxJsSD+TLMz0TZmzEw6bqLa+rH1m4jePS8TlqRJop9ldlKdOz1f8RhZrEd0ZEW3b94Z8eIly1kG6AFAGQXK2egkh3vlxPHoNZWY4k3tr42mLk5PkRXbZxFxYatYZDXPL7MrDsJrFqjbuVwozJ4+E1GzdnfjZbn8OfDnIW2zdWuMrcefA8hLT8RFemNqKqkAakC/HM6T0bCcJ5fvk1FH8y6eOs9TomzGTmfR1YFSZZUDJqyFQElI0wZvY6xjJqXNo4/SRWfdubGAWLalcxa4UXv5Slr7cIawRr9QR8Zxto1zohz5EStWaRxykaQJllF4anzmeo42sPwP1zH1klq2IKlgoy4E2+AiocsTSLrE921o6hut5n8Nia7MN9N1QBY3vfxmgw3q+MPaOeScUN4uruI78gbePCUOAxnAnMZjhmeHXQyx7QuBSCn8R9wFz8BMxRcs1tevMjQS0Yy5NZjsFTxVMpUFjqGHrITxU/KeYdoNgVsM3fXeQmyuuYPIHkbDQz0jZLk2PSx62/F1ltXoo6FHUMrCxU6ETfHkcTFqzwSs40zlMRPRe3HZlsOrVaILUrZj1jTvYXJOZXPXhxnnc0nJSpoqCo5adhCQaBCEUqEkAC5OgEYjgE0vZvs21Yh6gK0+WhY8uglh2d7LDuvXGZOSHQf1c5tStgRa3DKRKVdGcpX0dw1EIoVVsqiwA4dBFOOI6TqvznTMWxIh1spCNPea3O15aOIYah3rxoGrJHoQqi3AZfrM/teiChBF9dOvjlNPU09onnna3tBZjSpnMeu/I/lXr1jjbY6MwR/7hRx9Io/7hPTap3e8OGvhPK8E5NZCTfvobn+oT1xEusMvaOjHwiRg6wIyk3elCL02vmVPulvQqgjWZM0sk+knQBGlzipA0M4qir6gZcYxQolONx1k90vIT4U52JlJmkZtdE9K4tnYSXQO8LcJQ0tnOWzJt4y6wlDdEbdBKVofrKI7QyFoyzxnaG0EooXY6DIczwES7MZdFT2ir7zhAclXPlc2NjyyCyuw9FR7vK1rfCRqGILnebN2ueQudb+HKS2t95E9Jp0YPkvMA2d7D8Itb5y7QgjKUGABv5aHj4GXVHS2Xl10jTI9FOJ5p2p7ADvVMLrcsaROVrEncPO/4TlPTHkZzLUmgPnv9xq/9Kp/+b/SE9+vOx7js+fsNhndt1FJPuHieE3fZ3YCUwHexfXe5dB9Y72f2UqIp9UkDetmb9ZoKeFHP3QlKuEZuTl/hxGHLx4x5CM/aIr910+oPsnRhCOB9kztBQ0549YLU56yQuHNre/5HjEtheNx4Wj4AbRxJFORDhWvp11krDkKpPLODAru1m1vQUDY2d+6o434nyGc8mbO99ecuu0+2P3msWHqJdUHxbz+QlKTNYxpFoQhs6nkRPXNlVw6KegnkI59Z6b2eqf4aEchIyrhG0GX1ancaXlYyvTN1zHL6S4QxNakDOc0INHaS885ZYevfWUeKwAOYNjzEj0sW9I98Fl5qM/MfOOhNmwpOI5kZSYTaaNoR985JTFi+sVFJlsmUcLStXFrzHnKrbXaejQHffefgi5seXgOpjSb6E2W20MclJC7sAqgkn9OM8k7S9pnxNS6krTT1F/3t1Puito7dq4h95zugHuoNF+p6yjxSANlkDnblzE6I4tVbMHO3Ra4XtFUW1wHtre4Jzy6D2TU7G7Q0nBaoWQrre+7bmGA9xsZ5/SYDO1+kvP3ffwzO/cI9QA2BsMgV43NgPAynFMhuj1HCbYw5CkVEKseDrqOFuEtMPjUa+64YqM8wb8RxngvoyiElTd8r2OQFiTfrGKOIdL7jMt8juki45G2sn419iq+j6EGOQkgMLgZjlK7F7Xpou8zquV+8bA65XOXA+yeH0654OynmGInMUzELvNvWyF9QPHUiP4/2LV3R63/AOrKH/Upf3icnj0IaD0/Z6PsDa6GmrNYWstyLXblaaGljlPG3u988aQkcSLco62Ic6uxytmx05ROKYlBrpntSYtTkGFxy+sfFdcr2HLMZzw1KzrfddhfWzEX8bRZxtW9/SPccd9vrF8a+ytWe6pUGotfxyPQxa1ByHzE8RbbuJKhfSvYcQbMf6m1PnFYfb+JRlb0jNu6ByWXzHHzh8f7DVntG5c8/I/CZbtxtb0SeiVDvOps18gND1vnpMBU7SYosWNd/AHdHkFtaMttd3N6jF/62ZreFzf2GOMafInFjG4YhntlzHISb6dDbUX5MD7jYiMOQdFGROedz45keyajT+xkTY9lcX3d0nSY9h0lrsHEbr2OvDrM5q4lxdM9PoPcR535ypwFeWyrvCcxuMODlxnDhgfv5R9lIiL2gIhnYqvmBY6XBIPujo2KBq7/AN31EscLiL6xOLxPAQtg0VdemiKzEkhQTdjfTXKeTVqxeo7nVmLe06T0TthitzDMvF7L7dfdeeb0tTN8S9M5sfLWEjVGuYuo0ewGELm+ijU/IdZs34Z8LljuBwlxvv6g/wC48h95yTtDFMUIIsAFUD+Ynez4ZBAPPrDEud/dXRLIgH52+Nhf3c8zHUAUKDVO9f8ANcDf+X9sVEXymxnBY8iynMSTVwdN8xkeNsj9D7JRqZYUq+XWNMJRp3EbxGC3dCbeA+vyjJwzcM/d8ZNLh8m15xrdZdO8sKQKUvSJ+7v+VvZCTPSr1hCkVu/ohRSicEUsks4wnI6Y2wjEmE4Z2JYwGIMdVMpyisdvnBCbG6T7pvmOoyI8JKDMcwwcfzZH+4/M+UiOIlGINwbQsGrJhI0IKnk2XmDObhBBBsdR+kQmIuN05Dlqv9v4fERwJbMGw5+sn1HnAno2XZvaYeyMbONRpvdV+c2eF0njyMRZtLaMpuARbMEZrqNZv+y23/SWp1CN/wDC2gcfJvjMJwrlGkcl8M1hUGNthhzjimF5kaWQ2wnWJdAslOZV4+tuqSeEYWYrttjN51QcMz48Jk0OsnbUrl3ZjxJt4cJBAJyGpnTBUqMm75HMPQLtbhxPyly3cAIFgPVB0Jt6zX0UazmGprTS5yGpPT9dPCLp0C536htxVOC8suLfC5lmEpW/0M4enugsdc7X173rOb8TwHAdSY+EO8D0ESBvOByN5NqWJ8I1wZSk2zNY/DbjkcDmPA8PLScU5S12rS3kuNVz8uP30lODJZ0QltEWHtCnVtEMY3eFlapk70ohIe9CFi0QiOI0bWGhiLHyYVI1eOtpGLoREPFGNmIY6hynUOcSYqlrGJgwjZEdaJIgCEAR1HKm4jZEUhiBklCra90/mGh8Rw8pJouUYbx3c7hxewN9TbMeI5DLjK8iPUcTYbjXK+9fDp0jshr6PVuzm1/SqUfKqgueTrwdfnLtjPKdi416TooNyO9Ra5II409Dk2YtlY3np9DErURXXRwCPofDSc+SNO0awlfDE1mme26/cI5y8xDzPbYfumJdmiR59jBa8c2Vht5rnQfDj7dPMxnHtdrSxClKGWr29mY+p850o55ulSHnffqBD6tvSHyW6gjkCfOw0zvMqAMMtc73Oh4mV2HYjElTxphR5KrfKTa+dmAzzgjnl4N4OjYlib9Y2tU3J43klzupujlIji0tEnXqe/K0paqbrFeWnhwlg7ZyNjl0bll5ffxkyNsfDoiExE6TCSbnIQvCIDhnWgDFQATJB0ke0fOkaExpokaxTTiDOAzrxdHWIfWKoaw9E+hbiJtJG5eJKR0TsM2iSsfKQ3IUPYZF4EGSFpRVRABChbHcE28PRk2ubofyvwtyvkPZPSOyGO9JQN8iGNxxDH1ha5OoJz5zy+kNfC823YjaoSuFe3o8T3WBtuisvGxIA3hY8TfIRSjsqC9ZWarE1LTPY1TVJRNB6z8FHzPSbDH7GpvxdRyVvqCR5TN9qKq0aBVAFAFhb7zMiOPnkqWZVwYDaboaqonqJx4k6sx65CT9ooVpgG9gqWJ431t5g+yUeGN3z473vBlxtzFE3Q6LYL4XJ+JM0RlJcpDFFv8AHTnamPaN0/GWSZKx6keQvKlf85ejUhw6fQy0qkgWHFm9xjRE/DjtcffKR30nXqaRotKISI7HOcqZi3OFQ5xh3ks2SIpgTF1hn4xuQbIIQhAYCKSEICAax4whGJjRnE1hCAwaLoawhD0T6JiQOkISzIBpAaQhAGK4RFeEIgXYzS18pY7K9ZP/AJFD/dCEENnt1fTynnn7QP8AL/1TkIIzMDg/XHn8DJu1v8w+InYQRrL8kJP+b/8AZS+DS0q6f6m+MIQXZlk8IlXQRDQhKJRHeRnnYSWbIRX4RmEJLNV0EIQiA//Z"
      },
      {
        id: "3",
        name: "Anya",
        avatar:
          "https://sun1-26.userapi.com/s/v1/if2/65ox8pZvoL_jA8K7lCWNFQhrqLB0EyvZCeaxa-_9K1zRoFJ4pWHAllMajP70J0lr0XOFW02kxESCmv2Mp6CzLK1R.jpg?size=183x182&quality=96&type=album"
      },
      {
        id: "5",
        name: "Maksim",
        avatar:
          "https://sun9-45.userapi.com/s/v1/if2/5qrCoX-3ACpD-vHKbaHHy_4JuqldWY7bTOOgwGW6GHQe9igza4gUxrfEggmZZRbD_igDgFFZXR3sccOAhu0d0TfA.jpg?size=609x610&quality=95&type=album"
      }
    ]
  },
  _callSubscriber() {
    console.log("state changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  }
  // dispatch(action: { type: string; payload: any }) {
  //   profileReducer(this._state.profilePage, action);
  //   dialoguesReducer(this._state.dialoguesPage, action);
  //   sideBarReducer(this._state.sideBar, action);
  //   this._callSubscriber();
  // }
};
