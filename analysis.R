library(tidyverse)
library(dplyr)
library(brms)
library(rstan)
library(faintr)
set.seed(123)
setwd('~/Internship/speaker-production-exp-results')
# read in data
d <- read.csv('results_4_comparison-class-production_24.csv', header=T, sep=',')

#first look at the data
glimpse(d)
# comments
d_comments <- select(d, c(submission_id, problems, comments, fairprice))
View(d_comments)

# notable comments: possibly photos instead of cartoons
# include primates as acceptable answer, be consistent about apes vs monkeys 
# tree clipart is not clear
# mean of fair price 1.34$

d_filt <- filter(d, grepl("English", languages, ignore.case = T))
View(d_filt)
d <- select(d_filt, c(submission_id, trial_name, trial_number, question1, question2, response, response1, response2, response3, correct1, correct2, correct3, context_picture))
glimpse(d)
#main trials 
main <- filter(d, d$trial_name == "main")
main <- select(main, c(submission_id, trial_number, question1, question2, response, context_picture))


warmup <- filter(d, d$trial_name =="warmup")
warmup <- select(warmup, c(submission_id, trial_number, response1, correct1, response2, correct2, response3, correct3))
warmup_nr <- table(warmup$submission_id, warmup$trial_number)

#mean of times warmup entries were corrected : average 4 times per all warmup trials 
x <-apply(warmup_nr, MARGIN=1, FUN=mean)
mean(apply(warmup_nr, 2, mean))

# categorize the data 
condition <- vector(length=length(main$trial_number))
size <- vector(length=length(main$trial_number))
resp_cat <- vector(length=length(main$trial_number))
resp_cat1 <- vector(length=length(main$trial_number))

# prenominal vs predicative condition
condition[main['question2']==""] <- "prenominal"
condition[main['question2']!=""] <- "predicative"
main <- cbind(main, condition)

# big vs small trials 
size[(main['question1']== "That's a small ") | (main['question2']==" is small.")] <- "small"
size[(main['question1']=="That's a big ") | (main['question2']==" is big.")] <- "big"
main <- cbind(main, size)

table(main$response, main$condition)
table(main$size)
table(main$size, main$condition)
#as_tibble(main)

# superordinate vs subordinate labels 
resp_cat[(main['response']=="ape" )| (main['response']=="primate" )| (main['response']== "bird" )|(main['response']== "dog") | (main['response']=="fish") | (main['response']=="flower" )| (main['response']=="monkey") | (main['response']=="tree")] <- "super"
main<-cbind(main, resp_cat)
resp_cat1[main['resp_cat'] == FALSE] <- "sub"
resp_cat1[main['resp_cat'] == "super"] <- "super"
main<-cbind(main, resp_cat1)
main$resp_cat <- NULL

# calculate proportion of response category in each condition 
main_prop <- main%>%count(condition, resp_cat1)%>% mutate(prop= prop.table(n))
main_prop_size <- main%>%count(condition, size, resp_cat1) %>% mutate(prop=prop.table(n))


ggplot(main_prop_size, aes(condition, prop, fill=resp_cat1)) +geom_bar(stat='identity', position='dodge', aes(fill=interaction(resp_cat1, size)))

ggplot(main_prop_size, aes(condition, prop, fill=resp_cat1)) + geom_boxplot()
