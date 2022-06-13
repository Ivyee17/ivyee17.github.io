---
layout: resume-page/template-site
data:
- id: home
  page: main.html
  data: main-data
- id: aboutme # this will be used as div's id, must be unique! Also, this is for url xxx?{id}
  page: aboutme.html # this is the path in _includes/resume_page folder
  data: aboutme # this is the path in _data/resume-page folder
  alias: About Me # you can define the name shown in the nav by this attr, by default is the same to the `id`.
- id: education
  page: education.html
  data: education
- id: skills
  page: skill.html
  data: skill-data
- id: experiences
  page: resume.html
  data: experience-data
- id: awards
  page: honor.html
  data: honor

---
