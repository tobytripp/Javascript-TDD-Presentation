require 'sinatra'
require 'sinatra/reloader'
require 'faker'
require 'json'

configure do
  set :app_file, File.expand_path( File.join( File.dirname(__FILE__), "..", "config.ru" ) )
  set :root, File.expand_path( File.join( File.dirname(__FILE__), ".." ) )
  set :views, Proc.new { File.join( root, "app", "views" ) }
end

get '/', provides: 'html' do
  erb :index
end

get '/contacts', provides: 'json' do
  contacts = (1..12).map do
    {
      name: {
        first: Faker::Name.first_name,
        last:  Faker::Name.last_name
      },
      url: "http://www.%s.%s" % [Faker::Internet.domain_name, Faker::Internet.domain_suffix],
      email: Faker::Internet.email,
      address: {
        streetAddress: Faker::Address.street_address( true ),
        city:  Faker::Address.city,
        state: Faker::Address.us_state,
        zip:   Faker::Address.zip
      },
      phone:  Faker::PhoneNumber.phone_number,
      jabber: Faker::Internet.email
    }
  end

  { contacts: contacts }.to_json
end
