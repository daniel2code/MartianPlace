import React, { useState } from "react";
import { NftCard } from "../components/elements/card/index";
import CardList from "../components/widgets/card-list";
import Tab from "../components/elements/tab";
import { hide, show } from "../public/assets/icons/index";

const Vault = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className="mx-5 lg:mx-36 sm:mx-10 mt-20 mb-5">
        <h1 className="text-[25px] font-bold">My Vault</h1>

        <div className="flex items-center mt-10">
          <div>
            <Tab
              active={activeTab === "all"}
              onClick={() => setActiveTab("all")}
              label="Private"
              baseIcon={hide}
              activeIcon={hide}
            />
          </div>
          <div className="ml-10">
            <Tab
              active={activeTab === "show"}
              onClick={() => setActiveTab("show")}
              label="Public"
              baseIcon={show}
              activeIcon={show}
            />
          </div>
        </div>
        <div className=" border-b-2 border-button-group-border-grey" />
        <CardList grid={true} fullWidth={true}>
          {[...Array(5)].map(() => {
            return (
              <div>
                <NftCard cardButton={true} />{" "}
              </div>
            );
          })}
        </CardList>
      </div>
    </>
  );
};

export default Vault;
