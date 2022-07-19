import React from "react";
import Image from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import { Strings } from "./../resources";

export const InstagramTemplate = () => {
  return (
    <div className="instagramsection">
      <div className="wrap">
        <div className="instagramtop">
          <div className="instaleft">
            <a
              rel="noreferrer"
              href="https://www.instagram.com/thisisstrane/"
              target="_blank"
            >
              {Strings.instagramtag}
            </a>
          </div>
          <div className="instaright">
            <p>{Strings.instagramtext}</p>
          </div>
        </div>
      </div>
      {/* <div className="instagalleryimage">
        <StaticQuery
          query={graphql`
            query InstagramPosts {
              allInstagramContent(limit: 6) {
                edges {
                  node {
                    permalink
                    caption
                    localImage {
                      childImageSharp {
                        fluid(maxHeight: 500, maxWidth: 500, quality: 50) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          `}
          render={(data) => (
            <div className="grid">
              {data.allInstagramContent.edges.map(
                (item, i) =>
                  item.node.localImage && (
                    <a
                      rel="noreferrer"
                      href={item.node.permalink}
                      target="_blank"
                      key={i}
                    >
                      <Image
                        fluid={item.node.localImage.childImageSharp.fluid}
                        alt={item.node.caption || 'Instagram Post'}
                      />
                    </a>
                  )
              )}
            </div>
          )}
        />
      </div> */}
    </div>
  );
};
