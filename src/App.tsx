import React from 'react';
import {Header} from "./component/header/Header";
import {RecommendAdd} from "./component/body/RecommendAdd";
import {GroupComponent} from "./component/body/group/GroupComponent";
import {CurrentPageInitializer} from "./info/CurrentPage";

export const App = () => {
    return (<div className={"flex flex-col gap-[50px]"}>
        <CurrentPageInitializer/>
        <Header/>
        <Group
            groups={[
                {
                    logo: "/images/qwer.png",
                    name: "QWER"
                },
                {
                    logo: "/images/le_sserafim.png",
                    name: "LE SSERAFIM"
                }
            ]}
            currentGroupMembers={[
                {
                    nickname: "Q",
                    name: "쵸단"
                },
                {
                    nickname: "W",
                    name: "마젠타"
                },
                {
                    nickname: "E",
                    name: "냥뇽녕냥"
                },
                {
                    nickname: "R",
                    name: "이시연"
                }
            ]}/>
        <RecommendAdd/>
    </div>);
}
