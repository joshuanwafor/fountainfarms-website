
import UserContext from '../lib/userContext';
import Router from 'next/router';
import Link from "next/link"
import Cookies from 'js-cookie';
import { useContext } from 'react';

function MyNavbar() {

  return <div>
    <nav class="navbar navbar-expand-lg shadow shadow-sm navbar-light bg-light "
      style={{ borderTop: "3px solid rgb(255, 137, 78)" }}>
      <div class="container ">
        <a class="navbar-brand" href="/">FountainFarms</a>
        <span class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </span>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-md-end">
            <li class="nav-item">
              <Link href="/projects"><a class="nav-link active" aria-current="page">Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/departments">
                <a class="nav-link">Farm</a>
              </Link>
            </li>

            <li class="nav-item">
              <Link href="/about">
                <a class="nav-link">About</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/about">
                <a class="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>;
}

export default MyNavbar;