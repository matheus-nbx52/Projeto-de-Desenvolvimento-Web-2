/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Topo.css';
import { GiAtomicSlashes } from "react-icons/gi";
import { CgHomeAlt, CgProfile, CgBookmark, CgSearch } from "react-icons/cg";

export default function Topo() {
    return (
        <>
            <header>
                <section className="container">
                <div className="title-logo">
                    <a href=''><GiAtomicSlashes /></a>
                    <a href=''>namelessproject</a>
                </div>

                <section className="menu-urls">
                    <div className="menu">
                        <ul>
                            <li>
                                <a href=""><CgHomeAlt /></a>
                            </li>

                            <li>
                                <a href=""><CgProfile /></a>
                            </li>

                            <li>
                                <a href=""><CgBookmark /></a>
                            </li>

                            <li>
                                <a href=""></a>
                            </li>
                        </ul>
                    </div>
                </section>
                <form action="/" method="get">
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Pesquisar"
                        name="s"
                    />
                    <button type="submit"><CgSearch/></button>
                </form>
                </section>
            </header>
        </>
    )
}