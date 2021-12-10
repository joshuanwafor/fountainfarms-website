import React from "react"
import Link from "next/link"

export default function Footer() {
    return <div className="pt-5">

        <div class="bg-light text-muted py-3 border-top">
            <div class="container py-5">
                <footer class="row">
                    <div className="col-md-4">
                        <div>
                            <h1>FountainFarms</h1>
                            <div className="my-3">
                                Fountainfarms lets you get high returns when you sponsor farms, farms sponsored help farmers scale up production, empower the communities, preserve the future.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="fw-bold">The Company</div>
                        <div className="my-3"><a>About Us</a></div>
                        <div className="my-3"><a>Contact us</a></div>
                        <div className="my-3"><a>Privacy policy</a></div>
                        <div className="my-3"><a>Terms of service</a></div>
                    </div>
                    <div className="col-md-2">
                        <div className="fw-bold">Explore</div>
                        <div className="my-3"><a>Our farms</a></div>
                        <div className="my-3"><a>Our products</a></div>
                    </div>
                    <div className="col-md-2">
                        <div className="fw-bold">Socials</div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
}