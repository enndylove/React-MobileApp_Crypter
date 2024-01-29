import { useState, useEffect } from "react";
import "../../../../styles/Created.scss";

class FoundImage {
  static defaultImage = "https://assets-global.website-files.com/62df25f03ad4d8fbbf70bb37/63dc9d9e8bd4a0a9f9e66e74_634abe01c54c303a88d683d0_OS_signal-p-1600.png"
  static loadImage(image) {
    return image ? image : this.defaultImage
  }
}

const NoFoundNFTs = (title, info, hreflink, textLink) => {
  const link = () => {
    if (hreflink !== "" && textLink !== '') {
      return `
        <a href=${hreflink}>
          ${textLink}
        </a>
      `
    } else {
      return '';
    }
  }
  return `
    <div class="created__empty d-flex flex-column w-100 justify-content-center align-items-center">
      <h5 class="font-body1 color-white" style="text-align: center">
        ${title}
      </h5>
      <p class="created__empty-link font-caption">
        ${info}
        ${link()}
      </p>
    </div>
    `
}

const OwnedBlock = (imageSrc, name) => {
  return `
    <div class="created__block created__owned-block">
      <img loading="lazy" class="created__block-img" data-src="${imageSrc}" src="${imageSrc}" alt="" />
      <h5 class="creader__block-name font-body1 color-white">${name}</h5>
      <a href="#" class="created__block-link font-caption fw-800">
        Buy now
      </a>
    </div>
  `
}
const CollectionBlock = (imageSrc, sumbol, name, amount) => {
  return `
    <div class="created__block created__collection-block">
      <div class="created__block-img-wrap position-relative">
        <img loading="lazy" class="created__block-img" data-src="${FoundImage.loadImage(imageSrc)}" src="${FoundImage.loadImage(imageSrc)}" alt="" style="margin-bottom: 32px" />
        <div class="created__block-symbol d-flex align-items-center">
          <img loading="lazy" data-src="${FoundImage.loadImage(imageSrc)}" src="${FoundImage.loadImage(imageSrc)}" alt="" class="created__block-symbol-img" />
          <span class="font-title color-white">
            ${sumbol}
          </span>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between flex-wrap">
        <h5 class="created__block-name font-body1 color-white">
          ${name}
        </h5>  
        <div class="d-flex align-items-center">
          <span class="font-caption fw-800">Floor:</span>
          <p class="created__block-amount font-base color-white">
            ${amount === '' ? "1.00" : amount} ETH
          </p>
        </div>
      </div>
    </div>
  `
}

const CreatedTag = (classes, tagText, tagLenght, clickFunc, color) => {
  return (
    <div className={`created__tag font-base ${classes}`} data-tag={tagText} onClick={clickFunc}>
      {tagText}
      <span className={`font-base ${color}`}>
        {tagLenght}
      </span>
    </div>
  )
}

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
      collectionBlock = document.querySelectorAll(".created__collection-block"),
      ownedBlock = document.querySelectorAll(".created__owned-block"),
      createdBlocks = document.querySelector(".created__blocks-created"),
      ownedBlocks = document.querySelector(".created__blocks-owned"),
      collectionBlocks = document.querySelector(".created__blocks-collection");

    if (createdBlock.length === 0) {
      createdBlocks.innerHTML = NoFoundNFTs("You have no created nft", "To create your own nft, follow the", "#", "link")
    } else {
      setLCreated(createdBlock.length);
    }
    if (collectionBlock.length === 0) {
      collectionBlocks.innerHTML = NoFoundNFTs("You have no collectible NFTs", "Collect NFTs to display in collections or reload page", "", "");
    } else {
      setLCollection(collectionBlock.length);
    }

    if (ownedBlock.length === 0) {
      ownedBlocks.innerHTML = NoFoundNFTs("You do not own any NFTs", "create your own NFTs to display here or reload page", "", "");
    } else {
      setLOwned(ownedBlock.length);
    }
  }
  useEffect(() => {
    const fetchProfileDataFromServer = async () => {
      let ownedBlocks = document.querySelector(".created__blocks-owned"),
        collectionBlocks = document.querySelector(".created__blocks-collection");

      try {
        const defaultHeaders = {
          "Content-Type": "application/json",
        }

        const responseOwned = await fetch("/owned/profile", {
          method: "GET",
          headers: defaultHeaders,
        });
        const responseCollection = await fetch("/collections/profile", {
          method: "GET",
          headers: defaultHeaders,
        });
        if (!responseOwned.ok || !responseCollection.ok) {
          blocksEmpty();
          throw new Error("Network response was not ok");
        }
        const ownedData = await responseOwned.json();
        const collectionData = await responseCollection.json();

        if (ownedData.ownedNFT === undefined || Object.keys(ownedData).length === 0) {
          console.error('ownedData empty')
        } else {
          let ownedSetBlocks = ownedData?.ownedNFT.map((data) => OwnedBlock(data.image, data.name));

          if (ownedData) ownedBlocks.innerHTML += ownedSetBlocks;
        }

        if (collectionData.collectionsNFT === undefined || Object.keys(collectionData).length === 0) {
          console.error('collectionData empty')
        } else {
          let collectionSetBlocks = collectionData?.collectionsNFT.map(
            (data) => CollectionBlock(data.image, data.symbol, data.name, data.amount ? data.amount : '')
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

        {CreatedTag("active", "Created", LCreated, onclickTag, "green")}
        {CreatedTag("", "Collection", LCollection, onclickTag, "purple")}
        {CreatedTag("", "Owned", LOwned, onclickTag, "pink")}

      </div>
      {/*  */}
      <div className="created wrapper">
        <div className="created__blocks created__blocks-created active" data-block="Created">

        </div>
        <div className="created__blocks created__blocks-collection" data-block="Collection">

        </div>
        <div className="created__blocks created__blocks-owned" data-block="Owned">

        </div>
      </div>
    </div>
  );
};

export default Created;
