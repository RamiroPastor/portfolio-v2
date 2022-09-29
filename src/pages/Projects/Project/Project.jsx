import React from "react";



export function Project(props){

  const t = props.t;

  const name         = props.name;
  const url          = props.url;
  const image        = props.image;
  const date         = props.date;
  const category     = props.category;
  const technologies = props.technologies;
  const repository   = props.repository;
  const synopsis     = props.synopsis;


  return(
    <div className="Project">
      <a 
        className="Project__image" 
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {image}
      </a>
      <div className="Project__content">
        <h3>
          {name}
        </h3>
        <ul className="Project__info">
          <li>
            <span>{t("date")}</span>
            <p>{date}</p>
          </li>
          <li>
            <span>{t("category")}</span>
            <p>{category}</p>
          </li>
          <li>
            <span>{t("technologies")}</span>
            <p>{technologies}</p>
          </li>
          { repository &&
          <li>
            <span>{t("repository")}</span>
            <p>
              <a
                href={repository}
                target="_blank"
                rel="noreferrer"
              >
                {t("linkToRepository")}
              </a>
            </p>
          </li>
          }
          <li>
            <span>{t("project")}</span>
            <p>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {t("linkToProject")}
              </a>
            </p>
          </li>
          <li>
            <span>{t("synopsis")}</span>
          </li>
          <div className="Project__synopsis">
            {synopsis}
          </div>
        </ul>
      </div>
    </div>
  )
}