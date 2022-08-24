// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyContract is ERC721 {
        constructor() ERC721("EFEMNFT", "FM"){
                _mint(msg.sender, 10 * 10 ** 18);
        }
}