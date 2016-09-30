namespace :db do
  desc "Seed the database with shit in the dude's rakefile"
  task :seed do
    Rake::Task['db:drop'].invoke
    Rake::Task['db:create'].invoke
    Rake::Task['db:migrate'].invoke
    Rake::Task['db:seed'].invoke
  end

end

namespace :namespace do
  desc "Deploy changes to heroku"
  task :task do
    sh "git add ."
    sh "git commit -m 'deploying to heroku'"
    sh "git push origin master"
    sh "git push heroku master"
  end
end
