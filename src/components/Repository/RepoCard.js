import { AiFillStar } from 'react-icons/ai';
import colors from '../../assets/github-colors.json';
import './RepoCard.scss';

export function getDuration(milli) {
  let minutes = Math.floor(milli / 60000);
  let hours = Math.round(minutes / 60);
  let days = Math.round(hours / 24);

  return (days && { days: days }) || (hours && { hours: hours }) || { minutes: minutes };
}

function RepoCard({
  repoInfo: { name, description, stargazers_count, language, updated_at, html_url },
  index,
}) {
  const updated = getDuration(Date.parse(updated_at)).days;
  const present_date = getDuration(Date.parse(new Date())).days;
  return (
    <div className="repository-row">
      <div className="repo-left-side">
        <p className="repo-title" data-testid={`repo-title-${index}`}>
          {name}
        </p>
        {language && (
          <div className="repo-language">
            <div className="repo-lang-color" style={{ backgroundColor: colors[language] }}></div>
            <p data-testid={`repo-language-${index}`}>{language}</p>
          </div>
        )}
        <p className="repo-last-update" data-testid={`repo-last-update-${index}`}>{`Updated ${
          present_date - updated
        } days ago`}</p>
      </div>
      {description && (
        <div className="repo-description">
          <p>
            <strong>Brief description:</strong>
          </p>
          <p className="description-text" data-testid={`description-text-${index}`}>
            {description}
          </p>
        </div>
      )}
      {!description && (
        <div className="repo-description">
          <p className="description-text" data-testid={`description-text-${index}`}>
            No description provided
          </p>
        </div>
      )}
      <div className="repo-right-side">
        <p className="repo-stars" data-testid={`repo-stars-${index}`}>
          {stargazers_count} <AiFillStar />
        </p>
        <div className="repo-access-div">
          <a
            className="repo-access-link"
            data-testid={`repo-access-link-${index}`}
            href={html_url}
            target="_blank"
            rel="noreferrer"
          >
            <button className="repo-access-btn">Acess this repository</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
