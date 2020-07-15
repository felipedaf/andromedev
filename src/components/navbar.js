import React from "react";
import { Link } from "gatsby";

const Item = ({ children, slug, className }) => (
  <Link
    className={`block p-4 text-dark-gray hover:bg-purple-200 hover:bg-opacity-25 hover:text-purple-600 ${className}`}
    to={slug}
  >
    {children}
  </Link>
);
const Navbar = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     pages: allMarkdownRemark(
  //       filter: { fields: { slug: { regex: "/(guia)/" } } }
  //     ) {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //           frontmatter {
  //             title
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // console.log(data);

  return (
    <aside className="w-64 my-2 absolute">
      <nav className="flex flex-col">
        <Item slug="/guia">Introdução</Item>
        <Item slug="/guia/organizacao">Organização</Item>
        <Item slug="/guia/organizacao/projeto" className="ml-4">
          Projeto
        </Item>
        <Item slug="/guia/organizacao/projeto/repositorio" className="ml-8">
          Repositório
        </Item>
        <Item slug="/guia/mentor">Mentor</Item>
        <Item slug="/guia/aprendiz">Aprendiz</Item>
      </nav>
    </aside>
  );
};

export default Navbar;