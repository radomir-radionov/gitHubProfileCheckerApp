import { StyledReposList, Repo, Link, Title, Description } from "./styles";

const ReposList = ({ currentRepos }) => {
  return (
    <StyledReposList>
      {currentRepos &&
        currentRepos.map((repo) => (
          <Repo key={repo.id}>
            <Link href={repo.html_url} target="_blank">
              <Title> {repo.name}</Title>
            </Link>
            <Description>
              {repo.description ? repo.description : "The best app"}
            </Description>
          </Repo>
        ))}
    </StyledReposList>
  );
};

export default ReposList;
