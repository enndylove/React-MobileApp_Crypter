import { useState, useEffect } from "react";
import "../../../../styles/Created.scss";
const Created = () => {
  const [LCreated, setLCreated] = useState(0),
    [LCollection, setLCollection] = useState(0),
    [LOwned, setLOwned] = useState(0);

  const onclickTag = (e) => {
    let tags = document.querySelectorAll("[data-tag]");
    let blocks = document.querySelectorAll(".created__blocks");
    let target = e.target;
    tags.forEach((tag) => {
      tag.classList.remove("active");
      target.classList.add("active");

      let activeTag = document.querySelector(".created__tag.active");
      let activeblocks = document.querySelector(
        `[data-block=${activeTag.getAttribute("data-tag")}]`
      );

      // eslint-disable-next-line array-callback-return
      blocks.forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
          activeblocks.classList.add("active");
        }
      });
    });
  };
  function blocksEmpty() {
    let createdBlock = document.querySelectorAll(".created__created-block"),
      collectionBlock = document.querySelectorAll(
        ".created__collection-block"
      ),
      ownedBlock = document.querySelectorAll(".created__owned-block"),
      createdBlocks = document.querySelector(".created__blocks-created"),
      ownedBlocks = document.querySelector(".created__blocks-owned"),
      collectionBlocks = document.querySelector(
        ".created__blocks-collection"
      );
    
    if (createdBlock.length === 0) {
      createdBlocks.innerHTML = `
    
    <div class="created__empty d-flex flex-column w-100 justify-content-center align-items-center">
      <h5 class="font-body1 color-white" style="text-align: center">
        You have no created nft
      </h5>
      <p class="created__empty-link font-caption">
        To create your own nft, follow the
        <a class='' href='#'>link</a>
      </p>
    </div>

    `;
    } else {
      setLCreated(createdBlock.length);
    }
    if (collectionBlock.length === 0) {
      collectionBlocks.innerHTML = `
    <div class="created__empty d-flex flex-column w-100 justify-content-center align-items-center">
      <h5 class="font-body1 color-white" style="text-align: center">
        You have no collectible NFTs
      </h5>
      <p class="created__empty-link font-caption">
        Collect NFTs to display in collections or reload page
      </p>
    </div>
    `;
    } else {
      setLCollection(collectionBlock.length);
    }

    if (ownedBlock.length === 0) {
      ownedBlocks.innerHTML = `
    <div class="created__empty d-flex flex-column w-100 justify-content-center align-items-center">
      <h5 class="font-body1 color-white" style="text-align: center">
        You do not own any NFTs
      </h5>
      <p class="created__empty-link font-caption">
        create your own NFTs to display here or reload page
      </p>
    </div>
    `;
    } else {
      setLOwned(ownedBlock.length);
    }
  }
  useEffect(() => {
    const fetchProfileDataFromServer = async () => {
      let ownedBlocks = document.querySelector(".created__blocks-owned"),
        collectionBlocks = document.querySelector(
          ".created__blocks-collection"
        );

      try {
        const responseOwned = await fetch("/owned/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseCollection = await fetch("/collections/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!responseOwned.ok || !responseCollection.ok) {
          blocksEmpty();
          throw new Error("Network response was not ok");
        }
        const ownedData = await responseOwned.json();
        const collectionData = await responseCollection.json();
        console.log("Owned Data from Server:", ownedData.ownedNFT);
        console.log(
          "Collection Data from Server:",
          collectionData.collectionsNFT
        );
        if (ownedData.ownedNFT === undefined || Object.keys(ownedData).length === 0) {
            console.error('ownedData empty')
        } else {
          let ownedSetBlocks = ownedData?.ownedNFT.map(
            (data) =>
              `
            <div class="created__block created__owned-block">
              <img loading="lazy" class="created__block-img" data-src="${data.image}" src="${data.image}" alt="" />
              <h5 class="creader__block-name font-body1 color-white">${data.name}</h5>
              <a href="#" class="created__block-link font-caption fw-800">
                Buy now
              </a>
            </div>
          `
          );
          if (ownedData) ownedBlocks.innerHTML += ownedSetBlocks;          
        }

        if (collectionData.collectionsNFT === undefined || Object.keys(collectionData).length === 0) {
          console.error('collectionData empty')
        } else {
          let collectionSetBlocks = collectionData?.collectionsNFT.map(
            (data) =>
              `
          <div class="created__block created__collection-block">
            <div class="created__block-img-wrap position-relative">
              <img loading="lazy" class="created__block-img" data-src="${
                data?.image ||
                "https://assets-global.website-files.com/62df25f03ad4d8fbbf70bb37/63dc9d9e8bd4a0a9f9e66e74_634abe01c54c303a88d683d0_OS_signal-p-1600.png"
              }" src="${
                data?.image ||
                "https://assets-global.website-files.com/62df25f03ad4d8fbbf70bb37/63dc9d9e8bd4a0a9f9e66e74_634abe01c54c303a88d683d0_OS_signal-p-1600.png"
              }" alt="" style="margin-bottom: 32px" />
              <div class="created__block-symbol d-flex align-items-center">
                <img loading="lazy" data-src="${
                  data?.image ||
                  "https://assets-global.website-files.com/62df25f03ad4d8fbbf70bb37/63dc9d9e8bd4a0a9f9e66e74_634abe01c54c303a88d683d0_OS_signal-p-1600.png"
                }" src="${
                data?.image ||
                "https://assets-global.website-files.com/62df25f03ad4d8fbbf70bb37/63dc9d9e8bd4a0a9f9e66e74_634abe01c54c303a88d683d0_OS_signal-p-1600.png"
              }" alt="" class="created__block-symbol-img" />
                <span class="font-title color-white">${data.symbol}</span>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
              <h5 class="created__block-name font-body1 color-white">${
                data.name
              }</h5>  
              <div class="d-flex align-items-center">
                <span class="font-caption fw-800">Floor:</span>
                <p class="created__block-amount font-base color-white">${
                  data?.amount || "1.00"
                } ETH</p>
              </div>
            </div>
          </div>

          `
          );
          if (collectionData) collectionBlocks.innerHTML += collectionSetBlocks;
        }
        blocksEmpty();
      } catch (error) {
        console.error("Profile Data error:", error);
      }
    };
    fetchProfileDataFromServer();
  }, []);

  return (
    <div className="created__main w-100">
      <div className="created__tags d-flex align-items-center flex-nowrap w-100">
        <div
          className="created__tag font-base active"
          data-tag="Created"
          onClick={onclickTag}
        >
          Created
          <span className="font-base green">{LCreated}</span>
        </div>
        <div
          className="created__tag font-base"
          data-tag="Collection"
          onClick={onclickTag}
        >
          Collection
          <span className="font-base purple">{LCollection}</span>
        </div>
        <div
          className="created__tag font-base"
          data-tag="Owned"
          onClick={onclickTag}
        >
          Owned
          <span className="font-base pink">{LOwned}</span>
        </div>
      </div>
      {/*  */}
      <div className="created wrapper">
        <div
          className="created__blocks created__blocks-created active"
          data-block="Created"
        ></div>
        <div
          className="created__blocks created__blocks-collection"
          data-block="Collection"
        ></div>
        <div
          className="created__blocks created__blocks-owned"
          data-block="Owned"
        ></div>
      </div>
    </div>
  );
};

export default Created;
