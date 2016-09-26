class PagesController < ApplicationController
  def index
    @lotto_numbers = (1..45).to_a.sample(6).join(", ")
    @uptime = ` uptime `
    @fortune = ` fortune `
  end

  def lotto_numbers
    render :text => (1..45).to_a.sample(6).join(", ")
  end

  def uptime
    render :text => ` uptime `
  end

  def fortune
    render :text => ` fortune `
  end

  def info
    @info = {
      :fortune => ` fortune `,
      :uptime => ` uptime `,
      :luckyNumbers => (1..45).to_a.sample(6).join(", "),
      :currentTime => Time.now.to_s
    }
    respond_to do |format|
      format.html
      format.json { render :json => @info }
    end
  end

end
