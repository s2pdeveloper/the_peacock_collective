const mongoose = require('mongoose');
const { SeasonalOffer } = require('../SeasonalOffer');
const { SeasonalOfferMedia } = require('../SeasonalOfferMedia');
const {
  emailSubjects,
  defaultStatus,
  usersRoles,
} = require('../../config/Options');
const {
  apiErrorStrings,
  apiSuccessStrings,
} = require('../helpers/MessagesHelper');
const {
  getSeasonalOfferAttributes,
} = require('../helpers/SeasonalOfferHelpers');

exports.createBulk = async (body) => await SeasonalOffer.bulkCreate(body);

exports.getAndCountAll = async (query) => {
  const res = await SeasonalOffer.aggregate(query);
  return {
    data: res[0].data,
    // eslint-disable-next-line no-nested-ternary
    count: res[0].metadata
      ? res[0].metadata.length
        ? res[0].metadata[0].total
        : 0
      : 0,
  };
};

exports.findSeasonalOfferByCondition = async (conditions, options) =>
  await SeasonalOffer.findOne(conditions, options);

exports.findOfferWithMediaByCondition = async (conditions, options) =>
  await SeasonalOffer.findOne(conditions, options)
    .populate({
      path: 'media',
      model: 'SeasonalOfferMedia',
      select: getSeasonalOfferAttributes({
        image: {
          $concat: [`${process.env.CDN_WEB_STATIC}/`, '$image'],
        },
      }),
    })
    .lean();
exports.findAll = async (conditions, options) =>
  await SeasonalOffer.find(conditions, options);

exports.findAllWithMedia = async (conditions, options) =>
  await SeasonalOffer.find(conditions, options)
    .populate({
      path: 'media',
      model: 'SeasonalOfferMedia',
      select: getSeasonalOfferAttributes({
        title:1,
        image: {
          $concat: [`${process.env.CDN_WEB_STATIC}/`, '$image'],
        },
      }),
    })
    .lean();

exports.patchStatus = async (existingData, status) => {
  if (status === defaultStatus.DELETED) {
    existingData.status = defaultStatus.DELETED;
    await existingData.save();
    return {
      message: apiSuccessStrings.DELETED('SeasonalOffer'),
    };
  } else {
    existingData.status = status;
    await existingData.save();
  }
  return {
    message: apiSuccessStrings.STATUS_CHANGE('SeasonalOffer'),
  };
};

exports.checkAndUpdate = async (id, body) => {
  const query = {
    status: { $ne: defaultStatus.DELETED },
    _id: new mongoose.Types.ObjectId(id),
  };
  let existingData = await this.findSeasonalOfferByCondition(query);
  if (!existingData) {
    return {
      success: false,
      message: apiErrorStrings.Data_EXISTS('Media'),
    };
  }
  existingData = await updateMedia(existingData, body);
  return {
    success: true,
    message: apiSuccessStrings.UPDATE('Media'),
    data: existingData,
  };
};

const updateMedia = async (existingData, payload) => {
  existingData.heading = payload.heading;
  existingData.startDate = payload.startDate;
  existingData.endDate = payload.endDate;

  const media = await SeasonalOfferMedia.bulkWrite(
    payload.media.map((val) =>
      val.id
        ? val.status === defaultStatus.DELETED
          ? {
            deleteOne: {
              filter: { _id: val.id },
            },
          }
          : {
            updateOne: {
              filter: { _id: val.id },
              update: {
                $set: { ...val, _id: val._id },
              },
              upsert: true,
            },
          }
        : {
          insertOne: {
            document: {
              ...val,
            },
          },
        }
    )
  );
  if (media.insertedCount > 0) {
    const newMedia = media.getInsertedIds();
    existingData.media.push(
      ...newMedia.map((element) =>
        mongoose.Types.ObjectId(element._id.toString())
      )
    );
  }
  return await existingData.save();
};
exports.updateMedia = updateMedia;
