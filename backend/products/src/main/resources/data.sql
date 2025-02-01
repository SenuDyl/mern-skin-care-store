-- Insert categories
INSERT INTO categories (name) VALUES 
('Cleanser'),
('Body Lotion'),
('Moisturizer'),
('Sunscreen'),
('Bundles');

-- Insert products
INSERT INTO products (name, description, price, category_id, image_url, stock) VALUES
('Foaming Cleanser', 'Gentle foaming cleanser for all skin types', 12.99, 1, 'https://example.com/images/foaming_cleanser.jpg', 5),
('Hydrating Body Lotion', 'Moisturizing body lotion for dry skin', 8.99, 2, 'https://example.com/images/hydrating_body_lotion.jpg', 3),
('Oil-Free Moisturizer', 'Lightweight moisturizer for oily skin', 15.99, 3, 'https://example.com/images/oil_free_moisturizer.jpg', 3),
('Broad Spectrum Sunscreen SPF 50', 'High-protection sunscreen for daily use', 18.99, 4, 'https://example.com/images/sunscreen_spf50.jpg', 10),
('Skincare Starter Bundle', 'Bundle of cleanser, moisturizer, and sunscreen', 39.99, 5, 'https://example.com/images/skincare_starter_bundle.jpg', 7);


-- Insert reviews
INSERT INTO reviews (reviewer_name, comment, rating, product_id) VALUES
('Alice', 'Really gentle and does not strip the skin!', 5, 1),
('Bob', 'Keeps my skin hydrated all day.', 4, 2),
('Catherine', 'Perfect for my oily skin. No greasy feeling!', 5, 3),
('David', 'A must-have for summer! Love the texture.', 4, 4),
('Ella', 'Great value for a beginner like me!', 5, 5),
('Fiona', 'The sunscreen is amazing, but I wish the cleanser foamed more.', 4, 5),
('George', 'The body lotion smells great and works wonders!', 5, 2);
