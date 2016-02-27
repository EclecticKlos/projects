rails new games -d postgres
 .html.erb --- runs through .erb parser, returns HTML
rake -T

rails generate model Game
rails db
rails generate controller Games
root create
  root 'games#index' <-- looks at index action in controller


######################### RAILS STEPS #########################
rails s (rails server, be shotun equivelent);
rails new <project_name> -d postgresql -t
rails g <models>
edited migrations
associated models
created controllers (rails g controller <name>)
defined the routes as methods (def index)
set root in config routes.rb
created routes (resources) for the question model

######################### TDD LECTURE #########################
gem 'shoulda-matchers'
rails generate rspec:install
require 'rails-helper'
spec >> new folder "models"
  article-spec.rb
^describe Article do (<< says "this thing is happening")
  it { should validate_presence_of :title }
  it { should validate_presence_of :body }
end

spec >> new folder "controllers"
require 'rails-helper'
articles_controller_spec.rb
^desribe ArticlesController do
  let(:article) { FactoryGirl.build :article }
  describe '#index' do
    before :each do
      get :index
    end
    it "returns a status of 200 on good params" do
      get :index
      expect(response.status).to eq(200)
    end
    it "assigns the @articles instance variable" do
      expect(assigns(:articles)).to be_a(AciveRecord::Relation)
    end
    it "assigns the @articles instance variable to all Articles" do
      expect(assigns(:articles)).to eq(Article.all)
    end
  end
<!--     it "saves an article to the database" do
    article_count_before = Article.count
        post :create, article: {title: "The perils of Zack Snyder films.",  body: "He's heavy handed, and unprofessional."}
        article_count_after = Article.count
        expect(article_count_after).to > (article_count_before)
    end -->
  end
  context "with incorrect parameters" do
    it "fails to save an article in the database" do
      expect{
      post :create, article: { title: "Sorry, Derek"}
    }.to raise_error(ActiveRecord::RecordInvalid)
    end
  end
end

article_factory.rb
^FactorGirl.define do
  factory :article do
    title "The perils of Zack Snyder films."
    body "He's heavy handed, and unprofessional."
  end
end

rails_helper.rb
config.use_transactional_fixtures = false
  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation)
  end
  config.before(:each, :js => true) do
    DatabaseCleaner.strategy = :tuncation
  end
  config.before(:each) do
    DatabaseCleaner.start
  end
    config.after(:each) do
    DatabaseCleaner.clean_with(:tuncation)
  end

spec << features
article_spec.rb
gem 'capybara'
gem 'selenium-webdriver'
gem 'chromedriver-helper'
describe "Article", :js => true do
  it "creates an article on the page" do
    visit root_path
    p page.html
  end
end

######################### RAILS VIEW HELPERS #########################
<%= link_to "New Question", new_question_path %>
<%= button_to "New Question path", new_question_path, method: :get %>

<%= link_to image_tag "<url>", new_question_path %>
<%= img_tag "<url>" %>

---study---
Strong params
view helpers
route indexes


######################### HANDLEBARS #########################
Underscore (lightweight), Mustache (language agnostic), Handlebars (written atop of Mustache)
- Frontend templating framework (html/js)
- Build html template, build javascript to fill it with data
<CDNs for handlebars and jquery>

#### HTML FILE ####

<script id="bike-template" type="text/x-handlebars-template">
  <h2>Story: {{story}}</h2> <!-- Placeholder to be filled with json data -->
</script>

#### JS FILE ####
function getBike(){
  return {story: "this is a bike story"}
}

function displayBike() {
  var bikeTemplate = Handlebars.compile($('#bike-template').html(););

<!-- var bikeData=getBikes(); -->
var bikeTempaltefinal = bikeTemplate({story: "this is a bike story"});
$('#bike-display').html(bikeTemplatefinal);
}

$(document).ready(function(){
  displayBikes();
});


######################### ASSET PIPELINE #########################
Assets = JS + CSS
Concatenation
Minification

config/environments/development







