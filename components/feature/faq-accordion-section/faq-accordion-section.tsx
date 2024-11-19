import Link from "next/link";
import React from "react";

export default function FaqAccordionSection() {
  return (
    <section className="">
      <h2 className="">Our Website</h2>
      <div className="">
        <div className="">
          <div className="">
            <h3 className="">
              What Types Of Properties Are Available On Your Website?
            </h3>
            <button className=""></button>
          </div>
          <p className="">
            Et lectus viverra aenean malesuada praesent. Egestas praesent quam
            auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus
            auctor ac, vitae justo.
          </p>
          <Link href="#" className="">
            Read More
          </Link>
        </div>

        <div className="">
          <div className="">
            <h3 className="">
              How Do I Schedule A Viewing Of A Property Listed On Your Website?
            </h3>
            <button className=""></button>
          </div>
        </div>

        <div className="">
          <div className="">
            <h3 className="">
              Can I List My Property For Sale Or Rent On Your Website?
            </h3>
            <button className=""></button>
          </div>
        </div>

        <div className="">
          <div className="">
            <h3 className="">What Should I Consider When Buying A Home?</h3>
            <button className=""></button>
          </div>
        </div>

        <div className="">
          <div className="">
            <h3 className="">How Do I Determine The Value Of My Property?</h3>
            <button className=""></button>
          </div>
        </div>
      </div>
    </section>
  );
}
