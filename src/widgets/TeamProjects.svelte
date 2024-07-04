<div id="teamprojects">
    <h2>Team projects</h2>
    <ul>
        <li id="aiijc">
            <h4>AIIJC edtech: technology of personalizing education</h4>
            <p><span>Aim:</span> define which of the following topics <b>animals</b>, <b>literature</b>,
            <b>music</b> and <b>sports</b> is relevant to the input text and find keywords
            relevant to the chosen topic.</p>
            <!-- <p><span>Process:</span><br>
            Firstly, we scraped Wikipedia, Wordassociation, Reright pages for
            creating keyword dictionaries for each topic. Secondly, using the
            Wikiwordnet module we added words from topic names' synsets
            (sets of synonyms). Then with the help of the Navec module, we
            turned all the words of the input text into embeddings (vectors
            where the words with similar meanings are situated at short
            distances). After that, we found dot products of the mean vector
            of these embeddings and each of the topic's embeddings and
            determined the dot product with max value. Our predicted
            topic is the one related to this dot product. Lastly, we count the
            cosine similarity of each word of the input text embedding and
            embedding of the predicted topic. Words with values nearest to
            1 are our keywords.</p> -->
            <p><span class="flow">Result:</span>
            As a result, we created a PyQT5 GUI (Graphical User Interface),
            where the user inputs text, chooses how many keywords he
            needs and gets the topic with keywords.</p>
            <p><span class="flow">GitHub page:</span><a href="https://github.com/AzaliaAlisheva/AIIJCEdtech">https://github.com/AzaliaAlisheva/AIIJCEdtech</a></p>
        </li>
        <li>
            <h4>Module for Telegram-bot, which matches users by interests</h4>
            <p><span>Aim:</span> find several people with similar interests to a user, discover
                and try to use different ML techniques</p>
            <!-- <p><span>Process:</span><br>
                In the beginning, we processed json file with answers to the
                questionnaire and made a table, where we could find out a
                person's gender and interests by id. Then we created tables with
                each interest's count for both genders separately and built 2
                diagrams and 2 wordclouds representing this data. Thanks to
                them, we could understand which interests are the most
                common. We also tried to use ML to be able to predict gender
                by interests but it had a very bad Roc Auc Score (0,52 it means
                that the flip of the coin can predict gender not much worse).
                After that, using NMF module we separated all the interests into
                groups of 3 with similar contexts.</p> -->
            <p><span class="flow">GitHub page:</span> <a href="https://github.com/AzaliaAlisheva/Lanit">https://github.com/AzaliaAlisheva/Lanit</a></p>
        </li>
        <li>
            <h4>Telegram-bot interlocutor</h4>
            <p><span>Aim:</span> create Telegram-bot, which can give replies in Russian and English and calculate
                math problems</p>
            <!-- <p><span>Process:</span><br>
                At the start, we created preprocess functions, which split the text into tokens (words),
                and applied lemmatization or stemming (discarding word endings). Then we made
                <b>Pushkin skill</b> based on tf-idf vectorizer (a module that counts the importance of words
                based on their text and sentence frequency). It answers Russian messages. For English
                messages, we created <b>Eliza skill</b>. Also, we added <b>Math skill</b> to calculate math
                problems and <b>Deep skill</b> based on Bert model. All the skills are implemented by Bot
                class, where we wrote the structure for Telegram-bot.</p> -->
            <p><span class="flow">GitHub page:</span> <a href="https://github.com/awwaw/HSE_bot">https://github.com/awwaw/HSE_bot</a></p>
        </li>
    </ul>
</div>

<style>
    #teamprojects ul {
        grid-template-columns: 1fr 1fr 1.6fr;
    }

    #aiijc {
        grid-row: 1 / 3;
        grid-column: 1 / 3;
    }
</style>