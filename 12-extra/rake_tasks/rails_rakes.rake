# This isn't going to work here, since our rakefile doesn't know what the namespaces and tasks "db" and "drop", etc, are, but this is something you could drop into a new file lib/tasks/something.rake in your Rails project to automate dropping and rebuilding your database (you would call this with rake db:regenerate)

namespace :db do
  desc "Drop, rebuild and reseed the database"
  task :regenerate do
    Rake::Task['db:drop'].invoke
    Rake::Task['db:create'].invoke
    Rake::Task['db:migrate'].invoke
    Rake::Task['db:seed'].invoke
  end
end
